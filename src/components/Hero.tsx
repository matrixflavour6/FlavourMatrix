import React, { useState } from 'react';
import { Sparkles, Mail, Check, ArrowRight, Star, GraduationCap, Flame, Compass } from 'lucide-react';
import { Subscriber } from '../types';

interface HeroProps {
  subscriber: Subscriber;
  onSubscribe: (email: string) => void;
  onNavigateToLab: () => void;
}

export default function Hero({ subscriber, onSubscribe, onNavigateToLab }: HeroProps) {
  const [emailInput, setEmailInput] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput && emailInput.includes('@')) {
      onSubscribe(emailInput);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setEmailInput('');
      }, 5000);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-zinc-50 via-white to-white py-16 sm:py-24 border-b border-zinc-100">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f4f4f5_1px,transparent_1px),linear-gradient(to_bottom,#f4f4f5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          {/* Text & Action Area */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Tagline */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-zinc-900/5 px-3.5 py-1.5 text-xs font-mono font-semibold tracking-wider text-zinc-900 uppercase">
              <Sparkles className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
              🌐 A Collective Intelligence for Flavor Innovation
            </div>

            {/* Heading */}
            <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl leading-[1.1]">
              Merging home cooking with <span className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-600 bg-clip-text text-transparent underline decoration-zinc-900/15 decoration-wavy">lab precision</span>.
            </h1>

            {/* Description */}
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-zinc-600 max-w-xl">
              Welcome to the <strong className="text-zinc-900 font-semibold">Flavour Matrix</strong>. 
              We are a community of culinary alchemists exploring the biochemical compounds, volatility, and molecular interactions that make food taste extraordinary. Learn the real science behind flavor.
            </p>

            {/* Call to Action Box (The Lead Magnet) */}
            <div className="mt-8 max-w-lg rounded-2xl border border-zinc-200 bg-white p-6 shadow-md shadow-zinc-100 ring-1 ring-zinc-950/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-to-bl from-zinc-50 to-transparent rounded-full -mr-6 -mt-6 -z-10" />
              
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-950 text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-zinc-900 font-display">Get the DM-Exclusive Guide</h3>
                  <p className="mt-1 text-xs text-zinc-500">
                    Join <span className="font-semibold text-zinc-900">10,248 curious cooks</span> hacking the culinary algorithm. Enter your email to instantly unlock <strong className="font-semibold text-zinc-800">The Matrix Protocols</strong> inside your Science Archive.
                  </p>
                </div>
              </div>

              {subscriber.isSubscribed ? (
                <div className="mt-5 flex items-center gap-3 rounded-xl bg-emerald-50/70 border border-emerald-100 p-3.5 text-emerald-800">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold font-mono tracking-tight">LAB COAT ACQUIRED!</span>
                    <p className="text-[11px] text-emerald-700 font-medium">You now have access to member files. Go to the <strong className="underline cursor-pointer" onClick={onNavigateToLab}>Science Archive</strong> to download the guides.</p>
                  </div>
                </div>
              ) : isSuccess ? (
                <div className="mt-5 flex items-center gap-3 rounded-xl bg-emerald-50 p-3 text-emerald-800">
                  <Check className="h-4 w-4" />
                  <span className="text-xs font-medium">Welcome to the Lab! Exclusive guides unlocked in your Science Archive.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-5 sm:flex sm:items-center gap-2">
                  <div className="relative flex-grow">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email..."
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="block w-full h-11 rounded-lg border border-zinc-200 bg-zinc-50 px-3.5 py-2 text-sm text-zinc-950 placeholder-zinc-400 focus:border-zinc-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-zinc-900/5 transition-all font-sans"
                      id="hero-email-input"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-3 sm:mt-0 inline-flex h-11 w-full sm:w-auto shrink-0 items-center justify-center gap-2 rounded-lg bg-zinc-950 px-5 text-xs font-mono font-bold uppercase tracking-wider text-white transition-colors hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2"
                    id="hero-submit-btn"
                  >
                    <span>JOIN MATRIX</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </form>
              )}

              <div className="mt-4 flex items-center gap-2 text-[10px] font-mono text-zinc-400 uppercase tracking-widest border-t border-zinc-100 pt-3">
                <span className="flex items-center gap-1"><Check className="h-3 w-3 text-zinc-500" /> Free Weekly Archive</span>
                <span className="text-zinc-300">•</span>
                <span className="flex items-center gap-1"><Check className="h-3 w-3 text-zinc-500" /> Laboratory Calculators</span>
              </div>
            </div>
          </div>

          {/* Graphical Dashboard Teaser / Interactive Matrix Visual */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="w-full max-w-[420px] rounded-2xl border border-zinc-200 bg-white p-5 shadow-xl shadow-zinc-100 ring-1 ring-zinc-900/5">
              {/* Box Header */}
              <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <span className="ml-1.5 font-mono text-[10px] text-zinc-400">FLAVOR_MATRIX_V1.0</span>
                </div>
                <div className="rounded-full bg-zinc-50 px-2 py-0.5 font-mono text-[9px] text-zinc-500 border border-zinc-100">
                  SECURE PORTAL
                </div>
              </div>

              {/* Box Metrics Grid */}
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="rounded-lg bg-zinc-50 p-3 border border-zinc-100 text-left">
                  <span className="block font-mono text-[10px] text-zinc-400 uppercase">Members</span>
                  <span className="font-display text-lg font-bold tracking-tight text-zinc-900">10,248</span>
                </div>
                <div className="rounded-lg bg-zinc-50 p-3 border border-zinc-100 text-left">
                  <span className="block font-mono text-[10px] text-zinc-400 uppercase">Chemicals</span>
                  <span className="font-display text-lg font-bold tracking-tight text-zinc-900">820+</span>
                </div>
                <div className="rounded-lg bg-zinc-50 p-3 border border-zinc-100 text-left">
                  <span className="block font-mono text-[10px] text-zinc-400 uppercase">Protocols</span>
                  <span className="font-display text-lg font-bold tracking-tight text-zinc-900">42</span>
                </div>
              </div>

              {/* Graphic representation of organic molecules and pairing */}
              <div className="mt-4 rounded-xl border border-dashed border-zinc-200 p-4 bg-zinc-50/50">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-zinc-700">PAIRING COUPLING LAB</span>
                  <span className="font-mono text-[10px] text-zinc-500 text-emerald-600 font-bold bg-emerald-50 border border-emerald-100 px-1.5 py-0.2 rounded">98% Synergy</span>
                </div>

                {/* Molecule Coupling Visual */}
                <div className="mt-5 flex items-center justify-between relative px-2 py-3">
                  {/* Molecule 1 */}
                  <div className="flex flex-col items-center z-10">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-900 text-white shadow font-display text-xs font-bold ring-4 ring-white">
                      TOM
                    </div>
                    <span className="mt-1 font-mono text-[10px] font-bold text-zinc-700">Tomato</span>
                    <span className="font-mono text-[8px] text-zinc-400">Glutamic Acid</span>
                  </div>

                  {/* Bond Line */}
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center px-12">
                    <div className="w-full h-0.5 border-t border-dashed border-zinc-400 flex justify-between relative">
                      <span className="absolute -top-1.5 left-1/4 h-3 w-3 rounded-full bg-zinc-200 ring-2 ring-white" />
                      <span className="absolute -top-1.5 right-1/4 h-3 w-3 rounded-full bg-zinc-200 ring-2 ring-white" />
                    </div>
                  </div>

                  {/* Molecule 2 */}
                  <div className="flex flex-col items-center z-10">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-100 text-zinc-900 shadow font-display text-xs font-bold ring-4 ring-white border border-zinc-200">
                      ANC
                    </div>
                    <span className="mt-1 font-mono text-[10px] font-bold text-zinc-700">Anchovy</span>
                    <span className="font-mono text-[8px] text-zinc-400">Inosine IMP</span>
                  </div>
                </div>

                <div className="mt-4 rounded-lg bg-zinc-900 p-2.5 text-left">
                  <p className="font-mono text-[10px] text-zinc-300 leading-normal">
                    <span className="text-amber-400">CHEM_LOG:</span> Free Glutamic Acid + Inosine Monophosphate binds synergistically, magnifying taste bud receptors by 8x. Savoriness is exponentially stacked.
                  </p>
                </div>
              </div>

              {/* Bottom tag */}
              <div className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-zinc-500 font-mono">
                <Compass className="h-3.5 w-3.5 text-zinc-400 animate-spin" style={{ animationDuration: '6s' }} />
                <span>Explore chemical affinities below in real-time</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
