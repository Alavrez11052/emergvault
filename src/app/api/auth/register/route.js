import { NextResponse } from "next/server";
import getDb from "@/lib/db";
import { hashPassword, signToken, setSessionCookie } from "@/lib/auth";
import { logAction } from "@/lib/audit";

export async function POST(req) {
  const body = await req.json();
  const { name, email, password } = body;

  if (!name || !email || !password) {
    return NextResponse.json({ error: "Name, email, and password are required." }, { status: 400 });
  }
  if (password.length < 6) {
    return NextResponse.json({ error: "Password must be at least 6 characters." }, { status: 400 });
  }

  const db = getDb();
  const existing = await db.get("SELECT id FROM users WHERE email = ?", [email.toLowerCase()]);
  if (existing) {
    return NextResponse.json({ error: "An account with that email already exists." }, { status: 409 });
  }

  const hash = hashPassword(password);
  const inserted = await db.get(
    "INSERT INTO users (name, email, password_hash, role) VALUES (?, ?, ?, 'USER') RETURNING id",
    [name, email.toLowerCase(), hash]
  );

  const user = { id: inserted.id, name, email: email.toLowerCase(), role: "USER" };
  const token = signToken(user);
  setSessionCookie(token);
  await logAction(user.id, "USER_REGISTERED", "user", user.id);

  return NextResponse.json({ user });
}
