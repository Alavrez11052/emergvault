import { getSession } from "@/lib/auth";
import getDb from "@/lib/db";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function DashboardPage() {
  const user = await getSession();
  if (!user) redirect("/login");

  const db = getDb();
  const stats = await db.get(
    `SELECT
      COUNT(*) as viewed,
      SUM(CASE WHEN completed_at IS NOT NULL THEN 1 ELSE 0 END) as completed,
      AVG(quiz_score) as avg_score
     FROM progress WHERE user_id = ?`,
    [user.id]
  );

  const recent = await db.all(
    `SELECT cases.id, cases.title, cases.category, progress.completed_at, progress.quiz_score
     FROM progress JOIN cases ON cases.id = progress.case_id
     WHERE progress.user_id = ? ORDER BY progress.viewed_at DESC LIMIT 10`,
    [user.id]
  );

  const totalCasesRow = await db.get("SELECT COUNT(*) as c FROM cases WHERE published = 1");
  const totalCases = totalCasesRow.c;

  return (
    <div className="max-w-4xl mx-auto px-5 py-10">
      <h1 className="text-2xl font-bold mb-1">Your dashboard</h1>
      <p className="text-[rgb(var(--text-muted))] mb-8">Welcome back, {user.name}.</p>

      <div className="grid grid-cols-3 gap-4 mb-10">
        <div className="card p-5 text-center">
          <p className="text-3xl font-extrabold text-brand-600 dark:text-brand-300">{stats.viewed || 0}</p>
          <p className="text-sm text-[rgb(var(--text-muted))]">Cases viewed</p>
        </div>
        <div className="card p-5 text-center">
          <p className="text-3xl font-extrabold text-brand-600 dark:text-brand-300">{stats.completed || 0}</p>
          <p className="text-sm text-[rgb(var(--text-muted))]">of {totalCases} completed</p>
        </div>
        <div className="card p-5 text-center">
          <p className="text-3xl font-extrabold text-brand-600 dark:text-brand-300">
            {stats.avg_score ? Math.round(stats.avg_score) : "—"}{stats.avg_score ? "%" : ""}
          </p>
          <p className="text-sm text-[rgb(var(--text-muted))]">Avg. quiz score</p>
        </div>
      </div>

      <h2 className="font-bold text-lg mb-3">Recent activity</h2>
      <div className="card divide-y divide-[rgb(var(--border))]">
        {recent.length === 0 && (
          <p className="p-5 text-sm text-[rgb(var(--text-muted))]">No activity yet — go browse some cases.</p>
        )}
        {recent.map((r) => (
          <Link key={r.id} href={`/cases/${r.id}`} className="flex items-center justify-between p-4 hover:bg-black/5 dark:hover:bg-white/5 transition">
            <div>
              <p className="font-medium">{r.title}</p>
              <p className="text-sm text-[rgb(var(--text-muted))]">{r.category}</p>
            </div>
            {r.completed_at ? (
              <span className="badge bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                {r.quiz_score != null ? `${r.quiz_score}%` : "Done"}
              </span>
            ) : (
              <span className="badge bg-amber-500/10 text-amber-600 dark:text-amber-400">In progress</span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
