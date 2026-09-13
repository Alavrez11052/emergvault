const { Pool } = require("pg");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  console.error("DATABASE_URL is not set. Add it to your .env file first.");
  process.exit(1);
}

const pool = new Pool({
  connectionString,
  ssl: connectionString.includes("localhost") ? false : { rejectUnauthorized: false },
});

async function main() {
  // ---- Founder account (site owner) ----
  const founderEmail = "braydenkennedy061@gmail.com";
  const existingFounder = await pool.query("SELECT id FROM users WHERE email = $1", [founderEmail]);
  if (existingFounder.rows.length === 0) {
    const founderPassword = crypto.randomBytes(18).toString("base64").replace(/[/+=]/g, "").slice(0, 20) + "!9";
    const hash = bcrypt.hashSync(founderPassword, 10);
    await pool.query(
      "INSERT INTO users (name, email, password_hash, role) VALUES ($1, $2, $3, 'FOUNDER')",
      ["Brayden Kennedy", founderEmail, hash]
    );
    console.log("=".repeat(64));
    console.log(`Created FOUNDER account -> email: ${founderEmail}`);
    console.log(`Generated password: ${founderPassword}`);
    console.log("Log in once with this password and change it immediately.");
    console.log("=".repeat(64));
  } else {
    console.log("Founder account already exists, skipping.");
  }

  // ---- Admin + demo staff accounts ----
  const adminEmail = "admin@emhub.local";
  let adminId;
  const existingAdmin = await pool.query("SELECT id FROM users WHERE email = $1", [adminEmail]);
  if (existingAdmin.rows.length === 0) {
    const hash = bcrypt.hashSync("Admin123!", 10);
    const res = await pool.query(
      "INSERT INTO users (name, email, password_hash, role) VALUES ($1, $2, $3, 'ADMIN') RETURNING id",
      ["Site Admin", adminEmail, hash]
    );
    adminId = res.rows[0].id;
    console.log(`Created admin account -> email: ${adminEmail}  password: Admin123!`);
  } else {
    adminId = existingAdmin.rows[0].id;
    console.log("Admin account already exists, skipping.");
  }

  const demoStaffEmail = "senior@emhub.local";
  const existingStaff = await pool.query("SELECT id FROM users WHERE email = $1", [demoStaffEmail]);
  if (existingStaff.rows.length === 0) {
    const hash = bcrypt.hashSync("Staff123!", 10);
    await pool.query(
      "INSERT INTO users (name, email, password_hash, role) VALUES ($1, $2, $3, 'SENIOR_STAFF')",
      ["Dr. Sarah Chen", demoStaffEmail, hash]
    );
    console.log(`Created senior staff account -> email: ${demoStaffEmail}  password: Staff123!`);
  }

  // ---- Cases ----
  const { CASES } = require("./cases-data");
  const existingCases = await pool.query("SELECT COUNT(*) c FROM cases");
  if (Number(existingCases.rows[0].c) > 0) {
    console.log(`Cases table already has ${existingCases.rows[0].c} rows, skipping case seed.`);
  } else {
    for (const c of CASES) {
      const res = await pool.query(
        `INSERT INTO cases
          (title, category, difficulty, chief_complaint, history, vitals, exam, workup, differential, management, teaching_points, image_url, published, created_by)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, 1, $13)
         RETURNING id`,
        [
          c.title,
          c.category,
          c.difficulty || "Intermediate",
          c.chief_complaint,
          c.history,
          c.vitals,
          c.exam || null,
          c.workup,
          c.differential,
          c.management,
          c.teaching_points,
          c.image_url || null,
          adminId,
        ]
      );
      const caseId = res.rows[0].id;
      if (Array.isArray(c.quiz)) {
        for (const q of c.quiz) {
          await pool.query(
            "INSERT INTO quiz_questions (case_id, question, options, correct_index, explanation) VALUES ($1, $2, $3, $4, $5)",
            [caseId, q.question, JSON.stringify(q.options), q.correct_index, q.explanation || null]
          );
        }
      }
    }
    console.log(`Seeded ${CASES.length} cases.`);
  }

  // ---- Starter announcements ----
  const existingAnnouncements = await pool.query("SELECT COUNT(*) c FROM announcements");
  if (Number(existingAnnouncements.rows[0].c) === 0) {
    await pool.query(
      "INSERT INTO announcements (title, body, audience, created_by) VALUES ($1, $2, $3, $4)",
      [
        "Welcome to EM Hub",
        "We're excited to launch the case library! Browse cases by category, take the quizzes, and track your progress on your dashboard. New cases are added regularly.",
        "PUBLIC",
        adminId,
      ]
    );
    await pool.query(
      "INSERT INTO announcements (title, body, audience, created_by) VALUES ($1, $2, $3, $4)",
      [
        "Staff style guide reminder",
        "When writing new cases, keep each section (HPI, vitals, workup, etc.) concise and structured. Always include at least one teaching point that a student could not have guessed without reading the case.",
        "STAFF",
        adminId,
      ]
    );
    console.log("Seeded starter announcements.");
  }

  console.log("Seed complete.");
  await pool.end();
}

main().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
