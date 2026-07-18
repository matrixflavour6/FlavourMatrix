import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FlavorLab from './components/FlavorLab';
import Archive from './components/Archive';
import Footer from './components/Footer';
import { Subscriber } from './types';
import { Sparkles, Mail, X, Check, FlaskConical, Trophy } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [isSubscribeModalOpen, setIsSubscribeModalOpen] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<string | null>(null);

  // Load state from localStorage
  const [subscriber, setSubscriber] = useState<Subscriber>(() => {
    const cached = localStorage.getItem('fm_subscriber');
    if (cached) {
      try {
        return JSON.parse(cached);
      } catch (e) {
        // Fallback
      }
    }
    return {
      email: '',
      joinedDate: '',
      isSubscribed: false,
      rank: 'Flavor Initiate',
      savedPairings: [],
      savedArticles: []
    };
  });

  // Keep localStorage in sync
  useEffect(() => {
    localStorage.setItem('fm_subscriber', JSON.stringify(subscriber));
  }, [subscriber]);

  // Handler for subscribing / logging in
  const handleSubscribe = (email: string) => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    setSubscriber(prev => ({
      ...prev,
      email,
      joinedDate: formattedDate,
      isSubscribed: true,
      rank: prev.savedPairings.length + prev.savedArticles.length > 3 ? 'Molecular Gastronomist' : 'Flavor Initiate'
    }));
    
    triggerToast('Access Authorized! "The Matrix Protocols" are now unlocked in your Dashboard.');
    setIsSubscribeModalOpen(false);
  };

  // Handler for unsubscribing / logging out
  const handleUnsubscribe = () => {
    setSubscriber({
      email: '',
      joinedDate: '',
      isSubscribed: false,
      rank: 'Flavor Initiate',
      savedPairings: [],
      savedArticles: []
    });
    triggerToast('Decommissioned credentials. Back to guest visitor mode.');
    setCurrentTab('home');
  };

  // Toggle saving a flavor profile pairing
  const handleToggleSavePairing = (id: string) => {
    setSubscriber(prev => {
      const saved = [...prev.savedPairings];
      const idx = saved.indexOf(id);
      let nextSaves = [];
      if (idx > -1) {
        saved.splice(idx, 1);
        nextSaves = saved;
        triggerToast('Volatile compound profile removed from profile bookmarks.');
      } else {
        saved.push(id);
        nextSaves = saved;
        triggerToast('Chemical compound profile saved to member bookmarks catalog!');
      }

      // Recompute rank
      const totalSaves = nextSaves.length + prev.savedArticles.length;
      let newRank = 'Flavor Initiate';
      if (totalSaves > 3) newRank = 'Flavor Laboratory Director';
      else if (totalSaves > 1) newRank = 'Molecular Gastronomist';

      return {
        ...prev,
        savedPairings: nextSaves,
        rank: newRank
      };
    });
  };

  // Toggle saving a newsletter article
  const handleToggleSaveArticle = (id: string) => {
    setSubscriber(prev => {
      const saved = [...prev.savedArticles];
      const idx = saved.indexOf(id);
      let nextSaves = [];
      if (idx > -1) {
        saved.splice(idx, 1);
        nextSaves = saved;
        triggerToast('Research log bookmarked status removed.');
      } else {
        saved.push(id);
        nextSaves = saved;
        triggerToast('Research log bookmarked and saved to your profile dashboard!');
      }

      // Recompute rank
      const totalSaves = prev.savedPairings.length + nextSaves.length;
      let newRank = 'Flavor Initiate';
      if (totalSaves > 3) newRank = 'Flavor Laboratory Director';
      else if (totalSaves > 1) newRank = 'Molecular Gastronomist';

      return {
        ...prev,
        savedArticles: nextSaves,
        rank: newRank
      };
    });
  };

  const triggerToast = (msg: string) => {
    setShowToast(msg);
    setTimeout(() => {
      setShowToast(null);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans flex flex-col justify-between selection:bg-zinc-950 selection:text-white">
      <div>
        {/* Navigation Bar */}
        <Navbar 
          currentTab={currentTab} 
          setCurrentTab={setCurrentTab} 
          subscriber={subscriber}
          onOpenSubscribeModal={() => setIsSubscribeModalOpen(true)}
        />

        {/* Route rendering based on current tab */}
        {currentTab === 'home' && (
          <>
            <Hero 
              subscriber={subscriber} 
              onSubscribe={handleSubscribe} 
              onNavigateToLab={() => setCurrentTab('archive')}
            />
            <FlavorLab 
              savedPairingIds={subscriber.savedPairings}
              onToggleSavePairing={handleToggleSavePairing}
              subscriberEmail={subscriber.email || undefined}
              onOpenSubscribeModal={() => setIsSubscribeModalOpen(true)}
            />
          </>
        )}

        {currentTab === 'archive' && (
          <Archive 
            subscriber={subscriber}
            savedArticleIds={subscriber.savedArticles}
            onToggleSaveArticle={handleToggleSaveArticle}
            onOpenSubscribeModal={() => setIsSubscribeModalOpen(true)}
          />
        )}
      </div>

      {/* Footer Block */}
      <Footer setCurrentTab={setCurrentTab} />

      {/* ================= SUBSCRIBER CONVERSION MODAL ================= */}
      {isSubscribeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/50 backdrop-blur-sm" id="subscribe-modal-overlay">
          <div className="relative w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 text-left shadow-2xl ring-1 ring-zinc-900/10">
            {/* Close button */}
            <button
              onClick={() => setIsSubscribeModalOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-900 transition-colors"
              id="modal-close-btn"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Heading */}
            <div className="flex items-center gap-2 border-b border-zinc-100 pb-4 mb-4">
              <FlaskConical className="h-6 w-6 text-zinc-950" />
              <div>
                <span className="font-mono text-[9px] font-bold text-zinc-400 uppercase tracking-widest block">MEMBERSHIP ACCESS</span>
                <h3 className="font-display text-base font-extrabold text-zinc-900 tracking-tight">UNLOCK THE MATRIX PROTOCOLS</h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-medium">
              Join <span className="font-bold text-zinc-900">10,248 curious cooks</span>. Subscribing unlocks all locked Molecular logs, sensory hacks, downloadable starter files, and custom kitchen calculators instantly.
            </p>

            <form 
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const emailEl = form.querySelector('input[type="email"]') as HTMLInputElement;
                if (emailEl && emailEl.value) {
                  handleSubscribe(emailEl.value);
                }
              }}
              className="mt-6 space-y-3"
            >
              <div>
                <label className="block font-mono text-[10px] text-zinc-400 uppercase font-bold mb-1.5">Enter your email</label>
                <div className="relative">
                  <Mail className="absolute top-3.5 left-3 h-4 w-4 text-zinc-400" />
                  <input
                    type="email"
                    required
                    placeholder="alchemist@flavourmatrix.com"
                    className="block w-full h-11 rounded-lg border border-zinc-200 bg-zinc-50 pl-9 pr-3 text-xs focus:border-zinc-900 focus:bg-white focus:outline-none transition-all"
                    id="modal-email-input"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full h-11 rounded-lg bg-zinc-950 text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-zinc-800 transition-colors shadow-md mt-2"
                id="modal-submit-btn"
              >
                UNIFY WITH THE MATRIX
              </button>
            </form>

            <div className="mt-5 space-y-2 border-t border-zinc-100 pt-4">
              <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500 uppercase font-medium">
                <Check className="h-3.5 w-3.5 text-emerald-500" />
                <span>Instant access to 5 major scientific guides</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500 uppercase font-medium">
                <Check className="h-3.5 w-3.5 text-emerald-500" />
                <span>Precision brining & fermentation meters</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= LIVE SESSION TOAST SYSTEM ================= */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm rounded-xl border border-zinc-900 bg-zinc-900 text-white p-4 shadow-xl flex items-start gap-3 animate-slide-up" id="toast-notif">
          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-400 text-zinc-900 mt-0.5">
            <Sparkles className="h-3 w-3 fill-zinc-900 text-zinc-900" />
          </div>
          <div>
            <span className="block text-[10px] font-mono font-bold tracking-wider text-amber-400 uppercase">SYSTEM DIAGNOSTIC</span>
            <p className="mt-0.5 text-xs font-medium leading-normal text-zinc-200">
              {showToast}
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
