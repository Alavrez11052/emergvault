"use client";

import { useState } from "react";

export default function QuizBlock({ caseId, questions, loggedIn }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [saving, setSaving] = useState(false);

  if (!questions || questions.length === 0) return null;

  function select(qId, idx) {
    if (submitted) return;
    setAnswers({ ...answers, [qId]: idx });
  }

  async function submit() {
    setSubmitted(true);
    if (!loggedIn) return;
    const correct = questions.filter((q) => answers[q.id] === q.correct_index).length;
    const score = Math.round((correct / questions.length) * 100);
    setSaving(true);
    await fetch(`/api/cases/${caseId}/progress`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quizScore: score, completed: true }),
    });
    setSaving(false);
  }

  const correctCount = questions.filter((q) => answers[q.id] === q.correct_index).length;

  return (
    <div className="card p-6 mt-6">
      <h2 className="font-bold text-lg mb-4">Check your understanding</h2>
      <div className="space-y-6">
        {questions.map((q, qi) => {
          const options = JSON.parse(q.options);
          return (
            <div key={q.id}>
              <p className="font-medium mb-2">{qi + 1}. {q.question}</p>
              <div className="grid gap-2">
                {options.map((opt, idx) => {
                  const isSelected = answers[q.id] === idx;
                  const isCorrect = submitted && idx === q.correct_index;
                  const isWrongSelected = submitted && isSelected && idx !== q.correct_index;
                  return (
                    <button
                      type="button"
                      key={idx}
                      onClick={() => select(q.id, idx)}
                      className={`text-left px-4 py-2.5 rounded-xl border transition-all
                        ${isSelected && !submitted ? "border-brand-500 bg-brand-500/10" : "border-[rgb(var(--border))]"}
                        ${isCorrect ? "border-emerald-500 bg-emerald-500/10" : ""}
                        ${isWrongSelected ? "border-red-500 bg-red-500/10" : ""}
                        hover:border-brand-400`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
              {submitted && q.explanation && (
                <p className="text-sm text-[rgb(var(--text-muted))] mt-2">{q.explanation}</p>
              )}
            </div>
          );
        })}
      </div>

      {!submitted ? (
        <button className="btn btn-primary mt-5" onClick={submit}>Submit answers</button>
      ) : (
        <div className="mt-5 flex items-center gap-3">
          <span className="badge bg-brand-500/10 text-brand-600 dark:text-brand-300">
            {correctCount} / {questions.length} correct
          </span>
          {!loggedIn && (
            <span className="text-sm text-[rgb(var(--text-muted))]">Log in to save your progress.</span>
          )}
          {saving && <span className="text-sm text-[rgb(var(--text-muted))]">Saving...</span>}
        </div>
      )}
    </div>
  );
}
