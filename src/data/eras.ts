import { Era } from '../types';

export const erasData: Era[] = [
  {
    id: 'neolithic',
    name: 'Neolithic Era',
    range: '10,000 BCE – 4,000 BCE',
    description: 'The Dawn of Agriculture, Fire-Roasting, and Wild Grains',
    longDescription: 'At the end of the last Ice Age, humanity transitioned from nomadic foraging to settled agricultural communities. This era witnessed the spark of food science: controlled fire-cooking to denature proteins, the domestication of wild wheat and barley, and the earliest accidental fermentations of porridge and wild honey.',
    themeColor: 'amber-750',
    accentColor: '#B45309', // amber-700
    bgGradient: 'from-amber-950 via-stone-900 to-stone-950',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80', // Ancient hearth/fire
    scienceFocus: 'Maillard Reaction & Protein Denaturation via Open Flames',
    evolutionImpact: 'Cooking unlocked high-density calories, which fueled rapid human brain development and community gathering around central hearths.'
  },
  {
    id: 'ancient',
    name: 'Ancient Civilizations',
    range: '4,000 BCE – 500 CE',
    description: 'The Science of Preservation, Salt, Fermentation, and Bread Baking',
    longDescription: 'In Mesopotamia, Ancient Egypt, and Rome, food science became organized. The Egyptians isolated wild yeasts to perfect bread baking, while Romans pioneered complex fermentation with "Garum" (fermented fish sauce), studying salinity levels to preserve meats and fish for long military campaigns.',
    themeColor: 'orange-600',
    accentColor: '#EA580C', // orange-600
    bgGradient: 'from-amber-900 via-stone-900 to-amber-950',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80', // Ancient baking/bread
    scienceFocus: 'Saccahromyces Cerevisiae (Yeast) and Osmotic Pressure Preservation',
    evolutionImpact: 'Sustained large-scale empire building by allowing food to be stored, transported, and cataloged without immediate spoilage.'
  },
  {
    id: 'medieval',
    name: 'Medieval Age',
    range: '500 CE – 1500 CE',
    description: 'Spices, Herbal Alchemy, and Distillation',
    longDescription: 'Medieval scholars, heavily influenced by Islamic alchemy, refined the process of distillation to extract essential oils, alcohol, and medicine. High-status feasts utilized exotic spices (cinnamon, cloves, cardamom) not just for status, but to understand flavor profiling and the early medical science of "humoral balance".',
    themeColor: 'purple-600',
    accentColor: '#9333EA', // purple-600
    bgGradient: 'from-purple-950 via-stone-950 to-stone-900',
    image: 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=1200&q=80', // Spices, herbs, medieval jars
    scienceFocus: 'Distillation of Volatile Compounds and Lipid Solubilities',
    evolutionImpact: 'Drove global trade networks as maritime explorers searched for trade routes to locate coveted organic chemical compounds (spices).'
  },
  {
    id: 'industrial',
    name: 'Industrial Revolution',
    range: '1760 – 1900',
    description: 'Thermal Preservation, Pasteurization, and Food Standardization',
    longDescription: 'The 19th century transformed food science into an industrial discipline. Nicolas Appert invented canning to feed Napoleon\'s armies, and Louis Pasteur discovered that microorganisms cause spoilage, leading to the heat-treating process known as Pasteurization. Food production shifted from home kitchens to scientific factories.',
    themeColor: 'blue-600',
    accentColor: '#2563EB', // blue-600
    bgGradient: 'from-blue-950 via-slate-900 to-stone-950',
    image: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&w=1200&q=80', // Raspberry jam confiture
    scienceFocus: 'Thermal Pathogen Elimination & Microorganism Deactivation',
    evolutionImpact: 'Eradicated widespread foodborne plagues like tuberculosis from milk, supporting massive urban expansion and industrial workforces.'
  },
  {
    id: 'modern',
    name: 'Molecular Gastronomy',
    range: '1950 – Present',
    description: 'Precision Chemistry, Hydrocolloids, and Sensory Physics',
    longDescription: 'Coined by physicist Nicholas Kurti and chemist Hervé This, Molecular Gastronomy studies the physical and chemical transformations of ingredients that occur while cooking. Modern chefs use centrifuges, liquid nitrogen, and hydrocolloids (like sodium alginate) to construct completely novel textures and hyper-focused flavors.',
    themeColor: 'cyan-400',
    accentColor: '#22D3EE', // cyan-400
    bgGradient: 'from-cyan-950 via-slate-950 to-stone-950',
    image: 'https://images.unsplash.com/photo-1614707267537-b85acf00c4b8?auto=format&fit=crop&w=1200&q=80', // Fine dining / molecular smoke
    scienceFocus: 'Spherification (Sodium Alginate + Calcium Lactate Gelling), Cryogenic Freezing',
    evolutionImpact: 'Shifted cooking from a craft to an analytical science, questioning human perception of textures, temperatures, and taste sensations.'
  }
];
