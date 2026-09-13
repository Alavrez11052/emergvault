import getDb from "./db";

export async function logAction(actorId, action, targetType = null, targetId = null, details = null) {
  const db = getDb();
  await db.run(
    `INSERT INTO audit_log (actor_id, action, target_type, target_id, details) VALUES (?, ?, ?, ?, ?)`,
    [actorId, action, targetType, targetId, details ? JSON.stringify(details) : null]
  );
}
