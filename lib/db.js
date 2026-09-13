import { Pool } from "pg";

let pool;

function getPool() {
  if (!pool) {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error(
        "DATABASE_URL is not set. Add it to your environment (e.g. a Neon connection string) before running the app."
      );
    }
    pool = new Pool({
      connectionString,
      ssl: connectionString.includes("localhost") ? false : { rejectUnauthorized: false },
      max: 5,
    });
  }
  return pool;
}

// Converts SQLite-style "?" placeholders to Postgres-style "$1, $2, ..."
// so the rest of the app can keep writing familiar positional-parameter SQL.
function toPgText(text) {
  let i = 0;
  return text.replace(/\?/g, () => `$${++i}`);
}

async function exec(text, params = []) {
  const res = await getPool().query(toPgText(text), params);
  return res.rows;
}

// Small async wrapper that mirrors the shape of the better-sqlite3 API
// (get/all/run) so call sites read the same way, just with await.
const db = {
  async get(text, params = []) {
    const rows = await exec(text, params);
    return rows[0] || null;
  },
  async all(text, params = []) {
    return exec(text, params);
  },
  async run(text, params = []) {
    return exec(text, params);
  },
};

export default function getDb() {
  return db;
}
