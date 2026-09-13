"use client";

import { useEffect, useState } from "react";

export default function StaffAnalyticsPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/staff/analytics").then((r) => r.json()).then(setData);
  }, []);

  if (!data) return <p className="text-[rgb(var(--text-muted))]">Loading...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Analytics</h1>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {Object.entries(data.totals).map(([k, v]) => (
          <div key={k} className="card p-5 text-center">
            <p className="text-2xl font-extrabold text-brand-600 dark:text-brand-300">{v}</p>
            <p className="text-sm text-[rgb(var(--text-muted))] capitalize">{k}</p>
          </div>
        ))}
      </div>

      <h2 className="font-semibold text-lg mb-3">Most viewed cases</h2>
      <div className="card divide-y divide-[rgb(var(--border))] mb-10">
        {data.topCases.map((c) => (
          <div key={c.id} className="flex items-center justify-between p-4">
            <p className="font-medium">{c.title}</p>
            <div className="flex items-center gap-4 text-sm text-[rgb(var(--text-muted))]">
              <span>{c.views} views</span>
              <span>{c.completions || 0} completed</span>
              <span>{c.avg_score ? `${Math.round(c.avg_score)}% avg` : "—"}</span>
            </div>
          </div>
        ))}
      </div>

      <h2 className="font-semibold text-lg mb-3">Cases by category</h2>
      <div className="card divide-y divide-[rgb(var(--border))]">
        {data.categoryBreakdown.map((c) => (
          <div key={c.category} className="flex items-center justify-between p-4">
            <p>{c.category}</p>
            <span className="text-sm text-[rgb(var(--text-muted))]">{c.c} cases</span>
          </div>
        ))}
      </div>
    </div>
  );
}
