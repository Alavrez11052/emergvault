import { NextResponse } from "next/server";
import getDb from "@/lib/db";
import { getSession } from "@/lib/auth";

export async function POST(req, { params }) {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: "Log in required." }, { status: 401 });

  const { quizScore, completed } = await req.json();
  const db = getDb();

  await db.run(
    `INSERT INTO progress (user_id, case_id, completed_at, quiz_score)
     VALUES (?, ?, ?, ?)
     ON CONFLICT (user_id, case_id) DO UPDATE SET
       completed_at = excluded.completed_at,
       quiz_score = excluded.quiz_score`,
    [user.id, params.id, completed ? new Date().toISOString() : null, quizScore ?? null]
  );

  return NextResponse.json({ ok: true });
}
