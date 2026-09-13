import getDb from "@/lib/db";
import { getSession } from "@/lib/auth";
import { notFound } from "next/navigation";
import QuizBlock from "@/components/QuizBlock";
import CommentSection from "@/components/CommentSection";

function Section({ title, children }) {
  return (
    <div className="mb-6">
      <h2 className="font-bold text-lg mb-2">{title}</h2>
      <div className="text-[15px] leading-relaxed whitespace-pre-line text-[rgb(var(--text))]">
        {children}
      </div>
    </div>
  );
}

export default async function CaseDetailPage({ params }) {
  const db = getDb();
  const c = await db.get("SELECT * FROM cases WHERE id = ?", [params.id]);
  if (!c || !c.published) notFound();

  const user = await getSession();
  if (user) {
    await db.run(
      `INSERT INTO progress (user_id, case_id) VALUES (?, ?)
       ON CONFLICT (user_id, case_id) DO NOTHING`,
      [user.id, c.id]
    );
  }

  const questions = await db.all("SELECT * FROM quiz_questions WHERE case_id = ?", [c.id]);
  const comments = await db.all(
    `SELECT comments.*, users.name, users.role FROM comments
     JOIN users ON users.id = comments.user_id
     WHERE case_id = ? AND hidden = 0 ORDER BY comments.created_at ASC`,
    [c.id]
  );

  return (
    <div className="max-w-3xl mx-auto px-5 py-10">
      <div className="flex items-center gap-2 mb-4">
        <span className="badge bg-brand-500/10 text-brand-600 dark:text-brand-300">{c.category}</span>
        <span className="badge bg-amber-500/10 text-amber-600 dark:text-amber-400">{c.difficulty}</span>
      </div>
      <h1 className="text-3xl font-extrabold mb-6">{c.title}</h1>

      <div className="card p-6 mb-6">
        <Section title="Chief Complaint">{c.chief_complaint}</Section>
        <Section title="History of Present Illness">{c.history}</Section>
        <Section title="Vitals">{c.vitals}</Section>
        {c.exam && <Section title="Physical Exam">{c.exam}</Section>}
        <Section title="Workup">{c.workup}</Section>
        <Section title="Differential Diagnosis">{c.differential}</Section>
        <Section title="Management">{c.management}</Section>
        <Section title="Teaching Points">{c.teaching_points}</Section>
      </div>

      <QuizBlock caseId={c.id} questions={questions} loggedIn={!!user} />
      <CommentSection caseId={c.id} comments={comments} loggedIn={!!user} />
    </div>
  );
}
