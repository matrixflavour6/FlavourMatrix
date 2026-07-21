import { Sparkles, Lock, Unlock, Eye, Edit3 } from 'lucide-react';
import { motion } from 'motion/react';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  isAdmin: boolean;
  isEditMode: boolean;
  setIsEditMode: (mode: boolean) => void;
  onAdminClick: () => void;
}

export default function Navbar({
  currentTab,
  setCurrentTab,
  isAdmin,
  isEditMode,
  setIsEditMode,
  onAdminClick,
}: NavbarProps) {
  const tabs = [
    { id: 'intro', label: 'Timeline Portal' },
    { id: 'lab', label: 'Food Alchemy Lab' },
    { id: 'recipes', label: 'Recipe Vault' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-stone-950/80 backdrop-blur-md border-b border-stone-900 px-4 md:px-8 py-3">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Branding & Mobile Admin Container */}
        <div className="flex items-center justify-between w-full md:w-auto gap-4">
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => setCurrentTab('intro')}
            id="nav-logo"
          >
            <div className="p-2 bg-gradient-to-tr from-amber-600 to-amber-400 rounded-lg group-hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-5 h-5 text-stone-950" />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold tracking-tight text-stone-100 font-display">
                GastroChronicles
              </h1>
              <p className="text-[10px] uppercase tracking-widest text-stone-400 font-mono">
                The Culinary Evolution
              </p>
            </div>
          </div>

          {/* Admin controls - inline on mobile for superb responsiveness */}
          <div className="md:hidden flex items-center gap-2" id="nav-admin-controls-mobile">
            {isAdmin ? (
              <div className="flex items-center gap-1 bg-stone-900 border border-amber-500/20 rounded-xl p-1">
                <button
                  onClick={() => setIsEditMode(!isEditMode)}
                  className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isEditMode 
                      ? 'bg-amber-600 text-stone-950 shadow-sm' 
                      : 'text-amber-500 hover:bg-stone-800'
                  }`}
                  id="toggle-edit-mode-mobile"
                >
                  {isEditMode ? <Edit3 className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={onAdminClick}
                  className="p-1.5 text-stone-400 hover:text-stone-200 rounded-lg"
                  id="btn-admin-logout-mobile"
                >
                  <Unlock className="w-4 h-4 text-amber-500" />
                </button>
              </div>
            ) : (
              <button
                onClick={onAdminClick}
                className="p-2 text-stone-500 hover:text-amber-500 rounded-full hover:bg-stone-900/60"
                id="btn-admin-login-mobile"
              >
                <Lock className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Navigation Tabs - Responsive list wrapping or scrollable on super narrow screens */}
        <nav className="flex items-center gap-1 bg-stone-900/60 p-1 rounded-xl border border-stone-800/40 w-full md:w-auto overflow-x-auto justify-center scrollbar-none" id="nav-tabs">
          {tabs.map((tab) => {
            const isActive = currentTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`tab-btn-${tab.id}`}
                onClick={() => setCurrentTab(tab.id)}
                className={`relative px-3 md:px-4 py-2 text-xs md:text-sm font-medium transition-colors duration-300 rounded-lg whitespace-nowrap outline-none flex-1 md:flex-initial text-center ${
                  isActive ? 'text-stone-100' : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-tab-indicator"
                    className="absolute inset-0 bg-stone-800/80 rounded-lg border border-stone-700/30"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Desktop Admin Controls */}
        <div className="hidden md:flex items-center gap-2" id="nav-admin-controls-desktop">
          {isAdmin ? (
            <div className="flex items-center gap-1 bg-stone-900 border border-amber-500/20 rounded-xl p-1">
              <button
                onClick={() => setIsEditMode(!isEditMode)}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  isEditMode 
                    ? 'bg-amber-600 text-stone-950 shadow-sm shadow-amber-600/20' 
                    : 'text-amber-500 hover:bg-stone-800'
                }`}
                title={isEditMode ? "Switch to View Mode" : "Switch to Live Editor"}
                id="toggle-edit-mode"
              >
                {isEditMode ? (
                  <>
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>Editing Live</span>
                  </>
                ) : (
                  <>
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Mode</span>
                  </>
                )}
              </button>
              <button
                onClick={onAdminClick}
                className="p-1.5 text-stone-400 hover:text-stone-200 rounded-lg hover:bg-stone-800 transition-colors"
                title="Admin Log Out"
                id="btn-admin-logout"
              >
                <Unlock className="w-4 h-4 text-amber-500" />
              </button>
            </div>
          ) : (
            <button
              onClick={onAdminClick}
              className="p-1.5 text-stone-500 hover:text-amber-500 hover:scale-110 rounded-full hover:bg-stone-900/60 transition-all cursor-pointer"
              id="btn-admin-login"
              title="Owner Access"
            >
              <Lock className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
