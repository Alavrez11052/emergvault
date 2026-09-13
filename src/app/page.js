import Link from "next/link";
import getDb from "@/lib/db";

export default async function Home() {
  const db = getDb();
  const caseCountRow = await db.get("SELECT COUNT(*) as c FROM cases WHERE published = 1");
  const caseCount = caseCountRow.c;
  const categories = await db.all(
    "SELECT category, COUNT(*) as c FROM cases WHERE published = 1 GROUP BY category ORDER BY c DESC"
  );

  return (
    <div>
      <section className="max-w-6xl mx-auto px-5 pt-16 pb-20 text-center">
        <span className="badge bg-brand-500/10 text-brand-600 dark:text-brand-300 mb-5">
          Built for rotating student doctors
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5">
          Learn Emergency Medicine<br className="hidden sm:block" /> one case at a time.
        </h1>
        <p className="max-w-2xl mx-auto text-[rgb(var(--text-muted))] text-lg mb-8">
          {caseCount}+ realistic ED cases covering triage, workup, differential
          diagnosis, and management — written the way you'll actually see it on shift.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link href="/cases" className="btn btn-primary text-base px-6 py-3">Browse cases</Link>
          <Link href="/register" className="btn btn-ghost text-base px-6 py-3">Create free account</Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 pb-24">
        <h2 className="text-xl font-bold mb-5">Browse by category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.category}
              href={`/cases?category=${encodeURIComponent(cat.category)}`}
              className="card card-hover p-5 fade-in"
            >
              <p className="font-semibold">{cat.category}</p>
              <p className="text-sm text-[rgb(var(--text-muted))]">{cat.c} cases</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 pb-24 grid sm:grid-cols-3 gap-5">
        {[
          { title: "Realistic vignettes", body: "Chief complaint, HPI, vitals and exam presented the way you'd get sign-out on shift." },
          { title: "Structured teaching", body: "Every case breaks down differential, workup, management, and the key teaching points." },
          { title: "Track your progress", body: "Quiz yourself, mark cases complete, and see your progress build over your rotation." },
        ].map((f) => (
          <div key={f.title} className="card p-6">
            <h3 className="font-semibold mb-2">{f.title}</h3>
            <p className="text-sm text-[rgb(var(--text-muted))]">{f.body}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
