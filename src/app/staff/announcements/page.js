"use client";

import { useEffect, useState } from "react";

export default function StaffAnnouncementsPage() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ title: "", body: "", audience: "STAFF" });
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  async function load() {
    const res = await fetch("/api/staff/announcements");
    const data = await res.json();
    setItems(data.announcements || []);
  }

  useEffect(() => { load(); }, []);

  async function submit(e) {
    e.preventDefault();
    setSaving(true);
    setError("");
    const res = await fetch("/api/staff/announcements", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setSaving(false);
    if (!res.ok) {
      const data = await res.json();
      setError(data.error || "Could not post.");
      return;
    }
    setForm({ title: "", body: "", audience: "STAFF" });
    load();
  }

  async function remove(id) {
    if (!confirm("Delete this announcement?")) return;
    await fetch(`/api/staff/announcements/${id}`, { method: "DELETE" });
    load();
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Announcements</h1>

      <form onSubmit={submit} className="card p-6 mb-8 space-y-3">
        {error && <div className="text-sm px-4 py-3 rounded-xl bg-red-500/10 text-red-500">{error}</div>}
        <input className="input" placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
        <textarea className="input min-h-[100px]" placeholder="Message" value={form.body} onChange={(e) => setForm({ ...form, body: e.target.value })} required />
        <select className="input max-w-[220px]" value={form.audience} onChange={(e) => setForm({ ...form, audience: e.target.value })}>
          <option value="STAFF">Staff only</option>
          <option value="PUBLIC">Public (all users) — senior staff/admin only</option>
        </select>
        <button className="btn btn-primary" disabled={saving}>{saving ? "Posting..." : "Post announcement"}</button>
      </form>

      <div className="space-y-3">
        {items.map((a) => (
          <div key={a.id} className="card p-5">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">{a.title}</h3>
              <div className="flex items-center gap-2">
                <span className={`badge ${a.audience === "PUBLIC" ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "bg-brand-500/10 text-brand-600 dark:text-brand-300"}`}>
                  {a.audience === "PUBLIC" ? "Public" : "Staff only"}
                </span>
                <button className="text-xs text-red-500" onClick={() => remove(a.id)}>Delete</button>
              </div>
            </div>
            <p className="text-sm whitespace-pre-line mb-2">{a.body}</p>
            <p className="text-xs text-[rgb(var(--text-muted))]">{a.author} &middot; {new Date(a.created_at).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
