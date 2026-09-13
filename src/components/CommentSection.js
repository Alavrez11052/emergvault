"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CommentSection({ caseId, comments, loggedIn }) {
  const router = useRouter();
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function submit(e) {
    e.preventDefault();
    if (!body.trim()) return;
    setLoading(true);
    setError("");
    const res = await fetch(`/api/cases/${caseId}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ body }),
    });
    setLoading(false);
    if (!res.ok) {
      const data = await res.json();
      setError(data.error || "Could not post comment.");
      return;
    }
    setBody("");
    router.refresh();
  }

  return (
    <div className="card p-6 mt-6">
      <h2 className="font-bold text-lg mb-4">Discussion ({comments.length})</h2>

      {loggedIn ? (
        <form onSubmit={submit} className="mb-6">
          <textarea
            className="input min-h-[90px]"
            placeholder="Share your clinical reasoning or ask a question..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
          <button className="btn btn-primary mt-2" disabled={loading}>
            {loading ? "Posting..." : "Post comment"}
          </button>
        </form>
      ) : (
        <p className="text-sm text-[rgb(var(--text-muted))] mb-6">Log in to join the discussion.</p>
      )}

      <div className="space-y-4">
        {comments.length === 0 && (
          <p className="text-sm text-[rgb(var(--text-muted))]">No comments yet — be the first.</p>
        )}
        {comments.map((c) => (
          <div key={c.id} className="border-b border-[rgb(var(--border))] pb-4 last:border-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold text-sm">{c.name}</span>
              {["STAFF", "SENIOR_STAFF", "ADMIN", "FOUNDER"].includes(c.role) && (
                <span className="badge bg-brand-500/10 text-brand-600 dark:text-brand-300 !text-[10px] !py-0.5">STAFF</span>
              )}
              <span className="text-xs text-[rgb(var(--text-muted))]">
                {new Date(c.created_at).toLocaleDateString()}
              </span>
            </div>
            <p className="text-sm">{c.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
