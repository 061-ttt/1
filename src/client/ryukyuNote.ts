import { signal } from '@preact/signals';

/** 静的版で琉球諸語に訳せなかったとき、訳せなかった語（それ以外は null） */
export const ryukyuMissingWords = signal<string[] | null>(null);
