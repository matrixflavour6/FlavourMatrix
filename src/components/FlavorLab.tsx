import React, { useState } from 'react';
import { flavorProfiles, allIngredientsDatabase } from '../data/flavors';
import { FlavorProfile, Pairing, CatalogIngredient, IngredientCategory } from '../types';
import { Search, Filter, FlaskConical, Sparkles, Bookmark, BookmarkCheck, Heart, Info, ChevronRight, HelpCircle, ArrowRight, Activity, Beaker } from 'lucide-react';

interface FlavorLabProps {
  savedPairingIds: string[];
  onToggleSavePairing: (id: string) => void;
}

export default function FlavorLab({ savedPairingIds, onToggleSavePairing }: FlavorLabProps) {
  // Main Taste Pillar selection
  const [activeTasteId, setActiveTasteId] = useState<'sweet' | 'sour' | 'salty' | 'bitter' | 'umami'>('umami');
  
  // Selection within the active taste catalog
  const [selectedIngredientName, setSelectedIngredientName] = useState<string>('Garlic');
  const [searchQuery, setSearchQuery] = useState('');

  // Sandbox State
  const [sandboxIngredientA, setSandboxIngredientA] = useState<string>('garlic');
  const [sandboxIngredientB, setSandboxIngredientB] = useState<string>('soy_sauce');

  // Find active category configuration
  const activeCategory = allIngredientsDatabase.find(c => c.id === activeTasteId) || allIngredientsDatabase[4];
  const theme = activeCategory.colorTheme;

  // Search filter across ALL ingredients or active category
  const filteredCatalogCategories = allIngredientsDatabase.map(cat => {
    const matchedIngredients = cat.ingredients.filter(ing => {
      const matchesSearch = ing.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            ing.chemicalCompounds.some(c => c.toLowerCase().includes(searchQuery.toLowerCase())) ||
                            (ing.subCategory && ing.subCategory.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesSearch;
    });

    return {
      ...cat,
      ingredients: matchedIngredients
    };
  }).filter(cat => cat.ingredients.length > 0);

  // If we filter, are we currently looking inside the active taste, or showing search results?
  const isSearching = searchQuery.trim() !== '';

  // Retrieve current selected ingredient detail (if interactive)
  const activeInteractiveProfile = flavorProfiles.find(p => p.name.toLowerCase() === selectedIngredientName.toLowerCase());
  
  // Find standard static ingredient details from the catalog if not fully interactive
  const activeCatalogIngredient = allIngredientsDatabase
    .flatMap(c => c.ingredients)
    .find(ing => ing.name.toLowerCase() === selectedIngredientName.toLowerCase());

  // Handle select ingredient
  const handleSelectIngredient = (name: string, categoryId: 'sweet' | 'sour' | 'salty' | 'bitter' | 'umami') => {
    setSelectedIngredientName(name);
    setActiveTasteId(categoryId);
  };

  // Run dynamic matchmaking logic for the sandbox
  const getSandboxResult = () => {
    const profileA = flavorProfiles.find(p => p.id === sandboxIngredientA);
    const profileB = flavorProfiles.find(p => p.id === sandboxIngredientB);

    if (!profileA || !profileB) return null;

    if (profileA.id === profileB.id) {
      return {
        score: 100,
        explanation: "This is the identical molecular specimen. Pairing an ingredient with itself creates a uniform concentration of volatile esters, but adds zero aromatic contrast.",
        tip: "Pair with complementary taste pillars to build sensory rhythm."
      };
    }

    // Check for explicit hardcoded pairing in profile A
    const explicitPairing = profileA.pairings.find(p => p.ingredientId === profileB.id);
    if (explicitPairing) {
      return {
        score: explicitPairing.matchScore,
        explanation: explicitPairing.chemicalExplanation,
        tip: explicitPairing.culinaryTip
      };
    }

    // Check for explicit hardcoded pairing in profile B
    const explicitPairingB = profileB.pairings.find(p => p.ingredientId === profileA.id);
    if (explicitPairingB) {
      return {
        score: explicitPairingB.matchScore,
        explanation: explicitPairingB.chemicalExplanation,
        tip: explicitPairingB.culinaryTip
      };
    }

    // Dynamic procedural pairing generator
    const charSum = profileA.id.charCodeAt(0) + profileB.id.charCodeAt(profileB.id.length - 1);
    const score = Math.floor(68 + (charSum % 27)); // realistic score range [68, 94]%

    let explanation = "";
    let tip = "";

    if (profileA.category === profileB.category) {
      explanation = `Both elements fall under the '${profileA.category.toUpperCase()}' pillar. They share primary volatile properties and overlapping receptor thresholds, reinforcing taste intensity but offering modest aromatic complexity.`;
      tip = `Use as a foundational base, but introduce a contrasting acid or salt to lift the mixture.`;
    } else if (
      (profileA.category === 'sweet' && profileB.category === 'sour') ||
      (profileA.category === 'sour' && profileB.category === 'sweet')
    ) {
      explanation = `A classic contrast bridge. The sharp organic acids (citric/lactic) from the sour component excite the salivary glands, while the saccharides in the sweet component temper taste-bud contraction, resulting in a perfectly balanced sweet-tart synergy.`;
      tip = `Incorporate high-acid droplets as a finishing glaze over caramelized bases.`;
    } else if (
      (profileA.category === 'salty' && profileB.category === 'umami') ||
      (profileA.category === 'umami' && profileB.category === 'salty')
    ) {
      explanation = `High-density synergistic coupling. Free glutamic acids in the umami specimen match perfectly with sodium ions from the salty component. This binds more securely to taste cells, yielding up to an 8-fold increase in perceived savoriness.`;
      tip = `Season slow-braises with salty fermentates at the end of cooking to preserve volatile notes.`;
    } else if (
      (profileA.category === 'bitter' && profileB.category === 'sweet') ||
      (profileA.category === 'sweet' && profileB.category === 'bitter')
    ) {
      explanation = `A sensory masking phenomenon. Lipids and sucrose sugars bind with bitter receptor sites, neutralizing harsh alkaloids and elevating roasted, nutty, and pyrazine notes.`;
      tip = `Emulsify bitter elements into warm sweet fats (like cocoa fats or butter) to stabilize the emulsion.`;
    } else {
      explanation = `Aromatic terpene alignment. The volatile sesquiterpenes of ${profileA.name} dissolve seamlessly into the lipid structure of ${profileB.name}, establishing a complex, lipid-soluble flavor channel that registers on both olfactory and palate nodes.`;
      tip = `Heat both elements gently in cooking fat before combining with other liquids to bind volatile esters.`;
    }

    return { score, explanation, tip };
  };

  const sandboxResult = getSandboxResult();

  return (
    <section className="py-16 bg-white" id="flavor-lab-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider text-zinc-900 mb-4">
            <FlaskConical className="h-3.5 w-3.5" />
            Molecular Flavour Station
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
            The 5 Pillars of Culinary Chemistry
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-500">
            Explore the five core flavor profiles. Browse all ingredients known to gastronomy, isolate volatile compounds, and solve chemical couplings.
          </p>
        </div>

        {/* PILLARS GRID: The 5 Fundamental Flavours */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-5 gap-4">
          {allIngredientsDatabase.map((pillar) => {
            const isActive = activeTasteId === pillar.id;
            const pTheme = pillar.colorTheme;
            return (
              <button
                key={pillar.id}
                onClick={() => {
                  setActiveTasteId(pillar.id);
                  // Auto-select first interactive ingredient of that category
                  const firstInteractive = pillar.ingredients.find(ing => ing.isInteractive);
                  if (firstInteractive) {
                    setSelectedIngredientName(firstInteractive.name);
                  } else if (pillar.ingredients.length > 0) {
                    setSelectedIngredientName(pillar.ingredients[0].name);
                  }
                }}
                className={`text-left rounded-2xl border p-5 transition-all relative overflow-hidden group ${
                  isActive
                    ? `${pTheme.bg} ${pTheme.border} shadow-md scale-[1.02] ring-2 ring-zinc-900/10`
                    : 'bg-white border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50/50 hover:scale-[1.01]'
                }`}
                id={`pillar-${pillar.id}`}
              >
                {/* Visual Accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${pTheme.accent}`} />
                
                <span className="block font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                  Taste Pillar 0{allIngredientsDatabase.indexOf(pillar) + 1}
                </span>
                
                <h3 className={`mt-1 font-display text-lg font-black tracking-tight ${isActive ? pTheme.text : 'text-zinc-900'}`}>
                  {pillar.name}
                </h3>

                <div className="mt-3 flex flex-wrap gap-1">
                  {pillar.chemicalSignatures.slice(0, 2).map(sig => (
                    <span key={sig} className="text-[9px] font-mono font-medium px-1.5 py-0.5 rounded bg-zinc-950/5 text-zinc-600 uppercase">
                      {sig}
                    </span>
                  ))}
                </div>

                <p className="mt-3 text-[11px] leading-relaxed text-zinc-500 font-medium group-hover:text-zinc-600 line-clamp-3">
                  {pillar.scientificDescription}
                </p>
              </button>
            );
          })}
        </div>

        {/* MASTER LAB WORKBENCH LAYOUT */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          
          {/* LEFT PANEL: The Ultimate Ingredient Catalog (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            
            {/* Search Box */}
            <div className="rounded-xl border border-zinc-200 bg-zinc-50/40 p-4 text-left">
              <span className="block font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">Search Catalog</span>
              <div className="relative">
                <Search className="absolute top-3 left-3 h-4 w-4 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Search 80+ chemical ingredients..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full h-10 rounded-lg border border-zinc-200 bg-white pl-9 pr-3 text-xs focus:border-zinc-900 focus:outline-none transition-colors font-medium shadow-sm"
                  id="lab-search-input"
                />
              </div>
            </div>

            {/* Ingredient List Container */}
            <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm flex flex-col h-[520px]">
              
              {/* Header inside list */}
              <div className={`p-4 border-b border-zinc-100 flex items-center justify-between ${theme.bg}`}>
                <div>
                  <h4 className="font-display text-xs font-black uppercase tracking-wider text-zinc-800">
                    {isSearching ? 'Search Results' : `${activeCategory.name} Catalog`}
                  </h4>
                  <p className="text-[10px] text-zinc-500 font-mono mt-0.5">
                    {isSearching 
                      ? `${filteredCatalogCategories.flatMap(c => c.ingredients).length} matching items` 
                      : `${activeCategory.ingredients.length} species sorted under ${activeCategory.name}`}
                  </p>
                </div>
                <FlaskConical className="h-4 w-4 text-zinc-400" />
              </div>

              {/* Scrollable list */}
              <div className="overflow-y-auto divide-y divide-zinc-100 flex-grow scrollbar-thin">
                {isSearching ? (
                  filteredCatalogCategories.map((cat) => (
                    <div key={cat.id} className="bg-zinc-50/50">
                      <div className="px-4 py-1.5 bg-zinc-100/80 border-y border-zinc-200/40 text-[9px] font-mono font-bold text-zinc-500 uppercase tracking-widest text-left">
                        {cat.name} Taste Pillar
                      </div>
                      <div>
                        {cat.ingredients.map((ing) => {
                          const isSelected = ing.name.toLowerCase() === selectedIngredientName.toLowerCase();
                          return (
                            <button
                              key={ing.name}
                              onClick={() => handleSelectIngredient(ing.name, cat.id)}
                              className={`w-full flex items-center justify-between px-4 py-3 text-left transition-colors ${
                                isSelected ? 'bg-zinc-900 text-white' : 'hover:bg-zinc-100/70 text-zinc-700'
                              }`}
                            >
                              <div className="flex flex-col">
                                <span className="font-display text-sm font-bold flex items-center gap-1.5">
                                  {ing.name}
                                  {ing.isInteractive ? (
                                    <span className={`text-[8px] font-mono font-black uppercase tracking-wide px-1 rounded border ${isSelected ? 'border-zinc-700 text-zinc-300' : 'bg-zinc-100 border-zinc-200 text-zinc-600'}`}>
                                      Active Specimen
                                    </span>
                                  ) : (
                                    <span className="text-[8px] font-mono font-semibold text-zinc-400">Catalog Entry</span>
                                  )}
                                </span>
                                <span className={`text-[10px] font-mono leading-none mt-1 ${isSelected ? 'text-zinc-400' : 'text-zinc-400'}`}>
                                  {ing.subCategory || 'Culinary Element'} • {ing.chemicalCompounds[0]}
                                </span>
                              </div>
                              <ChevronRight className={`h-4 w-4 shrink-0 ${isSelected ? 'text-white' : 'text-zinc-300'}`} />
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))
                ) : (
                  activeCategory.ingredients.map((ing) => {
                    const isSelected = ing.name.toLowerCase() === selectedIngredientName.toLowerCase();
                    return (
                      <button
                        key={ing.name}
                        onClick={() => handleSelectIngredient(ing.name, activeTasteId)}
                        className={`w-full flex items-center justify-between px-4 py-3 text-left transition-all ${
                          isSelected ? 'bg-zinc-900 text-white shadow-inner' : 'hover:bg-zinc-50 text-zinc-700'
                        }`}
                        id={`ingredient-item-${ing.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        <div className="flex flex-col">
                          <span className="font-display text-sm font-bold flex items-center gap-1.5">
                            {ing.name}
                            {ing.isInteractive && (
                              <span className={`text-[8px] font-mono font-black uppercase tracking-wide px-1 rounded border ${
                                isSelected ? 'border-zinc-700 text-zinc-300 bg-zinc-800' : 'bg-zinc-50 border-zinc-200 text-zinc-600'
                              }`}>
                                Volatiles Probed
                              </span>
                            )}
                          </span>
                          <span className={`text-[10px] font-mono leading-none mt-1 ${isSelected ? 'text-zinc-400' : 'text-zinc-400'}`}>
                            {ing.subCategory || 'Specimen'} • {ing.chemicalCompounds.slice(0, 2).join(', ')}
                          </span>
                        </div>
                        <ChevronRight className={`h-4 w-4 shrink-0 ${isSelected ? 'text-white' : 'text-zinc-300'}`} />
                      </button>
                    );
                  })
                )}

                {filteredCatalogCategories.length === 0 && (
                  <div className="p-8 text-center text-zinc-400 font-mono text-xs">
                    No matching flavor specimens catalogued.
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* RIGHT PANEL: Molecular Analysis Chamber & Synergy Results (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* ACTIVE INGREDIENT DETAIL SHEET */}
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 text-left relative overflow-hidden shadow-sm">
              <FlaskConical className="absolute right-6 top-6 h-28 w-28 text-zinc-900/[0.02] stroke-[1] -mr-4 -mt-4 pointer-events-none" />

              {/* Top Meta info */}
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider border ${theme.badge}`}>
                    {activeCategory.name} Pillar Specimen
                  </div>
                  <h3 className="mt-1.5 font-display text-2xl font-extrabold text-zinc-900 tracking-tight sm:text-3xl">
                    {activeCatalogIngredient?.name}
                  </h3>
                  <p className="mt-1 text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest">
                    Sub-class: <span className="text-zinc-900">{activeCatalogIngredient?.subCategory || 'Unclassified Element'}</span>
                  </p>
                </div>

                {/* Favorite/Save Button (Only for interactive profiles) */}
                {activeInteractiveProfile && (
                  <button
                    onClick={() => onToggleSavePairing(activeInteractiveProfile.id)}
                    className={`inline-flex items-center gap-1.5 rounded-lg border px-3.5 py-2 text-xs font-mono font-semibold transition-all shadow-sm ${
                      savedPairingIds.includes(activeInteractiveProfile.id)
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-800 hover:bg-emerald-100'
                        : 'bg-white border-zinc-200 text-zinc-700 hover:bg-zinc-50'
                    }`}
                    id="save-profile-btn"
                  >
                    {savedPairingIds.includes(activeInteractiveProfile.id) ? (
                      <>
                        <BookmarkCheck className="h-4 w-4 text-emerald-600 fill-emerald-100" />
                        <span>SAVED PROTOCOL</span>
                      </>
                    ) : (
                      <>
                        <Bookmark className="h-4 w-4 text-zinc-400" />
                        <span>SAVE SPECS</span>
                      </>
                    )}
                  </button>
                )}
              </div>

              {/* Chemical Compounds & Description */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-zinc-200/60 pt-5">
                <div>
                  <span className="block font-mono text-[10px] text-zinc-400 uppercase tracking-wider font-bold">Key Molecular Compounds</span>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {activeCatalogIngredient?.chemicalCompounds.map((comp) => (
                      <span key={comp} className="inline-flex rounded-md bg-white border border-zinc-200 px-2.5 py-1 text-xs font-mono text-zinc-700 shadow-sm font-semibold">
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="block font-mono text-[10px] text-zinc-400 uppercase tracking-wider font-bold">Organoleptic Specimen Bio</span>
                  <p className="mt-2 text-xs text-zinc-600 leading-relaxed font-semibold">
                    {activeInteractiveProfile 
                      ? activeInteractiveProfile.description 
                      : `A key culinary element recognized for its high concentration of ${activeCatalogIngredient?.chemicalCompounds.join(' and ')}. Crucial for establishing clean notes in the base layer of recipes.`}
                  </p>
                </div>
              </div>

              {/* Deeper Science Explanation (Premium Specimen Only) */}
              {activeInteractiveProfile ? (
                <div className="mt-5 rounded-xl bg-zinc-900 p-4 text-left shadow-inner">
                  <span className="block font-mono text-[9px] text-amber-400 uppercase tracking-wider font-extrabold">Biochemical Synthesis Log</span>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-300 font-mono">
                    {activeInteractiveProfile.scienceExplanation}
                  </p>
                </div>
              ) : (
                <div className="mt-5 rounded-xl bg-zinc-50 border border-dashed border-zinc-200 p-4 text-left">
                  <span className="block font-mono text-[9px] text-zinc-500 uppercase tracking-wider font-bold">Molecular Density Note</span>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-500 font-sans font-medium">
                    This specimen is currently logged in the general catalog directory. Complete volatile gas chromatography profiling is restricted to active laboratory specimens. Select an active specimen (like <span className="font-bold underline">{activeCategory.ingredients.find(i => i.isInteractive)?.name || 'Garlic'}</span>) to trigger full synergy charts!
                  </p>
                </div>
              )}
            </div>

            {/* SYNERGY CARDS (Show pairings if active ingredient is fully interactive) */}
            {activeInteractiveProfile && (
              <>
                <div className="text-left border-b border-zinc-100 pb-3 mt-2">
                  <h4 className="font-display text-lg font-bold text-zinc-900 flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-zinc-900 fill-zinc-900/10 stroke-[1.8]" />
                    Scientific Synergy Pairings for {activeInteractiveProfile.name}
                  </h4>
                  <p className="text-xs text-zinc-400 mt-0.5">Calculated using covalent alignment thresholds and volatile gas overlapping quotients.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {activeInteractiveProfile.pairings.map((pairing) => (
                    <div key={pairing.ingredientId} className="rounded-xl border border-zinc-200 bg-white p-5 text-left flex flex-col justify-between shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
                      
                      {/* Score Indicator Ring */}
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="block font-mono text-[9px] text-zinc-400 uppercase font-semibold">Matched Specimen</span>
                          <h5 className="font-display text-base font-extrabold text-zinc-900 tracking-tight mt-0.5">
                            {pairing.ingredientName}
                          </h5>
                        </div>
                        
                        {/* Score badge */}
                        <div className="flex flex-col items-center">
                          <span className="font-display text-lg font-black text-zinc-950 leading-none">{pairing.matchScore}%</span>
                          <span className="text-[8px] font-mono text-emerald-600 uppercase tracking-wider font-black">Synergy</span>
                        </div>
                      </div>

                      {/* Percentage Progress Bar */}
                      <div className="w-full bg-zinc-100 h-1.5 rounded-full mt-3 overflow-hidden">
                        <div 
                          className="bg-zinc-900 h-1.5 rounded-full group-hover:bg-zinc-700 transition-all duration-500" 
                          style={{ width: `${pairing.matchScore}%` }}
                        />
                      </div>

                      {/* Scientific Explanation */}
                      <div className="mt-4 flex-grow">
                        <span className="block font-mono text-[9px] text-zinc-400 uppercase tracking-wider font-bold">Biochemical Coupling</span>
                        <p className="mt-1 text-xs text-zinc-600 leading-relaxed font-sans font-medium">
                          {pairing.chemicalExplanation}
                        </p>
                      </div>

                      {/* Culinary Tip */}
                      <div className="mt-4 border-t border-zinc-100 pt-3.5 bg-zinc-50 -mx-5 -mb-5 px-5 py-3 rounded-b-xl">
                        <span className="block font-mono text-[9px] text-zinc-500 uppercase tracking-wider font-bold">Laboratory Application Protocol</span>
                        <p className="mt-1 text-xs text-zinc-700 italic font-semibold leading-normal">
                          &ldquo;{pairing.culinaryTip}&rdquo;
                        </p>
                      </div>

                    </div>
                  ))}
                </div>
              </>
            )}

            {/* BIOCHEMICAL MATCHER SANDBOX */}
            <div className="rounded-2xl border border-zinc-200 bg-zinc-950 p-6 text-left text-white shadow-xl mt-4 relative overflow-hidden">
              {/* Decorative graphic background */}
              <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial-gradient from-zinc-800/10 to-transparent pointer-events-none" />
              
              <div className="flex items-center gap-2 border-b border-zinc-800 pb-3 mb-6">
                <Beaker className="h-5 w-5 text-amber-400" />
                <div>
                  <h4 className="font-display text-lg font-extrabold text-white tracking-tight">Biochemical Synergy Matcher Sandbox</h4>
                  <p className="text-[11px] text-zinc-400 font-mono">Simulate a covalent union between any two volatile-probed ingredients in our grid.</p>
                </div>
              </div>

              {/* Selector interface */}
              <div className="grid grid-cols-1 sm:grid-cols-11 items-center gap-4">
                {/* Ingredient A */}
                <div className="sm:col-span-4 flex flex-col gap-1.5">
                  <label className="font-mono text-[9px] text-zinc-400 uppercase tracking-wider font-bold">Element Alpha</label>
                  <select 
                    value={sandboxIngredientA}
                    onChange={(e) => setSandboxIngredientA(e.target.value)}
                    className="w-full h-11 bg-zinc-900 border border-zinc-800 rounded-lg px-3.5 text-xs text-white focus:outline-none focus:border-amber-400 font-display font-semibold"
                  >
                    {flavorProfiles.map(p => (
                      <option key={p.id} value={p.id}>{p.name}</option>
                    ))}
                  </select>
                </div>

                {/* Connection Line */}
                <div className="sm:col-span-3 flex flex-col items-center justify-center">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase font-black">Covalent Bond</span>
                  <div className="flex items-center gap-1.5 mt-2">
                    <div className="h-0.5 w-6 bg-zinc-800" />
                    <Activity className="h-4 w-4 text-amber-400 animate-pulse" />
                    <div className="h-0.5 w-6 bg-zinc-800" />
                  </div>
                </div>

                {/* Ingredient B */}
                <div className="sm:col-span-4 flex flex-col gap-1.5">
                  <label className="font-mono text-[9px] text-zinc-400 uppercase tracking-wider font-bold">Element Beta</label>
                  <select 
                    value={sandboxIngredientB}
                    onChange={(e) => setSandboxIngredientB(e.target.value)}
                    className="w-full h-11 bg-zinc-900 border border-zinc-800 rounded-lg px-3.5 text-xs text-white focus:outline-none focus:border-amber-400 font-display font-semibold"
                  >
                    {flavorProfiles.map(p => (
                      <option key={p.id} value={p.id}>{p.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Result output display */}
              {sandboxResult && (
                <div className="mt-6 bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 relative">
                  <div className="flex items-center justify-between flex-wrap gap-4 border-b border-zinc-800 pb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="h-12 w-12 rounded-full border border-amber-500/20 bg-amber-500/10 flex items-center justify-center font-display text-xl font-black text-amber-400">
                        {sandboxResult.score}%
                      </div>
                      <div>
                        <h5 className="font-display text-sm font-extrabold text-white">Compound Coupling Index</h5>
                        <p className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider font-bold">
                          {sandboxResult.score >= 90 ? 'High Chemical Compatibility' : sandboxResult.score >= 80 ? 'Optimal Contrast Pairing' : 'Cohesive Aromatic Companion'}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-1 md:grid-cols-12 gap-4 text-left">
                    <div className="md:col-span-7">
                      <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider font-bold block">Biochemical Explanation</span>
                      <p className="mt-1 text-xs text-zinc-300 leading-relaxed font-sans font-medium">
                        {sandboxResult.explanation}
                      </p>
                    </div>
                    <div className="md:col-span-5 border-t md:border-t-0 md:border-l border-zinc-800 pt-3 md:pt-0 md:pl-4">
                      <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider font-bold block">Culinary Application Protocol</span>
                      <p className="mt-1 text-xs italic text-amber-200 leading-normal font-semibold">
                        &ldquo;{sandboxResult.tip}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
