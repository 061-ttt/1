import { useRef } from 'preact/hooks';
import type { Phrase } from './api';
import { DIALECT_MAP } from '../shared/dialects';
import { STATUS, haptic } from './state';
import { animate, reduceMotion, SPRING_BOUNCY, SPRING_SNAPPY, SPRING_SOFT } from './motion';
import { IconCheck, IconLeft, IconRight, IconTrash } from './icons';

interface Props {
  phrase: Phrase;
  index: number;
  onMove: (status: 0 | 1 | 2) => void;
  onDelete: () => void;
}

type Mode = 'idle' | 'pending' | 'drag' | 'scroll' | 'busy';

export function SwipeCard({ phrase, index, onMove, onDelete }: Props) {
  const row = useRef<HTMLLIElement>(null);
  const card = useRef<HTMLDivElement>(null);
  const st = useRef({ mode: 'idle' as Mode, x0: 0, y0: 0, x: 0, id: -1, armed: false, samples: [] as [number, number][] });

  const status = phrase.status;
  const canRight = status < 2;
  const leftIsDelete = status === 0;
  const rightLabel = canRight ? `${STATUS[status + 1].label}へ` : '';
  const leftLabel = leftIsDelete ? '削除' : `${STATUS[status - 1].label}へ`;
  const d = DIALECT_MAP[phrase.dialect];

  const width = () => card.current?.offsetWidth ?? 320;
  const threshold = () => Math.min(140, width() * 0.32);

  const setX = (x: number) => {
    const el = card.current!;
    st.current.x = x;
    el.style.transform = `translate3d(${x}px,0,0) rotate(${x * 0.012}deg)`;
    const p = Math.min(1, Math.abs(x) / threshold());
    row.current!.style.setProperty('--p', p.toFixed(3));
    row.current!.dataset.dir = x > 0 ? 'right' : x < 0 ? 'left' : '';
    const armed = p >= 1;
    if (armed !== st.current.armed) {
      st.current.armed = armed;
      row.current!.classList.toggle('armed', armed);
      if (armed) haptic(6);
    }
  };

  const springBack = () => {
    const from = st.current.x;
    const el = card.current!;
    el.style.transform = '';
    animate(el, [{ transform: `translate3d(${from}px,0,0) rotate(${from * 0.012}deg)` }, { transform: 'translate3d(0,0,0)' }], SPRING_BOUNCY, {
      fill: 'none',
    });
    st.current.x = 0;
    row.current!.style.setProperty('--p', '0');
    row.current!.classList.remove('armed');
    st.current.armed = false;
  };

  const commit = async (dir: 1 | -1) => {
    if (st.current.mode === 'busy') return;
    if (dir === 1 && !canRight) return;
    st.current.mode = 'busy';
    const el = card.current!;
    const r = row.current!;
    r.dataset.dir = dir === 1 ? 'right' : 'left';
    r.style.setProperty('--p', '1');
    r.classList.add('armed', 'committing');
    const from = st.current.x;
    const to = dir * (width() + 60);
    if (!reduceMotion()) {
      await animate(el, [{ transform: `translate3d(${from}px,0,0) rotate(${from * 0.012}deg)` }, { transform: `translate3d(${to}px,0,0) rotate(${dir * 6}deg)`, opacity: 0.4 }], SPRING_SNAPPY).finished;
      const h = r.offsetHeight;
      await animate(r, [{ height: `${h}px`, marginBottom: '12px', opacity: 1 }, { height: '0px', marginBottom: '0px', opacity: 0 }], SPRING_SOFT).finished;
    }
    if (dir === 1) onMove((status + 1) as 0 | 1 | 2);
    else if (leftIsDelete) onDelete();
    else onMove((status - 1) as 0 | 1 | 2);
  };

  const onPointerDown = (e: PointerEvent) => {
    if (st.current.mode === 'busy' || (e.target as HTMLElement).closest('button')) return;
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    Object.assign(st.current, { mode: 'pending', x0: e.clientX, y0: e.clientY, id: e.pointerId, samples: [[e.timeStamp, 0]] });
  };

  const onPointerMove = (e: PointerEvent) => {
    const s = st.current;
    if (e.pointerId !== s.id) return;
    const dx = e.clientX - s.x0;
    const dy = e.clientY - s.y0;
    if (s.mode === 'pending') {
      if (Math.abs(dy) > 10 && Math.abs(dy) > Math.abs(dx)) {
        s.mode = 'scroll';
        return;
      }
      if (Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(dy) * 1.2) {
        s.mode = 'drag';
        card.current!.setPointerCapture(e.pointerId);
        row.current!.classList.add('dragging');
      }
    }
    if (s.mode !== 'drag') return;
    e.preventDefault();
    let x = dx;
    if (x > 0 && !canRight) x = Math.sign(x) * Math.pow(Math.abs(x), 0.7);
    s.samples.push([e.timeStamp, x]);
    if (s.samples.length > 6) s.samples.shift();
    setX(x);
  };

  const onPointerUp = (e: PointerEvent) => {
    const s = st.current;
    if (e.pointerId !== s.id) return;
    row.current?.classList.remove('dragging');
    if (s.mode !== 'drag') {
      if (s.mode !== 'busy') s.mode = 'idle';
      return;
    }
    const [t0, x0] = s.samples[0];
    const [t1, x1] = s.samples[s.samples.length - 1];
    const v = (x1 - x0) / Math.max(1, t1 - t0); // px/ms
    const x = s.x;
    const flick = Math.abs(v) > 0.55 && Math.abs(x) > 28 && Math.sign(v) === Math.sign(x);
    s.mode = 'idle';
    if (Math.abs(x) >= threshold() || flick) {
      const dir = x > 0 ? 1 : -1;
      if (dir === 1 && !canRight) return springBack();
      commit(dir as 1 | -1);
    } else springBack();
  };

  return (
    <li
      ref={row}
      class="swipe-row"
      style={{ '--i': Math.min(index, 10) } as any}
      data-testid="phrase"
      data-id={phrase.id}
      data-status={status}
    >
      <div class="swipe-bg" aria-hidden="true">
        <div class={`swipe-act right s${Math.min(2, status + 1)}`}>
          {canRight && (
            <>
              {status + 1 === 2 ? <IconCheck /> : <IconRight />}
              <span>{rightLabel}</span>
            </>
          )}
        </div>
        <div class={`swipe-act left ${leftIsDelete ? 'del' : `s${status - 1}`}`}>
          <span>{leftLabel}</span>
          {leftIsDelete ? <IconTrash /> : <IconLeft />}
        </div>
      </div>
      <div
        ref={card}
        class="swipe-card glass"
        onPointerDown={onPointerDown as any}
        onPointerMove={onPointerMove as any}
        onPointerUp={onPointerUp as any}
        onPointerCancel={onPointerUp as any}
      >
        <div class="pc-head">
          <span class={`pc-dot s${status}`} aria-label={STATUS[status].label} />
          <span class="pc-dialect">{d?.name ?? phrase.dialect}</span>
          <span class="pc-actions">
          <button class="mini" type="button" onClick={() => commit(-1)} aria-label={leftIsDelete ? '削除' : `${STATUS[status - 1].label}に戻す`} data-testid="phrase-back">
            {leftIsDelete ? <IconTrash /> : <IconLeft />}
          </button>
          {canRight && (
            <button class="mini" type="button" onClick={() => commit(1)} aria-label={`${STATUS[status + 1].label}にする`} data-testid="phrase-next">
              {status + 1 === 2 ? <IconCheck /> : <IconRight />}
            </button>
          )}
          </span>
        </div>
        <p class="pc-result" lang="ja">{phrase.result}</p>
        <p class="pc-source">{phrase.source}</p>
      </div>
    </li>
  );
}
