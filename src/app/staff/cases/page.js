"use client";

import { useEffect, useState } from "react";

const CATEGORIES = [
  "Cardiovascular", "Respiratory", "Trauma", "Neurology", "GI/Abdominal",
  "Toxicology", "Infectious Disease", "Endocrine", "OB/GYN", "Psychiatric",
  "Pediatrics", "Orthopedics", "Environmental", "Dermatology", "Renal/GU",
];

const EMPTY_CASE = {
  title: "", category: CATEGORIES[0], difficulty: "Intermediate",
  chief_complaint: "", history: "", vitals: "", exam: "", workup: "",
  differential: "", management: "", teaching_points: "", image_url: "",
  published: true, quiz: [],
};

export default function StaffCasesPage() {
  const [cases, setCases] = useState([]);
  const [form, setForm] = useState(EMPTY_CASE);
  const [editingId, setEditingId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("");

  async function load() {
    const res = await fetch("/api/staff/cases");
    const data = await res.json();
    setCases(data.cases || []);
  }

  useEffect(() => { load(); }, []);

  function startNew() {
    setForm(EMPTY_CASE);
    setEditingId(null);
    setError("");
  }

  async function startEdit(id) {
    const res = await fetch(`/api/staff/cases/${id}`);
    const data = await res.json();
    setForm({
      ...data.case,
      published: !!data.case.published,
      quiz: data.quiz.map((q) => ({ ...q, options: JSON.parse(q.options) })),
    });
    setEditingId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function remove(id) {
    if (!confirm("Delete this case permanently?")) return;
    await fetch(`/api/staff/cases/${id}`, { method: "DELETE" });
    load();
  }

  function addQuiz() {
    setForm({ ...form, quiz: [...form.quiz, { question: "", options: ["", ""], correct_index: 0, explanation: "" }] });
  }

  function updateQuiz(idx, patch) {
    const quiz = [...form.quiz];
    quiz[idx] = { ...quiz[idx], ...patch };
    setForm({ ...form, quiz });
  }

  function removeQuiz(idx) {
    setForm({ ...form, quiz: form.quiz.filter((_, i) => i !== idx) });
  }

  async function submit(e) {
    e.preventDefault();
    setSaving(true);
    setError("");
    const url = editingId ? `/api/staff/cases/${editingId}` : "/api/staff/cases";
    const method = editingId ? "PUT" : "POST";
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setSaving(false);
    if (!res.ok) {
      const data = await res.json();
      setError(data.error || "Failed to save case.");
      return;
    }
    startNew();
    load();
  }

  const filtered = cases.filter((c) => c.title.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Case editor</h1>

      <form onSubmit={submit} className="card p-6 mb-10 space-y-4">
        <h2 className="font-semibold text-lg">{editingId ? "Edit case" : "New case"}</h2>
        {error && <div className="text-sm px-4 py-3 rounded-xl bg-red-500/10 text-red-500">{error}</div>}

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium block mb-1">Title</label>
            <input className="input" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-medium block mb-1">Category</label>
              <select className="input" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
                {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">Difficulty</label>
              <select className="input" value={form.difficulty} onChange={(e) => setForm({ ...form, difficulty: e.target.value })}>
                <option>Beginner</option><option>Intermediate</option><option>Advanced</option>
              </select>
            </div>
          </div>
        </div>

        {[
          ["chief_complaint", "Chief Complaint"],
          ["history", "History of Present Illness"],
          ["vitals", "Vitals"],
          ["exam", "Physical Exam (optional)"],
          ["workup", "Workup"],
          ["differential", "Differential Diagnosis"],
          ["management", "Management"],
          ["teaching_points", "Teaching Points"],
        ].map(([field, label]) => (
          <div key={field}>
            <label className="text-sm font-medium block mb-1">{label}</label>
            <textarea
              className="input min-h-[80px]"
              value={form[field] || ""}
              onChange={(e) => setForm({ ...form, [field]: e.target.value })}
              required={field !== "exam"}
            />
          </div>
        ))}

        <div>
          <label className="text-sm font-medium block mb-1">Image URL (optional)</label>
          <input className="input" value={form.image_url || ""} onChange={(e) => setForm({ ...form, image_url: e.target.value })} />
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" id="pub" checked={form.published} onChange={(e) => setForm({ ...form, published: e.target.checked })} />
          <label htmlFor="pub" className="text-sm font-medium">Published (visible to students)</label>
        </div>

        <div className="border-t border-[rgb(var(--border))] pt-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold">Quiz questions</h3>
            <button type="button" className="btn btn-ghost !text-xs !py-1.5" onClick={addQuiz}>+ Add question</button>
          </div>
          <div className="space-y-4">
            {form.quiz.map((q, idx) => (
              <div key={idx} className="border border-[rgb(var(--border))] rounded-xl p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Question {idx + 1}</span>
                  <button type="button" className="text-xs text-red-500" onClick={() => removeQuiz(idx)}>Remove</button>
                </div>
                <input
                  className="input"
                  placeholder="Question text"
                  value={q.question}
                  onChange={(e) => updateQuiz(idx, { question: e.target.value })}
                />
                {q.options.map((opt, oi) => (
                  <div key={oi} className="flex items-center gap-2">
                    <input
                      type="radio"
                      checked={q.correct_index === oi}
                      onChange={() => updateQuiz(idx, { correct_index: oi })}
                    />
                    <input
                      className="input"
                      placeholder={`Option ${oi + 1}`}
                      value={opt}
                      onChange={(e) => {
                        const options = [...q.options];
                        options[oi] = e.target.value;
                        updateQuiz(idx, { options });
                      }}
                    />
                    {q.options.length > 2 && (
                      <button type="button" className="text-xs text-red-500" onClick={() => {
                        updateQuiz(idx, { options: q.options.filter((_, i) => i !== oi) });
                      }}>&times;</button>
                    )}
                  </div>
                ))}
                <button type="button" className="text-xs text-brand-600 dark:text-brand-300" onClick={() => updateQuiz(idx, { options: [...q.options, ""] })}>
                  + Add option
                </button>
                <input
                  className="input"
                  placeholder="Explanation shown after answering"
                  value={q.explanation || ""}
                  onChange={(e) => updateQuiz(idx, { explanation: e.target.value })}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <button className="btn btn-primary" disabled={saving}>{saving ? "Saving..." : editingId ? "Save changes" : "Create case"}</button>
          {editingId && <button type="button" className="btn btn-ghost" onClick={startNew}>Cancel edit</button>}
        </div>
      </form>

      <div className="flex items-center justify-between mb-3">
        <h2 className="font-semibold text-lg">All cases ({cases.length})</h2>
        <input className="input max-w-xs" placeholder="Filter by title..." value={filter} onChange={(e) => setFilter(e.target.value)} />
      </div>
      <div className="card divide-y divide-[rgb(var(--border))]">
        {filtered.map((c) => (
          <div key={c.id} className="flex items-center justify-between p-4">
            <div>
              <p className="font-medium">{c.title}</p>
              <p className="text-sm text-[rgb(var(--text-muted))]">{c.category} &middot; {c.difficulty} &middot; by {c.author || "—"}</p>
            </div>
            <div className="flex items-center gap-2">
              {!c.published && <span className="badge bg-amber-500/10 text-amber-600 dark:text-amber-400">Draft</span>}
              <button className="btn btn-ghost !py-1.5 !text-xs" onClick={() => startEdit(c.id)}>Edit</button>
              <button className="btn btn-danger !py-1.5 !text-xs" onClick={() => remove(c.id)}>Delete</button>
            </div>
          </div>
        ))}
        {filtered.length === 0 && <p className="p-5 text-sm text-[rgb(var(--text-muted))]">No cases found.</p>}
      </div>
    </div>
  );
}
