import { NextResponse } from "next/server";
import getDb from "@/lib/db";
import { getSession, canManageUsers } from "@/lib/auth";

export async function GET() {
  const user = await getSession();
  if (!canManageUsers(user)) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const db = getDb();
  const rows = await db.all(
    `SELECT audit_log.*, users.name as actor_name FROM audit_log
     LEFT JOIN users ON users.id = audit_log.actor_id
     ORDER BY audit_log.created_at DESC LIMIT 300`
  );

  return NextResponse.json({ log: rows });
}
