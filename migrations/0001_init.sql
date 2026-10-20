-- users: Google アカウント（sub を主キーに）
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  email TEXT NOT NULL,
  name TEXT NOT NULL,
  picture TEXT,
  created_at INTEGER NOT NULL,
  last_login_at INTEGER NOT NULL
);

-- phrases: フレーズ帳。status 0=未着手 1=練習中 2=マスター
CREATE TABLE IF NOT EXISTS phrases (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  dialect TEXT NOT NULL,
  source TEXT NOT NULL,
  result TEXT NOT NULL,
  status INTEGER NOT NULL DEFAULT 0 CHECK (status BETWEEN 0 AND 2),
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL,
  deleted_at INTEGER
);

CREATE INDEX IF NOT EXISTS idx_phrases_user ON phrases(user_id, deleted_at, updated_at DESC);
