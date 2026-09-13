import { NextResponse } from "next/server";
import getDb from "@/lib/db";
import { getSession, canModerate } from "@/lib/auth";
import { logAction } from "@/lib/audit";

export async function PATCH(req, { params }) {
  const user = await getSession();
  if (!canModerate(user)) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const { hidden } = await req.json();
  const db = getDb();
  await db.run("UPDATE comments SET hidden = ? WHERE id = ?", [hidden ? 1 : 0, params.id]);
  await logAction(user.id, hidden ? "COMMENT_HIDDEN" : "COMMENT_UNHIDDEN", "comment", params.id);

  return NextResponse.json({ ok: true });
}

export async function DELETE(req, { params }) {
  const user = await getSession();
  if (!canModerate(user)) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const db = getDb();
  await db.run("DELETE FROM comments WHERE id = ?", [params.id]);
  await logAction(user.id, "COMMENT_DELETED", "comment", params.id);

  return NextResponse.json({ ok: true });
}
