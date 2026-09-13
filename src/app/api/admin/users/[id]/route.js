import { NextResponse } from "next/server";
import getDb from "@/lib/db";
import { getSession, canManageUsers, ROLES } from "@/lib/auth";
import { logAction } from "@/lib/audit";

export async function PATCH(req, { params }) {
  const user = await getSession();
  if (!canManageUsers(user)) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  if (Number(params.id) === user.id) {
    return NextResponse.json({ error: "You cannot change your own role or status." }, { status: 400 });
  }

  const { role, status } = await req.json();
  const db = getDb();
  const target = await db.get("SELECT * FROM users WHERE id = ?", [params.id]);
  if (!target) return NextResponse.json({ error: "User not found." }, { status: 404 });

  if (role) {
    if (!ROLES.includes(role)) return NextResponse.json({ error: "Invalid role." }, { status: 400 });
    await db.run("UPDATE users SET role = ? WHERE id = ?", [role, params.id]);
    await logAction(user.id, "USER_ROLE_CHANGED", "user", params.id, { from: target.role, to: role });
  }

  if (status) {
    if (!["ACTIVE", "SUSPENDED"].includes(status)) {
      return NextResponse.json({ error: "Invalid status." }, { status: 400 });
    }
    await db.run("UPDATE users SET status = ? WHERE id = ?", [status, params.id]);
    await logAction(user.id, "USER_STATUS_CHANGED", "user", params.id, { from: target.status, to: status });
  }

  return NextResponse.json({ ok: true });
}

export async function DELETE(req, { params }) {
  const user = await getSession();
  if (!canManageUsers(user)) return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  if (Number(params.id) === user.id) {
    return NextResponse.json({ error: "You cannot delete your own account." }, { status: 400 });
  }

  const db = getDb();
  await db.run("DELETE FROM users WHERE id = ?", [params.id]);
  await logAction(user.id, "USER_DELETED", "user", params.id);

  return NextResponse.json({ ok: true });
}
