import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import getDb from "./db";

const SECRET = process.env.JWT_SECRET || "dev-secret-change-me-in-production";
const COOKIE_NAME = "emh_session";

export const ROLES = ["USER", "CONTRIBUTOR", "SENIOR_STAFF", "ADMIN"];
export const STAFF_ROLES = ["CONTRIBUTOR", "SENIOR_STAFF", "ADMIN"];

export function hashPassword(password) {
  return bcrypt.hashSync(password, 10);
}

export function verifyPassword(password, hash) {
  return bcrypt.compareSync(password, hash);
}

export function signToken(user) {
  return jwt.sign(
    { id: user.id, email: user.email, role: user.role, name: user.name },
    SECRET,
    { expiresIn: "7d" }
  );
}

export function setSessionCookie(token) {
  cookies().set(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export function clearSessionCookie() {
  cookies().set(COOKIE_NAME, "", { path: "/", maxAge: 0 });
}

// Now async because it hits Postgres instead of a synchronous SQLite file.
// Every caller must `await getSession()`.
export async function getSession() {
  const token = cookies().get(COOKIE_NAME)?.value;
  if (!token) return null;
  try {
    const payload = jwt.verify(token, SECRET);
    const db = getDb();
    const user = await db.get(
      "SELECT id, name, email, role, status, created_at FROM users WHERE id = ?",
      [payload.id]
    );
    if (!user || user.status === "SUSPENDED") return null;
    return user;
  } catch (e) {
    return null;
  }
}

export function isStaff(user) {
  return !!user && STAFF_ROLES.includes(user.role);
}

export function isAdmin(user) {
  return !!user && user.role === "ADMIN";
}

export function canEditCases(user) {
  return !!user && STAFF_ROLES.includes(user.role);
}

export function canModerate(user) {
  return !!user && ["SENIOR_STAFF", "ADMIN"].includes(user.role);
}

export function canManageUsers(user) {
  return !!user && user.role === "ADMIN";
}
