import Link from 'next/link';
import { GithubIcon, TwitterIcon } from 'lucide-react';
import { Search } from '@/components/ui/search';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-800 bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/50">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
            4tune
          </span>
        </Link>
        
        <div className="flex items-center gap-6">
          <Search />
          <nav className="flex items-center gap-6">
            <Link href="/blog" className="text-sm font-medium text-neutral-400 hover:text-teal-400 transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-sm font-medium text-neutral-400 hover:text-teal-400 transition-colors">
              About
            </Link>
            <div className="flex items-center gap-4">
              <a
                href="https://twitter.com/4tune"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-teal-400 transition-colors"
              >
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/4tune"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-teal-400 transition-colors"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}