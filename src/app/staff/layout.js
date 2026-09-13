import { getSession, isStaff } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function StaffLayout({ children }) {
  const user = await getSession();
  if (!user) redirect("/login");
  if (!isStaff(user)) redirect("/");

  return (
    <div className="max-w-6xl mx-auto px-5 py-10 grid md:grid-cols-[200px_1fr] gap-8">
      <aside className="space-y-1">
        <p className="text-xs font-semibold uppercase text-[rgb(var(--text-muted))] mb-2 px-2">Staff panel</p>
        <Link href="/staff" className="block px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 text-sm font-medium">Overview</Link>
        <Link href="/staff/cases" className="block px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 text-sm font-medium">Case editor</Link>
        <Link href="/staff/comments" className="block px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 text-sm font-medium">Comments</Link>
        <Link href="/staff/announcements" className="block px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 text-sm font-medium">Announcements</Link>
        <Link href="/staff/analytics" className="block px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 text-sm font-medium">Analytics</Link>
        {["ADMIN", "FOUNDER"].includes(user.role) && (
          <>
            <p className="text-xs font-semibold uppercase text-[rgb(var(--text-muted))] mt-4 mb-2 px-2">Admin</p>
            <Link href="/admin" className="block px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 text-sm font-medium">Admin panel &rarr;</Link>
          </>
        )}
      </aside>
      <div>{children}</div>
    </div>
  );
}
