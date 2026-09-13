import { NextResponse } from "next/server";
import getDb from "@/lib/db";
import { getSession, canEditCases } from "@/lib/auth";
import { logAction } from "@/lib/audit";

export async function GET() {
  const user = await getSession();
  if (!canEditCases(user)) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const db = getDb();
  const cases = await db.all(
    `SELECT cases.*, users.name as author FROM cases
     LEFT JOIN users ON users.id = cases.created_by
     ORDER BY cases.created_at DESC`
  );

  return NextResponse.json({ cases });
}

export async function POST(req) {
  const user = await getSession();
  if (!canEditCases(user)) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const body = await req.json();
  const required = ["title", "category", "chief_complaint", "history", "vitals", "workup", "differential", "management", "teaching_points"];
  for (const f of required) {
    if (!body[f] || !String(body[f]).trim()) {
      return NextResponse.json({ error: `Field "${f}" is required.` }, { status: 400 });
    }
  }

  const db = getDb();
  const inserted = await db.get(
    `INSERT INTO cases
      (title, category, difficulty, chief_complaint, history, vitals, exam, workup, differential, management, teaching_points, image_url, published, created_by)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
     RETURNING id`,
    [
      body.title,
      body.category,
      body.difficulty || "Intermediate",
      body.chief_complaint,
      body.history,
      body.vitals,
      body.exam || null,
      body.workup,
      body.differential,
      body.management,
      body.teaching_points,
      body.image_url || null,
      body.published === false ? 0 : 1,
      user.id,
    ]
  );

  const caseId = inserted.id;

  if (Array.isArray(body.quiz)) {
    for (const q of body.quiz) {
      if (q.question && Array.isArray(q.options) && q.options.length >= 2) {
        await db.run(
          "INSERT INTO quiz_questions (case_id, question, options, correct_index, explanation) VALUES (?, ?, ?, ?, ?)",
          [caseId, q.question, JSON.stringify(q.options), q.correct_index || 0, q.explanation || null]
        );
      }
    }
  }

  await logAction(user.id, "CASE_CREATED", "case", caseId, { title: body.title });

  return NextResponse.json({ id: caseId });
}
