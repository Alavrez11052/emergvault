import { getSession } from "@/lib/auth";
import getDb from "@/lib/db";

export default async function StaffOverview() {
  const user = await getSession();
  const db = getDb();
  const casesRow = await db.get("SELECT COUNT(*) c FROM cases");
  const publishedRow = await db.get("SELECT COUNT(*) c FROM cases WHERE published = 1");
  const commentsRow = await db.get("SELECT COUNT(*) c FROM comments WHERE hidden = 0");
  const usersRow = await db.get("SELECT COUNT(*) c FROM users");
  const stats = {
    cases: casesRow.c,
    published: publishedRow.c,
    comments: commentsRow.c,
    users: usersRow.c,
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">Welcome, {user.name.split(" ")[0]}</h1>
      <p className="text-[rgb(var(--text-muted))] mb-8">Role: {user.role.replace("_", " ")}</p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="card p-5 text-center">
          <p className="text-2xl font-extrabold text-brand-600 dark:text-brand-300">{stats.cases}</p>
          <p className="text-sm text-[rgb(var(--text-muted))]">Total cases</p>
        </div>
        <div className="card p-5 text-center">
          <p className="text-2xl font-extrabold text-brand-600 dark:text-brand-300">{stats.published}</p>
          <p className="text-sm text-[rgb(var(--text-muted))]">Published</p>
        </div>
        <div className="card p-5 text-center">
          <p className="text-2xl font-extrabold text-brand-600 dark:text-brand-300">{stats.comments}</p>
          <p className="text-sm text-[rgb(var(--text-muted))]">Visible comments</p>
        </div>
        <div className="card p-5 text-center">
          <p className="text-2xl font-extrabold text-brand-600 dark:text-brand-300">{stats.users}</p>
          <p className="text-sm text-[rgb(var(--text-muted))]">Registered users</p>
        </div>
      </div>
    </div>
  );
}
