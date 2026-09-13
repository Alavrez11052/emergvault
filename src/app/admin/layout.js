import { getSession, isAdmin } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function AdminLayout({ children }) {
  const user = await getSession();
  if (!user) redirect("/login");
  if (!isAdmin(user)) redirect("/");

  return (
    <div className="max-w-6xl mx-auto px-5 py-10 grid md:grid-cols-[200px_1fr] gap-8">
      <aside className="space-y-1">
        <p className="text-xs font-semibold uppercase text-[rgb(var(--text-muted))] mb-2 px-2">Admin panel</p>
        <Link href="/admin" className="block px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 text-sm font-medium">Users &amp; roles</Link>
        <Link href="/admin/audit-log" className="block px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 text-sm font-medium">Audit log</Link>
        <p className="text-xs font-semibold uppercase text-[rgb(var(--text-muted))] mt-4 mb-2 px-2">Staff tools</p>
        <Link href="/staff" className="block px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 text-sm font-medium">Staff panel &rarr;</Link>
      </aside>
      <div>{children}</div>
    </div>
  );
}
