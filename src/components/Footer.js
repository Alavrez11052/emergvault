export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[rgb(var(--border))] py-8">
      <div className="max-w-6xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[rgb(var(--text-muted))]">
        <p>&copy; {new Date().getFullYear()} EM Hub. For educational use by students and clinicians.</p>
        <p>Not a substitute for clinical judgment or institutional protocols.</p>
      </div>
    </footer>
  );
}
