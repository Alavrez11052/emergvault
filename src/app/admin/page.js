"use client";

import { useEffect, useState } from "react";

const ROLES = ["USER", "STAFF", "SENIOR_STAFF", "ADMIN", "FOUNDER"];

export default function AdminUsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState("");
  const [meId, setMeId] = useState(null);
  const [meRole, setMeRole] = useState(null);

  async function load() {
    setLoading(true);
    const res = await fetch("/api/admin/users");
    const data = await res.json();
    setUsers(data.users || []);
    setLoading(false);
  }

  useEffect(() => {
    load();
    fetch("/api/auth/me").then((r) => r.json()).then((d) => {
      setMeId(d.user?.id);
      setMeRole(d.user?.role);
    });
  }, []);

  async function setRole(id, role) {
    await fetch(`/api/admin/users/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ role }),
    });
    load();
  }

  async function setStatus(id, status) {
    await fetch(`/api/admin/users/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    load();
  }

  async function remove(id) {
    if (!confirm("Permanently delete this user account?")) return;
    await fetch(`/api/admin/users/${id}`, { method: "DELETE" });
    load();
  }

  const filtered = users.filter(
    (u) => u.name.toLowerCase().includes(q.toLowerCase()) || u.email.toLowerCase().includes(q.toLowerCase())
  );
  const assignableRoles = meRole === "FOUNDER" ? ROLES : ROLES.filter((r) => r !== "FOUNDER");

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Users &amp; roles</h1>
        <input className="input max-w-xs" placeholder="Search users..." value={q} onChange={(e) => setQ(e.target.value)} />
      </div>

      {loading ? (
        <p className="text-[rgb(var(--text-muted))]">Loading...</p>
      ) : (
        <div className="card divide-y divide-[rgb(var(--border))]">
          {filtered.map((u) => {
            const locked = u.id === meId || (u.role === "FOUNDER" && meRole !== "FOUNDER");
            return (
            <div key={u.id} className="flex flex-wrap items-center justify-between gap-3 p-4">
              <div>
                <p className="font-medium flex items-center gap-2">
                  {u.name}
                  {u.role === "FOUNDER" && <span className="badge bg-brand-500/10 text-brand-600 dark:text-brand-300">Founder</span>}
                  {u.status === "SUSPENDED" && <span className="badge bg-red-500/10 text-red-500">Suspended</span>}
                </p>
                <p className="text-sm text-[rgb(var(--text-muted))]">{u.email}</p>
              </div>
              <div className="flex items-center gap-2">
                <select
                  className="input !py-1.5 !w-auto"
                  value={u.role}
                  disabled={locked}
                  onChange={(e) => setRole(u.id, e.target.value)}
                >
                  {(assignableRoles.includes(u.role) ? assignableRoles : [...assignableRoles, u.role]).map((r) => (
                    <option key={r} value={r}>{r.replace("_", " ")}</option>
                  ))}
                </select>
                <button
                  className="btn btn-ghost !py-1.5 !text-xs"
                  disabled={locked}
                  onClick={() => setStatus(u.id, u.status === "SUSPENDED" ? "ACTIVE" : "SUSPENDED")}
                >
                  {u.status === "SUSPENDED" ? "Reinstate" : "Suspend"}
                </button>
                <button className="btn btn-danger !py-1.5 !text-xs" disabled={locked} onClick={() => remove(u.id)}>Delete</button>
              </div>
            </div>
            );
          })}
          {filtered.length === 0 && <p className="p-5 text-sm text-[rgb(var(--text-muted))]">No users found.</p>}
        </div>
      )}
    </div>
  );
}
