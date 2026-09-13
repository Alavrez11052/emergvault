import Link from "next/link";

const DIFF_COLORS = {
  Beginner: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  Intermediate: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  Advanced: "bg-red-500/10 text-red-500",
};

export default function CaseCard({ c }) {
  return (
    <Link href={`/cases/${c.id}`} className="card card-hover p-5 flex flex-col gap-3 fade-in">
      <div className="flex items-center justify-between gap-2">
        <span className="badge bg-brand-500/10 text-brand-600 dark:text-brand-300">{c.category}</span>
        <span className={`badge ${DIFF_COLORS[c.difficulty] || DIFF_COLORS.Intermediate}`}>{c.difficulty}</span>
      </div>
      <h3 className="font-semibold leading-snug">{c.title}</h3>
      <p className="text-sm text-[rgb(var(--text-muted))] line-clamp-2">{c.chief_complaint}</p>
    </Link>
  );
}
