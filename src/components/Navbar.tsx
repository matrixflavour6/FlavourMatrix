import React from 'react';
import { Beaker, BookOpen, FlaskConical } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

export default function Navbar({ currentTab, setCurrentTab }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <button
          onClick={() => setCurrentTab('home')}
          className="flex items-center gap-2.5 transition-opacity hover:opacity-90 text-left"
          id="nav-logo-btn"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 text-white shadow-sm ring-1 ring-zinc-950/10">
            <FlaskConical className="h-5 w-5 stroke-[1.8]" />
          </div>
          <div>
            <span className="font-display text-lg font-bold tracking-tight text-zinc-900">FLAVOUR MATRIX</span>
            <span className="block text-[10px] font-mono tracking-widest text-zinc-500 uppercase">Culinary Intelligence</span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          <button
            onClick={() => setCurrentTab('home')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              currentTab === 'home'
                ? 'bg-zinc-100 text-zinc-900'
                : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50'
            }`}
            id="nav-home-btn"
          >
            <Beaker className="h-4 w-4" />
            Flavor Lab
          </button>
          
          <button
            onClick={() => setCurrentTab('archive')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              currentTab === 'archive'
                ? 'bg-zinc-100 text-zinc-900'
                : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50'
            }`}
            id="nav-archive-btn"
          >
            <BookOpen className="h-4 w-4" />
            Science Archive
          </button>
        </nav>

        {/* Action Button: Indicates Open & Free Public Resource */}
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 items-center justify-center rounded-lg bg-zinc-50 border border-zinc-200 px-4 text-xs font-mono tracking-wider font-semibold text-zinc-600 shadow-sm">
            OPEN ACCESS PORTAL
          </span>
        </div>
      </div>

      {/* Mobile Navigation Bar */}
      <div className="md:hidden border-t border-zinc-100 bg-white flex justify-around py-2 px-1">
        <button
          onClick={() => setCurrentTab('home')}
          className={`flex flex-col items-center gap-1 py-1 px-3 rounded-lg text-xs font-medium transition-colors ${
            currentTab === 'home' ? 'text-zinc-900' : 'text-zinc-500'
          }`}
          id="mobile-nav-home"
        >
          <Beaker className="h-4 w-4" />
          <span>Lab</span>
        </button>

        <button
          onClick={() => setCurrentTab('archive')}
          className={`flex flex-col items-center gap-1 py-1 px-3 rounded-lg text-xs font-medium transition-colors ${
            currentTab === 'archive' ? 'text-zinc-900' : 'text-zinc-500'
          }`}
          id="mobile-nav-archive"
        >
          <BookOpen className="h-4 w-4" />
          <span>Archive</span>
        </button>
      </div>
    </header>
  );
}
