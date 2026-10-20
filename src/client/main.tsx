import { render } from 'preact';
import './styles.css';
import { App } from './App';
import { boot, query, ready, searchOpen } from './state';
import { attachSheen, SPRING_BOUNCY } from './motion';

document.documentElement.style.setProperty('--spring', SPRING_BOUNCY.easing);
document.documentElement.style.setProperty('--spring-d', `${SPRING_BOUNCY.duration}ms`);

// 静的 HTML の検索バーをそのまま使う（JS 前に打たれた文字・フォーカスを失わない）
const q = document.getElementById('shell-q') as HTMLInputElement;
query.value = q.value;
const sync = () => {
  query.value = q.value;
  searchOpen.value = true;
};
q.addEventListener('input', sync);
q.addEventListener('pointerdown', () => (searchOpen.value = true));
q.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown' || (e.key === 'Enter' && !q.value)) searchOpen.value = true;
  if (e.key === 'Enter') {
    const first = document.querySelector<HTMLButtonElement>('[data-testid="dialect-hit"], [data-testid="convert-query"]');
    if (first && q.value) {
      e.preventDefault();
      first.click();
    }
  }
});
// どこからでも "/" で検索
addEventListener('keydown', (e) => {
  const t = e.target as HTMLElement;
  if (e.key === '/' && !/^(INPUT|TEXTAREA)$/.test(t.tagName)) {
    e.preventDefault();
    q.focus();
    searchOpen.value = true;
  }
});

render(<App />, document.getElementById('app')!);
attachSheen(document.body);

const bootEl = document.getElementById('boot');
const done = () => {
  ready.value = true;
  if (!bootEl) return;
  bootEl.classList.add('leaving');
  bootEl.setAttribute('aria-busy', 'false');
  setTimeout(() => bootEl.remove(), 500);
};
boot().then(done, done);
