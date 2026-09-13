import { NextResponse } from "next/server";
import getDb from "@/lib/db";
import { getSession, canEditCases } from "@/lib/auth";
import { logAction } from "@/lib/audit";

export async function GET(req, { params }) {
  const user = await getSession();
  if (!canEditCases(user)) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const db = getDb();
  const c = await db.get("SELECT * FROM cases WHERE id = ?", [params.id]);
  if (!c) return NextResponse.json({ error: "Not found" }, { status: 404 });
  const quiz = await db.all("SELECT * FROM quiz_questions WHERE case_id = ?", [params.id]);

  return NextResponse.json({ case: c, quiz });
}

export async function PUT(req, { params }) {
  const user = await getSession();
  if (!canEditCases(user)) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const body = await req.json();
  const db = getDb();
  const existing = await db.get("SELECT id FROM cases WHERE id = ?", [params.id]);
  if (!existing) return NextResponse.json({ error: "Not found" }, { status: 404 });

  await db.run(
    `UPDATE cases SET title=?, category=?, difficulty=?, chief_complaint=?, history=?, vitals=?, exam=?, workup=?, differential=?, management=?, teaching_points=?, image_url=?, published=?, updated_at=now()
     WHERE id = ?`,
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
      params.id,
    ]
  );

  if (Array.isArray(body.quiz)) {
    await db.run("DELETE FROM quiz_questions WHERE case_id = ?", [params.id]);
    for (const q of body.quiz) {
      if (q.question && Array.isArray(q.options) && q.options.length >= 2) {
        await db.run(
          "INSERT INTO quiz_questions (case_id, question, options, correct_index, explanation) VALUES (?, ?, ?, ?, ?)",
          [params.id, q.question, JSON.stringify(q.options), q.correct_index || 0, q.explanation || null]
        );
      }
    }
  }

  await logAction(user.id, "CASE_UPDATED", "case", params.id, { title: body.title });

  return NextResponse.json({ ok: true });
}

export async function DELETE(req, { params }) {
  const user = await getSession();
  if (!canEditCases(user)) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const db = getDb();
  await db.run("DELETE FROM cases WHERE id = ?", [params.id]);
  await logAction(user.id, "CASE_DELETED", "case", params.id);

  return NextResponse.json({ ok: true });
}
