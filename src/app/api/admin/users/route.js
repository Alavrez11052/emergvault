import { NextResponse } from "next/server";
import getDb from "@/lib/db";
import { getSession, canManageUsers } from "@/lib/auth";

export async function GET() {
  const user = await getSession();
  if (!canManageUsers(user)) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const db = getDb();
  const users = await db.all(
    "SELECT id, name, email, role, status, created_at FROM users ORDER BY created_at DESC"
  );

  return NextResponse.json({ users });
}
