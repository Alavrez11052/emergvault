import { NextResponse } from "next/server";
import getDb from "@/lib/db";
import { getSession } from "@/lib/auth";

export async function POST(req, { params }) {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: "Log in to comment." }, { status: 401 });

  const { body } = await req.json();
  if (!body || !body.trim()) {
    return NextResponse.json({ error: "Comment cannot be empty." }, { status: 400 });
  }

  const db = getDb();
  const caseRow = await db.get("SELECT id FROM cases WHERE id = ?", [params.id]);
  if (!caseRow) return NextResponse.json({ error: "Case not found." }, { status: 404 });

  await db.run("INSERT INTO comments (case_id, user_id, body) VALUES (?, ?, ?)", [
    params.id,
    user.id,
    body.trim(),
  ]);

  return NextResponse.json({ ok: true });
}
