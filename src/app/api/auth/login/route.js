import { NextResponse } from "next/server";
import getDb from "@/lib/db";
import { verifyPassword, signToken, setSessionCookie } from "@/lib/auth";
import { logAction } from "@/lib/audit";

export async function POST(req) {
  const { email, password } = await req.json();
  if (!email || !password) {
    return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
  }

  const db = getDb();
  const user = await db.get("SELECT * FROM users WHERE email = ?", [email.toLowerCase()]);
  if (!user || !verifyPassword(password, user.password_hash)) {
    return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
  }
  if (user.status === "SUSPENDED") {
    return NextResponse.json({ error: "This account has been suspended." }, { status: 403 });
  }

  const token = signToken(user);
  setSessionCookie(token);
  await logAction(user.id, "USER_LOGIN", "user", user.id);

  return NextResponse.json({
    user: { id: user.id, name: user.name, email: user.email, role: user.role },
  });
}
