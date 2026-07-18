export interface Pairing {
  ingredientId: string;
  ingredientName: string;
  matchScore: number; // 0 - 100
  chemicalExplanation: string;
  culinaryTip: string;
}

export interface FlavorProfile {
  id: string;
  name: string;
  category: 'sweet' | 'sour' | 'salty' | 'bitter' | 'umami';
  chemicalClass: string; // e.g., "Pyrazines", "Sulfides"
  mainCompounds: string[]; // e.g., ["Dimethyl sulfide", "Furfurylthiol"]
  description: string;
  scienceExplanation: string;
  pairings: Pairing[];
}

export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: 'Molecular Gastronomy' | 'Fermentation & Acids' | 'Maillard & Heat' | 'Sensory Science' | 'Exclusive Protocols';
  publishDate: string;
  readTime: string;
  isPremium: boolean;
  image: string;
  scienceConcept: string; // Brief scientific focus highlight
}

export interface CatalogIngredient {
  name: string;
  subCategory?: string;
  chemicalCompounds: string[];
  isInteractive: boolean;
  profileId?: string;
}

export interface IngredientCategory {
  id: 'sweet' | 'sour' | 'salty' | 'bitter' | 'umami';
  name: string;
  chemicalSignatures: string[];
  scientificDescription: string;
  colorTheme: {
    bg: string;
    text: string;
    border: string;
    accent: string;
    badge: string;
  };
  ingredients: CatalogIngredient[];
}

export interface Subscriber {
  email: string;
  joinedDate: string;
  isSubscribed: boolean;
  rank: string; // e.g., "Flavor Initiate", "Alchemist", "Lab Director"
  savedPairings: string[]; // ids of flavor profiles
  savedArticles: string[]; // ids of articles
}
