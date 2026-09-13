"use client";

import { useEffect, useState } from "react";

export default function StaffCommentsPage() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    const res = await fetch("/api/staff/comments");
    const data = await res.json();
    setComments(data.comments || []);
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  async function toggleHide(c) {
    await fetch(`/api/staff/comments/${c.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ hidden: c.hidden ? 0 : 1 }),
    });
    load();
  }

  async function remove(id) {
    if (!confirm("Permanently delete this comment?")) return;
    await fetch(`/api/staff/comments/${id}`, { method: "DELETE" });
    load();
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Comment moderation</h1>
      {loading ? (
        <p className="text-[rgb(var(--text-muted))]">Loading...</p>
      ) : (
        <div className="card divide-y divide-[rgb(var(--border))]">
          {comments.length === 0 && <p className="p-5 text-sm text-[rgb(var(--text-muted))]">No comments yet.</p>}
          {comments.map((c) => (
            <div key={c.id} className="p-4">
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm">
                  <span className="font-semibold">{c.author}</span>
                  <span className="text-[rgb(var(--text-muted))]"> on </span>
                  <span className="font-medium">{c.case_title}</span>
                </p>
                {c.hidden ? (
                  <span className="badge bg-red-500/10 text-red-500">Hidden</span>
                ) : (
                  <span className="badge bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">Visible</span>
                )}
              </div>
              <p className="text-sm text-[rgb(var(--text-muted))] mb-2">{c.body}</p>
              <div className="flex gap-2">
                <button className="btn btn-ghost !py-1.5 !text-xs" onClick={() => toggleHide(c)}>
                  {c.hidden ? "Unhide" : "Hide"}
                </button>
                <button className="btn btn-danger !py-1.5 !text-xs" onClick={() => remove(c.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
