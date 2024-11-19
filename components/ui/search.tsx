"use client";

import { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';

export function Search() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 text-sm text-neutral-400 hover:text-teal-400 transition-colors"
      >
        <SearchIcon className="h-4 w-4" />
        <span className="hidden sm:inline">Search</span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-screen max-w-sm p-4 bg-black/90 backdrop-blur-sm border border-neutral-800 rounded-lg shadow-xl">
          <input
            type="search"
            placeholder="Search posts..."
            className="w-full px-3 py-2 bg-neutral-900 border border-neutral-800 rounded-md text-neutral-200 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
      )}
    </div>
  );
}