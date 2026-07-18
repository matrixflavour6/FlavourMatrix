import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FlavorLab from './components/FlavorLab';
import Archive from './components/Archive';
import Footer from './components/Footer';
import { Sparkles } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [showToast, setShowToast] = useState<string | null>(null);

  // Load and keep bookmarks in client state
  const [savedPairings, setSavedPairings] = useState<string[]>(() => {
    const cached = localStorage.getItem('fm_saved_pairings');
    return cached ? JSON.parse(cached) : [];
  });

  const [savedArticles, setSavedArticles] = useState<string[]>(() => {
    const cached = localStorage.getItem('fm_saved_articles');
    return cached ? JSON.parse(cached) : [];
  });

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('fm_saved_pairings', JSON.stringify(savedPairings));
  }, [savedPairings]);

  useEffect(() => {
    localStorage.setItem('fm_saved_articles', JSON.stringify(savedArticles));
  }, [savedArticles]);

  // Toggle saving a flavor profile pairing
  const handleToggleSavePairing = (id: string) => {
    setSavedPairings(prev => {
      const idx = prev.indexOf(id);
      if (idx > -1) {
        const next = [...prev];
        next.splice(idx, 1);
        triggerToast('Volatile compound profile removed from your research journal.');
        return next;
      } else {
        triggerToast('Chemical compound profile saved to your research journal.');
        return [...prev, id];
      }
    });
  };

  // Toggle saving a research article
  const handleToggleSaveArticle = (id: string) => {
    setSavedArticles(prev => {
      const idx = prev.indexOf(id);
      if (idx > -1) {
        const next = [...prev];
        next.splice(idx, 1);
        triggerToast('Research log bookmarked status removed.');
        return next;
      } else {
        triggerToast('Research log bookmarked and saved to your personal log.');
        return [...prev, id];
      }
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
        />

        {/* Route rendering based on current tab */}
        {currentTab === 'home' && (
          <>
            <Hero 
              onNavigateToLab={() => setCurrentTab('archive')}
            />
            <FlavorLab 
              savedPairingIds={savedPairings}
              onToggleSavePairing={handleToggleSavePairing}
            />
          </>
        )}

        {currentTab === 'archive' && (
          <Archive 
            savedArticleIds={savedArticles}
            onToggleSaveArticle={handleToggleSaveArticle}
          />
        )}
      </div>

      {/* Footer Block */}
      <Footer setCurrentTab={setCurrentTab} />

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
