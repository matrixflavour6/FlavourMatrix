import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Clock, 
  Filter, 
  Sparkles, 
  BookOpen, 
  Layers, 
  CheckCircle2, 
  X, 
  Award, 
  List, 
  LayoutGrid, 
  Search, 
  Dna 
} from 'lucide-react';
import { recipesData } from '../data/recipes';
import { erasData } from '../data/eras';
import { Recipe, EraId } from '../types';

interface RecipeDashboardProps {
  initialEraFilter: EraId | 'All';
  onResetFilter: () => void;
}

type ViewMode = 'cards' | 'list' | 'science';

export default function RecipeDashboard({
  initialEraFilter,
  onResetFilter,
}: RecipeDashboardProps) {
  const [selectedEra, setSelectedEra] = useState<EraId | 'All'>('All');
  const [activeRecipe, setActiveRecipe] = useState<Recipe | null>(null);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [showScienceDrawer, setShowScienceDrawer] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>('cards');
  const [searchQuery, setSearchQuery] = useState('');

  // Sync state if pre-filtered from timeline/teaser
  useEffect(() => {
    if (initialEraFilter) {
      setSelectedEra(initialEraFilter);
    }
  }, [initialEraFilter]);

  // Clean state when active recipe changes
  useEffect(() => {
    setCompletedSteps([]);
    setShowScienceDrawer(false);
  }, [activeRecipe]);

  // Filter recipes by era AND search query
  const filteredRecipes = recipesData.filter((recipe) => {
    const matchesEra = selectedEra === 'All' || recipe.eraId === selectedEra;
    const matchesSearch = 
      recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.historicalContext.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.scienceTips.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.scienceTips.explanation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.ingredients.some(ing => ing.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesEra && matchesSearch;
  });

  const getEraName = (eraId: EraId) => {
    return erasData.find((e) => e.id === eraId)?.name || eraId;
  };

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'Beginner': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'Apprentice': return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'Master': return 'bg-rose-500/10 text-rose-400 border-rose-500/20';
      default: return 'bg-stone-500/10 text-stone-400';
    }
  };

  const toggleStep = (index: number) => {
    if (completedSteps.includes(index)) {
      setCompletedSteps(completedSteps.filter((s) => s !== index));
    } else {
      setCompletedSteps([...completedSteps, index]);
    }
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-stone-950 text-stone-100" id="recipe-vault">
      <div className="max-w-7xl mx-auto">
        
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-stone-900 pb-6">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-amber-500 mb-2 block flex items-center gap-1">
              <Layers className="w-3.5 h-3.5" />
              Chrono-Recipes Archive
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display tracking-tight">
              Historical Recipe Vault
            </h2>
            <p className="text-stone-400 text-sm mt-1 max-w-xl">
              Recreate human history in your kitchen. Click any recipe below to enter the interactive chemical reader and toggle real-time step guides.
            </p>
          </div>

          {/* Quick Clear Filter indicator */}
          {(selectedEra !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedEra('All');
                setSearchQuery('');
                onResetFilter();
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-amber-500 border border-amber-500/20 bg-amber-500/5 hover:bg-amber-500/10 rounded-xl transition-all cursor-pointer font-mono align-self-start md:align-self-auto"
              id="clear-recipe-filter"
            >
              <span>Reset Filters</span>
              <X className="w-3 h-3" />
            </button>
          )}
        </div>

        {/* Top Era Filter Selector & Search & View Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 bg-stone-900/20 p-4 rounded-2xl border border-stone-900">
          
          {/* Era Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none snap-x flex-1" id="recipe-era-filters">
            <button
              onClick={() => {
                setSelectedEra('All');
                onResetFilter();
              }}
              className={`px-3 py-1.5 text-[11px] font-semibold font-mono rounded-lg border transition-all whitespace-nowrap snap-center cursor-pointer ${
                selectedEra === 'All'
                  ? 'bg-amber-500/10 border-amber-500/40 text-amber-400 font-bold'
                  : 'bg-stone-950 border-stone-900 hover:border-stone-800 text-stone-400 hover:text-stone-200'
              }`}
              id="filter-recipe-all"
            >
              All Eras ({recipesData.length})
            </button>
            {erasData.map((era) => {
              const count = recipesData.filter(r => r.eraId === era.id).length;
              return (
                <button
                  key={era.id}
                  id={`filter-recipe-era-${era.id}`}
                  onClick={() => {
                    setSelectedEra(era.id);
                  }}
                  className={`px-3 py-1.5 text-[11px] font-semibold font-mono rounded-lg border transition-all whitespace-nowrap snap-center cursor-pointer ${
                    selectedEra === era.id
                      ? 'bg-amber-500/10 border-amber-500/40 text-amber-400 font-bold'
                      : 'bg-stone-950 border-stone-900 hover:border-stone-800 text-stone-400 hover:text-stone-200'
                  }`}
                >
                  {era.name} ({count})
                </button>
              );
            })}
          </div>

          {/* Search and View Mode Switcher */}
          <div className="flex items-center gap-3 shrink-0 flex-wrap sm:flex-nowrap">
            {/* Search Input */}
            <div className="relative flex-1 sm:flex-initial">
              <Search className="w-4 h-4 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search 54 recipes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-8 py-1.5 text-xs bg-stone-950 border border-stone-900 focus:border-amber-500/50 rounded-xl text-stone-200 placeholder-stone-500 outline-none w-full sm:w-56 transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-500 hover:text-stone-300"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

            {/* View Mode Switcher buttons */}
            <div className="flex items-center bg-stone-950 border border-stone-900 rounded-xl p-1 gap-1">
              <button
                onClick={() => setViewMode('cards')}
                className={`p-1.5 rounded-lg transition-all cursor-pointer ${viewMode === 'cards' ? 'bg-amber-500/10 text-amber-400' : 'text-stone-500 hover:text-stone-300'}`}
                title="Grid Card View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-lg transition-all cursor-pointer ${viewMode === 'list' ? 'bg-amber-500/10 text-amber-400' : 'text-stone-500 hover:text-stone-300'}`}
                title="Compact List View"
              >
                <List className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewMode('science')}
                className={`p-1.5 rounded-lg transition-all cursor-pointer ${viewMode === 'science' ? 'bg-amber-500/10 text-amber-400' : 'text-stone-500 hover:text-stone-300'}`}
                title="Scientific Notebook View"
              >
                <Dna className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Recipes Results Banner */}
        <div className="mb-4 text-xs font-mono text-stone-500">
          Showing {filteredRecipes.length} of {recipesData.length} records found.
        </div>

        {/* Fallback for Empty Search */}
        {filteredRecipes.length === 0 && (
          <div className="py-20 text-center bg-stone-900/10 rounded-3xl border border-stone-900 border-dashed">
            <Layers className="w-8 h-8 text-stone-600 mx-auto mb-3" />
            <p className="text-stone-400 font-medium">No historical logs match your search.</p>
            <button 
              onClick={() => { setSelectedEra('All'); setSearchQuery(''); }}
              className="mt-3 text-xs text-amber-500 font-mono hover:underline"
            >
              Reset filters and search query
            </button>
          </div>
        )}

        {/* VIEW 1: Grid Cards View */}
        {viewMode === 'cards' && filteredRecipes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="recipes-cards-grid">
            <AnimatePresence mode="popLayout">
              {filteredRecipes.map((recipe) => (
                <motion.div
                  key={recipe.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  whileHover={{ y: -4 }}
                  className="group flex flex-col justify-between bg-stone-900/30 border border-stone-850 hover:border-stone-800 rounded-2xl overflow-hidden transition-all duration-300 shadow-md"
                >
                  {/* Visual Cover */}
                  <div className="relative aspect-video overflow-hidden bg-stone-950">
                    <img
                      src={recipe.image}
                      alt={recipe.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
                    
                    {/* Era Tag overlay */}
                    <div className="absolute top-3 left-3 px-2 py-0.5 bg-stone-950/80 backdrop-blur-sm rounded border border-stone-800 text-[9px] font-mono text-amber-400 font-bold uppercase">
                      {getEraName(recipe.eraId)}
                    </div>
                  </div>

                  {/* Recipe details */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-mono text-stone-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-stone-400" />
                          {recipe.prepTime}
                        </span>
                        <span className={`px-2 py-0.5 rounded border ${getDifficultyColor(recipe.difficulty)}`}>
                          {recipe.difficulty}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold font-display text-stone-100 group-hover:text-amber-400 transition-colors">
                        {recipe.name}
                      </h3>

                      <p className="text-xs text-stone-400 line-clamp-3 leading-relaxed font-sans">
                        {recipe.historicalContext}
                      </p>
                    </div>

                    <div className="space-y-3 pt-3 border-t border-stone-850/60">
                      {/* Tiny Science Preview Card */}
                      <div className="bg-stone-950/50 p-2.5 rounded-xl border border-stone-850/40 flex items-start gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5 animate-pulse" />
                        <div className="text-[10px] leading-relaxed">
                          <span className="font-semibold text-stone-300 block">{recipe.scienceTips.title}</span>
                          <span className="text-stone-400 line-clamp-2">{recipe.scienceTips.explanation}</span>
                        </div>
                      </div>

                      {/* Launch Interactive Reader btn */}
                      <button
                        onClick={() => setActiveRecipe(recipe)}
                        className="w-full flex items-center justify-center gap-1.5 py-2 text-xs font-semibold bg-stone-950 hover:bg-stone-900 text-stone-300 hover:text-stone-100 rounded-xl border border-stone-800 hover:border-stone-700 transition-all cursor-pointer"
                        id={`read-recipe-btn-${recipe.id}`}
                      >
                        <BookOpen className="w-3.5 h-3.5 text-amber-500" />
                        <span>Enter Cooking Lab Reader</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* VIEW 2: Compact Row List View */}
        {viewMode === 'list' && filteredRecipes.length > 0 && (
          <div className="space-y-3" id="compact-list-view">
            <AnimatePresence mode="popLayout">
              {filteredRecipes.map((recipe) => (
                <motion.div 
                  key={recipe.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3.5 bg-stone-900/20 border border-stone-850 hover:border-stone-800 rounded-xl gap-4 transition-all hover:bg-stone-900/40"
                >
                  <div className="flex items-center gap-3.5">
                    <img 
                      src={recipe.image} 
                      alt={recipe.name} 
                      className="w-12 h-12 rounded-lg object-cover border border-stone-800 shrink-0" 
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <span className="text-[9px] font-mono text-amber-500 uppercase tracking-wider font-semibold block">{getEraName(recipe.eraId)}</span>
                      <h4 className="text-sm font-bold text-stone-200 mt-0.5">{recipe.name}</h4>
                      <span className="text-[11px] text-stone-400 font-mono flex items-center gap-1 mt-1">
                        <Clock className="w-3 h-3 text-stone-500" /> {recipe.prepTime} | <span className="text-cyan-400 font-semibold">{recipe.scienceTips.title}</span>
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                    <span className={`px-2 py-0.5 rounded border text-[9px] font-mono ${getDifficultyColor(recipe.difficulty)}`}>
                      {recipe.difficulty}
                    </span>
                    <button
                      onClick={() => setActiveRecipe(recipe)}
                      className="px-3 py-1.5 text-xs font-mono font-bold bg-stone-950 hover:bg-stone-900 text-stone-300 hover:text-stone-100 rounded-lg border border-stone-800 hover:border-stone-700 transition-all cursor-pointer flex items-center gap-1"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-amber-500" />
                      <span>Lab Reader</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* VIEW 3: Scientific Notebook View */}
        {viewMode === 'science' && filteredRecipes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="science-notebook-view">
            <AnimatePresence mode="popLayout">
              {filteredRecipes.map((recipe) => (
                <motion.div 
                  key={recipe.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="p-5 bg-stone-900/20 border border-cyan-500/10 hover:border-cyan-500/30 rounded-2xl transition-all flex flex-col justify-between space-y-4 shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-stone-850 pb-2">
                      <span className="text-[9px] font-mono text-cyan-400 uppercase tracking-widest font-bold">CHRONO-CHEMICAL ANNOTATION</span>
                      <span className="text-[10px] font-mono text-stone-500 uppercase">{getEraName(recipe.eraId)}</span>
                    </div>
                    <h4 className="text-lg font-bold font-display text-stone-100 mt-2.5">{recipe.name}</h4>
                    
                    <div className="mt-3 bg-cyan-950/10 border border-cyan-500/15 p-3 rounded-xl space-y-1">
                      <span className="text-[9px] font-mono text-cyan-400 font-semibold uppercase tracking-wider block">SCIENTIFIC PRINCIPLE</span>
                      <h5 className="text-xs font-bold text-stone-200">{recipe.scienceTips.title}</h5>
                      <p className="text-[11px] text-stone-400 leading-relaxed font-sans">{recipe.scienceTips.explanation}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-stone-850 text-stone-400 text-[10px] font-mono">
                    <span className="truncate max-w-[220px]">Reactants: {recipe.ingredients.slice(0, 2).map(i => i.split(' ')[0]).join(', ')}...</span>
                    <button
                      onClick={() => setActiveRecipe(recipe)}
                      className="px-3 py-1 text-[10px] font-mono font-bold bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 rounded-lg border border-cyan-500/20 transition-all cursor-pointer flex items-center gap-1 shrink-0"
                    >
                      <Sparkles className="w-3 h-3" />
                      <span>Launch Protocol</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Detailed Interactive Recipe Reader Overlay */}
        <AnimatePresence>
          {activeRecipe && (
            <div className="fixed inset-0 z-50 overflow-y-auto lg:overflow-hidden bg-stone-950/90 backdrop-blur-md p-4 md:p-6 flex justify-center items-start lg:items-center" id="recipe-reader-modal">
              {/* Backdrop closer */}
              <div className="fixed inset-0" onClick={() => setActiveRecipe(null)} />

              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 15 }}
                className="relative bg-stone-900 border border-stone-800 rounded-3xl w-full max-w-5xl max-h-none lg:max-h-[92vh] my-auto lg:my-0 overflow-hidden shadow-2xl z-10 flex flex-col lg:flex-row animate-in"
              >
                
                {/* Main Content Area */}
                <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
                  
                  {/* Close floating button */}
                  <button
                    onClick={() => setActiveRecipe(null)}
                    className="absolute top-4 right-4 p-2 bg-stone-950/60 hover:bg-stone-950 rounded-full border border-stone-800 text-stone-400 hover:text-stone-200 transition-all z-20 cursor-pointer"
                    id="close-recipe-reader"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  {/* Header Title Grid */}
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-1 bg-amber-500 text-stone-950 font-bold rounded-md text-[10px] font-mono uppercase">
                        {getEraName(activeRecipe.eraId)}
                      </span>
                      <span className={`px-2.5 py-0.5 rounded border text-[10px] font-mono ${getDifficultyColor(activeRecipe.difficulty)}`}>
                        {activeRecipe.difficulty} Skill
                      </span>
                      <span className="flex items-center gap-1 text-[10px] font-mono text-stone-500 ml-auto">
                        <Clock className="w-3.5 h-3.5" />
                        Prep Time: {activeRecipe.prepTime}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-extrabold font-display text-stone-100 tracking-tight">
                      {activeRecipe.name}
                    </h3>
                    
                    <p className="text-stone-400 text-xs md:text-sm leading-relaxed max-w-3xl italic">
                      "{activeRecipe.historicalContext}"
                    </p>
                  </div>

                  {/* Split columns: Ingredients list & Cooking steps */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-stone-850 pt-6">
                    
                    {/* Ingredients Column (Left column) */}
                    <div className="md:col-span-4 space-y-4">
                      <span className="text-xs font-mono uppercase text-stone-500 font-bold block">
                        Chemical Reagents (Ingredients)
                      </span>
                      <ul className="space-y-2">
                        {activeRecipe.ingredients.map((ing, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs text-stone-300 font-sans leading-relaxed"
                          >
                            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 shrink-0" />
                            <span>{ing}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Step-by-Step interactive reader (Right column) */}
                    <div className="md:col-span-8 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono uppercase text-stone-500 font-bold">
                          Reaction Protocol (Steps)
                        </span>
                        <span className="text-[10px] font-mono text-amber-500">
                          {completedSteps.length} of {activeRecipe.steps.length} complete
                        </span>
                      </div>

                      <div className="space-y-3">
                        {activeRecipe.steps.map((step, index) => {
                          const isDone = completedSteps.includes(index);
                          return (
                            <div
                              key={index}
                              onClick={() => toggleStep(index)}
                              className={`group p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3 select-none ${
                                isDone 
                                  ? 'bg-stone-950/40 border-stone-900 text-stone-500' 
                                  : 'bg-stone-900/60 border-stone-850 hover:border-stone-800 text-stone-200'
                              }`}
                            >
                              <button className="shrink-0 mt-0.5">
                                <CheckCircle2 className={`w-4 h-4 transition-colors ${
                                  isDone ? 'text-amber-500 fill-amber-500' : 'text-stone-600 group-hover:text-stone-400'
                                }`} />
                              </button>
                              
                              <div className="space-y-1">
                                <span className={`text-[10px] font-mono uppercase ${isDone ? 'text-stone-600' : 'text-amber-500'}`}>
                                  Step 0{index + 1}
                                </span>
                                <p className={`text-xs leading-relaxed font-sans ${isDone ? 'line-through text-stone-500' : ''}`}>
                                  {step}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                  </div>

                  {/* Toggle Mobile Drawer Button (Mobile/Tablet specific) */}
                  <div className="lg:hidden border-t border-stone-850 pt-4 flex justify-end">
                    <button
                      onClick={() => setShowScienceDrawer(!showScienceDrawer)}
                      className="flex items-center gap-1 px-4 py-2 text-xs font-mono font-bold bg-cyan-950/60 text-cyan-400 hover:bg-cyan-950 border border-cyan-500/20 rounded-xl cursor-pointer"
                      id="toggle-science-drawer"
                    >
                      <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                      <span>{showScienceDrawer ? 'Hide Chemical Analysis' : 'Show Chemical Analysis'}</span>
                    </button>
                  </div>

                </div>

                {/* The Science Behind It: Fixed sliding side drawer on Desktop, sliding bottom overlay on Mobile */}
                <div className={`
                  w-full lg:w-80 border-t lg:border-t-0 lg:border-l border-stone-850 bg-stone-950 p-6 flex flex-col justify-between space-y-6 shrink-0
                  lg:max-h-[92vh] lg:overflow-y-auto
                  absolute lg:relative inset-x-0 bottom-0 lg:inset-auto z-30 max-h-[75vh] overflow-y-auto rounded-t-3xl lg:rounded-none shadow-2xl transition-all duration-300
                  ${showScienceDrawer ? 'translate-y-0 opacity-100 block' : 'translate-y-full opacity-0 pointer-events-none lg:translate-y-0 lg:opacity-100 lg:pointer-events-auto lg:flex'}
                `}>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase font-mono text-cyan-400 font-bold flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                        Chemical Analysis
                      </span>
                      {/* Close button for mobile bottom drawer overlay */}
                      <button
                        onClick={() => setShowScienceDrawer(false)}
                        className="lg:hidden p-1.5 bg-stone-900 hover:bg-stone-850 rounded-full border border-stone-800 text-stone-400 hover:text-stone-200 transition-colors"
                        title="Close Analysis"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    
                    <h4 className="text-sm font-bold font-display text-stone-200">
                      {activeRecipe.scienceTips.title}
                    </h4>

                    <p className="text-xs text-stone-400 leading-relaxed font-sans bg-stone-900/40 p-4 rounded-xl border border-stone-850/40">
                      {activeRecipe.scienceTips.explanation}
                    </p>

                    {/* Fun chemistry metrics */}
                    <div className="space-y-2 pt-2 text-[10px] font-mono text-stone-500">
                      <div className="flex justify-between border-b border-stone-900 pb-1">
                        <span>Reactive Compound:</span>
                        <span className="text-stone-300">Biopolymers & Lipids</span>
                      </div>
                      <div className="flex justify-between border-b border-stone-900 pb-1">
                        <span>Thermal Activation:</span>
                        <span className="text-amber-500 font-semibold">&gt; 100°C</span>
                      </div>
                      <div className="flex justify-between pb-1">
                        <span>Reaction Type:</span>
                        <span className="text-cyan-400">Enzymatic / Gelation</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-stone-900">
                    <div className="p-3 bg-stone-900/60 rounded-xl border border-stone-850/50 flex items-start gap-2 text-[10px] text-stone-400">
                      <Award className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>Completing all steps simulates a clean molecular chemical transformation in the timeline matrix database.</span>
                    </div>
                  </div>

                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
