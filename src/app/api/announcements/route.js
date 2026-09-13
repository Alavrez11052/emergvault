import { NextResponse } from "next/server";
import getDb from "@/lib/db";
import { getSession, isStaff } from "@/lib/auth";

export async function GET() {
  const db = getDb();
  const user = await getSession();
  const staff = isStaff(user);

  const rows = staff
    ? await db.all(`SELECT announcements.*, users.name as author FROM announcements LEFT JOIN users ON users.id = announcements.created_by ORDER BY created_at DESC`)
    : await db.all(`SELECT announcements.*, users.name as author FROM announcements LEFT JOIN users ON users.id = announcements.created_by WHERE audience = 'PUBLIC' ORDER BY created_at DESC`);

  return NextResponse.json({ announcements: rows });
}
