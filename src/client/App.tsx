import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'preact/hooks';
import { createPortal } from 'preact/compat';
import { DIALECT_MAP, DIALECTS, REGIONS } from '../shared/dialects';
import { normalize, searchDialects } from '../shared/search';
import {
  bookStatus,
  chooseDialect,
  config,
  convert,
  convertError,
  converting,
  counts,
  deletePhrase,
  dialect,
  dialectId,
  haptic,
  history,
  input,
  loginWithCredential,
  logout,
  openAccount,
  sheetReason,
  output,
  outputDialect,
  phrases,
  phrasesLoaded,
  query,
  recentDialects,
  saveOutput,
  savedOutput,
  searchOpen,
  setInput,
  setPhraseStatus,
  sheet,
  showToast,
  STATUS,
  tab,
  toast,
  transition,
  user,
  bookAvailable,
} from './state';
import { api } from './api';
import { IS_STATIC } from './mode';
import { SwipeCard } from './SwipeCard';
import { animate, SPRING_BOUNCY } from './motion';
import {
  IconBook,
  IconBookmark,
  IconCheck,
  IconChat,
  IconClock,
  IconCopy,
  IconGoogle,
  IconLock,
  IconPin,
  IconRefresh,
  IconSearch,
  IconShare,
  IconUser,
  IconWand,
  IconX,
} from './icons';

const MAX = 500;
const shellInput = () => document.getElementById('shell-q') as HTMLInputElement;

function openSearch() {
  const el = shellInput();
  searchOpen.value = true;
  el.focus();
  el.select();
}

function closeSearch(blur = true) {
  searchOpen.value = false;
  query.value = '';
  const el = shellInput();
  el.value = '';
  if (blur) el.blur();
}

function pick(id: string) {
  haptic(8);
  transition(() => {
    chooseDialect(id);
    tab.value = 'convert';
  });
  closeSearch();
  requestAnimationFrame(() => {
    const card = document.querySelector('.dialect-card');
    if (card) animate(card, [{ transform: 'scale(0.94)', filter: 'blur(2px)' }, { transform: 'scale(1)', filter: 'blur(0)' }], SPRING_BOUNCY, { fill: 'none' });
  });
}

/* ---------------- 検索バー（静的 HTML の input をそのまま使う） ---------------- */

function SearchExtras() {
  const host = document.querySelector('#shell-top .searchbox');
  if (!host) return null;
  return createPortal(
    query.value ? (
      <button class="search-clear" type="button" aria-label="検索をクリア" onClick={() => { query.value = ''; shellInput().value = ''; shellInput().focus(); }}>
        <IconX />
      </button>
    ) : null,
    host,
  );
}

function AvatarButton() {
  const host = document.querySelector('#shell-top .topbar-inner');
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    host?.querySelector('span.avatar-btn')?.remove();
    setMounted(true);
  }, []);
  if (!host || !mounted || IS_STATIC) return null;
  const u = user.value;
  return createPortal(
    <button class="avatar-btn glass btn" type="button" aria-label={u ? `アカウント（${u.name}）` : 'ログイン'} data-testid="avatar" onClick={() => openAccount()}>
      {u?.picture ? <img src={u.picture} alt="" referrerpolicy="no-referrer" /> : u ? <span class="initial">{u.name.slice(0, 1)}</span> : <IconUser />}
    </button>,
    host,
  );
}

function SearchPanel() {
  const q = query.value;
  const open = searchOpen.value || q.length > 0;
  const hits = useMemo(() => (q ? searchDialects(q).slice(0, 12) : []), [q]);
  const nq = normalize(q);
  const phraseHits = useMemo(
    () => (nq ? phrases.value.filter((p) => normalize(p.source + p.result).includes(nq)).slice(0, 5) : []),
    [nq, phrases.value],
  );
  const historyHits = useMemo(
    () => (nq ? history.value.filter((h) => normalize(h.source + h.result).includes(nq)).slice(0, 3) : history.value.slice(0, 3)),
    [nq, history.value],
  );

  useLayoutEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeSearch();
    };
    addEventListener('keydown', onKey);
    return () => removeEventListener('keydown', onKey);
  }, [open]);

  if (!open) return null;
  const nothing = q && hits.length === 0 && phraseHits.length === 0 && historyHits.length === 0;

  return (
    <div class="search-layer" data-testid="search-panel">
      <div class="search-scrim" onClick={() => closeSearch()} />
      <div class="search-panel glass" role="listbox" aria-label="検索結果">
        {!q && (
          <>
            <Section title="最近">
              <div class="chips wrap">
                {recentDialects.value.map((id) => (
                  <button key={id} class={`chip btn ${id === dialectId.value ? 'on' : ''}`} type="button" onClick={() => pick(id)}>
                    {DIALECT_MAP[id]?.name}
                  </button>
                ))}
              </div>
            </Section>
            {REGIONS.map((r) => (
              <Section key={r.name} title={r.name}>
                <div class="chips wrap">
                  {DIALECTS.filter((x) => x.region === r.name).map((x) => (
                    <button key={x.id} class={`chip btn ${x.id === dialectId.value ? 'on' : ''}`} type="button" onClick={() => pick(x.id)} data-testid="dialect-chip">
                      {x.name}
                    </button>
                  ))}
                </div>
              </Section>
            ))}
          </>
        )}
        {q && hits.length > 0 && (
          <Section title="方言">
            <ul class="rows">
              {hits.map(({ dialect: x }, i) => (
                <li key={x.id} style={{ '--i': i } as any}>
                  <button class="row btn" type="button" role="option" onClick={() => pick(x.id)} data-testid="dialect-hit">
                    <span class="row-icon"><IconPin /></span>
                    <span class="row-main">
                      <span class="row-title">{x.name}</span>
                      <span class="row-sub">{x.kana}</span>
                    </span>
                    <span class="badge">{x.region}</span>
                  </button>
                </li>
              ))}
            </ul>
          </Section>
        )}
        {phraseHits.length > 0 && (
          <Section title="フレーズ帳">
            <ul class="rows">
              {phraseHits.map((p, i) => (
                <li key={p.id} style={{ '--i': i } as any}>
                  <button
                    class="row btn"
                    type="button"
                    data-testid="phrase-hit"
                    onClick={() => {
                      closeSearch();
                      transition(() => {
                        bookStatus.value = p.status;
                        tab.value = 'book';
                      });
                    }}
                  >
                    <span class="row-icon"><IconBook /></span>
                    <span class="row-main">
                      <span class="row-title clamp">{p.result}</span>
                      <span class="row-sub clamp">{DIALECT_MAP[p.dialect]?.name}・{STATUS[p.status].label}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </Section>
        )}
        {historyHits.length > 0 && (
          <Section title="履歴">
            <ul class="rows">
              {historyHits.map((h, i) => (
                <li key={h.at} style={{ '--i': i } as any}>
                  <button
                    class="row btn"
                    type="button"
                    onClick={() => {
                      closeSearch();
                      transition(() => {
                        chooseDialect(h.dialect);
                        setInput(h.source);
                        output.value = h.result;
                        outputDialect.value = h.dialect;
                        tab.value = 'convert';
                      });
                    }}
                  >
                    <span class="row-icon"><IconClock /></span>
                    <span class="row-main">
                      <span class="row-title clamp">{h.result}</span>
                      <span class="row-sub clamp">{DIALECT_MAP[h.dialect]?.name}・{h.source}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </Section>
        )}
        {q && hits.length === 0 && (
          <Section title="変換">
            <button
              class="row btn"
              type="button"
              data-testid="convert-query"
              onClick={() => {
                setInput(q.slice(0, MAX));
                closeSearch();
                transition(() => (tab.value = 'convert'));
                convert();
              }}
            >
              <span class="row-icon"><IconWand /></span>
              <span class="row-main">
                <span class="row-title clamp">「{q}」</span>
                <span class="row-sub">{dialect.value.name}に変換</span>
              </span>
            </button>
          </Section>
        )}
        {nothing && <p class="empty" data-testid="no-hit">該当する方言はありません</p>}
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: any }) {
  return (
    <section class="sect">
      <h2 class="sect-title">{title}</h2>
      {children}
    </section>
  );
}

/* ---------------- 変換 ---------------- */

function Streamed({ text }: { text: string }) {
  const chars = Array.from(text);
  return (
    <p class="result-text" lang="ja" data-testid="result-text">
      {chars.map((c, i) => (c === '\n' ? <br key={i} /> : <span key={i} class="ch">{c}</span>))}
      {converting.value && <span class="caret" aria-hidden="true" />}
    </p>
  );
}

function Converter() {
  const ta = useRef<HTMLTextAreaElement>(null);
  const len = Array.from(input.value).length;
  const d = dialect.value;
  const outD = outputDialect.value ? DIALECT_MAP[outputDialect.value] : null;
  const canShare = typeof navigator !== 'undefined' && 'share' in navigator;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(output.value);
      haptic(8);
      showToast('コピーしました');
    } catch {
      showToast('コピーできませんでした');
    }
  };

  return (
    <div class="view" data-testid="view-convert">
      <div class="chips scroll" role="tablist" aria-label="最近の方言">
        {recentDialects.value.slice(0, 6).map((id) => (
          <button
            key={id}
            role="tab"
            aria-selected={id === dialectId.value}
            class={`chip btn ${id === dialectId.value ? 'on' : ''}`}
            type="button"
            onClick={() => {
              haptic(6);
              chooseDialect(id);
            }}
          >
            {DIALECT_MAP[id]?.name}
          </button>
        ))}
      </div>

      <button class="dialect-card glass btn" type="button" onClick={openSearch} data-testid="dialect-card" aria-label={`方言：${d.name}（変更）`}>
        <span class="dc-region">{d.region}</span>
        <span class="dc-name" data-testid="current-dialect">{d.name}</span>
        <span class="dc-change"><IconSearch /></span>
      </button>

      <div class="input-card glass">
        <textarea
          ref={ta}
          data-testid="input"
          aria-label="共通語の文"
          placeholder="共通語で入力"
          maxLength={MAX * 2}
          value={input.value}
          onInput={(e) => setInput((e.target as HTMLTextAreaElement).value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
              e.preventDefault();
              convert();
            }
          }}
        />
        <div class="input-foot">
          <span class={`count ${len > MAX ? 'over' : ''}`} aria-live="polite">
            {len}/{MAX}
          </span>
          {input.value && (
            <button class="mini" type="button" aria-label="入力を消去" onClick={() => { setInput(''); ta.current?.focus(); }}>
              <IconX />
            </button>
          )}
        </div>
      </div>

      <button
        class={`convert-btn btn ${converting.value ? 'busy' : ''}`}
        type="button"
        data-testid="convert"
        disabled={!input.value.trim() || len > MAX || converting.value}
        onClick={() => {
          haptic(10);
          convert();
        }}
      >
        <span class="cb-glow" aria-hidden="true" />
        <IconWand />
        <span>{converting.value ? '変換中' : `${d.name}に変換`}</span>
      </button>

      {(output.value || converting.value || convertError.value) && (
        <section class="result-card glass" aria-live="polite" data-testid="result">
          <div class="rc-head">
            <span class="badge strong">{outD?.name ?? d.name}</span>
            {converting.value && <span class="dots" aria-label="変換中"><i /><i /><i /></span>}
          </div>
          {convertError.value ? (
            <div class="rc-error" role="alert" data-testid="convert-error">
              <p>{convertError.value}</p>
              <button class="pill btn" type="button" onClick={() => convert()}>
                <IconRefresh /> 再試行
              </button>
            </div>
          ) : output.value ? (
            <Streamed text={output.value} />
          ) : (
            <div class="rc-sk">
              <i class="sk" /><i class="sk" style={{ width: '70%' }} />
            </div>
          )}
          {!converting.value && output.value && !convertError.value && (
            <div class="rc-actions">
              <button class="pill btn" type="button" onClick={copy} data-testid="copy">
                <IconCopy /> コピー
              </button>
              {canShare && (
                <button class="pill btn" type="button" onClick={() => navigator.share({ text: output.value }).catch(() => undefined)}>
                  <IconShare /> 共有
                </button>
              )}
              <button class="pill btn" type="button" onClick={() => convert()} aria-label="もう一度変換" data-testid="regenerate">
                <IconRefresh />
              </button>
              <button
                class={`pill btn accent ${savedOutput.value ? 'done' : ''}`}
                type="button"
                onClick={saveOutput}
                data-testid="save"
                aria-label={savedOutput.value ? '保存済み' : 'フレーズ帳に保存'}
              >
                {savedOutput.value ? <IconCheck /> : <IconBookmark />}
                {savedOutput.value ? '保存済み' : '保存'}
              </button>
            </div>
          )}
        </section>
      )}
    </div>
  );
}

/* ---------------- フレーズ帳 ---------------- */

function Segments() {
  const ref = useRef<HTMLDivElement>(null);
  const cur = bookStatus.value;
  const prevCounts = useRef(counts.value);
  useEffect(() => {
    // 件数が変わったバッジを弾ませる
    counts.value.forEach((n, i) => {
      if (n !== prevCounts.current[i]) {
        const b = ref.current?.querySelector(`[data-count="${i}"]`);
        if (b) animate(b, [{ transform: 'scale(1.5)' }, { transform: 'scale(1)' }], SPRING_BOUNCY, { fill: 'none' });
      }
    });
    prevCounts.current = counts.value;
  }, [counts.value]);
  return (
    <div class="segments glass" role="tablist" aria-label="ステータス" ref={ref} style={{ '--seg': cur } as any}>
      <span class="seg-thumb" aria-hidden="true" />
      {STATUS.map((s, i) => (
        <button
          key={s.key}
          role="tab"
          aria-selected={cur === i}
          class={`seg ${cur === i ? 'on' : ''}`}
          type="button"
          data-testid={`seg-${i}`}
          onClick={() => {
            haptic(5);
            transition(() => (bookStatus.value = i as 0 | 1 | 2));
          }}
        >
          <span class={`pc-dot s${i}`} aria-hidden="true" />
          {s.label}
          <span class="seg-count" data-count={i} data-testid={`count-${i}`}>
            {counts.value[i]}
          </span>
        </button>
      ))}
    </div>
  );
}

function PhraseBook() {
  if (!bookAvailable.value) {
    return (
      <div class="view" data-testid="view-book">
        <div class="locked glass" data-testid="book-locked">
          <span class="lock-icon"><IconLock /></span>
          <p>フレーズ帳はログインで使えます</p>
          <button class="google-btn btn" type="button" data-testid="book-login" onClick={() => openAccount()}>
            <IconGoogle /> Google でログイン
          </button>
        </div>
      </div>
    );
  }
  const list = phrases.value.filter((p) => p.status === bookStatus.value);
  return (
    <div class="view" data-testid="view-book">
      <Segments />
      {!phrasesLoaded.value ? (
        <ul class="phrase-list">
          {[0, 1, 2].map((i) => (
            <li key={i} class="sk" style={{ height: '112px', borderRadius: '24px', marginBottom: '12px' }} />
          ))}
        </ul>
      ) : list.length === 0 ? (
        <div class="empty-state" data-testid="book-empty">
          <span class={`pc-dot big s${bookStatus.value}`} />
          <p>{STATUS[bookStatus.value].label}のフレーズはありません</p>
        </div>
      ) : (
        <ul class="phrase-list" key={bookStatus.value}>
          {list.map((p, i) => (
            <SwipeCard key={p.id} phrase={p} index={i} onMove={(s) => setPhraseStatus(p.id, s)} onDelete={() => deletePhrase(p.id)} />
          ))}
        </ul>
      )}
    </div>
  );
}

/* ---------------- タブバー・シート・トースト ---------------- */

function TabBar() {
  const items = [
    { key: 'convert' as const, label: '変換', icon: <IconChat /> },
    { key: 'book' as const, label: 'フレーズ帳', icon: <IconBook /> },
  ];
  const idx = items.findIndex((x) => x.key === tab.value);
  return (
    <nav class="tabbar glass" aria-label="メイン" style={{ '--tab': idx } as any}>
      <span class="tab-thumb" aria-hidden="true" />
      {items.map((it) => (
        <button
          key={it.key}
          class={`tab ${tab.value === it.key ? 'on' : ''}`}
          type="button"
          aria-current={tab.value === it.key ? 'page' : undefined}
          data-testid={`tab-${it.key}`}
          onClick={() => {
            if (tab.value === it.key) return;
            haptic(5);
            if (it.key === 'book' && toast.value?.action?.label === '開く') toast.value = null;
            transition(() => (tab.value = it.key));
          }}
        >
          {it.icon}
          <span>{it.label}</span>
          {it.key === 'book' && bookAvailable.value && counts.value[1] > 0 && <span class="tab-badge">{counts.value[1]}</span>}
        </button>
      ))}
    </nav>
  );
}

let gisLoading: Promise<void> | null = null;
function loadGis(): Promise<void> {
  if ((window as any).google?.accounts?.id) return Promise.resolve();
  gisLoading ??= new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = 'https://accounts.google.com/gsi/client';
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => {
      gisLoading = null;
      reject(new Error('gis'));
    };
    document.head.appendChild(s);
  });
  return gisLoading;
}

function GoogleSignIn() {
  const host = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<'loading' | 'ready' | 'error' | 'unconfigured'>('loading');
  const cfg = config.value;

  useEffect(() => {
    if (cfg.testMode) return setState('ready');
    if (!cfg.googleClientId) return setState('unconfigured');
    let alive = true;
    loadGis()
      .then(() => {
        if (!alive || !host.current) return;
        const g = (window as any).google.accounts.id;
        g.initialize({
          client_id: cfg.googleClientId,
          callback: (r: { credential: string }) => loginWithCredential(r.credential).catch(() => showToast('ログインできませんでした')),
          ux_mode: 'popup',
          use_fedcm_for_button: true,
        });
        g.renderButton(host.current, { theme: 'outline', size: 'large', shape: 'pill', text: 'signin_with', locale: 'ja', width: Math.min(320, host.current.offsetWidth || 300) });
        setState('ready');
      })
      .catch(() => alive && setState('error'));
    return () => {
      alive = false;
    };
  }, [cfg.googleClientId, cfg.testMode]);

  if (cfg.testMode) {
    return (
      <button
        class="google-btn btn"
        type="button"
        data-testid="google-login"
        onClick={async () => {
          try {
            const { credential } = await api.testCredential();
            await loginWithCredential(credential);
          } catch {
            showToast('ログインできませんでした');
          }
        }}
      >
        <IconGoogle /> Google でログイン
      </button>
    );
  }
  return (
    <div class="gsi-wrap">
      {state === 'loading' && <div class="sk" style={{ height: '44px', width: '260px', borderRadius: '22px' }} />}
      {state === 'unconfigured' && <p class="muted">ログインは現在利用できません</p>}
      {state === 'error' && <p class="muted">Google に接続できませんでした</p>}
      <div ref={host} class="gsi-host" />
    </div>
  );
}

function AccountSheet() {
  const open = sheet.value === 'account';
  const panel = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && (sheet.value = null);
    addEventListener('keydown', onKey);
    panel.current?.focus();
    return () => removeEventListener('keydown', onKey);
  }, [open]);
  if (!open) return null;
  const u = user.value;
  return (
    <div class="sheet-layer" data-testid="account-sheet">
      <div class="sheet-scrim" onClick={() => (sheet.value = null)} />
      <div class="sheet glass" role="dialog" aria-modal="true" aria-label="アカウント" tabIndex={-1} ref={panel}>
        <span class="grabber" aria-hidden="true" />
        {u ? (
          <>
            <div class="me">
              <span class="me-avatar">{u.picture ? <img src={u.picture} alt="" referrerpolicy="no-referrer" /> : u.name.slice(0, 1)}</span>
              <span class="me-name" data-testid="me-name">{u.name}</span>
              <span class="me-mail">{u.email}</span>
            </div>
            <button class="pill btn wide" type="button" data-testid="logout" onClick={logout}>
              ログアウト
            </button>
          </>
        ) : (
          <>
            <span class="lock-icon"><IconUser /></span>
            {sheetReason.value && <p class="sheet-reason" data-testid="sheet-reason">{sheetReason.value}</p>}
            <GoogleSignIn />
          </>
        )}
      </div>
    </div>
  );
}

function ToastView() {
  const t = toast.value;
  if (!t) return null;
  return (
    <div class="toast glass" role="status" key={t.id} data-testid="toast">
      <span>{t.text}</span>
      {t.action && (
        <button
          class="toast-act"
          type="button"
          data-testid="toast-action"
          onClick={() => {
            toast.value = null;
            t.action!.run();
          }}
        >
          {t.action.label}
        </button>
      )}
    </div>
  );
}

export function App() {
  return (
    <>
      <div class="aurora" aria-hidden="true">
        <i /><i /><i /><i />
      </div>
      <AvatarButton />
      <SearchExtras />
      <main class="main">{tab.value === 'convert' ? <Converter /> : <PhraseBook />}</main>
      <SearchPanel />
      <TabBar />
      <AccountSheet />
      <ToastView />
    </>
  );
}
