import {
  BufferGeometry,
  Color,
  DirectionalLight,
  ExtrudeGeometry,
  Float32BufferAttribute,
  Fog,
  Group,
  HemisphereLight,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  MeshLambertMaterial,
  PCFSoftShadowMap,
  PerspectiveCamera,
  PlaneGeometry,
  RepeatWrapping,
  Scene,
  Shape,
  SRGBColorSpace,
  CanvasTexture,
  Vector2,
  Vector3,
  WebGLRenderer,
} from 'three';
import { MapControls } from 'three/examples/jsm/controls/MapControls.js';
import { PREF_REGION, REGION_COLOR } from './places';
import { PREFS, VIEW } from './shapes';

/** 地図の中心（SVG 座標）。ワールド座標は (x - CX, 0, y - CZ) */
const CX = VIEW.w / 2;
const CZ = VIEW.h / 2;
/** 陸地の厚み。海面は陸の上面より SEA_DROP 下 */
const DEPTH = 7;
const SEA_DROP = 2.6;

const SEA = '#d3e6ea';
const SEA_LINE = '#c4dce1';

export const toWorld = (x: number, y: number) => new Vector3(x - CX, 0, y - CZ);

const mix = (a: string, b: string, t: number) => new Color(a).lerp(new Color(b), t);

/** 青海波（せいがいは）の海のテクスチャ */
function seigaiha(): CanvasTexture {
  const r = 32;
  const W = 256;
  const c = document.createElement('canvas');
  c.width = c.height = W;
  const g = c.getContext('2d')!;
  g.fillStyle = SEA;
  g.fillRect(0, 0, W, W);
  g.lineWidth = 2.2;
  g.strokeStyle = SEA_LINE;
  let row = 0;
  for (let y = -r; y <= W + r; y += r / 2, row++) {
    for (let x = -2 * r + (row % 2) * r; x <= W + 2 * r; x += 2 * r) {
      g.beginPath();
      g.arc(x, y, r, 0, Math.PI * 2);
      g.fillStyle = SEA;
      g.fill();
      for (const k of [0.94, 0.72, 0.5, 0.28]) {
        g.beginPath();
        g.arc(x, y, r * k, Math.PI, Math.PI * 2);
        g.stroke();
      }
    }
  }
  const t = new CanvasTexture(c);
  t.wrapS = t.wrapT = RepeatWrapping;
  t.colorSpace = SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

export interface MapScene {
  canvas: HTMLCanvasElement;
  camera: PerspectiveCamera;
  controls: MapControls;
  land: Group;
  /** ワールド座標 → 画面座標（CSS px）。カメラの後ろなら null */
  toScreen(v: Vector3): { x: number; y: number } | null;
  /** カメラが動いたとき（または force）だけ描画する。動いたら true */
  render(force?: boolean): boolean;
  resize(w: number, h: number): void;
  /** 全体表示のカメラ配置を計算（安全領域: 上・下の余白 px） */
  overview(safeTop: number, safeBottom: number): { target: Vector3; position: Vector3 };
  /** 地図 1 単位が画面上で何 px か（target 付近） */
  pxPerUnit(): number;
}

export function createScene(canvas: HTMLCanvasElement): MapScene {
  const renderer = new WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFSoftShadowMap;
  renderer.outputColorSpace = SRGBColorSpace;

  const scene = new Scene();
  scene.background = new Color(SEA);
  scene.fog = new Fog(SEA, 600, 1800);

  const camera = new PerspectiveCamera(30, 1, 1, 5000);
  camera.position.set(0, 600, 400);

  // 光は北西から（地形図の陰影の慣習）
  scene.add(new HemisphereLight('#ffffff', '#9fb6bd', 2.1));
  const sun = new DirectionalLight('#fffaf0', 1.5);
  sun.position.set(-180, 320, -220);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, { left: -300, right: 300, top: 300, bottom: -300, near: 10, far: 1000 });
  sun.shadow.bias = -0.0008;
  sun.shadow.radius = 4;
  scene.add(sun);

  // 海
  const tex = seigaiha();
  tex.repeat.set(110, 110);
  const sea = new Mesh(new PlaneGeometry(4000, 4000), new MeshLambertMaterial({ map: tex }));
  sea.rotation.x = -Math.PI / 2;
  sea.position.y = -SEA_DROP;
  sea.receiveShadow = true;
  scene.add(sea);

  // 陸地（都道府県ごとに押し出し）。上面は方言区分の色を淡く
  const land = new Group();
  const borders: number[] = [];
  const mats = new Map<string, [MeshLambertMaterial, MeshLambertMaterial]>();
  for (const p of PREFS) {
    const region = PREF_REGION[p.id];
    let m = mats.get(region);
    if (!m) {
      const c = REGION_COLOR[region];
      m = [
        new MeshLambertMaterial({ color: mix(c, '#ffffff', 0.8) }),
        new MeshLambertMaterial({ color: mix(mix(c, '#ffffff', 0.55).getStyle(), '#b9b2a6', 0.5) }),
      ];
      mats.set(region, m);
    }
    const shapes = p.rings.map((ring) => new Shape(ring.map(([x, y]) => new Vector2(x - CX, y - CZ))));
    const geo = new ExtrudeGeometry(shapes, { depth: DEPTH, bevelEnabled: false, curveSegments: 1 });
    geo.rotateX(Math.PI / 2);
    const mesh = new Mesh(geo, m);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.name = p.id;
    land.add(mesh);
    for (const ring of p.rings) {
      for (let i = 0; i < ring.length; i++) {
        const a = ring[i], b = ring[(i + 1) % ring.length];
        borders.push(a[0] - CX, 0.06, a[1] - CZ, b[0] - CX, 0.06, b[1] - CZ);
      }
    }
  }
  const bg = new BufferGeometry();
  bg.setAttribute('position', new Float32BufferAttribute(borders, 3));
  land.add(new LineSegments(bg, new LineBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.75 })));
  scene.add(land);

  const controls = new MapControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.09;
  controls.screenSpacePanning = false;
  controls.minDistance = 30;
  controls.maxDistance = 1500;
  controls.maxPolarAngle = (62 * Math.PI) / 180;
  controls.zoomToCursor = true;

  // 全体表示の当てはめに使う輪郭点（間引き）
  const outline: Vector3[] = [];
  for (const p of PREFS) for (const r of p.rings) for (let i = 0; i < r.length; i += 6) outline.push(toWorld(r[i][0], r[i][1]));

  let W = 1, H = 1;
  const last = new Vector3(Infinity, 0, 0);
  const lastT = new Vector3();
  const v = new Vector3();

  const ms: MapScene = {
    canvas,
    camera,
    controls,
    land,
    toScreen(p) {
      v.copy(p).project(camera);
      if (v.z > 1) return null;
      return { x: ((v.x + 1) / 2) * W, y: ((1 - v.y) / 2) * H };
    },
    render(force = false) {
      controls.update();
      const moved = last.distanceToSquared(camera.position) > 1e-6 || lastT.distanceToSquared(controls.target) > 1e-6;
      last.copy(camera.position);
      lastT.copy(controls.target);
      const d = camera.position.distanceTo(controls.target);
      (scene.fog as Fog).near = d * 1.1;
      (scene.fog as Fog).far = d * 3.2;
      if (moved || force) renderer.render(scene, camera);
      return moved;
    },
    resize(w, h) {
      W = w;
      H = h;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    },
    overview(safeTop, safeBottom) {
      // 縦長の画面では列島の対角線（八重山→北海道）が縦になるよう回す
      const portrait = W / H < 0.95;
      const up = portrait ? new Vector3(288, 0, -408).normalize() : new Vector3(0, 0, -1);
      const polar = (36 * Math.PI) / 180;
      const dir = new Vector3(-up.x * Math.sin(polar), Math.cos(polar), -up.z * Math.sin(polar)).normalize();
      const target = new Vector3(0, 0, 0);
      const pos = new Vector3();
      const save = camera.position.clone();
      const top = safeTop + 10, bottom = H - safeBottom - 10, left = 14, right = W - 14;
      const fits = (d: number) => {
        pos.copy(target).addScaledVector(dir, d);
        camera.position.copy(pos);
        camera.lookAt(target);
        camera.updateMatrixWorld();
        let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
        for (const o of outline) {
          v.copy(o).project(camera);
          const sx = ((v.x + 1) / 2) * W, sy = ((1 - v.y) / 2) * H;
          x0 = Math.min(x0, sx); x1 = Math.max(x1, sx); y0 = Math.min(y0, sy); y1 = Math.max(y1, sy);
        }
        return { x0, x1, y0, y1 };
      };
      // 中心を合わせて距離を二分探索（2 回まわす）
      let d = 800;
      for (let pass = 0; pass < 3; pass++) {
        let lo = 50, hi = 4000;
        for (let i = 0; i < 30; i++) {
          d = (lo + hi) / 2;
          const b = fits(d);
          if (b.x0 >= left && b.x1 <= right && b.y0 >= top && b.y1 <= bottom) hi = d;
          else lo = d;
        }
        d = hi;
        const b = fits(d);
        // 画面上のずれをワールドの移動に換算して中心を補正
        const cx = (b.x0 + b.x1) / 2 - (left + right) / 2;
        const cy = (b.y0 + b.y1) / 2 - (top + bottom) / 2;
        const scale = (2 * d * Math.tan((camera.fov * Math.PI) / 360)) / H;
        const rightV = new Vector3().setFromMatrixColumn(camera.matrixWorld, 0).setY(0).normalize();
        target.addScaledVector(rightV, cx * scale);
        target.addScaledVector(up, (-cy * scale) / Math.cos(polar));
      }
      fits(d);
      const result = { target: target.clone(), position: camera.position.clone() };
      camera.position.copy(save);
      camera.lookAt(controls.target);
      return result;
    },
    pxPerUnit() {
      const d = camera.position.distanceTo(controls.target);
      return H / (2 * d * Math.tan((camera.fov * Math.PI) / 360));
    },
  };
  return ms;
}
