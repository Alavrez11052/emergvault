import { NextResponse } from "next/server";
import getDb from "@/lib/db";
import { getSession, isStaff } from "@/lib/auth";

export async function GET() {
  const user = await getSession();
  if (!isStaff(user)) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const db = getDb();
  const usersRow = await db.get("SELECT COUNT(*) c FROM users");
  const casesRow = await db.get("SELECT COUNT(*) c FROM cases");
  const commentsRow = await db.get("SELECT COUNT(*) c FROM comments");
  const completionsRow = await db.get("SELECT COUNT(*) c FROM progress WHERE completed_at IS NOT NULL");
  const totals = {
    users: usersRow.c,
    cases: casesRow.c,
    comments: commentsRow.c,
    completions: completionsRow.c,
  };

  const topCases = await db.all(
    `SELECT cases.id, cases.title, COUNT(progress.id) as views,
      SUM(CASE WHEN progress.completed_at IS NOT NULL THEN 1 ELSE 0 END) as completions,
      AVG(progress.quiz_score) as avg_score
     FROM cases LEFT JOIN progress ON progress.case_id = cases.id
     GROUP BY cases.id ORDER BY views DESC LIMIT 10`
  );

  const categoryBreakdown = await db.all(
    `SELECT category, COUNT(*) as c FROM cases GROUP BY category ORDER BY c DESC`
  );

  return NextResponse.json({ totals, topCases, categoryBreakdown });
}
