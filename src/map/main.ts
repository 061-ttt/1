// フォント定義（約 220KB）は描画を止めないよう後から読み込む
void import('./fonts.css');
import './map.css';
import { Vector3 } from 'three';
import { DIALECTS, type Dialect } from '../shared/dialects';
import { dialectConvertMany, isRuleSupported, type Tokenize } from '../shared/engine';
import { getTokenizer } from '../client/tokenizer';
import { PLACES, project, REGION_COLOR } from './places';
import { createScene, toWorld } from './scene';

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = <T extends HTMLElement>(sel: string) => document.querySelector(sel) as T;

/* ---------- 方言（地図に載せるもの） ---------- */

interface Pin {
  d: Dialect;
  short: string;
  color: string;
  ok: boolean;
  world: Vector3;
  el: HTMLButtonElement;
  say: HTMLSpanElement;
  /** 地点の画面座標 */
  ax: number;
  ay: number;
  /** アイコン中心の画面座標 */
  x: number;
  y: number;
  shown: boolean;
  placed: boolean;
  vx: number;
  vy: number;
  px: number;
  py: number;
  /** 名前付きで表示したときの大きさ */
  fw: number;
  fh: number;
  /** 'full' = アイコン＋名前、'icon' = アイコンだけ（混み合っているとき） */
  mode: Mode;
  /** 名前をアイコンの左側に出す */
  flip: boolean;
}
type Mode = 'full' | 'icon';

const shortName = (d: Dialect) =>
  d.id === 'uchinaa' ? 'やまとぐち' : d.name.replace(/(弁|方言)$/, '');

/** アイコンの 1 文字（隣り合う方言と同じ字になるものだけ別の字に） */
const ICON: Record<string, string> = { mie: '伊', uchinaa: 'や' };

const SAMPLES = ['今日はとても暑いね', '疲れたから、もう帰るね', '明日は雨だろう', 'そんなことしたらだめだよ'];

/* ---------- DOM ---------- */

const input = $<HTMLInputElement>('#q');
const bar = $<HTMLElement>('#bar');
const field = bar.querySelector('.field') as HTMLElement;

const app = document.createElement('main');
app.id = 'map';
app.innerHTML = `
  <canvas id="gl" aria-label="日本地図。ドラッグで移動、ピンチで拡大" role="img"></canvas>
  <canvas id="ink" aria-hidden="true"></canvas>
  <div id="pins" role="group" aria-label="各地の方言"></div>
  <section id="card" role="dialog" aria-labelledby="card-name" tabindex="-1" hidden>
    <div class="card-body">
      <header>
        <span class="card-dot" aria-hidden="true"></span>
        <h2 id="card-name"></h2>
        <span class="card-kana"></span>
        <button class="icon-btn" data-act="close" aria-label="閉じる">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>
        </button>
      </header>
      <p class="card-said" data-testid="card-said" aria-live="polite"></p>
      <p class="card-note"></p>
      <p class="card-hints"></p>
      <footer>
        <button data-act="prev" class="step" aria-label="前の方言"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>前へ</button>
        <button data-act="copy" class="copy">コピー</button>
        <button data-act="next" class="step" aria-label="次の方言">次へ<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg></button>
      </footer>
    </div>
    <span class="card-tail" aria-hidden="true"></span>
  </section>
  <div id="status" aria-live="polite"></div>
  <div class="corner">
    <a href="../" class="chip-link">一覧で見る</a>
    <button id="home" class="round-btn" aria-label="日本全体を表示">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>
    </button>
  </div>
  <p class="credit">地図: <a href="https://github.com/VictorCazanave/svg-maps" rel="noopener">@svg-maps/japan</a>（CC BY 4.0）</p>
`;
document.body.insertBefore(app, document.body.firstChild);

const clear = document.createElement('button');
clear.className = 'clear';
clear.type = 'button';
clear.setAttribute('aria-label', '入力を消す');
clear.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 7l10 10M17 7L7 17"/></svg>';
field.appendChild(clear);

const glCanvas = $<HTMLCanvasElement>('#gl');
const ink = $<HTMLCanvasElement>('#ink');
const ctx = ink.getContext('2d')!;
const pinsEl = $<HTMLDivElement>('#pins');
const card = $<HTMLElement>('#card');
const statusEl = $<HTMLDivElement>('#status');

/* ---------- 3D 地図 ---------- */

const ms = createScene(glCanvas);
const LAND_DROP = 9; // 起動時、陸は海の下から浮かび上がる
ms.land.position.y = reduceMotion ? 0 : -LAND_DROP;

const pins: Pin[] = DIALECTS.filter((d) => PLACES[d.id]).map((d) => {
  const [lat, lon] = PLACES[d.id];
  const [x, y] = project(lat, lon);
  const el = document.createElement('button');
  el.type = 'button';
  el.className = 'pin';
  el.dataset.id = d.id;
  const color = REGION_COLOR[d.region];
  el.style.setProperty('--c', color);
  const ok = isRuleSupported(d.id);
  if (!ok) el.classList.add('off');
  const icon = document.createElement('span');
  icon.className = 'pin-icon';
  icon.setAttribute('aria-hidden', 'true');
  icon.textContent = ICON[d.id] ?? shortName(d)[0];
  const body = document.createElement('span');
  body.className = 'pin-text';
  const name = document.createElement('span');
  name.className = 'pin-name';
  name.textContent = shortName(d);
  const say = document.createElement('span');
  say.className = 'pin-say';
  body.appendChild(name);
  body.appendChild(say);
  el.appendChild(icon);
  el.appendChild(body);
  el.setAttribute('aria-label', d.name);
  pinsEl.appendChild(el);
  el.classList.add('icon');
  return { d, short: shortName(d), color, ok, world: toWorld(x, y), el, say, ax: 0, ay: 0, x: 0, y: 0, shown: false, placed: false, vx: 0, vy: 0, px: 0, py: 0, fw: 0, fh: 0, mode: 'icon' as Mode, flip: false };
});
// 並びは方言一覧の順（北海道から沖縄へ、地方ごと）。タブ順と「前へ／次へ」に使う
const byId = new Map(pins.map((p) => [p.d.id, p]));
const SUPPORTED = pins.filter((p) => p.ok).map((p) => p.d.id);

/* ---------- 変換 ---------- */

let tokenize: Tokenize | null = null;
let results: Record<string, string> | null = null;
let text = '';
let dictFailed = false;

function setStatus() {
  statusEl.replaceChildren();
  if (!text) {
    const row = document.createElement('div');
    row.className = 'samples';
    for (const s of SAMPLES) {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'sample';
      b.textContent = s;
      b.addEventListener('click', () => {
        input.value = s;
        onInput(true);
      });
      row.appendChild(b);
    }
    statusEl.appendChild(row);
    return;
  }
  const p = document.createElement('p');
  p.className = 'status-line';
  if (dictFailed) {
    p.classList.add('error');
    p.textContent = '辞書を読み込めませんでした。通信状態を確認して、もう一度入力してください。';
  } else if (!results) {
    p.classList.add('loading');
    p.dataset.testid = 'dict-loading';
    p.textContent = '辞書を読み込んでいます（初回のみ）';
  } else {
    const changed = SUPPORTED.filter((id) => results![id] !== text).length;
    p.dataset.testid = 'summary';
    p.textContent = changed ? `${SUPPORTED.length} の方言のうち ${changed} で言い方が変わりました` : 'どの方言でも共通語と同じ言い方です';
  }
  statusEl.appendChild(p);
}

function applyResults(animate: boolean) {
  const order: Pin[] = [];
  for (const p of pins) {
    const r = results?.[p.d.id];
    const has = !!text && !!results;
    const same = has && p.ok && r === text;
    p.el.classList.toggle('said', has && p.ok && !same);
    p.el.classList.toggle('same', same);
    p.say.textContent = has && p.ok ? r! : '';
    p.el.setAttribute('aria-label', has && p.ok ? `${p.d.name}: ${r}` : p.d.name);
    if (has && p.ok && !same) order.push(p);
  }
  measure();
  if (animate && !reduceMotion) {
    // 変換結果が北から南へ順に届く
    order.forEach((p, i) => {
      p.el.classList.remove('spoke');
      void p.el.offsetWidth;
      p.el.style.setProperty('--delay', `${i * 16}ms`);
      p.el.classList.add('spoke');
    });
  }
  if (open) fillCard(open);
  setStatus();
}

function convertNow(animate: boolean) {
  if (!text) {
    results = null;
    applyResults(false);
    return;
  }
  if (!tokenize) {
    results = null;
    applyResults(false);
    loadDict().then(() => text && convertNow(true));
    return;
  }
  results = dialectConvertMany(tokenize, SUPPORTED, text);
  applyResults(animate);
}

let dictPromise: Promise<void> | null = null;
function loadDict(): Promise<void> {
  dictPromise ??= getTokenizer('../dict/').then(
    (t) => {
      tokenize = t;
      dictFailed = false;
    },
    () => {
      dictFailed = true;
      dictPromise = null;
      setStatus();
    },
  );
  return dictPromise;
}

let timer = 0;
let lastAnimated = '';
function onInput(immediate = false) {
  const v = input.value.trim();
  clear.hidden = !input.value;
  if (v === text && results) return;
  text = v;
  syncUrl();
  clearTimeout(timer);
  const run = () => {
    // 同じ文で何度も波を起こさない
    const animate = text !== lastAnimated;
    lastAnimated = text;
    convertNow(animate);
  };
  if (immediate) run();
  else timer = window.setTimeout(run, 160);
}

input.addEventListener('input', () => onInput());
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.isComposing) {
    onInput(true);
    input.blur();
  }
});
clear.addEventListener('click', () => {
  input.value = '';
  onInput(true);
  input.focus();
});

function syncUrl() {
  const u = new URL(location.href);
  if (text) u.searchParams.set('q', text);
  else u.searchParams.delete('q');
  u.hash = open ? open.d.id : '';
  history.replaceState(null, '', u);
}

/* ---------- ラベル配置（画面上で重ならないよう押し合う） ---------- */

let W = 0, H = 0, dpr = 1;
let safeTop = 0, safeBottom = 0;
/** 拡大率に応じた表示の細かさ: far=名前を小さく、mid=名前、near=名前と変換結果 */
let lod: 'far' | 'mid' | 'near' = 'mid';

function measure() {
  for (const p of pins) {
    const cls = p.el.className;
    p.el.classList.remove('icon', 'flip');
    p.fw = p.el.offsetWidth;
    p.fh = p.el.offsetHeight;
    p.el.className = cls;
  }
  settle = 120;
}

/** アイコンの直径（全体表示では小さめ） */
let ICON_SIZE = 24;
/** アイコンどうしの最小間隔（中心間の半分） */
let R = ICON_SIZE / 2 + 1.5;

function setMode(p: Pin, mode: Mode, flip: boolean) {
  if (p.el.classList.contains('icon') !== (mode === 'icon')) p.el.classList.toggle('icon', mode === 'icon');
  if (p.el.classList.contains('flip') !== flip) p.el.classList.toggle('flip', flip);
  p.mode = mode;
  p.flip = flip;
}

/** 名前付きラベルの矩形（アイコンの中心が x, y） */
function pillBox(p: Pin, flip: boolean) {
  const x0 = flip ? p.x + ICON_SIZE / 2 - p.fw : p.x - ICON_SIZE / 2;
  return { x0, x1: x0 + p.fw, y0: p.y - p.fh / 2, y1: p.y + p.fh / 2 };
}

/**
 * アイコンの配置。地点へ引き戻すばねと、アイコンどうしが重ならない反発で釣り合わせる
 * （位置ベースの簡単な物理）。カメラが動いたときは、アイコンを地点と一緒に平行移動してから整える。
 */
function simulate(iterations: number): number {
  const vis = pins.filter((p) => p.shown && p !== open);
  const left = 4 + R, right = W - 4 - R, top = safeTop + R, bottom = H - safeBottom - R;
  let motion = 0;
  const full = R;
  for (let it = 0; it < iterations; it++) {
    // 一から並べるときは反発の半径を少しずつ広げ、アイコンが弾け飛んで入れ替わらないようにする
    const R = iterations > 50 ? full * Math.min(1, 0.15 + (it / (iterations * 0.7)) * 0.85) : full;
    for (const p of vis) {
      p.px = p.x;
      p.py = p.y;
      p.x += p.vx * 0.6 + (p.ax - p.x) * 0.07;
      p.y += p.vy * 0.6 + (p.ay - p.y) * 0.07;
    }
    for (let sweep = 0; sweep < 2; sweep++) {
      for (let i = 0; i < vis.length; i++) {
        const a = vis[i];
        for (let j = i + 1; j < vis.length; j++) {
          const b = vis[j];
          let dx = b.x - a.x, dy = b.y - a.y;
          if (Math.abs(dx) >= 2 * R || Math.abs(dy) >= 2 * R) continue;
          let d = Math.hypot(dx, dy);
          if (d >= 2 * R) continue;
          if (d < 0.01) {
            // 同じ位置なら決まった向きへずらす
            dx = Math.cos(i * 2.4);
            dy = Math.sin(i * 2.4);
            d = 1;
          }
          const push = (2 * R - d) / 2 / d;
          a.x -= dx * push; a.y -= dy * push;
          b.x += dx * push; b.y += dy * push;
        }
      }
      for (const p of vis) {
        p.x = Math.min(Math.max(p.x, left), right);
        p.y = Math.min(Math.max(p.y, top), bottom);
      }
    }
    // 最後の反復は押し合いだけを数回（ばねで戻った重なりを残さない）
    if (it === iterations - 1) {
      for (let extra = 0; extra < 4; extra++) {
        for (let i = 0; i < vis.length; i++) {
          const a = vis[i];
          for (let j = i + 1; j < vis.length; j++) {
            const b = vis[j];
            const dx = b.x - a.x, dy = b.y - a.y;
            if (Math.abs(dx) >= 2 * R || Math.abs(dy) >= 2 * R) continue;
            const d = Math.hypot(dx, dy);
            if (d >= 2 * R || d < 0.01) continue;
            const push = (2 * R - d) / 2 / d;
            a.x -= dx * push; a.y -= dy * push;
            b.x += dx * push; b.y += dy * push;
          }
        }
        for (const p of vis) {
          p.x = Math.min(Math.max(p.x, left), right);
          p.y = Math.min(Math.max(p.y, top), bottom);
        }
      }
    }
    // 実際に動いた量を速度にする（押し返された分は消える）
    for (const p of vis) {
      p.vx = p.x - p.px;
      p.vy = p.y - p.py;
    }
  }
  for (const p of vis) motion = Math.max(motion, Math.abs(p.vx) + Math.abs(p.vy));
  return motion;
}

/** 空きがあるアイコンには名前を添える（地図の注記と同じく、重なるなら出さない） */
function attachNames() {
  const vis = pins.filter((p) => p.shown && p !== open);
  const left = 4, right = W - 4, top = safeTop, bottom = H - safeBottom;
  const taken: { x0: number; y0: number; x1: number; y1: number }[] = [];
  const hit = (b: { x0: number; y0: number; x1: number; y1: number }, self: Pin) => {
    if (b.x0 < left || b.x1 > right || b.y0 < top || b.y1 > bottom) return true;
    for (const o of taken) if (b.x0 < o.x1 + 2 && b.x1 > o.x0 - 2 && b.y0 < o.y1 + 2 && b.y1 > o.y0 - 2) return true;
    for (const q of vis) {
      if (q === self) continue;
      if (b.x0 < q.x + R && b.x1 > q.x - R && b.y0 < q.y + R && b.y1 > q.y - R) return true;
      // ほかの地点の点も隠さない
      if (q.ax > b.x0 - 2 && q.ax < b.x1 + 2 && q.ay > b.y0 - 2 && q.ay < b.y1 + 2) return true;
    }
    return false;
  };
  // 名前の短いもの・まばらなところから
  const order = [...vis].sort((a, b) => a.fw - b.fw);
  for (const p of order) {
    const prefer = p.mode === 'full' ? p.flip : p.x > W * 0.62;
    let chosen: boolean | null = null;
    for (const flip of [prefer, !prefer]) {
      const b = pillBox(p, flip);
      if (!hit(b, p)) {
        chosen = flip;
        taken.push(b);
        break;
      }
    }
    setMode(p, chosen === null ? 'icon' : 'full', chosen ?? false);
  }
}

function drawInk() {
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, W, H);
  ctx.lineWidth = 1;
  ctx.strokeStyle = 'rgba(31,45,54,0.42)';
  ctx.beginPath();
  for (const p of pins) {
    if (!p.shown || p === open) continue;
    // 地点からアイコンまで引き出し線
    const d = Math.hypot(p.x - p.ax, p.y - p.ay);
    if (d > ICON_SIZE / 2 + 1) {
      ctx.moveTo(p.ax, p.ay);
      ctx.lineTo(p.x + ((p.ax - p.x) / d) * (ICON_SIZE / 2), p.y + ((p.ay - p.y) / d) * (ICON_SIZE / 2));
    }
  }
  ctx.stroke();
  for (const p of pins) {
    if (!p.shown) continue;
    const dim = open && p !== open;
    ctx.globalAlpha = dim ? 0.45 : 1;
    ctx.beginPath();
    ctx.arc(p.ax, p.ay, p === open ? 5 : 3.4, 0, Math.PI * 2);
    ctx.fillStyle = p.ok ? p.color : '#ffffff';
    ctx.fill();
    ctx.lineWidth = p.ok ? 1.6 : 1.4;
    ctx.strokeStyle = p.ok ? '#ffffff' : p.color;
    ctx.stroke();
  }
  ctx.globalAlpha = 1;
}

function writePins() {
  for (const p of pins) {
    const vis = p.shown && p !== open;
    if (p.el.classList.contains('out') === vis) p.el.classList.toggle('out', !vis);
    if (!vis) continue;
    const b = p.mode === 'icon'
      ? { x0: p.x - ICON_SIZE / 2, y0: p.y - ICON_SIZE / 2 }
      : pillBox(p, p.flip);
    p.el.style.transform = `translate3d(${b.x0.toFixed(1)}px, ${b.y0.toFixed(1)}px, 0)`;
  }
}

/* ---------- カメラ ---------- */

interface Fly {
  t0: number;
  dur: number;
  fromT: Vector3;
  fromP: Vector3;
  toT: Vector3;
  toP: Vector3;
  done?: () => void;
}
let fly: Fly | null = null;
const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);

function flyTo(toT: Vector3, toP: Vector3, dur = 820, done?: () => void) {
  if (reduceMotion) dur = 0;
  fly = { t0: performance.now(), dur, fromT: ms.controls.target.clone(), fromP: ms.camera.position.clone(), toT, toP, done };
  ms.controls.enabled = false;
}

function stepFly(now: number) {
  if (!fly) return;
  const t = fly.dur ? Math.min(1, (now - fly.t0) / fly.dur) : 1;
  const k = ease(t);
  ms.controls.target.lerpVectors(fly.fromT, fly.toT, k);
  ms.camera.position.lerpVectors(fly.fromP, fly.toP, k);
  // 途中で少し引いて、移動の距離感を出す
  if (fly.dur) {
    const lift = Math.sin(Math.PI * k) * Math.min(160, fly.fromT.distanceTo(fly.toT) * 0.35);
    ms.camera.position.y += lift;
  }
  if (t >= 1) {
    const done = fly.done;
    fly = null;
    ms.controls.enabled = true;
    done?.();
  }
}

function home(dur = 820) {
  const o = ms.overview(safeTop + 6, safeBottom + 6);
  flyTo(o.target, o.position, dur);
}

/** 地点が画面の下寄り（カードの下）に来るよう、拡大してカメラを寄せる */
function focusPin(p: Pin) {
  const ppu = Math.max(ms.pxPerUnit(), Math.min(5, Math.max(3.4, Math.min(W, H) / 120)));
  const fovT = Math.tan((ms.camera.fov * Math.PI) / 360);
  const dist = Math.max(48, H / (2 * ppu * fovT));
  const off = ms.camera.position.clone().sub(ms.controls.target);
  const horiz = new Vector3(off.x, 0, off.z);
  if (horiz.lengthSq() < 1e-6) horiz.set(0, 0, 1);
  horiz.normalize();
  const polar = (34 * Math.PI) / 180;
  const dir = new Vector3(horiz.x * Math.sin(polar), Math.cos(polar), horiz.z * Math.sin(polar));
  // 画面の上方向（地面上）= カメラから注視点へ向かう水平方向
  const up = horiz.clone().negate();
  const wantY = Math.min(H - safeBottom - 70, Math.max(H * 0.66, safeTop + cardHeight() + 40));
  const scale = (2 * dist * fovT) / H;
  const target = p.world.clone().setY(0).addScaledVector(up, ((wantY - H / 2) * scale) / Math.cos(polar));
  flyTo(target, target.clone().addScaledVector(dir, dist));
}

/* ---------- 拡大カード ---------- */

let open: Pin | null = null;
let returnView: { t: Vector3; p: Vector3 } | null = null;
let cardW = 0, cardH = 0;

const cardHeight = () => (cardH || 220);

function fillCard(p: Pin) {
  card.style.setProperty('--c', p.color);
  card.classList.toggle('off', !p.ok);
  (card.querySelector('#card-name') as HTMLElement).textContent = p.d.name;
  (card.querySelector('.card-kana') as HTMLElement).textContent = p.d.kana;
  const said = card.querySelector('.card-said') as HTMLElement;
  const note = card.querySelector('.card-note') as HTMLElement;
  const copy = card.querySelector('[data-act="copy"]') as HTMLButtonElement;
  const r = results?.[p.d.id];
  note.textContent = '';
  said.classList.remove('pending', 'empty');
  if (!p.ok) {
    said.textContent = text || p.d.name;
    said.classList.add('empty');
    note.textContent = `${p.d.name}は文法が共通語と大きく異なるため、この地図版では変換できません。`;
  } else if (!text) {
    said.textContent = '上の欄に文を入力すると、ここに変換結果が出ます';
    said.classList.add('empty');
  } else if (!r) {
    said.textContent = text;
    said.classList.add('pending');
  } else {
    said.textContent = r;
    if (r === text) note.textContent = 'この文は共通語と同じ言い方になります。';
  }
  copy.disabled = !(p.ok && r);
  copy.textContent = 'コピー';
  (card.querySelector('.card-hints') as HTMLElement).textContent = p.d.hints;
  const i = pins.indexOf(p);
  (card.querySelector('[data-act="prev"]') as HTMLButtonElement).disabled = i === 0;
  (card.querySelector('[data-act="next"]') as HTMLButtonElement).disabled = i === pins.length - 1;
  cardW = card.offsetWidth;
  cardH = card.offsetHeight;
}

function openPin(p: Pin, from: 'tap' | 'key' | 'step' | 'link' = 'tap') {
  const wasOpen = open;
  if (!wasOpen) returnView = { t: ms.controls.target.clone(), p: ms.camera.position.clone() };
  const fromRect = from === 'step' || from === 'link' ? null : p.el.getBoundingClientRect();
  if (wasOpen) wasOpen.el.classList.remove('picked');
  open = p;
  p.el.classList.add('picked');
  app.classList.add('has-card');
  card.hidden = false;
  fillCard(p);
  placeCard();
  // ピンからカードへ広がる（FLIP）
  if (!reduceMotion && fromRect && fromRect.width) {
    const to = card.getBoundingClientRect();
    card.animate(
      [
        {
          transform: `translate(${fromRect.left - to.left}px, ${fromRect.top - to.top}px) scale(${fromRect.width / to.width}, ${fromRect.height / to.height})`,
          opacity: 0.6,
        },
        { transform: 'none', opacity: 1 },
      ],
      { duration: 460, easing: 'cubic-bezier(.2,.9,.25,1.08)' },
    );
    card.querySelector('.card-body')!.animate([{ opacity: 0 }, { opacity: 0 }, { opacity: 1 }], { duration: 380 });
  }
  focusPin(p);
  syncUrl();
  if (from === 'key' || from === 'step') card.focus({ preventScroll: true });
}

function closeCard(restore = true) {
  if (!open) return;
  const p = open;
  open = null;
  p.el.classList.remove('picked', 'out');
  app.classList.remove('has-card');
  const done = () => {
    card.hidden = true;
  };
  if (reduceMotion) done();
  else card.animate([{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'scale(.92)' }], { duration: 180, easing: 'ease-in' }).finished.then(done, done);
  if (restore && returnView) flyTo(returnView.t, returnView.p, 700);
  returnView = null;
  syncUrl();
  settle = 120;
  return p;
}

function placeCard() {
  if (!open || card.hidden) return;
  const margin = 12;
  const w = cardW || card.offsetWidth;
  const h = cardH || card.offsetHeight;
  const left = Math.min(Math.max(open.ax - w / 2, margin), W - w - margin);
  let top = open.ay - h - 18;
  let below = false;
  if (top < safeTop + 6) {
    top = open.ay + 18;
    below = true;
  }
  card.classList.toggle('below', below);
  card.style.left = `${left.toFixed(1)}px`;
  card.style.top = `${top.toFixed(1)}px`;
  card.style.setProperty('--tail', `${Math.min(Math.max(open.ax - left, 22), w - 22).toFixed(1)}px`);
}

card.addEventListener('click', async (e) => {
  const btn = (e.target as HTMLElement).closest('button');
  if (!btn || !open) return;
  const act = btn.dataset.act;
  if (act === 'close') {
    const p = closeCard();
    p?.el.focus({ preventScroll: true });
  } else if (act === 'prev' || act === 'next') {
    const i = pins.indexOf(open) + (act === 'prev' ? -1 : 1);
    if (pins[i]) openPin(pins[i], 'step');
  } else if (act === 'copy') {
    const r = results?.[open.d.id];
    if (!r) return;
    try {
      await navigator.clipboard.writeText(r);
      btn.textContent = 'コピーしました';
    } catch {
      btn.textContent = 'コピーできませんでした';
    }
    setTimeout(() => (btn.textContent = 'コピー'), 1600);
  }
});

// カードの横スワイプで前／次へ
{
  let sx = 0, sy = 0, st = 0;
  card.addEventListener('pointerdown', (e) => {
    sx = e.clientX; sy = e.clientY; st = performance.now();
  });
  card.addEventListener('pointerup', (e) => {
    const dx = e.clientX - sx, dy = e.clientY - sy;
    if (!open || Math.abs(dx) < 60 || Math.abs(dx) < Math.abs(dy) * 1.5 || performance.now() - st > 600) return;
    const i = pins.indexOf(open) + (dx < 0 ? 1 : -1);
    if (pins[i]) openPin(pins[i], 'step');
  });
}

pinsEl.addEventListener('click', (e) => {
  // キーボード（Enter/Space）での操作。タップは地図側で判定する
  const el = (e.target as HTMLElement).closest('.pin') as HTMLElement | null;
  if (!el) return;
  const p = byId.get(el.dataset.id!);
  if (p) openPin(p, e.detail === 0 ? 'key' : 'tap');
});

/** 画面上の点にあるピン（ラベルか地点の点） */
function hitPin(x: number, y: number): Pin | null {
  for (let i = pins.length - 1; i >= 0; i--) {
    const p = pins[i];
    if (!p.shown || p === open) continue;
    const b = p.mode === 'icon'
      ? { x0: p.x - R, x1: p.x + R, y0: p.y - R, y1: p.y + R }
      : pillBox(p, p.flip);
    if (x >= b.x0 - 2 && x <= b.x1 + 2 && y >= b.y0 - 2 && y <= b.y1 + 2) return p;
  }
  let best: Pin | null = null, bd = 16;
  for (const p of pins) {
    if (!p.shown || p === open) continue;
    const d = Math.hypot(x - p.ax, y - p.ay);
    if (d < bd) { bd = d; best = p; }
  }
  return best;
}

// ピンの上から始めたドラッグでも地図を動かせるよう、タップは地図のキャンバスで判定する
{
  let down: { x: number; y: number; t: number; id: number } | null = null;
  let moved = false;
  glCanvas.addEventListener('pointerdown', (e) => {
    if (!e.isPrimary) {
      down = null;
      return;
    }
    down = { x: e.clientX, y: e.clientY, t: performance.now(), id: e.pointerId };
    moved = false;
  });
  glCanvas.addEventListener('pointermove', (e) => {
    if (down && e.pointerId === down.id && Math.hypot(e.clientX - down.x, e.clientY - down.y) > 8) moved = true;
  });
  glCanvas.addEventListener('pointerup', (e) => {
    if (!down || e.pointerId !== down.id || moved || performance.now() - down.t > 600) return;
    down = null;
    const p = hitPin(e.clientX, e.clientY);
    if (p) openPin(p, 'tap');
    else if (open) closeCard();
    else if (document.activeElement === input) input.blur();
  });
  glCanvas.addEventListener('pointercancel', () => (down = null));
}

$<HTMLButtonElement>('#home').addEventListener('click', () => {
  closeCard(false);
  userMoved = false;
  home();
});

document.addEventListener('keydown', (e) => {
  if (!open) return;
  if (e.key === 'Escape') {
    const p = closeCard();
    p?.el.focus({ preventScroll: true });
  } else if (/^Arrow(Up|Down|Left|Right)$/.test(e.key) && document.activeElement !== input) {
    e.preventDefault();
    const i = pins.indexOf(open) + (e.key === 'ArrowUp' || e.key === 'ArrowLeft' ? -1 : 1);
    if (pins[i]) openPin(pins[i], 'step');
  }
});

/* ---------- ループ ---------- */

let settle = 0;
let forceRender = true;
let rise: { t0: number } | null = reduceMotion ? null : { t0: 0 };
const tmp = new Vector3();

function resize() {
  W = window.innerWidth;
  H = window.innerHeight;
  dpr = Math.min(window.devicePixelRatio, 2);
  ms.resize(W, H);
  ink.width = Math.round(W * dpr);
  ink.height = Math.round(H * dpr);
  ink.style.width = `${W}px`;
  ink.style.height = `${H}px`;
  safeTop = bar.getBoundingClientRect().bottom + statusEl.offsetHeight + 8;
  safeBottom = 52;
  settle = 120;
  forceRender = true;
}

function frame(now: number) {
  stepFly(now);
  if (rise) {
    if (!rise.t0) rise.t0 = now;
    const t = Math.min(1, (now - rise.t0) / 1100);
    ms.land.position.y = -LAND_DROP * (1 - t) ** 3;
    if (t >= 1) {
      rise = null;
      app.classList.add('ready');
    }
  }
  const moved = ms.render(!!rise || forceRender) || !!rise || forceRender;
  forceRender = false;
  const ppu = ms.pxPerUnit();
  const nowLod = ppu > 3.1 ? 'near' : ppu > 1.9 ? 'mid' : 'far';
  if (nowLod !== lod) {
    app.classList.remove(lod);
    lod = nowLod;
    app.classList.add(lod);
    ICON_SIZE = lod === 'far' ? 20 : 24;
    R = ICON_SIZE / 2 + 1.5;
    measure();
  }
  if (moved || settle > 0) {
    const ly = ms.land.position.y;
    pins.forEach((p, i) => {
      const s = ms.toScreen(tmp.copy(p.world).setY(ly));
      const shown = !!s && s.x > -4 && s.x < W + 4 && s.y > safeTop - 4 && s.y < H + 4;
      if (s) {
        if (p.placed && p.shown) {
          // 地図と一緒に平行移動
          p.x += s.x - p.ax;
          p.y += s.y - p.ay;
        } else {
          p.x = s.x + Math.cos(i * 2.4) * 2;
          p.y = s.y + Math.sin(i * 2.4) * 2;
          p.vx = p.vy = 0;
          p.placed = true;
        }
        p.ax = s.x;
        p.ay = s.y;
      }
      p.shown = shown;
    });
    const motion = simulate(settle >= 120 ? 400 : 4);
    if (motion > 0.05) settle = Math.max(settle, 3);
    // 動きが落ち着いたところで名前を添え直す（動いている最中はちらつかせない）
    if (!moved && (motion < 0.3 || settle === 1)) attachNames();
    writePins();
    drawInk();
    placeCard();
    if (settle > 0) settle--;
    if (moved) settle = Math.max(settle, 30);
  }
  requestAnimationFrame(frame);
}

/* ---------- 起動 ---------- */

function boot() {
  resize();
  const o = ms.overview(safeTop + 6, safeBottom + 6);
  ms.controls.target.copy(o.target);
  ms.camera.position.copy(o.position);
  ms.camera.lookAt(o.target);
  measure();
  requestAnimationFrame(frame);
  const b = document.getElementById('boot');
  if (b) {
    b.classList.add('leaving');
    setTimeout(() => b.remove(), 600);
  }
  if (reduceMotion) app.classList.add('ready');

  const id = decodeURIComponent(location.hash.slice(1));
  const params = new URLSearchParams(location.search);
  const q = params.get('q');
  if (q && !input.value) input.value = q;
  onInput(true);
  // 辞書は最初に入力欄が使われた時点、または入力済みならすぐに読み込む
  if (input.value.trim()) loadDict();
  else {
    const kick = () => loadDict();
    input.addEventListener('focus', kick, { once: true });
    input.addEventListener('input', kick, { once: true });
    if (document.activeElement === input) kick();
  }
  if (byId.has(id)) setTimeout(() => openPin(byId.get(id)!, 'link'), reduceMotion ? 0 : 900);
}

let userMoved = false;
ms.controls.addEventListener('start', () => (userMoved = true));
let resizeTimer = 0;
window.addEventListener('resize', () => {
  resize();
  clearTimeout(resizeTimer);
  resizeTimer = window.setTimeout(() => {
    // 自分で地図を動かしていなければ、新しい画面サイズで全体を当てはめ直す
    if (!open && !fly && !userMoved) {
      const o = ms.overview(safeTop + 6, safeBottom + 6);
      ms.controls.target.copy(o.target);
      ms.camera.position.copy(o.position);
    }
  }, 120);
});

document.fonts?.ready.then(() => measure());
boot();
