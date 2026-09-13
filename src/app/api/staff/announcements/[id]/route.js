import { NextResponse } from "next/server";
import getDb from "@/lib/db";
import { getSession, isStaff, canModerate } from "@/lib/auth";
import { logAction } from "@/lib/audit";

export async function DELETE(req, { params }) {
  const user = await getSession();
  if (!isStaff(user)) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const db = getDb();
  const row = await db.get("SELECT * FROM announcements WHERE id = ?", [params.id]);
  if (!row) return NextResponse.json({ error: "Not found" }, { status: 404 });

  if (row.created_by !== user.id && !canModerate(user)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  await db.run("DELETE FROM announcements WHERE id = ?", [params.id]);
  await logAction(user.id, "ANNOUNCEMENT_DELETED", "announcement", params.id);

  return NextResponse.json({ ok: true });
}
