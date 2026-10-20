/** 減衰スプリングを CSS linear() イージングに変換する */
export function springEasing(stiffness = 260, damping = 22, mass = 1, v0 = 0) {
  const w0 = Math.sqrt(stiffness / mass);
  const zeta = damping / (2 * Math.sqrt(stiffness * mass));
  const solve = (t: number) => {
    if (zeta < 1) {
      const wd = w0 * Math.sqrt(1 - zeta * zeta);
      return 1 - Math.exp(-zeta * w0 * t) * (Math.cos(wd * t) + ((zeta * w0 - v0) / wd) * Math.sin(wd * t));
    }
    return 1 - Math.exp(-w0 * t) * (1 + (w0 - v0) * t);
  };
  // 収束時間を求める
  let duration = 0;
  for (let t = 0; t < 4; t += 0.01) {
    if (Math.abs(1 - solve(t)) > 0.001) duration = t;
  }
  duration = Math.max(0.2, duration + 0.02);
  const steps = 48;
  const pts: string[] = [];
  for (let i = 0; i <= steps; i++) pts.push(solve((duration * i) / steps).toFixed(4));
  return { easing: `linear(${pts.join(', ')})`, duration: Math.round(duration * 1000) };
}

export const reduceMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

export const SPRING_SNAPPY = springEasing(380, 30);
export const SPRING_BOUNCY = springEasing(300, 18);
export const SPRING_SOFT = springEasing(170, 24);

export function animate(el: Element, frames: Keyframe[], spring = SPRING_SNAPPY, extra: KeyframeAnimationOptions = {}) {
  if (reduceMotion()) {
    return el.animate(frames, { duration: 1, fill: 'forwards', ...extra });
  }
  return el.animate(frames, { duration: spring.duration, easing: spring.easing, fill: 'forwards', ...extra });
}

/** ポインタ位置に追従する光沢（--mx/--my を更新） */
export function attachSheen(root: HTMLElement) {
  const onMove = (e: PointerEvent) => {
    const t = (e.target as HTMLElement | null)?.closest<HTMLElement>('.glass, .btn');
    if (!t) return;
    const r = t.getBoundingClientRect();
    t.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
    t.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
  };
  root.addEventListener('pointermove', onMove, { passive: true });
  root.addEventListener('pointerdown', onMove, { passive: true });
}
