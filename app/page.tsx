export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 text-center">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
        4tune
      </h1>
      <p className="text-xl max-w-2xl text-neutral-300">
        Exploring technology, development, and innovation through thoughtful insights and perspectives.
      </p>
      <div className="flex gap-4">
        <a
          href="/blog"
          className="px-6 py-3 rounded-lg bg-teal-500 text-white hover:bg-teal-600 transition-colors"
        >
          Read Posts
        </a>
        <a
          href="/about"
          className="px-6 py-3 rounded-lg border border-teal-500 text-teal-500 hover:bg-teal-500/10 transition-colors"
        >
          About
        </a>
      </div>
    </div>
  );
}