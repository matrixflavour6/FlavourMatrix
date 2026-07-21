import { Recipe } from '../types';

export const recipesData: Recipe[] = [
  // ==========================================
  // --- NEOLITHIC ERA (11 Recipes) -----------
  // ==========================================
  {
    id: 'neolithic_bread',
    name: 'Hearth-Baked Emmer Flatbread',
    eraId: 'neolithic',
    image: 'https://images.unsplash.com/photo-1574085733277-851d9d856a3a?auto=format&fit=crop&w=800&q=80',
    prepTime: '45 Minutes',
    difficulty: 'Beginner',
    historicalContext: 'During the Dawn of Agriculture, early farmers crushed emmer grains between basalt stones, hydrated the meal with spring water, and baked the rustic dough directly on flat rocks heated by campfires.',
    scienceTips: {
      title: 'Starch Gelatinization & Gluten Matrix Development',
      explanation: 'When emmer meal is mixed with water, glutenin and gliadin proteins align to form a stretchy gluten matrix. As it bakes above 60°C (140°F), starch granules absorb surrounding water, swelling and bursting to release amylose and amylopectin. This sets the crumb structure.'
    },
    ingredients: [
      '200g Whole Emmer Wheat (or Spelt) flour',
      '120ml Warm Spring Water',
      '3g Wild Coarse Salt',
      '1 tbsp Wild Honey (optional)'
    ],
    steps: [
      'Grind wheat grains coarsely using a mortar and pestle or stone hand-mill to mimic Neolithic meal.',
      'In a terracotta bowl, combine the flour and wild salt. Gradually pour in warm water while stirring with your fingers.',
      'Knead the mixture on a flat wooden board for 10 minutes, stretching the dough to stimulate gluten bonds.',
      'Divide the dough into 4 equal portions and press them flat with your palms to about 1cm thickness.',
      'Heat a thick cast-iron skillet (or flat soapstone) over high heat until smoking.',
      'Lay the flatbreads directly on the dry, hot surface. Cook for 3-4 minutes per side until charred, dark-brown spots appear—this is the Maillard reaction in action!'
    ]
  },
  {
    id: 'berry_acorn_paste',
    name: 'Foraged Wild Berry & Acorn Paste',
    eraId: 'neolithic',
    image: 'https://images.unsplash.com/photo-1517093602195-b40af9688b46?auto=format&fit=crop&w=800&q=80',
    prepTime: '60 Minutes',
    difficulty: 'Apprentice',
    historicalContext: 'Nomadic foraging tribes in Northern Europe crushed wild oak acorns and soaked them repeatedly in streams to remove bitter tannins before blending with sweet forest berries.',
    scienceTips: {
      title: 'Solvent Leaching of Bitter Polyphenols',
      explanation: 'Acorns are rich in bitter hydrolyzable tannins (polyphenols) that defend against pests. Hot water leaching dissolves these water-soluble compounds, making the starch palatable and nutritious.'
    },
    ingredients: [
      '200g Raw Oak Acorns (shelled)',
      '150g Foraged Wild Blackberries and Raspberries',
      '2 tbsp Wild Thyme Leaves',
      '1 liter Water (for repeated leaching)'
    ],
    steps: [
      'Crush the shelled acorns into a coarse meal using a heavy stone pestle.',
      'Submerge the acorn meal in boiling water, boil for 15 minutes, drain, and repeat 3 times until the bitterness fades.',
      'Mash the softened, leached acorns with wild berries in a rustic wooden bowl.',
      'Stir in the wild thyme leaves to introduce antiseptic thymol oil, which aids preservation.',
      'Cook the paste gently on a warm hearth plate for 10 minutes to thicken and concentrate the natural fructose sugars.'
    ]
  },
  {
    id: 'clay_wrapped_trout',
    name: 'Hearth-Baked Clay-Wrapped Trout',
    eraId: 'neolithic',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80',
    prepTime: '50 Minutes',
    difficulty: 'Apprentice',
    historicalContext: 'Before heat-safe pottery, neolithic hunters wrapped fresh river catches in mineral-rich wet clay and buried them directly in burning wood embers to bake.',
    scienceTips: {
      title: 'Conductive Thermal Insulation & Steam Retention',
      explanation: 'The wet clay casing forms a sealed chamber. As the clay heats, water inside evaporates, generating high-pressure steam that cooks the trout uniformly by convection, while the clay layer prevents direct heat charring.'
    },
    ingredients: [
      '1 Whole Fresh River Trout (gutted)',
      '1 handful Wild Ramp Leaves',
      '1 handful Wild Mint Leaves',
      'Clean wet river clay (enough to envelope the fish)'
    ],
    steps: [
      'Clean and dry the river trout, leaving the skin and scales on to prevent clay from sticking to the meat.',
      'Stuff the trout’s cavity with wild ramp and mint leaves for flavor volatile extraction.',
      'Roll out the wet river clay into a flat slab about 1.5cm thick.',
      'Place the stuffed fish in the center and wrap the clay tightly, pinching the seams to ensure a airtight seal.',
      'Place the clay parcel directly in hot campfire embers and cover with glowing charcoal.',
      'Bake for 25 minutes. Carefully extract the hardened clay shell, crack it open with a stone, and peel the skin and scales away with the clay.'
    ]
  },
  {
    id: 'ash_baked_roots',
    name: 'Ash-Baked Sweet Roots',
    eraId: 'neolithic',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    prepTime: '40 Minutes',
    difficulty: 'Beginner',
    historicalContext: 'Early gatherers roasted tubers directly in the hot ashes of a dying fire, discovering that heat made fibrous roots sweet, soft, and edible.',
    scienceTips: {
      title: 'Enzymatic Hydrolysis of Complex Starch',
      explanation: 'As the tuber slowly heats between 55°C and 75°C (131°F - 167°F), endogenous amylase enzymes are activated before they denature. They hydrolyze long, flavorless starch chains into sweet, simple maltose sugars.'
    },
    ingredients: [
      '3 Large Wild Parsnips or Tubers',
      '2 tbsp Rendered Animal Fat (or Wild Olive Oil)',
      '1 pinch Coarse Salt'
    ],
    steps: [
      'Do not peel the tubers; the tough outer skin serves as a crucial protective barrier against charcoal dust.',
      'Bury the tubers deep in the hot ash and glowing coals of a campfire that has settled.',
      'Roast for 30 minutes until a wooden skewer easily slides into the center of the tuber.',
      'Carefully scrape off the charred skin, slice the golden interior, and drizzle with rendered fat and coarse salt.'
    ]
  },
  {
    id: 'charcoal_venison',
    name: 'Charcoal-Seared Venison with Wild Thyme',
    eraId: 'neolithic',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    prepTime: '30 Minutes',
    difficulty: 'Beginner',
    historicalContext: 'Hunter-gatherers roasted fresh cuts of venison directly on glowing charcoal coals, developing a deep appreciation for smoky charred flavors.',
    scienceTips: {
      title: 'Maillard Reaction & Pyrolysis in Open Fire Cooking',
      explanation: 'Extreme direct heat above 150°C (300°F) triggers the Maillard reaction between amino acids and reducing sugars. This produces hundreds of dark, savory flavor compounds. Direct fat drippings on coals vaporize, coating the meat in aromatic wood smokes.'
    },
    ingredients: [
      '400g Fresh Venison Loin (sliced 2cm thick)',
      '1 bunch Wild Thyme',
      '2 tbsp Wild Animal Fat (rendered)',
      'Coarse Sea Salt'
    ],
    steps: [
      'Rub the venison steaks with rendered animal fat and press coarse sea salt into both sides.',
      'Prepare a hot bed of clean hardwood coals (no active flames).',
      'Place the steaks directly on flat, glowing coals or on a green wood rack held close to the heat.',
      'Sear for 2-3 minutes per side. Throw wild thyme directly onto the hot coals in the final 30 seconds to release aromatic essential oils.',
      'Let the venison rest on a warm stone for 5 minutes before slicing to allow muscle fibers to relax.'
    ]
  },
  {
    id: 'stone_boiled_oats',
    name: 'Stone-Boiled Wild Oat Porridge',
    eraId: 'neolithic',
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80',
    prepTime: '35 Minutes',
    difficulty: 'Beginner',
    historicalContext: 'Before fire-resistant pottery, Neolithic humans boiled water in wooden troughs or leather bags by dropping red-hot volcanic stones directly into the liquid.',
    scienceTips: {
      title: 'Starch Hydration & Viscous Gelation',
      explanation: 'Dropping superheated stones into water causes immediate localized boiling. Starch granules in wild grains swell and break down, locking water into a thick, easily digestible viscous suspension.'
    },
    ingredients: [
      '150g Wild Oat Groats (coarsely cracked)',
      '400ml Spring Water',
      '1 tbsp Wild Honey',
      '3-4 Clean, Non-porous Volcanic River Stones'
    ],
    steps: [
      'Place the cracked wild oats and spring water into a hollowed wooden log, wooden trough, or clean leather pouch.',
      'Heat the non-porous stones directly in campfire coals until glowing red-hot (takes about 15 minutes).',
      'Using green wooden tongs, carefully transfer one hot stone at a time, brushing off ash, and submerge it into the water.',
      'The water will hiss and boil instantly. Stir continuously to prevent the oats from burning on the hot stones.',
      'Replace stones as they cool until the oats have hydrated into a thick, sweet porridge. Stir in honey.'
    ]
  },
  {
    id: 'spelt_honey_skillet',
    name: 'Hearth Spelt & Honey Skillet Cake',
    eraId: 'neolithic',
    image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=800&q=80',
    prepTime: '30 Minutes',
    difficulty: 'Beginner',
    historicalContext: 'A sweet Neolithic celebration cake made from stone-milled spelt flour and caramelized honey, cooked in a shallow clay pan on the hot hearth.',
    scienceTips: {
      title: 'Thermal Dehydration & Fructose Caramelization',
      explanation: 'Cooking honey on a hot stone dehydrates its natural sugars, initiating caramelization. The sugars decompose and recombine to form diacetyl and ethyl acetate, producing rich buttery, nutty, and butterscotch flavor molecules.'
    },
    ingredients: [
      '150g Spelt Flour',
      '3 tbsp Wild Honey',
      '1 Egg (foraged wild bird egg)',
      '50ml Goat Milk'
    ],
    steps: [
      'Stir spelt flour, honey, wild bird egg, and goat milk together in a rustic clay vessel until a thick batter forms.',
      'Heat a flat soapstone or shallow clay plate over fire embers and grease with a little animal fat or butter.',
      'Pour the thick batter onto the stone, spreading it to form a flat circular cake.',
      'Cook for 6 minutes until the bottom is deeply golden and caramelized, then flip to finish the other side.'
    ]
  },
  {
    id: 'nettle_soup_stone',
    name: 'Foraged Nettle & Wild Allium Soup',
    eraId: 'neolithic',
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=800&q=80',
    prepTime: '45 Minutes',
    difficulty: 'Apprentice',
    historicalContext: 'A therapeutic spring green soup made by boiling fresh nettle shoots and wild leeks in a skin vessel using hot stones.',
    scienceTips: {
      title: 'Neutralization of Formic Acid via Thermal Energy',
      explanation: 'Raw stinging nettles contain tiny hollow hairs filled with irritating formic acid and histamine. Heating the leaves above 80°C (176°F) collapses these structural hairs and deactivates the acidic proteins, turning the nettles into a tender, mineral-rich edible green.'
    },
    ingredients: [
      '150g Fresh Stinging Nettle Leaves (harvest with thick leather gloves!)',
      '4 Wild Leeks / Alliums, sliced',
      '500ml Water',
      'Coarse Salt'
    ],
    steps: [
      'Combine wild leeks and water in your cooking vessel.',
      'Bring the water to a boil using superheated campfire stones dropped into the container.',
      'Using wooden tongs, drop the stinging nettle leaves into the boiling water.',
      'Keep the soup boiling for 10 minutes until the stinging hairs of the nettles are fully dissolved and safe.',
      'Season with coarse salt and mash the ingredients into a green, restorative broth.'
    ]
  },
  {
    id: 'fermented_goat_milk',
    name: 'Neolithic Fermented Goat Milk Curd',
    eraId: 'neolithic',
    image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=800&q=80',
    prepTime: '24 Hours (Spontaneous Ferment)',
    difficulty: 'Apprentice',
    historicalContext: 'With animal domestication, early humans discovered that goat milk stored in calf stomachs curdled spontaneously into a sour, stable cheese.',
    scienceTips: {
      title: 'Casein Coagulation via Lactic Acidification',
      explanation: 'Wild lactic acid bacteria ferment lactose into lactic acid, dropping the pH below 4.6. This is the isoelectric point of casein proteins, causing them to lose their negative charge and clump together into a solid curd.'
    },
    ingredients: [
      '500ml Raw Fresh Goat Milk',
      '1 piece Cleaned Wild Calf Stomach (source of rennet, optional)',
      '1 pinch Coarse Salt'
    ],
    steps: [
      'Pour fresh raw goat milk into a clean clay pot.',
      'Add a small piece of cleaned calf stomach lining to introduce active chymosin enzymes (rennet), or simply let wild airborne lactic bacteria acidify the milk.',
      'Cover with a linen cloth and let it sit in a warm corner of the hearth (around 25°C) for 24 hours.',
      'Once a thick curd separates from the liquid whey, strain through a clean woven hemp bag to collect the cheese.',
      'Mix the curd with coarse salt to draw out excess moisture and preserve.'
    ]
  },
  {
    id: 'clay_roasted_mushrooms',
    name: 'Salt-Crusted Clay-Baked Wild Mushrooms',
    eraId: 'neolithic',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80',
    prepTime: '30 Minutes',
    difficulty: 'Beginner',
    historicalContext: 'Gatherers wrapped large fleshy forest mushrooms in wild leaves and river clay, baking them directly in fire coals to concentrate their savory juices.',
    scienceTips: {
      title: 'Chitin Softening & Glutamic Concentration',
      explanation: 'Mushrooms have rigid cell walls made of chitin, which is indigestible to humans. Steam baking at high temperatures softens the chitin matrix and concentrates natural glutamates, maximizing savory umami extraction.'
    },
    ingredients: [
      '4 Large Wild Portobello or Porcini Mushrooms',
      '1 bunch Wild Thyme',
      '1 tbsp Animal Fat',
      'Clay for wrapping'
    ],
    steps: [
      'Clean wild mushrooms and coat them with rendered animal fat and salt.',
      'Wrap each mushroom tightly in sweet wild leaves (like birch or hazel leaves).',
      'Encapsulate the leaf parcel in a 1cm layer of wet clay.',
      'Place directly into fire embers and bake for 15-20 minutes.',
      'Crack the clay open, peel away the leaves, and enjoy the intensely juicy, savory mushroom flesh.'
    ]
  },
  {
    id: 'smoked_boar_jerky',
    name: 'Smoked Juniper Wild Boar Jerky',
    eraId: 'neolithic',
    image: 'https://images.unsplash.com/photo-1544155989-114415302787?auto=format&fit=crop&w=800&q=80',
    prepTime: '12 Hours (Slow Smoked)',
    difficulty: 'Apprentice',
    historicalContext: 'To survive winters, hunting tribes salted wild boar meat, rubbed it with juniper berries, and hung it high above hearth fires to dry in the preservative smoke.',
    scienceTips: {
      title: 'Moisture Activity Reduction & Aldehydic Protection',
      explanation: 'Wood smoke contains formaldehyde, phenols, and acetic acid. These chemicals act as natural antimicrobials on the meat surface, while slow heat dehydrates the meat, dropping water activity below 0.6 to halt mold and bacterial growth.'
    },
    ingredients: [
      '500g Wild Boar (or Pork) loin, sliced ultra-thin',
      '2 tbsp Coarse Sea Salt',
      '15 Dried Juniper Berries, crushed',
      'Green Oak or Hickory branches (for smoke)'
    ],
    steps: [
      'Rub the thin meat strips thoroughly with coarse sea salt and crushed juniper berries.',
      'Let the meat cure on a wooden board for 2 hours to draw out surface water.',
      'Thread the strips onto green wooden skewers.',
      'Hang the skewers in the high rafters of the hearth or inside a rustic smoking tripod.',
      'Burn green oak branches beneath, maintaining a low-heat, high-smoke fire for 8-12 hours until the meat is dry, firm, and thoroughly smoked.'
    ]
  },

  // ==========================================
  // --- ANCIENT CIVILIZATIONS (11 Recipes) ---
  // ==========================================
  {
    id: 'roman_garum',
    name: 'Imperial Roman Garum Condiment',
    eraId: 'ancient',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    prepTime: '120 Minutes (Simulated Quick Cure)',
    difficulty: 'Apprentice',
    historicalContext: 'Garum was the lifeblood of Roman cuisine. Produced in massive coastal factories, it was shipped across the Roman Empire in amphorae, providing highly-coveted amino acids and salty preservation to almost every Roman dish.',
    scienceTips: {
      title: 'Autolytic Proteolysis & Osmotic Protection',
      explanation: 'Enzymes naturally present in the fish digestive tracts break down complex muscle tissues into simple, highly savory amino acids (like glutamic acid, the source of umami). The high salt concentration (above 15%) creates a hypertonic environment, drawing water out of harmful bacteria.'
    },
    ingredients: [
      '500g Fresh Sardines or Anchovies (whole)',
      '150g Coarse Mediterranean Sea Salt',
      '2 tbsp Dried Oregano',
      '1 tbsp Coriander Seeds, lightly crushed',
      '100ml Aged White Wine Vinegar'
    ],
    steps: [
      'Wash the fresh sardines and anchovies, keeping them whole. The viscera contain the essential proteolysis enzymes.',
      'In a wide jar, layer the sardines and anchovies, alternating with thick blankets of coarse sea salt and herbs.',
      'Place a weighted plate or clean stone directly on top of the fish to compress the layers and squeeze out air pockets.',
      'Seal the jar tightly and place it in a warm, sunny location (ideally 25-30°C) to simulate Mediterranean conditions.',
      'Stir the mixture once daily. Over several weeks, the enzymes will naturally liquefy the fish into a rich, salty broth.',
      'Filter the liquefied mash through a fine linen cloth or several layers of cheesecloth. Combine the clear amber liquid with wine vinegar.'
    ]
  },
  {
    id: 'mesopotamian_stew',
    name: "Mesopotamian Barley & Lamb Stew (Tuh'u)",
    eraId: 'ancient',
    image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&w=800&q=80',
    prepTime: '90 Minutes',
    difficulty: 'Apprentice',
    historicalContext: 'Sourced from the Yale Babylonian Clay Tablets (circa 1730 BCE), this is one of the world\'s oldest recorded stew recipes, utilizing beer and beetroot to build rich, deep flavors.',
    scienceTips: {
      title: 'Maillard Browning & Alcohol-Soluble Extraction',
      explanation: 'Searing lamb cubes triggers Maillard reactions, producing rich heterocyclic compounds. Deglazing the pot with ancient beer extracts alcohol-soluble flavor compounds from the spices, which are insoluble in water alone.'
    },
    ingredients: [
      '400g Lamb Shoulder, cut into cubes',
      '1 cup Barley grains (rinsed)',
      '1 Red Beetroot, peeled and cubed',
      '2 cups Dark Beer or Ale',
      '1 Leek, sliced',
      '3 cloves Garlic, minced',
      '1 tsp Ground Coriander'
    ],
    steps: [
      'Heat fat in a heavy earthenware pot and sear the lamb cubes until a rich brown crust forms on all sides.',
      'Add the minced garlic, leeks, and coriander, cooking until fragrant.',
      'Pour in the beer to deglaze the bottom of the pot, scraping up all the savory browned bits.',
      'Stir in the barley grains and cubed beetroot (which will turn the stew a magnificent deep crimson).',
      'Cover tightly and simmer over low heat for 1 hour until the barley is swollen and tender and the lamb is succulent.'
    ]
  },
  {
    id: 'egyptian_sourdough',
    name: 'Ancient Egyptian Sourdough Emmer',
    eraId: 'ancient',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80',
    prepTime: '4 Hours (Plus ferment)',
    difficulty: 'Master',
    historicalContext: 'Egyptian bakers along the Nile discovered that wild airborne yeasts could leaven flour, converting heavy flat dough into airy, aromatic sourdough loaves.',
    scienceTips: {
      title: 'Symbiotic Yeast Fermentation & Lactic Acidification',
      explanation: 'Wild yeasts (Saccharomyces exiguus) ferment starch sugars into carbon dioxide gas, which gets trapped in the gluten network to leaven the loaf. Simultaneously, Lactobacillus bacteria produce lactic acid, souring the dough and protecting it from pathogens.'
    },
    ingredients: [
      '300g Ancient Emmer Flour (or Spelt)',
      '100g Active Sourdough Starter',
      '200ml Water',
      '5g Sea Salt'
    ],
    steps: [
      'Mix the emmer flour, active sourdough starter, and water together in a bowl until fully hydrated.',
      'Let the dough rest for 30 minutes (autolyse) to allow the flour to absorb water and activate gluten bonds.',
      'Sprinkle in the salt and knead the dough vigorously for 12 minutes to stretch and align the gluten matrix.',
      'Place in a oiled bowl, cover, and let ferment for 4 hours, performing folds every hour to build structure.',
      'Shape into a round boule, place in a hot pre-heated clay baker (or Dutch oven) and bake at 230°C (450°F) for 35 minutes.'
    ]
  },
  {
    id: 'apician_dates',
    name: 'Apician Roasted Spiced Dates',
    eraId: 'ancient',
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=800&q=80',
    prepTime: '20 Minutes',
    difficulty: 'Beginner',
    historicalContext: 'From Apicius\' "De Re Coquinaria", this luxurious Roman dessert stuffs sweet dates with peppered nuts, fried in honey to create a spectacular sweet-salty-pungent profile.',
    scienceTips: {
      title: 'Sucrose Recrystallization & Capillary Action',
      explanation: 'Stuffing dates with nuts and boiling them in honey forces supersaturated sugars into the fibrous tissue of the dates, while the hot honey coating cools to form a shiny, protective glass-like sugar shell.'
    },
    ingredients: [
      '15 Large Medjool Dates (pitted)',
      '50g Walnuts or Pine Nuts',
      '1/2 tsp Freshly Ground Black Pepper',
      '3 tbsp Wild Honey',
      '1/2 tsp Coarse Sea Salt'
    ],
    steps: [
      'Toss the pine nuts or walnuts in ground black pepper and coarse salt.',
      'Stuff each pitted Medjool date with the peppered nuts, pressing them shut.',
      'In a skillet, gently heat the honey until it bubbles and turns slightly liquid.',
      'Add the stuffed dates to the skillet and fry them for 3-4 minutes, spooning hot honey over them continuously.',
      'Transfer the glazed dates to a wooden platter, sprinkle with coarse salt, and let them cool until the honey glaze sets.'
    ]
  },
  {
    id: 'fig_leaf_bass',
    name: 'Athenian Sea-Bass in Fig Leaves',
    eraId: 'ancient',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    prepTime: '30 Minutes',
    difficulty: 'Beginner',
    historicalContext: 'Ancient Greek fishermen wrapped fresh sea bass in aromatic fig leaves before roasting them in seaside fire pits, infusing the delicate fish with herbal oils.',
    scienceTips: {
      title: 'Essential Oil Vaporization & Enclosed Steaming',
      explanation: 'Fig leaves contain volatile terpenes, coumarins, and essential oils. When wrapped around a fish and heated, these volatile compounds vaporize and dissolve directly into the fats of the sea bass skin.'
    },
    ingredients: [
      '2 Fresh Sea-Bass Fillets',
      '4 Large Fresh Fig Leaves',
      '1 Lemon, sliced thin',
      '2 tbsp Olive Oil',
      'Salt and Pepper'
    ],
    steps: [
      'Season the sea-bass fillets with olive oil, sea salt, and a touch of black pepper.',
      'Lay sliced lemons on top of each fillet.',
      'Wrap the fillets completely in overlapping fig leaves, securing them with green wooden toothpicks.',
      'Place the parcels on a hot cast iron grill or under oven broilers.',
      'Cook for 5-6 minutes per side. The fig leaves will char beautifully, infusing the steaming fish with an aroma of coconut and vanilla.'
    ]
  },
  {
    id: 'greek_kykeon',
    name: 'Ancient Greek Kykeon Barley Drink',
    eraId: 'ancient',
    image: 'https://images.unsplash.com/photo-1508737027454-e6454ef45afd?auto=format&fit=crop&w=800&q=80',
    prepTime: '15 Minutes',
    difficulty: 'Beginner',
    historicalContext: 'Mentions of Kykeon span Homer\'s Iliad. It was consumed as a refreshing peasant tonic and used as a psychoactive ritual drink in the Eleusinian Mysteries.',
    scienceTips: {
      title: 'Starch Suspension & Essential Oil Emulsification',
      explanation: 'Crushed barley flour creates a temporary starch suspension. Whisking it with goat cheese and wine forces lactic fats and alcohols to emulsify with water, carrying aromatic mint oil efficiently across the palate.'
    },
    ingredients: [
      '2 tbsp Pearl Barley (finely ground into flour)',
      '1 cup Strong Red Wine',
      '2 tbsp Grated Fresh Pecorino (or Goat) Cheese',
      '1 handful Fresh Mint leaves (muddled)',
      '1 cup Water'
    ],
    steps: [
      'In a pottery bowl, mix the ground barley flour with water and muddled mint leaves.',
      'Pour in the red wine, whisking continuously to create a homogeneous suspension.',
      'Grate the fresh, salty goat cheese directly into the liquid.',
      'Whisk vigorously until the cheese begins to melt slightly into the wine alcohol, and drink immediately while cold.'
    ]
  },
  {
    id: 'punic_porridge',
    name: 'Carthagenian Punic Porridge',
    eraId: 'ancient',
    image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=800&q=80',
    prepTime: '25 Minutes',
    difficulty: 'Beginner',
    historicalContext: 'Cato the Elder documented this comforting porridge of honey, fresh cheese, and spelt groats, which sustained Carthagenian and Roman families alike.',
    scienceTips: {
      title: 'Whey Protein Binding & Starch Hydrolysis',
      explanation: 'Boiling spelt groats swells starch, while folding in fresh cheese wraps these starches in smooth whey proteins and fats, lowering the overall glycemic response.'
    },
    ingredients: [
      '100g Spelt Groats (or Farro)',
      '100g Fresh Ricotta Cheese',
      '3 tbsp Wild Honey',
      '1 Egg, beaten'
    ],
    steps: [
      'Cook spelt groats in boiling water for 15 minutes until tender, then drain.',
      'In a bowl, beat the ricotta cheese, wild honey, and egg together until smooth.',
      'Fold the warm cooked spelt groats into the cheese mixture.',
      'Return to a saucepan and cook over very low heat for 4 minutes, stirring constantly until the egg thickens the porridge.'
    ]
  },
  {
    id: 'cured_nile_mullet',
    name: 'Egyptian Salt-Cured Nile Mullet',
    eraId: 'ancient',
    image: 'https://images.unsplash.com/photo-1544155989-114415302787?auto=format&fit=crop&w=800&q=80',
    prepTime: '48 Hours (Slow Cure)',
    difficulty: 'Apprentice',
    historicalContext: 'The ancient Egyptians built massive salting installations along the Nile Delta, curing mullet to create a shelf-stable high-protein trade commodity.',
    scienceTips: {
      title: 'Dehydration via Osmosis & Myofibrillar Tightening',
      explanation: 'Applying crystalline sea salt creates a highly hypertonic surface. Water is drawn out of fish cells and surrounding microbes via osmosis, dehydrating muscle tissue and coagulating myofibrillar proteins into a dense cured texture.'
    },
    ingredients: [
      '2 Whole Fresh Mullet or Mackerel (cleaned)',
      '300g Coarse Sea Salt',
      '1 tsp Coriander seeds, ground',
      '1 tsp Cumin seeds, ground'
    ],
    steps: [
      'Gut and clean the fish, making deep diagonal slashes along the sides of the flesh.',
      'Rub coarse sea salt deep into the slashes, the gills, and the internal cavity.',
      'Place a thick layer of salt in a glass dish, lay the fish down, and cover completely with remaining salt and spices.',
      'Cover with plastic wrap, place a weight on top, and refrigerate for 48 hours.',
      'Rinse off the excess salt, pat dry, and slice paper-thin to serve with a drizzle of ancient olive oil.'
    ]
  },
  {
    id: 'roman_libum',
    name: 'Roman Libum Sacred Cheese Cake',
    eraId: 'ancient',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80',
    prepTime: '50 Minutes',
    difficulty: 'Apprentice',
    historicalContext: 'Libum was a sacred bread offering presented to Roman household gods. It is a dense, warm cheese bread baked on bay leaves for a unique herbal perfume.',
    scienceTips: {
      title: 'Steam-Leavened Protein Matrix',
      explanation: 'Libum relies entirely on the water content in fresh cheese and egg proteins to leaven. As it bakes, water evaporates, forcing the egg-flour protein network to expand, creating a dense, soft, cake-like bread.'
    },
    ingredients: [
      '250g Fresh Ricotta Cheese',
      '120g All-Purpose Flour',
      '1 Egg, beaten',
      '6 Fresh Bay Leaves',
      '2 tbsp Honey (for serving)'
    ],
    steps: [
      'In a large bowl, beat the fresh ricotta cheese with a wooden spoon until completely smooth.',
      'Sift the flour into the cheese, then add the beaten egg to bind the dough.',
      'Knead the soft dough gently on a floured surface for 2 minutes and shape into a round dome.',
      'Arrange the fresh bay leaves in a star pattern on a baking sheet, and place the dough boule directly on them.',
      'Bake at 190°C (375°F) for 35-40 minutes until golden brown. Serve hot, drenched in warm honey.'
    ]
  },
  {
    id: 'han_soy_paste',
    name: 'Han Dynasty Fermented Soybean Paste (Jiang)',
    eraId: 'ancient',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
    prepTime: '120 Minutes (Simulated Speed Ferment)',
    difficulty: 'Master',
    historicalContext: 'During the Han Dynasty, fermenting yellow soybeans became standard practice in China, laying the foundation for modern soy sauce and miso paste.',
    scienceTips: {
      title: 'Enzymatic Digestion via Aspergillus Oryzae',
      explanation: 'Mold fermentation breaks down hard bean protein into soluble peptides and free glutamates, transforming indigestible soybeans into an incredibly savory, digestively beneficial seasoning paste.'
    },
    ingredients: [
      '300g Yellow Soybeans (soaked overnight)',
      '50g Wheat Flour',
      '60g Sea Salt',
      '300ml Water'
    ],
    steps: [
      'Boil the soaked soybeans for 3 hours until completely soft and easily mashed between fingers.',
      'Drain the beans, mash them coarsely, and dust them thoroughly with wheat flour.',
      'In a traditional setting, these would be left to grow wild mold. For safety, mix the mash with salt and water to create a thick brine.',
      'Pack tightly into a sterilized jar and let ferment in a warm sunny windowsill for a few weeks to develop complex umami profiles.',
      'Blend into a smooth paste and use as a rich culinary foundation for broths.'
    ]
  },
  {
    id: 'aztec_amaranth',
    name: 'Aztec Amaranth & Agave Alegria',
    eraId: 'ancient',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80',
    prepTime: '20 Minutes',
    difficulty: 'Beginner',
    historicalContext: 'Amaranth was highly sacred to the Aztecs. They popped the nutritious grains, bound them with sweet agave sap, and shaped them into sacred idols.',
    scienceTips: {
      title: 'Starch Expansion (Popping) & High-Density Sugar Binding',
      explanation: 'Heating amaranth vaporizes microscopic pockets of moisture inside the grain, forcing the hard starch hull to rupture and expand into a light puffed structure. Concentrated agave syrup acts as a high-viscosity binder.'
    },
    ingredients: [
      '100g Raw Amaranth Grains',
      '80ml Agave Nectar',
      '30g Pumpkin Seeds (Pepitas), toasted',
      '1 pinch Salt'
    ],
    steps: [
      'Heat a deep pot over medium-high heat. Add amaranth 1 tablespoon at a time; the tiny grains will pop instantly into white spheres.',
      'In a separate saucepan, boil the agave nectar and salt for 3 minutes until thick and slightly caramelized.',
      'Combine the popped amaranth, toasted pumpkin seeds, and hot agave syrup in a bowl.',
      'Stir rapidly to coat all grains evenly.',
      'Press the mixture firmly into a baking dish, let it cool completely, and slice into dense, nutritious energy squares.'
    ]
  },

  // ==========================================
  // --- MEDIEVAL AGE (11 Recipes) ------------
  // ==========================================
  {
    id: 'medieval_hypocras',
    name: 'Alchemical Hypocras Spiced Wine',
    eraId: 'medieval',
    image: 'https://images.unsplash.com/photo-1543157145-f78c636d023d?auto=format&fit=crop&w=800&q=80',
    prepTime: '30 Minutes',
    difficulty: 'Apprentice',
    historicalContext: 'Named in honor of the ancient Greek physician Hippocrates, this spiced wine was strained through a conical felt bag known as the "Manicum Hippocraticum" (Hippocratic Sleeve) and served in royal courts as a medicinal digestive.',
    scienceTips: {
      title: 'Ethanol as a Solubilizing Solvent',
      explanation: 'Highly aromatic compounds in spices (like eugenol in cloves and cinnamaldehyde in cinnamon) are lipophilic and do not dissolve well in water. Ethanol (the alcohol in wine) serves as an excellent organic solvent.'
    },
    ingredients: [
      '750ml Robust Red Wine (such as Pinot Noir or Syrah)',
      '100g Wild Honey or Raw Cane Sugar',
      '2 sticks Cinnamon Bark, crushed',
      '4 whole Cloves',
      '3 Cardamom Pods, cracked',
      '10g Fresh Ginger Root, sliced thin',
      '1 pinch Nutmeg, freshly grated'
    ],
    steps: [
      'Lightly bruise the spices in a wooden mortar to rupture their cell walls and expose the essential spice oils.',
      'In a non-reactive saucepan, gently combine the red wine and raw honey. Heat over medium-low heat.',
      'Do not boil the wine! Keep the temperature below 75°C (167°F) to prevent ethanol from evaporating.',
      'Stir until the honey is fully dissolved into the wine solution.',
      'Add the crushed spices and sliced ginger. Cover the pot tightly to trap volatile aromatic vapors.',
      'Remove from heat and let it steep for 2-3 hours. Strain through a fine conical linen filter sleeve.'
    ]
  },
  {
    id: 'medieval_blancmange',
    name: 'Medieval Almond Milk Blancmange',
    eraId: 'medieval',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
    prepTime: '45 Minutes',
    difficulty: 'Apprentice',
    historicalContext: 'A signature dish of elite medieval European tables, Blancmange was a pale, velvety cream of shredded capon and almond milk, sweetened and perfumed with rosewater.',
    scienceTips: {
      title: 'Amylose retrogradation & Lipid Emulsion',
      explanation: 'Almond milk provides a rich oil-in-water lipid emulsion. Simmering shredded chicken releases gelatin, while ground rice starch releases amylose. Together, they create a smooth 3D gel network that sets as it cools.'
    },
    ingredients: [
      '200g Raw Almonds (ground into milk with 300ml water)',
      '150g Cooked Chicken Breast, shredded paper-thin',
      '40g Ground Rice Flour',
      '50g White Sugar',
      '1 tsp Rosewater',
      '1 pinch Salt'
    ],
    steps: [
      'Blend ground almonds and warm water to extract a thick, creamy almond milk. Strain through cheesecloth.',
      'In a pot, combine almond milk, rice flour, and sugar, whisking to prevent starch clumping.',
      'Bring to a gentle simmer, stirring constantly until the rice starch gelatinizes and thickens.',
      'Add the paper-thin shredded chicken breast and salt, cooking on low heat for 10 minutes to dissolve natural gelatins.',
      'Stir in the rosewater, pour the white cream into molds, and chill in cold water until set.'
    ]
  },
  {
    id: 'gilded_broth',
    name: 'Gilded Saffron Capon Broth',
    eraId: 'medieval',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80',
    prepTime: '120 Minutes',
    difficulty: 'Master',
    historicalContext: 'Medieval royal chefs decorated banquet broths with golden saffron and real edible gold leaf, reflecting the era\'s fascination with alchemy and metallurgical transmutation.',
    scienceTips: {
      title: 'Saffron Carotenoid Solubility & Lipid Clarification',
      explanation: 'Saffron contains crocin, a water-soluble carotenoid pigment that turns broth a brilliant yellow. Clarifying the broth by skimming off floating lipids (fats) allows light to pass through, creating a glittering golden glow.'
    },
    ingredients: [
      '1 Whole Chicken carcass (for gelatin extraction)',
      '1 pinch Saffron Threads',
      '1 Onion, charred',
      '1 tsp Whole Grains of Paradise',
      'Edible Gold Leaf (for garnish)'
    ],
    steps: [
      'Simmer the chicken carcass, charred onion, and spiced grains of paradise in water for 2 hours to extract gelatin and bone minerals.',
      'Strain the broth through a double-layered linen cloth to remove all solid particulates.',
      'Steep saffron threads in 50ml of hot water for 15 minutes, then pour the intensely yellow crocin extract into the clear broth.',
      'Gently skim all rising fat off the surface to ensure the liquid is crystal clear.',
      'Ladle the warm, golden broth into shallow bowls and lay a fragile leaf of edible gold on top.'
    ]
  },
  {
    id: 'spiced_venison_coffin',
    name: "Medieval Spiced Venison Pastry 'Coffin'",
    eraId: 'medieval',
    image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&w=800&q=80',
    prepTime: '90 Minutes',
    difficulty: 'Master',
    historicalContext: "In Medieval England, pastry shells were called 'coffins' or 'traps'. Made of thick flour and water, they acted as durable baking vessels and structural containers for spiced, slow-cooked game meats.",
    scienceTips: {
      title: 'Enclosed Steam Tenderization & Collagen Breakdown',
      explanation: 'The thick pastry shell seals in all moisture. As the meat bakes, water cannot escape, raising the internal humidity to 100%. This allows tough collagen tissues in venison to hydrolyze into gelatin at 70°C, rendering the meat incredibly tender.'
    },
    ingredients: [
      '300g Venison Loin (or Beef), diced',
      '200g Rye Flour (for the pastry shell)',
      '100ml Water',
      '1 tsp Mace, ground',
      '1/2 tsp Cloves, ground',
      '50g Dried Currants'
    ],
    steps: [
      'Mix rye flour and hot water to form a stiff, durable dough. Shape it into a deep, thick-walled cylindrical pot (the "coffin").',
      'Toss the diced venison with ground mace, cloves, sea salt, and dried currants.',
      'Pack the seasoned venison tightly into the pastry coffin, pressing a thick dough lid on top and sealing the seams with water.',
      'Bake at 180°C (350°F) for 1 hour. The pastry will become rock-hard, acting as a sterile steam vault.',
      'Crack open the top crust and spoon out the tender, spiced venison.'
    ]
  },
  {
    id: 'medieval_ginger_peas',
    name: 'Medieval Peas with Ginger & Cardamom',
    eraId: 'medieval',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    prepTime: '20 Minutes',
    difficulty: 'Beginner',
    historicalContext: 'Peas were a staple across medieval Europe. Upper-class households elevated them by mashing them with butter and precious imported spices.',
    scienceTips: {
      title: 'Lipid Solubilization of Gingerol & Cineole',
      explanation: 'Butter fats are highly effective in dissolving gingerol (from ginger) and cineole (from cardamom), wrapping these sharp pungent compounds in a lipid barrier that delivers them smoothly to the palate.'
    },
    ingredients: [
      '300g Fresh or Frozen Peas',
      '30g Unsalted Butter',
      '1 tsp Ground Ginger',
      '1/2 tsp Ground Cardamom',
      'Salt to taste'
    ],
    steps: [
      'Boil the peas in salted water for 5 minutes until soft and vibrant green.',
      'Drain the peas and transfer them to a warm pan.',
      'Add the unsalted butter, letting it melt and coat the peas completely.',
      'Sprinkle the ground ginger and cardamom over the warm peas, mashing them coarsely with a wooden spoon to release starch and blend flavors.'
    ]
  },
  {
    id: 'cameline_roast_pig',
    name: 'Roasted Pork with Cameline Sauce',
    eraId: 'medieval',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    prepTime: '60 Minutes',
    difficulty: 'Apprentice',
    historicalContext: 'Cameline sauce was the ultimate medieval condiment, combining cinnamon, cloves, red wine, and toasted bread to create an aromatic, spicy-sour accompaniment for roasted meats.',
    scienceTips: {
      title: 'Starch Retrogradation & Acidic Flavor Balancing',
      explanation: 'Toasted breadcrumbs absorb liquid and gelatinize, acting as a natural thickening agent. The acetic acid in red wine vinegar balances the fatty richness of the roasted pork.'
    },
    ingredients: [
      '500g Pork Belly or Pork Chop',
      '2 slices Stale Rye Bread (toasted dark)',
      '100ml Red Wine',
      '30ml Red Wine Vinegar',
      '1 tsp Ground Cinnamon',
      '1/2 tsp Ground Cloves'
    ],
    steps: [
      'Roast the pork belly at 200°C (400°F) for 45 minutes until the skin is beautifully crispy.',
      'Soak the dark toasted bread slices in the red wine and red wine vinegar until softened.',
      'Mash the soaked bread through a fine strainer to create a smooth, thick paste.',
      'Whisk in the ground cinnamon, cloves, and pork drippings, warming the sauce gently in a saucepan.',
      'Slice the roasted pork and serve generously with the thick, tangy Cameline sauce.'
    ]
  },
  {
    id: 'persian_rosewater_rice',
    name: 'Persian Rosewater & Almond Rice Pudding',
    eraId: 'medieval',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    prepTime: '40 Minutes',
    difficulty: 'Apprentice',
    historicalContext: 'Introduced to Europe during the Crusades, this exquisite pudding combines Persian rice-growing techniques with sweet rosewater and almond oils.',
    scienceTips: {
      title: 'Amylose Leaching & Volatile Distillation Scenting',
      explanation: 'Simmering rice releases amylose starch, which binds water to create a creamy pudding. Rosewater contains volatile geraniol, which evaporates rapidly when heated; adding it at the very end preserves its delicate aroma.'
    },
    ingredients: [
      '100g Basmati Rice',
      '400ml Almond Milk',
      '50g Cane Sugar',
      '1 tbsp Rosewater',
      '20g Pistachios, crushed'
    ],
    steps: [
      'Boil the basmati rice in water for 10 minutes, then drain.',
      'Add the almond milk and sugar to the rice, simmering over low heat for 20 minutes.',
      'Stir continuously to encourage starch leaching, which thickens the milk into a velvety cream.',
      'Remove from heat and immediately stir in the rosewater to trap the volatile geraniol scent within the rice fats.',
      'Pour into bowls and garnish with crushed pistachios.'
    ]
  },
  {
    id: 'saxon_ale_soup',
    name: 'Saxon Spiced Barley Ale Soup',
    eraId: 'medieval',
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80',
    prepTime: '30 Minutes',
    difficulty: 'Beginner',
    historicalContext: 'A rustic Saxon peasant soup that boiled local barley ale with butter and spices, serving as a warm, caloric breakfast.',
    scienceTips: {
      title: 'Alcohol Volatilization & Lipid Binding',
      explanation: 'Boiling ale evaporates ethanol while concentrating maltose sugars and bitter hop compounds. Whisking in butter fats tempers this bitterness by coating the tongue\'s TAS2R receptors.'
    },
    ingredients: [
      '500ml Barley Ale or Beer',
      '30g Butter',
      '1 tbsp Flour',
      '1 Egg Yolk',
      '1/2 tsp Ground Nutmeg'
    ],
    steps: [
      'In a saucepan, melt the butter and stir in the flour to create a smooth roux.',
      'Gradually pour in the barley ale, whisking to prevent starch lumps.',
      'Bring to a boil and let simmer for 10 minutes to evaporate alcohol vapors.',
      'Beat the egg yolk with a little warm ale, then temper it back into the soup off the heat to create a silky emulsion.',
      'Dust with ground nutmeg and serve with crusty bread.'
    ]
  },
  {
    id: 'medieval_gingerbread',
    name: 'Medieval Honey Ginger Gingerbread',
    eraId: 'medieval',
    image: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&w=800&q=80',
    prepTime: '35 Minutes',
    difficulty: 'Beginner',
    historicalContext: 'Unlike modern soft cakes, medieval gingerbread was a dense, unleavened candy-like paste of boiled honey and breadcrumbs spiced with ginger.',
    scienceTips: {
      title: 'Starch Gelation & Viscous Honey Binding',
      explanation: 'Fine stale breadcrumbs absorb hot dehydrated honey, swelling to form a rigid structural network that firms up as the sugar cools, preserving the sweet treat indefinitely.'
    },
    ingredients: [
      '150g Stale White Bread (milled into fine crumbs)',
      '150ml Wild Honey',
      '1 tbsp Ground Ginger',
      '1/2 tsp Ground Cinnamon',
      '1 pinch Black Pepper'
    ],
    steps: [
      'In a saucepan, bring the honey to a boil, skim off any foam, and let it simmer for 3 minutes to reduce water content.',
      'Stir in the ground ginger, cinnamon, and black pepper.',
      'Gradually fold in the fine breadcrumbs until a thick, dry dough forms.',
      'Turn the dough onto parchment, press it flat into a 1.5cm thick rectangle, and let it cool completely.',
      'Cut into small, spiced squares and dust with cinnamon.'
    ]
  },
  {
    id: 'salted_herring_fennel',
    name: 'Herb-Stuffed Salted Herring',
    eraId: 'medieval',
    image: 'https://images.unsplash.com/photo-1544155989-114415302787?auto=format&fit=crop&w=800&q=80',
    prepTime: '45 Minutes',
    difficulty: 'Apprentice',
    historicalContext: 'Lenten dietary laws forced medieval Europeans to rely heavily on salted herrings. Herbs and vinegar were utilized to restore freshness to cured fish.',
    scienceTips: {
      title: 'Myosin Rehydration & Acidic Volatile Masking',
      explanation: 'Soaking salted herring in water rehydrates dried myosin fibers. Vinegar’s acetic acid neutralizes fishy trimethylamine (TMA) vapors by converting them into non-volatile salts.'
    },
    ingredients: [
      '2 Whole Salted Herrings',
      '1 bunch Fresh Fennel Fronds',
      '2 Bay Leaves',
      '50ml Cider Vinegar',
      'Water (for soaking)'
    ],
    steps: [
      'Soak the salted herrings in cold water for 12 hours, changing the water twice to wash away excess curing salt.',
      'Drain and pat the fish dry.',
      'Stuff the internal cavities with fresh fennel fronds and crushed bay leaves.',
      'Place the fish in a baking dish, drizzle with cider vinegar and olive oil.',
      'Bake at 180°C (350°F) for 20 minutes until the fish flesh flakes easily.'
    ]
  },
  {
    id: 'saffron_pear_custard',
    name: 'Royal Saffron-Infused Pear Custard',
    eraId: 'medieval',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    prepTime: '50 Minutes',
    difficulty: 'Master',
    historicalContext: 'A luxurious tart prepared for noble tables, combining saffron-boiled pears with a delicate egg-yolk custard inside a pastry crust.',
    scienceTips: {
      title: 'Egg Protein Coagulation & Carotenoid Binding',
      explanation: 'Slowly heating egg yolks to 80°C coagulates ovalbumin and vitellin proteins, creating a firm custard gel. Saffron\'s hydrophobic crocin binds beautifully with egg lipids, dispersing its golden color uniformly.'
    },
    ingredients: [
      '2 Firm Pears, peeled and halved',
      '1 pinch Saffron Threads',
      '3 Egg Yolks',
      '150ml Heavy Cream',
      '50g Sugar',
      '1 Pre-baked Pastry Tart Shell'
    ],
    steps: [
      'Boil the pear halves in water with saffron threads for 15 minutes until tender and dyed golden yellow.',
      'In a bowl, whisk the egg yolks, heavy cream, and sugar until smooth.',
      'Arrange the golden pear halves inside the pre-baked tart shell.',
      'Pour the cream custard mixture around the pears.',
      'Bake at 160°C (320°F) for 25 minutes until the egg custard is gently set but still slightly wobbly in the center.'
    ]
  },

  // ==========================================
  // --- INDUSTRIAL REVOLUTION (11 Recipes) ---
  // ==========================================
  {
    id: 'industrial_jam',
    name: 'Standardized Raspberry Confiture',
    eraId: 'industrial',
    image: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&w=800&q=80',
    prepTime: '60 Minutes',
    difficulty: 'Apprentice',
    historicalContext: 'The 19th-century industrialization of sugar refining and canning transformed food preservation from a unpredictable home craft into a standardized science, allowing shelf-stable foods to feed millions in growing cities.',
    scienceTips: {
      title: 'Pectin Gelation Dynamics & pH Control',
      explanation: 'Fruit cell walls contain pectin. In raw fruit, pectin chains repel each other due to negative charges. Adding sugar binds water molecules, and adding lemon juice lowers the pH to 3.2. This neutralizing of negative charges allows pectin chains to cross-link.'
    },
    ingredients: [
      '500g Fresh Raspberries',
      '400g Refined White Cane Sugar',
      '20ml Fresh Lemon Juice (for citric acid content)',
      '50ml Filtered Water'
    ],
    steps: [
      'Place the fresh raspberries and water in a heavy-bottomed copper pot, mashing them gently to release natural pectin.',
      'Bring the fruit to a simmer over medium heat, cooking for 5 minutes until completely softened.',
      'Add the refined cane sugar and fresh lemon juice, stirring continuously until the sugar crystals dissolve.',
      'Increase heat to a rapid boil. Use a candy thermometer to monitor the temperature precisely.',
      'Boil until the mixture reaches exactly 104°C (220°F). This is the exact point of sugar concentration (65%) required for pectin cross-linking.',
      'Test the gel structure by dropping a spoon on a cold plate. If it wrinkles when nudged, pour into sterilized jars.'
    ]
  },
  {
    id: 'victorian_bovril',
    name: 'Victorian Beef Bovril Broth',
    eraId: 'industrial',
    image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=800&q=80',
    prepTime: '180 Minutes',
    difficulty: 'Apprentice',
    historicalContext: 'Invented in the 1870s by John Lawson Johnston, Bovril was a highly concentrated industrial meat extract developed to feed French troops. It quickly became a staple of Victorian working-class nutritional therapy.',
    scienceTips: {
      title: 'Extreme Thermal Concentration & Amino Acid Densification',
      explanation: 'Boiling beef bones and tissue over hours extracts amino acids (glycine, proline) and mineral salts. Reducing this liquid to a thick paste decreases moisture below 15%, halting all microbial life.'
    },
    ingredients: [
      '1kg Beef Marrow Bones',
      '500g Beef Stew Meat (lean)',
      '2 tbsp Salt',
      '1 tsp Yeast Extract (optional)'
    ],
    steps: [
      'Roast beef bones and meat at 220°C (430°F) for 30 minutes to maximize Maillard browning.',
      'Transfer to a deep stockpot, cover with water, and simmer gently for 4 hours to leach bone minerals and collagen.',
      'Strain the broth through a ultra-fine sieve, discarding all bone and meat solids.',
      'Return the clear liquid to a wide pot and boil vigorously over medium heat, reducing the volume by 95% until a thick, dark, syrupy paste remains.',
      'Stir in salt and yeast extract, and spoon the savory glaze into glass jars.'
    ]
  },
  {
    id: 'pasteurized_butter',
    name: 'Pasteurized Cream Crumpet Butter',
    eraId: 'industrial',
    image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=80',
    prepTime: '40 Minutes',
    difficulty: 'Beginner',
    historicalContext: 'Louis Pasteur’s discoveries in the 1860s allowed dairies to heat-treat raw cream, destroying pathogenic bacteria and extending the shelf-life of commercial butter.',
    scienceTips: {
      title: 'Phase Inversion of Lipids via Mechanical Agitation',
      explanation: 'Cream is an oil-in-water emulsion. Churning damages the protective membranes of fat globules, releasing liquid triglycerides. These free fats coalesce, trapping water droplets inside, transforming into a water-in-oil emulsion (butter).'
    },
    ingredients: [
      '500ml Heavy Whipping Cream (Pasteurized)',
      '1/2 tsp Coarse Salt',
      'Ice-cold water (for washing)'
    ],
    steps: [
      'Pour pasteurized heavy cream into a glass jar or kitchen mixer.',
      'Whisk on high speed. The cream will transition from whipped cream to dry, clumpy yellow butter grains separated from white liquid buttermilk.',
      'Drain off the liquid buttermilk (save for baking).',
      'Squeeze the butter grains firmly in ice-cold water to wash away remaining milk sugars, which would cause rapid spoilage.',
      'Knead in the salt, shape into a solid block, and wrap in wax paper.'
    ]
  },
  {
    id: 'london_porter_stew',
    name: 'London Porter Beer Stew',
    eraId: 'industrial',
    image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&w=800&q=80',
    prepTime: '120 Minutes',
    difficulty: 'Beginner',
    historicalContext: 'Porter beer was the industrial fuel of London working-class dockworkers. Stewing tough beef cuts in bitter porter beer slowly softened the meat and built robust, affordable meals.',
    scienceTips: {
      title: 'Acidic Meat Tenderization & Melanoidin Synergies',
      explanation: 'Industrial porter beers are rich in melanoidin compounds from dark roasted malts. These compounds synergize with cooked beef juices to create a deeply rich gravy, while the beer\'s mild acidity slowly hydrolyzes tough muscle fibers.'
    },
    ingredients: [
      '500g Beef Chuck, cubed',
      '1 bottle (330ml) London Porter or Stout',
      '2 Large Potatoes, cubed',
      '2 Carrots, sliced',
      '1 Onion, chopped',
      '2 tbsp Flour'
    ],
    steps: [
      'Dredge the beef chuck cubes in flour and salt.',
      'In a heavy iron pot, sear the beef in lard until a dark-brown crust forms.',
      'Add onion and carrots, cooking for 5 minutes.',
      'Pour in the entire bottle of dark Porter beer, using a wooden spoon to dissolve all browned bits on the bottom.',
      'Add potatoes, cover, and simmer over low heat for 1.5 hours until the beef is melt-in-your-mouth tender.'
    ]
  },
  {
    id: 'canned_peaches',
    name: 'Appert-Canned Peaches in Syrup',
    eraId: 'industrial',
    image: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&w=800&q=80',
    prepTime: '50 Minutes',
    difficulty: 'Apprentice',
    historicalContext: 'Nicolas Appert pioneered thermal canning in 1810. By boiling sealed glass jars, he sterilized the contents, laying the foundation for the massive industrial canned fruit trade of the late 19th century.',
    scienceTips: {
      title: 'Anaerobic Sterilization & High Osmotic Pressure',
      explanation: 'Boiling sealed jars drives out oxygen and destroys vegetative microbial cells. The heavy sugar syrup creates a high osmotic pressure that prevents any surviving bacterial spores from germinating.'
    },
    ingredients: [
      '4 Fresh Peaches, halved and pitted',
      '200g Refined Sugar',
      '300ml Water',
      '1 tbsp Lemon Juice'
    ],
    steps: [
      'In a saucepan, boil water, sugar, and lemon juice to create a heavy simple syrup.',
      'Add the pitted peach halves and simmer gently for 5 minutes.',
      'Pack the hot peaches tightly into clean, sterilized canning jars.',
      'Pour the boiling sugar syrup over the peaches, leaving 1cm of headspace.',
      'Seal the lids tightly and submerge the jars in a boiling water bath for 20 minutes to sterilize. Let cool to form a vacuum seal.'
    ]
  },
  {
    id: 'irish_soda_bread',
    name: 'Soda-Leavened Irish Soda Bread',
    eraId: 'industrial',
    image: 'https://images.unsplash.com/photo-1574085733277-851d9d856a3a?auto=format&fit=crop&w=800&q=80',
    prepTime: '45 Minutes',
    difficulty: 'Beginner',
    historicalContext: 'The 1840s introduction of commercial baking soda (sodium bicarbonate) transformed home baking, allowing bread to be leavened in minutes without yeast.',
    scienceTips: {
      title: 'Chemical Leavening via Acid-Base Reaction',
      explanation: 'Sodium bicarbonate (a base) reacts instantly with lactic acid in buttermilk. This rapid chemical neutralization produces carbon dioxide gas bubbles (CO2) that expand inside the baking dough.'
    },
    ingredients: [
      '350g All-Purpose Flour',
      '1 tsp Sodium Bicarbonate (Baking Soda)',
      '1 tsp Salt',
      '280ml Buttermilk'
    ],
    steps: [
      'Whisk the flour, baking soda, and salt together in a bowl.',
      'Pour in the buttermilk, mixing rapidly with a fork to form a soft, shaggy dough.',
      'Do not over-knead! Kneading develops gluten, which would trap gas too tightly, making soda bread dense and tough.',
      'Shape into a round loaf and cut a deep cross on top to release steam.',
      'Bake immediately at 200°C (400°F) for 30 minutes until the crust is pale brown.'
    ]
  },
  {
    id: 'condensed_milk_fudge',
    name: 'Condensed Milk Caramel Fudge',
    eraId: 'industrial',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
    prepTime: '30 Minutes',
    difficulty: 'Beginner',
    historicalContext: 'Gail Borden patented condensed milk in 1856, providing safe, germ-free milk concentrate to Union soldiers and pioneering sweet industrial confectionery.',
    scienceTips: {
      title: 'Non-Enzymatic Maillard Browning of Concentrated Sugars',
      explanation: 'Boiling condensed milk and butter together accelerates Maillard browning between concentrated milk proteins (casein) and lactose sugars, yielding a dense, crystalline fudge structure.'
    },
    ingredients: [
      '1 can (397g) Sweetened Condensed Milk',
      '150g Brown Sugar',
      '100g Unsalted Butter',
      '1 pinch Salt'
    ],
    steps: [
      'Combine condensed milk, brown sugar, and butter in a non-stick saucepan over medium heat.',
      'Stir constantly as the butter melts and the sugar dissolves.',
      'Bring to a gentle boil and cook for 10-12 minutes, stirring vigorously to prevent burning.',
      'Use a candy thermometer to monitor the mix until it reaches exactly 115°C (240°F) - the soft-ball sugar stage.',
      'Pour into a lined tin, let cool for 2 hours, and cut into sweet caramel fudge cubes.'
    ]
  },
  {
    id: 'ships_hardtack',
    name: "Steam-Baked Ship's Hardtack Biscuit",
    eraId: 'industrial',
    image: 'https://images.unsplash.com/photo-1574085733277-851d9d856a3a?auto=format&fit=crop&w=800&q=80',
    prepTime: '60 Minutes',
    difficulty: 'Beginner',
    historicalContext: 'The standard ration for industrial sailors and soldiers, hardtack was baked multiple times to remove all moisture, creating a biscuit that could survive years at sea.',
    scienceTips: {
      title: 'Complete Dehydration & Elimination of Water Activity',
      explanation: 'Baking the flour-water dough slowly at low temperatures evaporates all moisture. Dropping water activity below 0.3 renders the hardtack completely invulnerable to rot, bacteria, and mold.'
    },
    ingredients: [
      '200g Flour',
      '100ml Water',
      '1 tsp Salt'
    ],
    steps: [
      'Mix the flour, salt, and water together to form a very stiff, dry dough.',
      'Roll the dough flat to a thickness of 1cm.',
      'Cut into square biscuits and poke multiple holes through each with a fork to allow internal steam to escape.',
      'Bake at 150°C (300°F) for 30 minutes, flip, and bake for another 30 minutes.',
      'Let the biscuits dry in a warm, dry room for a few days until they are rock-hard.'
    ]
  },
  {
    id: 'corned_beef_brine',
    name: 'Salt-Brined Cured Corned Beef',
    eraId: 'industrial',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    prepTime: '120 Minutes (Simulated Cook)',
    difficulty: 'Apprentice',
    historicalContext: 'Industrial canning plants cured beef in salt brine before sealing it into tin cans, creating a global staple that fed millions of industrial workers and armies.',
    scienceTips: {
      title: 'Sodium Ions & Osmotic Protein Hydration',
      explanation: 'Salty brine forces sodium ions deep into meat fibers. The salt dissolves some muscle filaments, allowing the beef to hold onto water molecules during canning, resulting in juicy meat.'
    },
    ingredients: [
      '1kg Beef Brisket',
      '1 cup Coarse Salt',
      '2 tbsp Pickling Spices (Mustard, Coriander, Peppercorn)',
      '1 liter Water'
    ],
    steps: [
      'In a large pot, dissolve salt and pickling spices in boiling water to create a heavy curing brine.',
      'Once cooled, submerge the beef brisket in the brine, weighing it down.',
      'Let cure in the refrigerator for 5 days to allow salt osmosis to complete.',
      'Remove beef from brine, rinse thoroughly, and transfer to a clean pot.',
      'Cover with fresh water, bring to a boil, and simmer on low for 3 hours until tender.'
    ]
  },
  {
    id: 'gelatin_mold_berries',
    name: 'Victorian Gelatin Mold with Fresh Berries',
    eraId: 'industrial',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    prepTime: '40 Minutes',
    difficulty: 'Apprentice',
    historicalContext: 'The 19th-century purification of animal gelatin allowed Victorian kitchens to cast elaborate, shiny dessert molds, which became high-status dinner table displays.',
    scienceTips: {
      title: 'Triple-Helix Gelatin Network Cross-Linking',
      explanation: 'Gelatin consists of denatured collagen peptide chains. Heating dissolves these chains in water. As it cools below 35°C (95°F), the chains realign into triple-helices, trapping water into a firm 3D gel.'
    },
    ingredients: [
      '20g Purified Gelatin Powder',
      '400ml White Grape Juice',
      '100g Fresh Berries (Raspberries, Blueberries)',
      '50g Sugar'
    ],
    steps: [
      'Bloom the gelatin powder in 50ml of cold water for 5 minutes.',
      'Heat the grape juice and sugar in a saucepan until warm (do not boil).',
      'Stir the bloomed gelatin into the warm juice until completely dissolved and clear.',
      'Arrange the fresh berries inside an ornate Victorian tin mold.',
      'Pour the clear juice-gelatin liquid over the berries, and refrigerate for 4 hours until firmly set.'
    ]
  },
  {
    id: 'alkaline_baking_powder_cake',
    name: 'Early Alkaline Baking Powder Sponge',
    eraId: 'industrial',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80',
    prepTime: '45 Minutes',
    difficulty: 'Beginner',
    historicalContext: 'Alfred Bird invented modern yeast-free baking powder in 1843, combining sodium bicarbonate and tartaric acid, allowing bakers to bake airy cakes instantly.',
    scienceTips: {
      title: 'Delayed Chemical Gas Expansion',
      explanation: 'Baking powder contains both baking soda and an dry acid (tartaric acid). When dry, they don\'t react. Adding liquid dissolves them, triggering immediate CO2 release, while oven heat triggers a secondary gas expansion.'
    },
    ingredients: [
      '200g Flour',
      '150g Sugar',
      '100g Butter, softened',
      '2 Eggs',
      '2 tsp Baking Powder',
      '100ml Milk'
    ],
    steps: [
      'Cream the softened butter and sugar together until light and fluffy.',
      'Beat in the eggs one at a time.',
      'Sift the flour and baking powder together, then fold into the butter mixture alternating with milk.',
      'Pour into a greased cake pan and bake immediately at 180°C (350°F) for 25 minutes until golden.'
    ]
  },

  // ==========================================
  // --- MOLECULAR GASTRONOMY (10 Recipes) ---
  // ==========================================
  {
    id: 'modern_spherification',
    name: 'Spherified Mango Caviar Pearls',
    eraId: 'modern',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    prepTime: '40 Minutes',
    difficulty: 'Master',
    historicalContext: 'Originally patented in the 1940s, spherification was introduced to elite gastronomy in 2003 by Chef Ferran Adrià of elBulli. This process sparked the Molecular Gastronomy movement, redefining how we experience texture.',
    scienceTips: {
      title: 'Divalent Cross-linking of Hydrocolloids',
      explanation: 'Sodium alginate is a long-chain carbohydrate. When dropped into a calcium lactate bath, divalent Calcium ions (Ca2+) displace monovalent Sodium ions (Na+). Since Ca2+ has two positive charges, it binds to two alginate chains simultaneously, cross-linking them.'
    },
    ingredients: [
      '150ml Fresh Sweet Mango Juice (low acidity)',
      '2g Sodium Alginate Powder',
      '5g Calcium Lactate Powder',
      '500ml Bottled Distilled Water (for bath)',
      '200ml Clean Water (for rinsing)'
    ],
    steps: [
      'Using a hand blender, dissolve 2g of Sodium Alginate into 100ml of distilled water, then stir in the mango juice.',
      'Let the mango mixture rest in the refrigerator for 1 hour to allow trapped micro-bubbles to escape.',
      'Prepare the calcium bath: Dissolve 5g of Calcium Lactate into 500ml of distilled water, stirring until clear.',
      'Fill a food syringe or plastic pipette with the rested mango alginate mixture.',
      'Hold the syringe 10-15cm above the calcium bath and gently squeeze to release droplets into the bath.',
      'Allow the caviar pearls to set in the calcium bath for 90 seconds to form a thin, elastic gel skin. Rinse in clean water.'
    ]
  },
  {
    id: 'nitrogen_sorbet',
    name: 'Liquid Nitrogen Basil Lime Sorbet',
    eraId: 'modern',
    image: 'https://images.unsplash.com/photo-1614707267537-b85acf00c4b8?auto=format&fit=crop&w=800&q=80',
    prepTime: '15 Minutes',
    difficulty: 'Master',
    historicalContext: 'Cryogenic freezing using liquid nitrogen at -196°C (-320°F) allows chefs to freeze desserts instantly, producing a sorbet with an incredibly smooth texture.',
    scienceTips: {
      title: 'Cryogenic Freezing & Micro-Crystal Prevention',
      explanation: 'Traditional freezing is slow, allowing water molecules to form large, jagged ice crystals that feel gritty. Liquid nitrogen freezes water instantly, preventing crystal growth and creating a velvety smooth texture.'
    },
    ingredients: [
      '200ml Fresh Lime Juice',
      '100ml Simple Syrup',
      '1 handful Fresh Basil Leaves',
      'Liquid Nitrogen (or Dry Ice slurry, handled with safety gloves)'
    ],
    steps: [
      'Blanch fresh basil leaves in boiling water for 10 seconds, then shock in ice water to lock in active chlorophyll.',
      'Blend the bright green basil leaves with lime juice and simple syrup until completely smooth.',
      'Strain the mixture into a stainless steel bowl.',
      'While whisking continuously, slowly pour in liquid nitrogen (handle with safety goggles and cryogenic gloves).',
      'The liquid will freeze instantly amidst thick white steam. Whisk until it becomes a smooth, velvety sorbet.'
    ]
  },
  {
    id: 'soy_lecithin_air',
    name: 'Soy Lecithin Soy-Ginger Air',
    eraId: 'modern',
    image: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80',
    prepTime: '15 Minutes',
    difficulty: 'Apprentice',
    historicalContext: 'Chefs use natural soy lecithin surfactants to turn flavorful liquids into stable, cloud-like foams (airs) that evaporate on the tongue, delivering pure aroma.',
    scienceTips: {
      title: 'Amphiphilic Surfactant Stabilization',
      explanation: 'Soy lecithin is amphiphilic, containing a hydrophilic (water-attracting) head and a lipophilic (fat-attracting) tail. When whisked, it aligns at the air-water interface, lowering surface tension to trap air bubbles.'
    },
    ingredients: [
      '100ml Soy Sauce',
      '100ml Ginger Juice (freshly squeezed)',
      '2g Soy Lecithin Powder'
    ],
    steps: [
      'Combine soy sauce, ginger juice, and soy lecithin powder in a wide, flat-bottomed container.',
      'Position an immersion blender halfway out of the liquid to maximize air intake.',
      'Blend on high speed for 1-2 minutes, creating a thick foam of light bubbles on the surface.',
      'Let the foam rest for 30 seconds to stabilize the bubble walls.',
      'Gently spoon the delicate, savory "air" onto seared fish or scallops.'
    ]
  },
  {
    id: 'transglutaminase_meat_glue',
    name: 'Transglutaminase Beef & Bacon Roulade',
    eraId: 'modern',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80',
    prepTime: '60 Minutes (Plus Chill)',
    difficulty: 'Master',
    historicalContext: 'Discovered in industrial meat processing, transglutaminase ("meat glue") is used by modern molecular chefs to bind different protein cuts together into seamless rolls.',
    scienceTips: {
      title: 'Enzymatic Isopeptide Bond Formation',
      explanation: 'Transglutaminase catalyzes the formation of a covalent isopeptide bond between the amino acid glutamine on one protein chain and lysine on another, fusing meat pieces together permanently.'
    },
    ingredients: [
      '300g Flank Steak',
      '4 slices Smoked Bacon',
      '3g Transglutaminase Powder (Activa)',
      '10ml Warm Water'
    ],
    steps: [
      'Dissolve the transglutaminase powder in water to form a smooth slurry.',
      'Lay the flank steak flat and brush the protein slurry over the surface.',
      'Lay bacon slices directly on top of the brushed steak.',
      'Roll the steak tightly into a cylinder, wrapping it snugly in multiple layers of plastic wrap to maintain pressure.',
      'Refrigerate for 4 hours to allow the enzymatic bonds to cure.',
      'Remove plastic, slice the seamless roulade into neat round pinwheels, and sear in a hot skillet.'
    ]
  },
  {
    id: 'xanthan_vinaigrette',
    name: 'Xanthan Gum Truffle Vinaigrette',
    eraId: 'modern',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    prepTime: '10 Minutes',
    difficulty: 'Beginner',
    historicalContext: 'Xanthan gum allows chefs to create stable emulsions of oil and vinegar without egg yolk, maintaining a crystal-clear appearance and luxurious mouthfeel.',
    scienceTips: {
      title: 'Pseudoplastic Shear-Thinning Stabilization',
      explanation: 'Xanthan gum is a polysaccharide that exhibits shear-thinning (pseudoplastic) properties. It is highly viscous when resting, preventing oil droplets from separating, but liquefies instantly under the shear force of chewing.'
    },
    ingredients: [
      '50ml Sherry Vinegar',
      '100ml Truffle Oil',
      '0.5g Xanthan Gum Powder',
      '1 pinch Salt'
    ],
    steps: [
      'Pour sherry vinegar and salt into a blender.',
      'Add the xanthan gum powder and blend on medium speed for 30 seconds to hydrate the polysaccharide chains.',
      'With the blender running on low, slowly drizzle in the truffle oil.',
      'The vinaigrette will immediately emulsify into a thick, glossy dressing that will never separate.'
    ]
  },
  {
    id: 'agar_spaghetti',
    name: 'Agar-Agar Balsamic Spaghetti',
    eraId: 'modern',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80',
    prepTime: '30 Minutes',
    difficulty: 'Apprentice',
    historicalContext: 'Chefs use agar-agar (a seaweed extract) to cast flavorful liquids into long, elastic gel tubes that mimic traditional Italian pasta.',
    scienceTips: {
      title: 'Thermoreversible Gelation of Polysaccharides',
      explanation: 'Agar-agar dissolves in boiling water. As it cools below 35°C (95°F), the galactose polymer chains link into a rigid double-helix structure, forming a firm gel that can withstand heating up to 80°C.'
    },
    ingredients: [
      '150ml Aged Balsamic Vinegar',
      '50ml Water',
      '2g Agar-Agar Powder',
      '1 meter food-grade silicone tubing (and syringe)'
    ],
    steps: [
      'Combine balsamic vinegar, water, and agar-agar powder in a saucepan.',
      'Bring to a rolling boil, stirring continuously for 1 minute to fully hydrate the agar.',
      'Fill a syringe with the hot balsamic agar mixture.',
      'Connect the syringe to the silicone tubing and inject the liquid until the tube is full.',
      'Submerge the filled tubing in a bowl of ice water for 2 minutes to trigger gelation.',
      'Fill the syringe with air, connect it to the tube, and push the air to extrude the solid balsamic spaghetti.'
    ]
  },
  {
    id: 'fizzy_grapes',
    name: 'Carbonated Fizzy Grape Jewels',
    eraId: 'modern',
    image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80',
    prepTime: '15 Minutes (Plus Chill)',
    difficulty: 'Beginner',
    historicalContext: 'By forcing carbon dioxide gas into fresh fruit, chefs create a surprising, sparkling sensation directly inside raw grape cells.',
    scienceTips: {
      title: 'Henry\'s Law of Gas Solubility in Lipids',
      explanation: 'Henry\'s law states that the solubility of a gas in a liquid is directly proportional to the pressure of that gas. High pressure inside a whipping siphon forces carbon dioxide (CO2) to dissolve into the water inside the grapes.'
    },
    ingredients: [
      '1 bunch Fresh Seedless Grapes (cold)',
      '2 CO2 Chargers',
      '1 Whipping Siphon'
    ],
    steps: [
      'Remove the cold grapes from their stems, wash, and dry them thoroughly.',
      'Place the grapes inside the whipping siphon and seal the lid tightly.',
      'Charge the siphon with 2 CO2 cartridges, shaking gently.',
      'Place the pressurized siphon in the refrigerator for 2 hours to encourage gas absorption.',
      'Quickly vent the siphon gas, open the lid, and serve the grapes immediately. They will tingle on the tongue like soda!'
    ]
  },
  {
    id: 'methylcellulose_hot_gel',
    name: 'Methylcellulose Hot-Melting Yellow Soup',
    eraId: 'modern',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80',
    prepTime: '40 Minutes',
    difficulty: 'Master',
    historicalContext: 'Methylcellulose is a unique hydrocolloid that defies standard culinary logic: it is a liquid when cold, but solidifies into a firm gel when heated.',
    scienceTips: {
      title: 'Thermal Gelation & Hydrophobic Hydration',
      explanation: 'At cold temperatures, water molecules form structured cages around methylcellulose chains, keeping them soluble. Heating breaks these cages, allowing the polymer chains to link via hydrophobic bonds into a firm gel.'
    },
    ingredients: [
      '200ml Clarified Vegetable Broth',
      '3g Methylcellulose F50 Powder',
      '1 pinch Saffron (for color and aroma)'
    ],
    steps: [
      'Disperse the methylcellulose powder into 100ml of boiling water, whisking rapidly.',
      'Add the vegetable broth and saffron threads, whisking thoroughly.',
      'Place in the refrigerator for 4 hours until ice-cold and completely clear (this allows the methylcellulose to fully hydrate).',
      'While cold, the mixture is a fluid yellow soup broth.',
      'Pour into a hot bowl or drop spoonfuls into boiling water. It will instantly solidify into soft, warm golden dumplings, which melt back into liquid soup as they cool.'
    ]
  },
  {
    id: 'goat_cheese_foam',
    name: 'Dehydrated Beetroot Soil & Goat Cheese Foam',
    eraId: 'modern',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    prepTime: '60 Minutes',
    difficulty: 'Master',
    historicalContext: 'A playful play on the classic beetroot and goat cheese salad, transforming the cheese into a warm featherweight foam sitting on edible sweet beetroot dirt.',
    scienceTips: {
      title: 'Maillard Dehydration & Nitrous Oxide Expansion',
      explanation: 'Dehydrating beets concentrates sugar and fibers. Pressurizing melted goat cheese with Nitrous Oxide (N2O) in a siphon dissolves the gas into the cheese lipids, creating a stable aerated foam when released.'
    },
    ingredients: [
      '150g Goat Cheese (soft)',
      '100ml Heavy Cream',
      '2 Large Red Beetroots',
      '1 N2O Charger',
      '1 Whipping Siphon'
    ],
    steps: [
      'Peel and slice beetroots ultra-thin, dry in a food dehydrator (or low oven) at 80°C for 4 hours, and grind into a dark "soil".',
      'In a saucepan, gently heat goat cheese and heavy cream until fully melted and smooth.',
      'Strain through a fine sieve to prevent clogging, and pour into the whipping siphon.',
      'Seal and charge the siphon with 1 N2O cartridge, shaking vigorously.',
      'Spoon beetroot soil onto a plate, and spray the light, savory goat cheese foam on top.'
    ]
  },
  {
    id: 'bourbon_mist',
    name: 'Smoked Applewood Bourbon Mist',
    eraId: 'modern',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
    prepTime: '15 Minutes',
    difficulty: 'Beginner',
    historicalContext: 'A modern aromatic cocktail presentation, introducing woodsmoke vapors into a bourbon glass to stimulate the olfactory system.',
    scienceTips: {
      title: 'Sorption of Lipid-Soluble Smoke Compounds',
      explanation: 'Woodsmoke contains fat-soluble phenolic compounds (guaiacol, syringol). Trap the smoke in a glass to dissolve these compounds into the alcohol lipids, adding a lasting smoky finish.'
    },
    ingredients: [
      '60ml Bourbon Whiskey',
      '1 slice Orange Peel',
      'Applewood chips (for smoking)',
      '1 Handheld Smoking Gun'
    ],
    steps: [
      'Pour the bourbon whiskey into a heavy rocks glass with a single large ice sphere.',
      'Express the orange peel oils over the glass rim.',
      'Place the glass under a glass smoking cloche or inverted bowl.',
      'Load applewood chips into the smoking gun, light them, and pump the dense fragrant smoke under the cloche.',
      'Let sit for 2 minutes to allow smoke sorptive processes to occur, then lift the cloche dramatically.'
    ]
  }
];
