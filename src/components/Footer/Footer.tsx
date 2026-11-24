export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} Amanpreet Singh</p>
        <p className="font-mono text-xs">Built with Next.js, Tailwind CSS & Motion</p>
      </div>
    </footer>
  );
}
