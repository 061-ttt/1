import type { JSX } from 'preact';

type P = JSX.SVGAttributes<SVGSVGElement>;
const base = (path: JSX.Element, p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" {...p}>
    {path}
  </svg>
);

export const IconSearch = (p: P) => base(<><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></>, p);
export const IconX = (p: P) => base(<path d="M18 6 6 18M6 6l12 12" />, p);
export const IconCopy = (p: P) => base(<><rect x="9" y="9" width="12" height="12" rx="3" /><path d="M5 15V6a3 3 0 0 1 3-3h7" /></>, p);
export const IconShare = (p: P) => base(<><path d="M12 3v13" /><path d="m7 8 5-5 5 5" /><path d="M5 13v5a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-5" /></>, p);
export const IconRefresh = (p: P) => base(<><path d="M20 11a8 8 0 1 0-2.3 5.7" /><path d="M20 4v7h-7" /></>, p);
export const IconBookmark = (p: P) => base(<path d="M6 3h12v18l-6-4-6 4z" />, p);
export const IconCheck = (p: P) => base(<path d="m5 12 5 5 9-10" />, p);
export const IconWand = (p: P) => base(<><path d="m14 4 6 6L8 22l-6-6z" /><path d="M17 1v4M15 3h4M5 2v2M4 3h2" /></>, p);
export const IconBook = (p: P) => base(<><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5z" /><path d="M4 21.5A2.5 2.5 0 0 1 6.5 19H20v3H6.5" /></>, p);
export const IconChat = (p: P) => base(<><path d="M21 12a8 8 0 0 1-11.6 7.1L3 21l1.9-5.4A8 8 0 1 1 21 12z" /></>, p);
export const IconLeft = (p: P) => base(<path d="m15 18-6-6 6-6" />, p);
export const IconRight = (p: P) => base(<path d="m9 18 6-6-6-6" />, p);
export const IconTrash = (p: P) => base(<><path d="M4 7h16" /><path d="M10 11v6M14 11v6" /><path d="M6 7l1 13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-13" /><path d="M9 7V4h6v3" /></>, p);
export const IconUser = (p: P) => base(<><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>, p);
export const IconPin = (p: P) => base(<><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z" /><circle cx="12" cy="10" r="2.5" /></>, p);
export const IconClock = (p: P) => base(<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>, p);
export const IconLock = (p: P) => base(<><rect x="4" y="10" width="16" height="11" rx="3" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>, p);
export const IconGoogle = (p: JSX.SVGAttributes<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5a5.6 5.6 0 0 1-2.4 3.6v3h3.9c2.2-2.1 3.5-5.1 3.5-8.8z" />
    <path fill="#34A853" d="M12 24c3.2 0 6-1.1 8-2.9l-3.9-3c-1.1.7-2.5 1.2-4.1 1.2-3.1 0-5.8-2.1-6.7-5H1.3v3.1A12 12 0 0 0 12 24z" />
    <path fill="#FBBC05" d="M5.3 14.3a7.2 7.2 0 0 1 0-4.6V6.6H1.3a12 12 0 0 0 0 10.8z" />
    <path fill="#EA4335" d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4A12 12 0 0 0 1.3 6.6l4 3.1c.9-2.9 3.6-4.9 6.7-4.9z" />
  </svg>
);
