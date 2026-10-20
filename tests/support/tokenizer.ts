import kuromoji from 'kuromoji';
import { fromKuromoji, type Tokenize } from '../../src/shared/engine';

let cached: Promise<Tokenize> | null = null;
export function nodeTokenizer(): Promise<Tokenize> {
  cached ??= new Promise((resolve, reject) => {
    kuromoji.builder({ dicPath: 'node_modules/kuromoji/dict' }).build((err, t) => {
      if (err) reject(err);
      else resolve((s: string) => t.tokenize(s).map(fromKuromoji));
    });
  });
  return cached;
}
