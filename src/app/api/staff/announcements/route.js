import { NextResponse } from "next/server";
import getDb from "@/lib/db";
import { getSession, isStaff, canModerate } from "@/lib/auth";
import { logAction } from "@/lib/audit";

export async function GET() {
  const user = await getSession();
  if (!isStaff(user)) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const db = getDb();
  const rows = await db.all(
    `SELECT announcements.*, users.name as author FROM announcements
     LEFT JOIN users ON users.id = announcements.created_by ORDER BY created_at DESC`
  );

  return NextResponse.json({ announcements: rows });
}

export async function POST(req) {
  const user = await getSession();
  if (!isStaff(user)) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const { title, body, audience } = await req.json();
  if (!title || !body) return NextResponse.json({ error: "Title and body are required." }, { status: 400 });

  let aud = audience === "PUBLIC" ? "PUBLIC" : "STAFF";
  if (aud === "PUBLIC" && !canModerate(user)) {
    return NextResponse.json({ error: "Only senior staff or admins can post public announcements." }, { status: 403 });
  }

  const db = getDb();
  const inserted = await db.get(
    "INSERT INTO announcements (title, body, audience, created_by) VALUES (?, ?, ?, ?) RETURNING id",
    [title, body, aud, user.id]
  );

  await logAction(user.id, "ANNOUNCEMENT_CREATED", "announcement", inserted.id, { title, audience: aud });

  return NextResponse.json({ id: inserted.id });
}
