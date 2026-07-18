import React from 'react';
import { FlaskConical, Github, Rss, Shield, Compass } from 'lucide-react';

interface FooterProps {
  setCurrentTab: (tab: string) => void;
}

export default function Footer({ setCurrentTab }: FooterProps) {
  return (
    <footer className="border-t border-zinc-100 bg-zinc-50 py-12 text-left" id="footer-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-8 border-b border-zinc-200">
          
          {/* Brand Bio (6 cols) */}
          <div className="md:col-span-6 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-950 text-white shadow-sm">
                <FlaskConical className="h-4 w-4" />
              </div>
              <span className="font-display text-base font-extrabold tracking-tight text-zinc-900 uppercase">FLAVOUR MATRIX</span>
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed max-w-sm">
              An open-source scientific collective merging chemical thresholds with practical culinary applications. Join 10k+ cooks backing their sensory instincts with absolute lab precision.
            </p>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3">
            <span className="block font-mono text-[9px] font-bold text-zinc-400 uppercase tracking-widest mb-4">MAP PROTOCOLS</span>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <button onClick={() => setCurrentTab('home')} className="text-zinc-500 hover:text-zinc-900 transition-colors">
                  Flavor Lab Explorer
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('archive')} className="text-zinc-500 hover:text-zinc-900 transition-colors">
                  Molecular Archives
                </button>
              </li>
            </ul>
          </div>

          {/* Core Metrics (3 cols) */}
          <div className="md:col-span-3">
            <span className="block font-mono text-[9px] font-bold text-zinc-400 uppercase tracking-widest mb-4">COMMUNITY MATRIX</span>
            <ul className="space-y-2 text-xs font-mono text-zinc-500">
              <li className="flex justify-between">
                <span>Active Alchemists:</span>
                <strong className="text-zinc-800">10.2K</strong>
              </li>
              <li className="flex justify-between">
                <span>Volatility Records:</span>
                <strong className="text-zinc-800">820+</strong>
              </li>
              <li className="flex justify-between">
                <span>Network License:</span>
                <strong className="text-zinc-800">MIT / static</strong>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-zinc-400 uppercase">
          <div className="flex items-center gap-1.5">
            <Compass className="h-3.5 w-3.5" />
            <span>&copy; {new Date().getFullYear()} Flavour Matrix. Merging food and chemical science.</span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Shield className="h-3 w-3" /> local encryption client-side</span>
            <span className="text-zinc-200">|</span>
            <span className="flex items-center gap-1"><Github className="h-3 w-3" /> deployable static pages</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
