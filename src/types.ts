export type EraId = 'neolithic' | 'ancient' | 'medieval' | 'industrial' | 'modern';

export interface Era {
  id: EraId;
  name: string;
  range: string;
  description: string;
  longDescription: string;
  themeColor: string; // Tailwind color class or hex
  accentColor: string;
  bgGradient: string;
  image: string;
  scienceFocus: string;
  evolutionImpact: string;
}

export type TasteProfile = 'Sweet' | 'Sour' | 'Salty' | 'Bitter' | 'Umami' | 'Pungent';

export interface Ingredient {
  id: string;
  symbol: string; // e.g., "Cp" for Capsaicin
  name: string;
  taste: TasteProfile;
  chemicalCompound: string; // e.g., Capsaicin, Acetic Acid
  formula: string; // e.g., C18H27NO3
  molecularWeight: number;
  historicalAppearance: string; // Era or year
  eraId: EraId;
  discovery: string;
  breakdown: string; // Chemical explanation
  pairings: string[];
  rarity: 'Common' | 'Rare' | 'Exotic';
  wikiLink?: string; // High-quality educational resource link
}

export interface ScienceTip {
  title: string;
  explanation: string;
}

export interface Recipe {
  id: string;
  name: string;
  eraId: EraId;
  image: string;
  prepTime: string;
  difficulty: 'Beginner' | 'Apprentice' | 'Master';
  historicalContext: string;
  scienceTips: ScienceTip;
  ingredients: string[];
  steps: string[];
}

export interface InstagramPost {
  id: string;
  image: string;
  likes: number;
  comments: number;
  caption: string;
  era: string;
}

export interface CMSContent {
  heroTitle: string;
  heroSubtitle: string;
  missionTitle: string;
  missionDescription: string;
  missionCards: {
    id: string;
    title: string;
    description: string;
    iconName: string;
  }[];
}
