"use client";

import { useEffect, useState } from "react";

export default function AuditLogPage() {
  const [log, setLog] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/audit-log").then((r) => r.json()).then((d) => {
      setLog(d.log || []);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Audit log</h1>
      {loading ? (
        <p className="text-[rgb(var(--text-muted))]">Loading...</p>
      ) : (
        <div className="card divide-y divide-[rgb(var(--border))]">
          {log.map((l) => (
            <div key={l.id} className="p-4 text-sm">
              <div className="flex items-center justify-between">
                <p>
                  <span className="font-semibold">{l.actor_name || "System"}</span>{" "}
                  <span className="text-[rgb(var(--text-muted))]">{l.action.replaceAll("_", " ").toLowerCase()}</span>
                  {l.target_type && <span className="text-[rgb(var(--text-muted))]"> &middot; {l.target_type} #{l.target_id}</span>}
                </p>
                <span className="text-xs text-[rgb(var(--text-muted))]">{new Date(l.created_at).toLocaleString()}</span>
              </div>
              {l.details && (
                <p className="text-xs text-[rgb(var(--text-muted))] mt-1">{l.details}</p>
              )}
            </div>
          ))}
          {log.length === 0 && <p className="p-5 text-sm text-[rgb(var(--text-muted))]">No activity recorded yet.</p>}
        </div>
      )}
    </div>
  );
}
