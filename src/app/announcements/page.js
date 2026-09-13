import getDb from "@/lib/db";
import { getSession, isStaff } from "@/lib/auth";

export default async function AnnouncementsPage() {
  const db = getDb();
  const user = await getSession();
  const staff = isStaff(user);

  const rows = staff
    ? await db.all(`SELECT announcements.*, users.name as author FROM announcements LEFT JOIN users ON users.id = announcements.created_by ORDER BY created_at DESC`)
    : await db.all(`SELECT announcements.*, users.name as author FROM announcements LEFT JOIN users ON users.id = announcements.created_by WHERE audience = 'PUBLIC' ORDER BY created_at DESC`);

  return (
    <div className="max-w-3xl mx-auto px-5 py-10">
      <h1 className="text-2xl font-bold mb-6">News &amp; announcements</h1>
      <div className="space-y-4">
        {rows.length === 0 && <p className="text-[rgb(var(--text-muted))]">No announcements yet.</p>}
        {rows.map((a) => (
          <div key={a.id} className="card p-5">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-semibold">{a.title}</h2>
              {a.audience === "STAFF" && (
                <span className="badge bg-brand-500/10 text-brand-600 dark:text-brand-300">Staff only</span>
              )}
            </div>
            <p className="text-sm whitespace-pre-line mb-2">{a.body}</p>
            <p className="text-xs text-[rgb(var(--text-muted))]">
              {a.author || "EM Hub"} &middot; {new Date(a.created_at).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
