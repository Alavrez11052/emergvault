"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setLoading(false);
    if (!res.ok) {
      setError(data.error || "Something went wrong.");
      return;
    }
    router.push("/dashboard");
    router.refresh();
  }

  return (
    <div className="max-w-md mx-auto px-5 py-16">
      <div className="card p-8 fade-in">
        <h1 className="text-2xl font-bold mb-1">Create your account</h1>
        <p className="text-sm text-[rgb(var(--text-muted))] mb-6">Free — start learning EM cases today.</p>
        {error && (
          <div className="mb-4 text-sm px-4 py-3 rounded-xl bg-red-500/10 text-red-500">{error}</div>
        )}
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium block mb-1">Full name</label>
            <input
              className="input"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div>
            <label className="text-sm font-medium block mb-1">Email</label>
            <input
              className="input"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div>
            <label className="text-sm font-medium block mb-1">Password</label>
            <input
              className="input"
              type="password"
              required
              minLength={6}
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>
          <button className="btn btn-primary w-full py-3" disabled={loading}>
            {loading ? "Creating account..." : "Sign up"}
          </button>
        </form>
        <p className="text-sm text-[rgb(var(--text-muted))] mt-5">
          Already have an account? <Link href="/login" className="text-brand-600 dark:text-brand-300 font-medium">Log in</Link>
        </p>
      </div>
    </div>
  );
}
