import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Atom, 
  Filter, 
  Sparkles, 
  BookOpen, 
  X, 
  HelpCircle, 
  Search, 
  Grid, 
  List, 
  ExternalLink, 
  ChevronRight, 
  BadgeAlert 
} from 'lucide-react';
import { ingredientsData } from '../data/ingredients';
import { Ingredient, TasteProfile, EraId } from '../types';

export default function AlchemyLab() {
  const [selectedTaste, setSelectedTaste] = useState<TasteProfile | 'All'>('All');
  const [selectedGroup, setSelectedGroup] = useState<string>('All');
  const [selectedEra, setSelectedEra] = useState<EraId | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'wiki'>('wiki'); // Default to wiki per user prompt "ingredient wiki on page two"
  const [activeIngredient, setActiveIngredient] = useState<Ingredient | null>(null);

  // Group definitions
  const groups = [
    { id: 'All', label: 'All Compounds' },
    { id: 'Sugar', label: 'Sugars & Carbs' },
    { id: 'Acid', label: 'Organic Acids' },
    { id: 'Salt', label: 'Saline Crystals' },
    { id: 'Alkaloid', label: 'Alkaloids & Terpenes' },
    { id: 'Glutamate', label: 'Amino Acids & Proteins' },
    { id: 'Capsaicinoid', label: 'Capsaicinoids / Volatiles' }
  ];

  // Helper to map ingredient to organic group dynamically
  const getIngredientGroup = (ing: Ingredient): string => {
    const id = ing.id.toLowerCase();
    const name = ing.name.toLowerCase();
    const compound = (ing.chemicalCompound || '').toLowerCase();

    // Sugars & Carbs
    if (
      ['honey', 'sucrose', 'agave', 'stevia', 'mastic', 'tonka_bean', 'maltose', 'lactose', 'erythritol', 'xylitol', 'isomalt', 'trehalose', 'inulin', 'dextrin', 'maltodextrin'].includes(id) ||
      name.includes('sugar') || name.includes('sweetener') || name.includes('nectar') || name.includes('honey') || compound.includes('fructan') || compound.includes('glucose') || compound.includes('sucrose') || compound.includes('carbohydrate')
    ) {
      return 'Sugar';
    }

    // Organic Acids
    if (
      ['acetic_acid', 'citric_acid', 'tartaric_acid', 'oxalic_acid', 'lactic_acid', 'malic_acid', 'ascorbic_acid', 'succinic_acid', 'phosphoric_acid', 'tannic_acid', 'carbonic_acid', 'vinegar_mother'].includes(id) ||
      name.includes('acid') || compound.includes('acid') || name.includes('vinegar')
    ) {
      return 'Acid';
    }

    // Saline & Mineral Crystals
    if (
      ['sodium_chloride', 'saltpetre', 'black_lava_salt', 'kala_namak', 'sodium_bicarbonate', 'potassium_carbonate', 'calcium_sulfate', 'calcium_chloride', 'sodium_citrate', 'potassium_chloride', 'magnesium_chloride', 'cream_of_tartar', 'alum'].includes(id) ||
      name.includes('salt') || name.includes('bicarbonate') || name.includes('carbonate') || name.includes('chloride') || name.includes('sulfate') || name.includes('citrate') || name.includes('tartar') || name.includes('alum') || compound.includes('sodium chloride')
    ) {
      return 'Salt';
    }

    // Alkaloids & Bioactive Terpenes
    if (
      ['caffeine', 'quinine', 'hops', 'charred_gourd', 'charred_wood', 'menthol', 'thujone', 'anethole', 'myristicin', 'cuminaldehyde', 'thymol', 'carvone', 'linalool', 'vanillin', 'pinene', 'rosmarinic_acid', 'fenchone', 'picrocrocin'].includes(id) ||
      compound.includes('alkaloid') || compound.includes('terpene') || compound.includes('ketone') || name.includes('extract') || name.includes('oil') || compound.includes('caffeine') || compound.includes('quinine') || name.includes('bark')
    ) {
      return 'Alkaloid';
    }

    // Amino Acids, Proteins & Enzymes
    if (
      ['monosodium_glutamate', 'guanylate', 'white_truffle', 'matsutake', 'katsuobushi', 'roman_garum_ing', 'black_garlic', 'miraculin', 'papain_enzyme', 'bromelain_enzyme', 'lactase_enzyme', 'casein', 'lecithin_egg', 'myoglobin', 'ovalbumin', 'amylase_enzyme', 'chymosin_enzyme', 'pectinase_enzyme', 'koji_culture', 'yeast_extract'].includes(id) ||
      compound.includes('glutamate') || compound.includes('guanylate') || compound.includes('protein') || compound.includes('enzyme') || compound.includes('protease') || compound.includes('peptidase') || compound.includes('amylase') || compound.includes('coagulant') || name.includes('extract') || name.includes('culture') || name.includes('enzyme') || name.includes('yeast') || name.includes('truffle') || name.includes('matsutake') || name.includes('katsuobushi') || name.includes('garum')
    ) {
      return 'Glutamate';
    }

    // Capsaicinoids, Organosulfurs & Volatiles
    if (
      ['capsaicin', 'allyl_isothiocyanate', 'sanshool', 'saffron', 'asafetida', 'allicin', 'gingerol', 'eugenol', 'cinnamaldehyde', 'curcumin', 'capsiate', 'carvacrol', 'sinigrin', 'apiol', 'anthocyanin', 'chlorophyll', 'lycopene', 'quercetin'].includes(id) ||
      compound.includes('capsaicin') || compound.includes('isothiocyanate') || compound.includes('sanshool') || compound.includes('sulfur') || name.includes('saffron') || name.includes('asafetida') || name.includes('garlic') || name.includes('ginger') || name.includes('clove') || name.includes('cinnamon') || name.includes('turmeric') || name.includes('pepper') || compound.includes('sulfide') || compound.includes('phenol')
    ) {
      return 'Capsaicinoid';
    }

    return 'Other';
  };

  // Filter & Search logic memoized
  const filteredIngredients = useMemo(() => {
    return ingredientsData.filter((ing) => {
      const matchTaste = selectedTaste === 'All' || ing.taste === selectedTaste;
      const matchGroup = selectedGroup === 'All' || getIngredientGroup(ing) === selectedGroup;
      const matchEra = selectedEra === 'All' || ing.eraId === selectedEra;

      let matchSearch = true;
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        matchSearch = 
          ing.name.toLowerCase().includes(query) ||
          ing.symbol.toLowerCase().includes(query) ||
          (ing.chemicalCompound || '').toLowerCase().includes(query) ||
          (ing.formula || '').toLowerCase().includes(query) ||
          (ing.breakdown || '').toLowerCase().includes(query);
      }

      return matchTaste && matchGroup && matchEra && matchSearch;
    });
  }, [selectedTaste, selectedGroup, selectedEra, searchQuery]);

  const getTasteBadgeColor = (taste: TasteProfile) => {
    switch (taste) {
      case 'Sweet': return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'Sour': return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
      case 'Salty': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'Bitter': return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      case 'Umami': return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'Pungent': return 'bg-red-500/10 text-red-400 border-red-500/20';
      default: return 'bg-stone-500/10 text-stone-400 border-stone-500/20';
    }
  };

  const getTasteGlowColor = (taste: TasteProfile) => {
    switch (taste) {
      case 'Sweet': return 'group-hover:border-amber-500/40 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.08)]';
      case 'Sour': return 'group-hover:border-yellow-500/40 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.08)]';
      case 'Salty': return 'group-hover:border-blue-500/40 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.08)]';
      case 'Bitter': return 'group-hover:border-purple-500/40 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.08)]';
      case 'Umami': return 'group-hover:border-green-500/40 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.08)]';
      case 'Pungent': return 'group-hover:border-red-500/40 group-hover:shadow-[0_0_15px_rgba(239,68,68,0.08)]';
      default: return 'group-hover:border-stone-500/40';
    }
  };

  // Direct verified Wikipedia mappings for all base food science compounds
  const baseWikiLinks: Record<string, string> = {
    honey: 'https://en.wikipedia.org/wiki/Honey',
    sucrose: 'https://en.wikipedia.org/wiki/Sucrose',
    agave: 'https://en.wikipedia.org/wiki/Agave_nectar',
    miraculin: 'https://en.wikipedia.org/wiki/Miraculin',
    stevia: 'https://en.wikipedia.org/wiki/Stevia',
    acetic_acid: 'https://en.wikipedia.org/wiki/Acetic_acid',
    citric_acid: 'https://en.wikipedia.org/wiki/Citric_acid',
    tartaric_acid: 'https://en.wikipedia.org/wiki/Tartaric_acid',
    oxalic_acid: 'https://en.wikipedia.org/wiki/Oxalic_acid',
    lactic_acid: 'https://en.wikipedia.org/wiki/Lactic_acid',
    sodium_chloride: 'https://en.wikipedia.org/wiki/Sodium_chloride',
    saltpetre: 'https://en.wikipedia.org/wiki/Potassium_nitrate',
    black_lava_salt: 'https://en.wikipedia.org/wiki/Sea_salt',
    kala_namak: 'https://en.wikipedia.org/wiki/Kala_namak',
    caffeine: 'https://en.wikipedia.org/wiki/Caffeine',
    quinine: 'https://en.wikipedia.org/wiki/Quinine',
    charred_wood: 'https://en.wikipedia.org/wiki/Ambergris',
    charred_gourd: 'https://en.wikipedia.org/wiki/Momordica_charantia',
    hops: 'https://en.wikipedia.org/wiki/Hops',
    monosodium_glutamate: 'https://en.wikipedia.org/wiki/Monosodium_glutamate',
    guanylate: 'https://en.wikipedia.org/wiki/Disodium_guanylate',
    white_truffle: 'https://en.wikipedia.org/wiki/Tuber_magnatum',
    matsutake: 'https://en.wikipedia.org/wiki/Matsutake',
    katsuobushi: 'https://en.wikipedia.org/wiki/Katsuobushi',
    roman_garum_ing: 'https://en.wikipedia.org/wiki/Garum',
    capsaicin: 'https://en.wikipedia.org/wiki/Capsaicin',
    allyl_isothiocyanate: 'https://en.wikipedia.org/wiki/Allyl_isothiocyanate',
    sanshool: 'https://en.wikipedia.org/wiki/Sanshool',
    black_garlic: 'https://en.wikipedia.org/wiki/Black_garlic',
    saffron: 'https://en.wikipedia.org/wiki/Saffron',
    asafetida: 'https://en.wikipedia.org/wiki/Asafoetida',
    mastic: 'https://en.wikipedia.org/wiki/Mastic_(plant_resin)',
    tonka_bean: 'https://en.wikipedia.org/wiki/Dipteryx_odorata',
  };

  // Build fallback or exact wiki url
  const getIngredientWikiLink = (ing: Ingredient): string => {
    if (ing.wikiLink) return ing.wikiLink;
    if (baseWikiLinks[ing.id]) return baseWikiLinks[ing.id];

    // Intelligent fallback search term cleanup
    let term = ing.chemicalCompound || ing.name;

    // Extract chemical inside parentheses if it exists, e.g., "Cane Sugar (Sucrose)" -> "Sucrose"
    const parenMatch = ing.name.match(/\(([^)]+)\)/);
    if (parenMatch && parenMatch[1]) {
      const candidate = parenMatch[1].trim();
      // Avoid raw chemical formulas like NaCl or compounds with slashes as fallback titles
      if (!/^[A-Z][a-z]?\d*([A-Z][a-z]?\d*)*$/.test(candidate) && !candidate.includes('/')) {
        term = candidate;
      }
    }

    // Clean up generic terms, strip details
    const cleanTerm = term
      .replace(/Extract|Powder|Thread|Cone|Pulp|Stalks|Vapor|Resin|Tears/gi, '')
      .replace(/\s+/g, ' ')
      .trim();

    return `https://en.wikipedia.org/wiki/${encodeURIComponent(cleanTerm || ing.name)}`;
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-stone-950 text-stone-100 relative min-h-screen" id="food-alchemy-lab">
      {/* Absolute Ambient Shadows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-cyan-500/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-amber-500/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-stone-900 pb-8">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/25 bg-cyan-500/5 text-xs font-mono text-cyan-400">
              <Atom className="w-3.5 h-3.5 animate-spin-slow" />
              <span>Biochemistry & Flavor Science Wiki</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold font-display tracking-tight text-stone-100">
              The Alchemy Lab Wiki
            </h2>
            <p className="text-stone-400 text-sm md:text-base leading-relaxed">
              Explore our massive food science repository. Analyze molecular structures, organic formulas, biochemical reactions, historical timelines, and flavor profiles for over 100 compounds.
            </p>
          </div>

          {/* View Controller & Quick Spec */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <span className="text-xs font-mono text-stone-500 mr-2 hidden sm:inline">
              Catalog Size: {ingredientsData.length} Elements
            </span>
            <div className="inline-flex bg-stone-900 border border-stone-850 p-1 rounded-xl">
              <button
                onClick={() => setViewMode('wiki')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all cursor-pointer ${
                  viewMode === 'wiki'
                    ? 'bg-cyan-500 text-stone-950 font-bold'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
                title="Wiki Catalog List View"
              >
                <List className="w-3.5 h-3.5" />
                <span>Wiki List</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-cyan-500 text-stone-950 font-bold'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
                title="Periodic Table Grid View"
              >
                <Grid className="w-3.5 h-3.5" />
                <span>Atomic Grid</span>
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Filters Console */}
        <div className="bg-stone-900/40 border border-stone-850 p-5 md:p-6 rounded-2xl space-y-4 shadow-xl backdrop-blur-md" id="lab-filters-panel">
          
          {/* Live Search Row */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by ingredient name, chemical compound (e.g., Linalool), formula (C10H18O), or historical notes..."
              className="w-full bg-stone-950/80 border border-stone-850 focus:border-cyan-500/50 rounded-xl py-3 pl-11 pr-4 text-sm text-stone-100 placeholder:text-stone-500 focus:outline-none transition-all shadow-inner font-sans"
              id="wiki-search-input"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-500 hover:text-stone-300 transition-colors p-1"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-3 border-t border-stone-900">
            {/* Primary Taste Filter */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-stone-400 flex items-center gap-1">
                <Filter className="w-3 h-3 text-cyan-400" />
                Taste Spectrum:
              </label>
              <div className="flex flex-wrap gap-1.5">
                {(['All', 'Sweet', 'Sour', 'Salty', 'Bitter', 'Umami', 'Pungent'] as const).map((taste) => (
                  <button
                    key={taste}
                    onClick={() => setSelectedTaste(taste)}
                    className={`px-2.5 py-1 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                      selectedTaste === taste
                        ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-300 font-bold'
                        : 'bg-stone-950 border-stone-850 hover:border-stone-800 text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    {taste}
                  </button>
                ))}
              </div>
            </div>

            {/* Chemical Group Filter */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-stone-400 flex items-center gap-1">
                <Atom className="w-3 h-3 text-cyan-400 animate-pulse" />
                Organic Grouping:
              </label>
              <div className="flex flex-wrap gap-1.5">
                {groups.map((grp) => (
                  <button
                    key={grp.id}
                    onClick={() => setSelectedGroup(grp.id)}
                    className={`px-2.5 py-1 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                      selectedGroup === grp.id
                        ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-300 font-bold'
                        : 'bg-stone-950 border-stone-850 hover:border-stone-800 text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    {grp.label.split(' &')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Historical Era Filter */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-stone-400 flex items-center gap-1">
                <BookOpen className="w-3 h-3 text-cyan-400" />
                Appearance Era:
              </label>
              <div className="flex flex-wrap gap-1.5">
                {([
                  { id: 'All', label: 'All' },
                  { id: 'neolithic', label: 'Neolithic' },
                  { id: 'ancient', label: 'Ancient' },
                  { id: 'medieval', label: 'Medieval' },
                  { id: 'industrial', label: 'Industrial' },
                  { id: 'modern', label: 'Modern' }
                ] as const).map((era) => (
                  <button
                    key={era.id}
                    onClick={() => setSelectedEra(era.id)}
                    className={`px-2.5 py-1 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                      selectedEra === era.id
                        ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-300 font-bold'
                        : 'bg-stone-950 border-stone-850 hover:border-stone-800 text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    {era.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Grid View Mode */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5" id="periodic-elements-grid">
            <AnimatePresence mode="popLayout">
              {filteredIngredients.map((ing) => (
                <motion.div
                  key={ing.id}
                  layout
                  initial={{ opacity: 0, scale: 0.93 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.93 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setActiveIngredient(ing)}
                  className={`group relative p-4 bg-stone-900/60 rounded-xl border border-stone-850 hover:bg-stone-900 cursor-pointer flex flex-col justify-between aspect-square transition-all shadow-md ${getTasteGlowColor(
                    ing.taste
                  )}`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono text-stone-400">
                    <span className="font-semibold">{ing.molecularWeight.toFixed(1)}</span>
                    <span className={`px-1.5 py-0.5 rounded border text-[9px] ${getTasteBadgeColor(ing.taste)}`}>
                      {ing.taste}
                    </span>
                  </div>

                  <div className="text-center my-1.5">
                    <span className="text-3xl font-extrabold font-display tracking-tight bg-gradient-to-tr from-stone-50 to-stone-300 bg-clip-text text-transparent group-hover:scale-105 transition-transform inline-block">
                      {ing.symbol}
                    </span>
                    <span className="text-xs font-semibold tracking-wide text-stone-200 block truncate mt-1">
                      {ing.name.split(' (')[0]}
                    </span>
                  </div>

                  <div className="flex flex-col items-center text-[10px] font-mono text-stone-500 border-t border-stone-850/40 pt-1.5 mt-1">
                    <span className="text-[9px] text-cyan-400/90 truncate w-full text-center">
                      {ing.formula}
                    </span>
                    <span className="text-[8px] text-stone-500 truncate w-full text-center mt-0.5">
                      {getIngredientGroup(ing)}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Wiki Explorer View Mode */}
        {viewMode === 'wiki' && (
          <div className="bg-stone-900/20 border border-stone-850 rounded-2xl overflow-hidden shadow-xl" id="wiki-catalog-list">
            {/* Table Header - Hidden on mobile */}
            <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-stone-900 border-b border-stone-850 text-xs font-mono uppercase tracking-wider text-stone-400">
              <div className="col-span-1">Symbol</div>
              <div className="col-span-3">Chemical Compound / Ingredient</div>
              <div className="col-span-2">Taste Spectrum</div>
              <div className="col-span-2">Biochemical Family</div>
              <div className="col-span-1">Formula</div>
              <div className="col-span-2">Era appearance</div>
              <div className="col-span-1 text-right">Actions</div>
            </div>

            {/* List Body */}
            <div className="divide-y divide-stone-900 max-h-[800px] overflow-y-auto custom-scrollbar">
              <AnimatePresence mode="popLayout">
                {filteredIngredients.map((ing, idx) => (
                  <motion.div
                    key={ing.id}
                    layout
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, delay: Math.min(idx * 0.015, 0.15) }}
                    onClick={() => setActiveIngredient(ing)}
                    className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 px-5 py-4 md:items-center hover:bg-stone-900/70 cursor-pointer group transition-colors relative"
                  >
                    {/* Symbol / Atomic Block on mobile */}
                    <div className="col-span-1 flex items-center gap-3 md:block">
                      <div className="w-11 h-11 bg-stone-950 border border-stone-850 group-hover:border-cyan-500/30 rounded-lg flex items-center justify-center font-mono font-bold text-lg text-cyan-400 shadow-inner">
                        {ing.symbol}
                      </div>
                      <div className="md:hidden">
                        <span className="text-xs font-mono text-stone-500">{ing.molecularWeight.toFixed(1)} g/mol</span>
                        <h4 className="text-base font-bold font-display text-stone-200 leading-snug">{ing.name}</h4>
                      </div>
                    </div>

                    {/* Desktop Name info */}
                    <div className="col-span-3 hidden md:block">
                      <h4 className="text-sm font-bold text-stone-100 group-hover:text-cyan-300 transition-colors">
                        {ing.name}
                      </h4>
                      <span className="text-[11px] font-mono text-stone-400 italic block">
                        {ing.chemicalCompound || 'Primary Element'}
                      </span>
                    </div>

                    {/* Taste profile badge */}
                    <div className="col-span-2 flex items-center">
                      <span className="md:hidden text-xs font-mono text-stone-500 w-24">Taste:</span>
                      <span className={`px-2.5 py-0.5 text-[10px] font-mono border rounded-md ${getTasteBadgeColor(ing.taste)}`}>
                        {ing.taste}
                      </span>
                    </div>

                    {/* Dynamic group label */}
                    <div className="col-span-2 flex items-center text-xs font-mono text-stone-300">
                      <span className="md:hidden text-xs font-mono text-stone-500 w-24">Group:</span>
                      <span>{getIngredientGroup(ing)}</span>
                    </div>

                    {/* Chemical Formula */}
                    <div className="col-span-1 flex items-center text-xs font-mono text-cyan-400">
                      <span className="md:hidden text-xs font-mono text-stone-500 w-24">Formula:</span>
                      <span className="truncate">{ing.formula}</span>
                    </div>

                    {/* Historical Appearance */}
                    <div className="col-span-2 flex items-center text-xs text-stone-400 font-sans">
                      <span className="md:hidden text-xs font-mono text-stone-500 w-24">Historical Era:</span>
                      <span className="capitalize">{ing.historicalAppearance}</span>
                    </div>

                    {/* Action Arrow / Button */}
                    <div className="col-span-1 flex items-center justify-end">
                      <button className="flex items-center gap-1 text-[11px] font-mono text-cyan-400 bg-cyan-500/5 group-hover:bg-cyan-500/10 border border-cyan-500/20 group-hover:border-cyan-500/40 px-3 py-1.5 rounded-lg transition-all cursor-pointer">
                        <span>Study</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* Empty Search Results */}
        {filteredIngredients.length === 0 && (
          <div className="text-center py-16 border border-stone-900 rounded-2xl bg-stone-900/10 space-y-3">
            <Atom className="w-10 h-10 text-stone-700 mx-auto animate-pulse" />
            <h3 className="text-lg font-bold font-display text-stone-300">No Wiki Articles Found</h3>
            <p className="text-sm font-sans text-stone-400 max-w-md mx-auto">
              No chemical compounds or taste elements match your search filter query <span className="text-cyan-400 font-mono">"{searchQuery}"</span>. Try adjusting your spectrum filters or spelling.
            </p>
          </div>
        )}

        {/* Detailed Compound Wiki Modal */}
        <AnimatePresence>
          {activeIngredient && (
            <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-md p-4 flex justify-center items-start" id="element-modal">
              {/* Backdrop Closer */}
              <div className="fixed inset-0" onClick={() => setActiveIngredient(null)} />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="relative bg-stone-900 border border-stone-800 rounded-2xl w-full max-w-2xl my-auto p-6 md:p-8 shadow-2xl z-10 space-y-6"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveIngredient(null)}
                  className="absolute top-4 right-4 p-2 bg-stone-950/60 hover:bg-stone-950 rounded-full border border-stone-850 text-stone-400 hover:text-stone-200 transition-all cursor-pointer"
                  id="close-element-modal"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Modal Title Block */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-850 pb-5">
                  <div className="flex items-center gap-3.5">
                    {/* Symbol Block */}
                    <div className="w-16 h-16 bg-stone-950 border border-stone-850 rounded-xl flex flex-col justify-center items-center font-mono shadow-inner">
                      <span className="text-[9px] text-stone-500">{activeIngredient.molecularWeight.toFixed(1)}</span>
                      <span className="text-2xl font-extrabold text-cyan-400 font-display leading-none">{activeIngredient.symbol}</span>
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-1.5 mb-1">
                        <span className={`px-2 py-0.5 text-[9px] font-mono border rounded-md inline-block uppercase font-bold tracking-wide ${getTasteBadgeColor(activeIngredient.taste)}`}>
                          {activeIngredient.taste} profile
                        </span>
                        <span className="px-2 py-0.5 text-[9px] font-mono border border-stone-800 text-stone-400 bg-stone-950 rounded-md">
                          {getIngredientGroup(activeIngredient)}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-extrabold font-display text-stone-100 leading-tight">
                        {activeIngredient.name}
                      </h3>
                    </div>
                  </div>

                  <div className="text-left sm:text-right font-mono text-xs border-t sm:border-t-0 border-stone-850 pt-2.5 sm:pt-0">
                    <span className="text-stone-500 block">Chemical Formula</span>
                    <span className="text-sm font-semibold text-cyan-400">{activeIngredient.formula}</span>
                    <span className="text-[10px] text-stone-500 block mt-0.5">Mass: {activeIngredient.molecularWeight} g/mol</span>
                  </div>
                </div>

                {/* Compound Breakdown & Structural Reaction */}
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold block flex items-center gap-1.5">
                    <Atom className="w-4 h-4 text-cyan-400" />
                    Biochemical Action & Structure
                  </span>
                  <div className="text-sm text-stone-300 leading-relaxed font-sans bg-stone-950/40 p-4 rounded-xl border border-stone-850/50">
                    {activeIngredient.breakdown}
                  </div>
                </div>

                {/* Educational Link - Highlighted UX Requirement */}
                <div className="bg-cyan-500/5 border border-cyan-500/20 p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="space-y-0.5 text-center sm:text-left">
                    <span className="text-xs font-mono text-cyan-300 font-semibold flex items-center justify-center sm:justify-start gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      Educational Wiki Link
                    </span>
                    <p className="text-xs text-stone-400 font-sans">
                      Deepen your learning. Consult verified external literature and biochemistry indices.
                    </p>
                  </div>
                  <a
                    href={getIngredientWikiLink(activeIngredient)}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-stone-950 text-xs uppercase font-mono font-bold tracking-wider rounded-xl transition-all cursor-pointer hover:scale-103"
                    id={`wiki-link-${activeIngredient.id}`}
                  >
                    <span>Read Wiki Article</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Historical Context */}
                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase text-orange-400 font-bold block">
                      Historical Appearance
                    </span>
                    <div className="p-3 bg-stone-950/20 border border-stone-850/60 rounded-xl">
                      <p className="text-xs text-stone-300 leading-relaxed font-sans">
                        {activeIngredient.discovery}
                      </p>
                    </div>
                  </div>

                  {/* Flavor Pairings */}
                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase text-emerald-400 font-bold block">
                      Biochemical Flavor Pairings
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeIngredient.pairings.map((pair) => (
                        <span
                          key={pair}
                          className="px-2.5 py-1 text-xs bg-stone-950 border border-stone-850 text-stone-300 rounded-lg"
                        >
                          {pair}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Additional Metadata Spec */}
                <div className="flex items-center justify-between border-t border-stone-850 pt-5 text-[11px] font-mono text-stone-500">
                  <span>Rarity Classification: <span className="text-amber-500 font-semibold">{activeIngredient.rarity}</span></span>
                  <span>Timeline Entry: <span className="text-stone-300 font-semibold capitalize">{activeIngredient.historicalAppearance}</span></span>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
