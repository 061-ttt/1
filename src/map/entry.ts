// 3D 地図には WebGL が要る。使えない端末では一覧版へ案内する
function hasWebGL(): boolean {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch {
    return false;
  }
}

if (hasWebGL()) {
  void import('./main');
} else {
  const boot = document.getElementById('boot');
  const box = document.createElement('div');
  box.className = 'nogl';
  box.setAttribute('role', 'alert');
  box.innerHTML =
    '<p>この端末やブラウザでは 3D 地図を表示できません（WebGL が無効です）。</p><p><a href="../">一覧版で方言に変換する</a></p>';
  box.style.cssText =
    'position:fixed;left:16px;right:16px;top:calc(env(safe-area-inset-top,0px) + 84px);max-width:520px;margin:0 auto;background:#fff;border:1px solid rgba(31,45,54,.14);border-radius:16px;padding:14px 18px;font:500 15px/1.6 var(--font);z-index:50';
  document.body.appendChild(box);
  boot?.remove();
}
