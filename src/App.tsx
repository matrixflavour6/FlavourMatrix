import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';
import Navbar from './components/Navbar';
import MissionSection from './components/MissionSection';
import TeaserCards from './components/TeaserCards';
import AlchemyLab from './components/AlchemyLab';
import RecipeDashboard from './components/RecipeDashboard';
import AdminPanel from './components/AdminPanel';
import { CMSContent, EraId } from './types';

const defaultCMSContent: CMSContent = {
  heroTitle: "GastroChronicles: The Culinary Evolution",
  heroSubtitle: "Explore the fascinating intersection of human history, evolutionary biology, and physical chemistry. From the prehistoric control of hearth fire to the high-precision molecular gelling of modern kitchens.",
  missionTitle: "Cooking is the Science of Human Survival",
  missionDescription: "Every time we heat, salt, ferment, or emulsify ingredients, we are conducting biochemistry. This website chronicles the scientific breakthroughs that allowed our ancestors to unlock denser nutrients, build global spice trade empires, and ultimately restructure gastronomy into an analytical laboratory science.",
  missionCards: [
    {
      id: "card_1",
      title: "Caloric Extraction",
      description: "Applying thermal energy (fire) denatures tight proteins and breaks down complex cellulose, allowing the human gut to absorb up to 3x more nutrition.",
      iconName: "flame"
    },
    {
      id: "card_2",
      title: "Pathogen Defence",
      description: "Salting and acidic fermentation decrease water activity and alter pH, creating hostile chemical conditions that preserve food indefinitely.",
      iconName: "shield"
    },
    {
      id: "card_3",
      title: "Molecular Synthesis",
      description: "Modern hydrocolloids and cryogenic freezing manipulate physical state transformations, questioning our traditional perception of textures and tastes.",
      iconName: "sparkles"
    }
  ]
};

export default function App() {
  // Navigation Routing States
  const [currentTab, setCurrentTab] = useState<string>('intro');
  const [selectedEraId, setSelectedEraId] = useState<EraId>('neolithic');
  const [recipeEraFilter, setRecipeEraFilter] = useState<EraId | 'All'>('All');

  // CMS Content State
  const [cmsContent, setCmsContent] = useState<CMSContent>(defaultCMSContent);

  // Admin States
  const [isAdmin, setIsAdmin] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [changesCount, setChangesCount] = useState(0);

  // Load from LocalStorage
  useEffect(() => {
    const savedContent = localStorage.getItem('gastro_cms_content');
    if (savedContent) {
      try {
        setCmsContent(JSON.parse(savedContent));
      } catch (e) {
        console.error('Error loading saved CMS content', e);
      }
    }
  }, []);

  // Handler for direct text editing
  const handleContentEdit = (key: keyof CMSContent, value: any) => {
    const updated = { ...cmsContent, [key]: value };
    setCmsContent(updated);
    setChangesCount((prev) => prev + 1);
  };

  // Handler for mission card editing
  const handleCardEdit = (cardId: string, title: string, description: string) => {
    const updatedCards = cmsContent.missionCards.map((card) => {
      if (card.id === cardId) {
        return { ...card, title, description };
      }
      return card;
    });
    const updated = { ...cmsContent, missionCards: updatedCards };
    setCmsContent(updated);
    setChangesCount((prev) => prev + 1);
  };

  // Explicit Save / Push to GitHub Simulation
  const handleSaveToLocalStorage = () => {
    localStorage.setItem('gastro_cms_content', JSON.stringify(cmsContent));
    setChangesCount(0); // Reset unpushed changes count
  };

  // Timeline Teaser Click -> Direct Page 3 filtered routing
  const handlePickEra = (eraId: EraId) => {
    setRecipeEraFilter(eraId);
    setCurrentTab('recipes');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans selection:bg-amber-500/35 selection:text-stone-100" id="gastro-chronicles-app">
      
      {/* 1. Glassmorphic Top Navbar Navigation */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={(tab) => {
          setCurrentTab(tab);
          // If moving between main pages, preserve standard view behaviors
          if (tab !== 'recipes') {
            setRecipeEraFilter('All');
          }
        }}
        isAdmin={isAdmin}
        isEditMode={isEditMode}
        setIsEditMode={setIsEditMode}
        onAdminClick={() => {
          if (isAdmin) {
            // Logout
            setIsAdmin(false);
            setIsEditMode(false);
          } else {
            setLoginModalOpen(true);
          }
        }}
      />

      {/* 2. Main Page views with animated page transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {currentTab === 'intro' && (
            <motion.div
              key="intro-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              {/* Dynamic, visually polished Hero Section (without the slider timeline) */}
              <section className="relative overflow-hidden py-20 px-4 md:px-8 bg-stone-950 text-stone-100 border-b border-stone-900/60" id="hero-section">
                {/* Background Glow */}
                <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-amber-500/10 blur-[120px] pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-orange-500/5 blur-[150px] pointer-events-none" />
                <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />

                <div className="max-w-5xl mx-auto relative z-10 text-center">
                  {isEditMode ? (
                    <div className="space-y-4 max-w-3xl mx-auto bg-stone-900/60 p-6 rounded-2xl border border-amber-500/20">
                      <span className="text-xs uppercase font-mono tracking-widest text-amber-500 mb-2 block">Hero Editor</span>
                      <div>
                        <label className="block text-xs font-mono text-amber-500 mb-1 text-left">Hero Title</label>
                        <input
                          type="text"
                          value={cmsContent.heroTitle}
                          onChange={(e) => handleContentEdit('heroTitle', e.target.value)}
                          className="w-full bg-stone-950 border border-amber-500/40 rounded px-3 py-1.5 text-stone-100 text-xl font-bold font-display"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-amber-500 mb-1 text-left">Hero Subtitle</label>
                        <textarea
                          value={cmsContent.heroSubtitle}
                          onChange={(e) => handleContentEdit('heroSubtitle', e.target.value)}
                          rows={3}
                          className="w-full bg-stone-950 border border-amber-500/40 rounded px-3 py-1.5 text-stone-300 text-sm"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-500/25 bg-amber-500/5 text-xs text-amber-400 font-mono tracking-wider uppercase mb-2"
                      >
                        <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                        <span>Chrono-Culinary Archives</span>
                      </motion.div>

                      <motion.h1 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-display bg-gradient-to-r from-stone-100 via-amber-200 to-stone-100 bg-clip-text text-transparent"
                      >
                        {cmsContent.heroTitle}
                      </motion.h1>

                      <motion.p 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-sm sm:text-base md:text-lg text-stone-400 max-w-3xl mx-auto leading-relaxed"
                      >
                        {cmsContent.heroSubtitle}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="pt-4 flex justify-center gap-3 flex-wrap"
                      >
                        <button
                          onClick={() => setCurrentTab('recipes')}
                          className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider font-mono rounded-xl hover:scale-103 transition-all cursor-pointer shadow-lg shadow-amber-500/10"
                        >
                          Explore 50+ Recipes
                        </button>
                        <button
                          onClick={() => setCurrentTab('lab')}
                          className="px-5 py-2.5 bg-stone-900 hover:bg-stone-850 text-stone-200 border border-stone-800 hover:border-stone-700 font-bold text-xs uppercase tracking-wider font-mono rounded-xl hover:scale-103 transition-all cursor-pointer"
                        >
                          Atomic Alchemy Lab
                        </button>
                      </motion.div>
                    </div>
                  )}
                </div>
              </section>

              {/* Informative Mission Statement */}
              <MissionSection
                editableContent={cmsContent}
                onContentEdit={handleContentEdit}
                onCardEdit={handleCardEdit}
                isEditMode={isEditMode}
              />

              {/* Pick An Era Teaser Cards */}
              <TeaserCards onPickEra={handlePickEra} />
            </motion.div>
          )}

          {currentTab === 'lab' && (
            <motion.div
              key="lab-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              {/* Periodic Table matrix dashboard */}
              <AlchemyLab />
            </motion.div>
          )}

          {currentTab === 'recipes' && (
            <motion.div
              key="recipes-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              {/* Historical recipe vault and detailed steps reader */}
              <RecipeDashboard
                initialEraFilter={recipeEraFilter}
                onResetFilter={() => setRecipeEraFilter('All')}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* 3. Footer */}
      <footer className="bg-stone-950 border-t border-stone-900 py-12 px-4 md:px-8 text-center" id="gastro-footer">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-left space-y-1">
            <h4 className="text-sm font-bold font-display text-stone-300">GastroChronicles: The Culinary Evolution</h4>
            <p className="text-xs text-stone-500 font-mono">Developed in React + Tailwind CSS + Framer Motion. GitHub Pages Ready.</p>
          </div>
          <div className="flex gap-4 text-xs font-mono text-stone-500">
            <a href="#" className="hover:text-amber-500 transition-colors">Documentation</a>
            <span>•</span>
            <a href="#" className="hover:text-amber-500 transition-colors">Biochemical Sources</a>
            <span>•</span>
            <a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a>
          </div>
          <p className="text-[11px] text-stone-600 font-mono">© 2026 GastroChronicles. All historical rights preserved.</p>
        </div>
      </footer>

      {/* 4. CMS Admin Dashboard & Login Panels */}
      <AdminPanel
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        isAdmin={isAdmin}
        setIsAdmin={setIsAdmin}
        isEditMode={isEditMode}
        setIsEditMode={setIsEditMode}
        changesCount={changesCount}
        onSaveTrigger={handleSaveToLocalStorage}
      />

    </div>
  );
}
