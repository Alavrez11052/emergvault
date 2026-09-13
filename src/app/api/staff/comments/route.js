import { NextResponse } from "next/server";
import getDb from "@/lib/db";
import { getSession, isStaff } from "@/lib/auth";

export async function GET() {
  const user = await getSession();
  if (!isStaff(user)) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const db = getDb();
  const comments = await db.all(
    `SELECT comments.*, users.name as author, cases.title as case_title
     FROM comments
     JOIN users ON users.id = comments.user_id
     JOIN cases ON cases.id = comments.case_id
     ORDER BY comments.created_at DESC LIMIT 200`
  );

  return NextResponse.json({ comments });
}
