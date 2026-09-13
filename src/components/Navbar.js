"use client";

import Link from "next/link";
import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar({ user }) {
  const [open, setOpen] = useState(false);
  const isStaff = user && ["STAFF", "SENIOR_STAFF", "ADMIN", "FOUNDER"].includes(user.role);
  const isAdmin = user && ["ADMIN", "FOUNDER"].includes(user.role);

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/";
  }

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white/70 dark:bg-[#0a0e16]/70 border-b border-[rgb(var(--border))]">
      <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <span className="w-9 h-9 rounded-2xl bg-gradient-to-br from-brand-500 to-accent-600 flex items-center justify-center text-white shadow-soft">
            +
          </span>
          <span>EM Hub</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
          <Link href="/cases" className="px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition">Cases</Link>
          <Link href="/announcements" className="px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition">News</Link>
          {user && (
            <Link href="/dashboard" className="px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition">Dashboard</Link>
          )}
          {isStaff && (
            <Link href="/staff" className="px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition">Staff</Link>
          )}
          {isAdmin && (
            <Link href="/admin" className="px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition">Admin</Link>
          )}
        </nav>

        <div className="flex items-center gap-2">
          <DarkModeToggle />
          {user ? (
            <>
              <span className="hidden sm:inline text-sm text-[rgb(var(--text-muted))] mr-1">
                Hi, {user.name.split(" ")[0]}
              </span>
              <button onClick={logout} className="btn btn-ghost">Log out</button>
            </>
          ) : (
            <>
              <Link href="/login" className="btn btn-ghost">Log in</Link>
              <Link href="/register" className="btn btn-primary">Sign up</Link>
            </>
          )}
          <button className="md:hidden btn-ghost !p-2 rounded-full" onClick={() => setOpen(!open)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden px-5 pb-3 flex flex-col gap-1 text-sm font-medium fade-in">
          <Link href="/cases" onClick={() => setOpen(false)} className="px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5">Cases</Link>
          <Link href="/announcements" onClick={() => setOpen(false)} className="px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5">News</Link>
          {user && <Link href="/dashboard" onClick={() => setOpen(false)} className="px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5">Dashboard</Link>}
          {isStaff && <Link href="/staff" onClick={() => setOpen(false)} className="px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5">Staff</Link>}
          {isAdmin && <Link href="/admin" onClick={() => setOpen(false)} className="px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5">Admin</Link>}
        </div>
      )}
    </header>
  );
}
