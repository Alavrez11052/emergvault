import getDb from "@/lib/db";
import CaseCard from "@/components/CaseCard";
import Link from "next/link";

export default async function CasesPage({ searchParams }) {
  const db = getDb();
  const category = searchParams.category || "";
  const difficulty = searchParams.difficulty || "";
  const q = searchParams.q || "";

  let query = "SELECT * FROM cases WHERE published = 1";
  const params = [];
  if (category) {
    query += " AND category = ?";
    params.push(category);
  }
  if (difficulty) {
    query += " AND difficulty = ?";
    params.push(difficulty);
  }
  if (q) {
    query += " AND (title ILIKE ? OR chief_complaint ILIKE ?)";
    params.push(`%${q}%`, `%${q}%`);
  }
  query += " ORDER BY created_at DESC";

  const cases = await db.all(query, params);
  const categoryRows = await db.all(
    "SELECT DISTINCT category FROM cases WHERE published = 1 ORDER BY category"
  );
  const categories = categoryRows.map((r) => r.category);

  return (
    <div className="max-w-6xl mx-auto px-5 py-10">
      <h1 className="text-2xl font-bold mb-1">Case library</h1>
      <p className="text-[rgb(var(--text-muted))] mb-6">{cases.length} cases matching your filters.</p>

      <form className="flex flex-wrap gap-3 mb-8" action="/cases">
        <input
          name="q"
          defaultValue={q}
          placeholder="Search cases..."
          className="input max-w-xs"
        />
        <select name="category" defaultValue={category} className="input max-w-[200px]">
          <option value="">All categories</option>
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <select name="difficulty" defaultValue={difficulty} className="input max-w-[180px]">
          <option value="">All difficulties</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
        <button className="btn btn-primary">Filter</button>
        {(category || difficulty || q) && (
          <Link href="/cases" className="btn btn-ghost">Clear</Link>
        )}
      </form>

      {cases.length === 0 ? (
        <p className="text-[rgb(var(--text-muted))]">No cases found. Try different filters.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cases.map((c) => (
            <CaseCard key={c.id} c={c} />
          ))}
        </div>
      )}
    </div>
  );
}
