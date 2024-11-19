export function Footer() {
  return (
    <footer className="border-t border-neutral-800 py-6 md:py-0 bg-black/50">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-sm leading-loose text-center md:text-left text-neutral-400">
          © {new Date().getFullYear()} 4tune. All rights reserved.
        </p>
        <div className="flex gap-4 text-sm text-neutral-500">
          <a href="/privacy" className="hover:text-teal-400 transition-colors">Privacy</a>
          <a href="/terms" className="hover:text-teal-400 transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}