import { FlavorProfile, IngredientCategory } from '../types';

export const flavorProfiles: FlavorProfile[] = [
  {
    id: 'garlic',
    name: 'Garlic',
    category: 'umami',
    chemicalClass: 'Organosulfurs & Thiosulfinates',
    mainCompounds: ['Allicin', 'Diallyl disulfide', 'Allyl methyl trisulfide'],
    description: 'Pungent, intense, and deeply savory. Bruising or cutting garlic triggers an enzymatic reaction that converts alliin to pungent allicin.',
    scienceExplanation: 'Thermal degradation under low heat transforms harsh, water-soluble allicin into oil-soluble diallyl disulfides, turning pungent bite into sweet, savory caramels and rich umami notes.',
    pairings: [
      {
        ingredientId: 'rosemary',
        ingredientName: 'Rosemary',
        matchScore: 88,
        chemicalExplanation: "Rosemary's pinene and camphor terpenes form an aromatic, lipid-soluble bridge with garlic's sulfur compounds.",
        culinaryTip: 'Infuse both in olive oil or butter at low temperatures to dissolve and stabilize volatile aromas before searing.'
      },
      {
        ingredientId: 'soy_sauce',
        ingredientName: 'Soy Sauce',
        matchScore: 94,
        chemicalExplanation: 'Both contain dense concentrations of free glutamates, which chemically trigger the umami taste receptors in synergism.',
        culinaryTip: 'Combine in cold marinades to allow deep osmotic penetration of sodium and umami compounds into proteins.'
      },
      {
        ingredientId: 'ginger',
        ingredientName: 'Ginger',
        matchScore: 92,
        chemicalExplanation: "Ginger's fiery gingerols combine with garlic's sulfur compounds, stimulating oral trigeminal nerves to enhance overall flavor perception.",
        culinaryTip: 'Sauté ginger and garlic together in fat at the base of a dish, preventing bitter notes from scorching.'
      }
    ]
  },
  {
    id: 'coffee',
    name: 'Coffee',
    category: 'bitter',
    chemicalClass: 'Furans, Pyrazines & Pyrroles',
    mainCompounds: ['2-Furfurylthiol', 'Alkylpyrazines', 'Guaiacol'],
    description: 'Bittersweet, deeply roasted, earthy, and highly complex. Roasting green beans creates over 800 volatile compounds via Maillard reactions.',
    scienceExplanation: 'Volatile alkylpyrazines provide the distinctive nutty, roasty top-notes, while guaiacol brings smoky phenolic undertones that dissolve perfectly in lipids.',
    pairings: [
      {
        ingredientId: 'blue_cheese',
        ingredientName: 'Blue Cheese',
        matchScore: 85,
        chemicalExplanation: 'The pungent, fatty methyl ketones and butyric acid of blue cheese cut through coffee’s roasted pyrazine bitterness, creating a contrasting, luxury flavor profile.',
        culinaryTip: 'Serve a coffee-rubbed steak with a rich blue cheese butter emulsion, or drizzle toasted brioche with coffee-honey and crumbled stilton.'
      },
      {
        ingredientId: 'cardamom',
        ingredientName: 'Cardamom',
        matchScore: 90,
        chemicalExplanation: "Cardamom's high content of 1,8-cineole (eucalyptol) introduces a cooling, eucalyptus-like contrast to coffee's dense, roasty furans.",
        culinaryTip: 'Freshly crush 1-2 cardamom pods directly into espresso grounds before extraction to volatilize the cineole.'
      },
      {
        ingredientId: 'dark_chocolate',
        ingredientName: 'Dark Chocolate (70%+)',
        matchScore: 97,
        chemicalExplanation: 'Both undergo heavy Maillard browning during roasting, sharing alkylpyrazines and cyclic enolones that stack into a profound bittersweet harmony.',
        culinaryTip: 'Melt dark chocolate into hot espresso to emulsify cocoa butter fat, capturing volatile aromas inside the liquid matrix.'
      }
    ]
  },
  {
    id: 'tomato',
    name: 'Tomato',
    category: 'umami',
    chemicalClass: 'Aldehydes, Esters & Glutamates',
    mainCompounds: ['Glutamic acid', 'Linalool', '(Z)-3-hexenal', 'Methylbutyrate'],
    description: 'Juicy, sweet, acid-forward, and an outstanding natural umami reservoir. Glutamate concentration triples as tomatoes ripen on the vine.',
    scienceExplanation: 'Tomato contains high levels of free glutamic acid. The volatile aldehydes like (Z)-3-hexenal supply the grassy green aroma of freshly plucked vines.',
    pairings: [
      {
        ingredientId: 'strawberry',
        ingredientName: 'Strawberry',
        matchScore: 89,
        chemicalExplanation: 'Both contain significant concentrations of furaneol and volatile fruit esters, creating a sweet-acidic bridge that blurs dessert and savory.',
        culinaryTip: 'Muddle heirloom tomatoes and fresh ripe strawberries together, straining with a coffee filter to yield an ultra-clear, highly aromatic chilled soup.'
      },
      {
        ingredientId: 'basil',
        ingredientName: 'Basil',
        matchScore: 95,
        chemicalExplanation: "Basil is rich in linalool and estragole, which chemically mirror the floral, sweet aldehydes released by sliced, fresh tomatoes.",
        culinaryTip: 'Never heat basil excessively. Tear it by hand (which breaks cell walls, releasing linalool) and scatter on hot tomatoes immediately before serving.'
      },
      {
        ingredientId: 'anchovy',
        ingredientName: 'Anchovy',
        matchScore: 98,
        chemicalExplanation: "Anchovy's high inosine monophosphate (IMP) binds with tomato's free glutamic acid (MSG), creating a massive cooperative umami synergism (8x perceived savoriness).",
        culinaryTip: 'Dissolve an anchovy fillet into warm olive oil with tomato paste at the start of tomato sauces to build a deep savory foundation.'
      }
    ]
  },
  {
    id: 'rosemary',
    name: 'Rosemary',
    category: 'bitter',
    chemicalClass: 'Terpenes & Monoterpenoids',
    mainCompounds: ['1,8-Cineole', 'Camphor', 'Alpha-Pinene', 'Borneol'],
    description: 'Woodsy, resinous, pine-like, and highly stable. The thick, needle-like leaves contain resilient, heat-tolerant terpenes.',
    scienceExplanation: 'Resinous monoterpenes like pinene are hydrophobic and stable. They dissolve beautifully in animal fats and cooking oils, protecting food from lipid oxidation during long roasts.',
    pairings: [
      {
        ingredientId: 'orange',
        ingredientName: 'Orange Citrus',
        matchScore: 87,
        chemicalExplanation: "The volatile limonene in orange peel brightens and cuts through the heavy, piney, camphoraceous notes of rosemary's pinene.",
        culinaryTip: 'Combine fresh grated orange zest, minced rosemary needles, and sea salt as a finishing rub for roasted poultry or root vegetables.'
      },
      {
        ingredientId: 'lamb',
        ingredientName: 'Lamb / Gamey Meats',
        matchScore: 93,
        chemicalExplanation: "The branched-chain fatty acids in lamb fat are highly soluble in rosemary's volatile terpenes, neutralizing overly greasy aromas and emphasizing sweet umami.",
        culinaryTip: 'Incorporate rosemary sprigs inside a roasting joint or use them as skewers on the grill to directly vaporize piney terpenes into the meat fat.'
      }
    ]
  },
  {
    id: 'chili',
    name: 'Chili Pepper',
    category: 'sour',
    chemicalClass: 'Capsaicinoids',
    mainCompounds: ['Capsaicin', 'Dihydrocapsaicin', 'Alkylpyrazines'],
    description: 'Fiery, stimulating, and warming. Capsaicin chemically binds with oral nociceptors (pain receptors) to trigger thermal heat warnings.',
    scienceExplanation: 'Capsaicin is a hydrophobic vanillylamide. Since it is insoluble in water but highly soluble in lipids and alcohol, water will not wash away the heat; only fats, proteins, or high sugars will.',
    pairings: [
      {
        ingredientId: 'lime',
        ingredientName: 'Lime Juice',
        matchScore: 88,
        chemicalExplanation: 'The citric acid stimulates salivary glands, physically diluting capsaicin concentration while its low pH (~2.3) provides an instant sensory offset.',
        culinaryTip: 'Always balance heavily spiced dishes with an acid squeeze (lime, lemon) at the absolute end to clean the palate and heighten freshness.'
      },
      {
        ingredientId: 'yogurt',
        ingredientName: 'Yogurt / Dairy',
        matchScore: 96,
        chemicalExplanation: 'Casein, the primary protein in milk, acts like a physical detergent, wrapping its lipophilic ends around hydrophobic capsaicin and lifting it off oral receptors.',
        culinaryTip: 'Use a yogurt-based marinade or serve spicy curry with a side of tzatziki or raita to allow diners to customize their thermal comfort levels.'
      }
    ]
  },
  {
    id: 'onion',
    name: 'Onion',
    category: 'umami',
    chemicalClass: 'Sulfoxides & Organosulfurs',
    mainCompounds: ['Propanethial S-oxide', 'Dipropyl disulfide', 'Dimethyl trisulfide'],
    description: 'Pungent when raw, extremely sweet and complex when cooked. The volatile tear-inducing compound is released upon cell disruption.',
    scienceExplanation: 'Cooking initiates carmelization and the slow reduction of sulfoxides into intensely sweet, rich dipropyl disulfides, forming the aromatic bedrock of global cuisines.',
    pairings: [
      {
        ingredientId: 'thyme',
        ingredientName: 'Thyme',
        matchScore: 91,
        chemicalExplanation: "Thyme's aromatic thymol oil acts as a warm phenolic companion to onion's sweet sulfur chains.",
        culinaryTip: 'Sauté finely diced sweet onions with whole thyme sprigs to transfer fat-soluble herb esters directly into the sweet caramelized onion matrix.'
      },
      {
        ingredientId: 'parmesan',
        ingredientName: 'Parmesan Cheese',
        matchScore: 93,
        chemicalExplanation: "Parmesan's extreme amino acid/glutamate density perfectly amplifies cooked onion's deep caramel sweetness and savory depth.",
        culinaryTip: 'Combine caramelized onions and grated parmesan in broths or savory tarts to maximize the umami synergy.'
      }
    ]
  },
  {
    id: 'ginger',
    name: 'Ginger',
    category: 'sour',
    chemicalClass: 'Gingerols & Sesquiterpenes',
    mainCompounds: ['Gingerol', 'Zingerone', 'Shogaol', 'Zingiberene'],
    description: 'Zesty, sharp, woody, and hot. Dehydrating or cooking ginger converts fresh gingerols to sweeter zingerone and more intensely spicy shogaols.',
    scienceExplanation: 'The volatile sesquiterpenes (like zingiberene) provide the citrusy, woody top-notes, while non-volatile gingerols stimulate thermal receptors in the mouth.',
    pairings: [
      {
        ingredientId: 'soy_sauce',
        ingredientName: 'Soy Sauce',
        matchScore: 95,
        chemicalExplanation: "Ginger's volatile terpene oils slice through the heavy, complex amino acids of fermented soy sauce, refreshing the palate.",
        culinaryTip: 'Grate fresh ginger directly into soy sauce and sesame oil to create a vibrant, aromatically balanced dipping sauce.'
      },
      {
        ingredientId: 'honey',
        ingredientName: 'Honey',
        matchScore: 90,
        chemicalExplanation: 'The honeyed phenylethanol and heavy sugars soothe the trigeminal heat of gingerols while highlighting their floral-citrus aspects.',
        culinaryTip: 'Simmer sliced ginger roots in pure wildflower honey to create an active, therapeutic syrup for teas and glazed proteins.'
      }
    ]
  },
  {
    id: 'soy_sauce',
    name: 'Soy Sauce',
    category: 'salty',
    chemicalClass: 'Glutamates & Esters',
    mainCompounds: ['Glutamic acid', 'Hemifuranone', 'Ethyl lactate'],
    description: 'Intensely salty, deep brown, savory, and caramelized. Created via microbial fermentation of roasted wheat and soy proteins.',
    scienceExplanation: 'Fermentation breaks down dense proteins into free glutamic acids. The complex baking and caramel aromas stem from volatile furanones.',
    pairings: [
      {
        ingredientId: 'ginger',
        ingredientName: 'Ginger',
        matchScore: 95,
        chemicalExplanation: "Ginger's sharp, volatile gingerols provide a sensory contrast that balances soy sauce's heavy sodium and deep, savory amino structures.",
        culinaryTip: 'Infuse ginger skins and coins into simmered soy marinades to extract woody-spicy aromatics.'
      },
      {
        ingredientId: 'miso',
        ingredientName: 'Miso',
        matchScore: 96,
        chemicalExplanation: 'Both share parallel koji-fermented compounds, resulting in an exponential layering of savory nucleotides and amino profiles.',
        culinaryTip: 'Blend soy sauce and miso paste together with a splash of mirin to lacquer onto grilled eggplant or fatty mushrooms.'
      }
    ]
  },
  {
    id: 'basil',
    name: 'Basil',
    category: 'sweet',
    chemicalClass: 'Phenylpropanoids & Monoterpenes',
    mainCompounds: ['Linalool', 'Estragole', 'Eugenol', 'Methyl cinnamate'],
    description: 'Sweet, floral, slightly peppery, and anise-like. Extremely delicate and highly sensitive to heat and bruising.',
    scienceExplanation: 'Basil contains linalool (floral) and estragole (anise/fennel). Crushing the leaf releases active polyphenol oxidases, quickly oxidizing the delicate green compounds into brown, bitter polymers.',
    pairings: [
      {
        ingredientId: 'tomato',
        ingredientName: 'Tomato',
        matchScore: 95,
        chemicalExplanation: 'The volatile green aldehydes in tomatoes match the floral, sweet linalool profiles of basil, establishing a classic culinary bond.',
        culinaryTip: 'Tear fresh basil leaves at the last second over warm tomato dishes to vaporize the linalool into the steam rising from the plate.'
      },
      {
        ingredientId: 'strawberry',
        ingredientName: 'Strawberry',
        matchScore: 88,
        chemicalExplanation: 'The shared sweet esters and floral linalool bridge the gap between fresh garden herbs and juicy, acidic summer berries.',
        culinaryTip: 'Muddle basil leaves into a strawberry shrub, or garnish a strawberry-balsamic tart with fresh sweet basil microgreens.'
      }
    ]
  },
  {
    id: 'anchovy',
    name: 'Anchovy',
    category: 'salty',
    chemicalClass: 'Nucleotides & Amines',
    mainCompounds: ['Inosine monophosphate', 'Glutamic acid', 'Trimethylamine'],
    description: 'Deeply salty, fishy, and a powerhouse of pure savory intensity. Preserved through salt-curing and aging.',
    scienceExplanation: 'Aged fish tissues develop high concentrations of inosine monophosphate (IMP). When paired with glutamic-acid rich foods, the combined compounds fit together perfectly in human taste receptors, magnifying the perception of umami.',
    pairings: [
      {
        ingredientId: 'tomato',
        ingredientName: 'Tomato',
        matchScore: 98,
        chemicalExplanation: "Anchovy's nucleotide IMP acts as a chemical multiplier for the rich free glutamic acid of tomato, generating 8x the umami sensation.",
        culinaryTip: 'Slowly melt anchovies in olive oil before adding tomatoes to form a seamless savory background where the fish flavor disappears but richness remains.'
      },
      {
        ingredientId: 'garlic',
        ingredientName: 'Garlic',
        matchScore: 94,
        chemicalExplanation: "Garlic's sulfur compounds integrate with the rich lipid profile of cured anchovies, masking sharp fishy amine notes.",
        culinaryTip: 'Pound anchovies and raw garlic into a paste for Caesar dressings or Italian bagna cauda dip.'
      }
    ]
  },
  {
    id: 'blue_cheese',
    name: 'Blue Cheese',
    category: 'sour',
    chemicalClass: 'Methyl Ketones & Fatty Acids',
    mainCompounds: ['2-Heptanone', '2-Nonanone', 'Butyric acid'],
    description: 'Sharp, pungent, creamy, and metallic. Blue veins of Penicillium roqueforti mold metabolize fats into highly volatile ketones.',
    scienceExplanation: 'Volatile methyl ketones like 2-heptanone provide the classic "blue" sharp aroma, while butyric acid yields its characteristic pungent, tangy bite.',
    pairings: [
      {
        ingredientId: 'coffee',
        ingredientName: 'Coffee',
        matchScore: 85,
        chemicalExplanation: "The fatty ketones and dairy lipids coat the tongue, softening the roasted, bitter pyrazines of coffee and leaving a luxurious, rich finish.",
        culinaryTip: 'Whip blue cheese into a cream and serve alongside coffee-braised beef cheeks or coffee-rubbed pork chops.'
      },
      {
        ingredientId: 'honey',
        ingredientName: 'Honey',
        matchScore: 92,
        chemicalExplanation: 'The extreme sweetness of fructose and floral sugars of honey contrasts the intense saltiness and metallic bite of mold-ripened cheese.',
        culinaryTip: 'Drizzle high-quality honeycomb or truffle honey over a wedge of blue cheese served on simple crackers.'
      }
    ]
  },
  {
    id: 'cardamom',
    name: 'Cardamom',
    category: 'sweet',
    chemicalClass: 'Monoterpenes & Terpinyl Esters',
    mainCompounds: ['1,8-Cineole', 'Alpha-terpinyl acetate', 'Limonene'],
    description: 'Intensely fragrant, sweet, eucalyptus-like, and warm. Known as the queen of spices.',
    scienceExplanation: 'Cineole provides the crisp, camphorous, cooling top-note, while terpinyl acetate lends a sweet, spicy, citrusy depth that lingers on the palate.',
    pairings: [
      {
        ingredientId: 'coffee',
        ingredientName: 'Coffee',
        matchScore: 90,
        chemicalExplanation: "Cardamom's cooling cineole monoterpenes cut through the dark, heavy roasted pyrazines of coffee, brightening the aroma.",
        culinaryTip: 'Crush green cardamom pods directly into whole coffee beans before grinding for a Middle Eastern styled brew.'
      },
      {
        ingredientId: 'dark_chocolate',
        ingredientName: 'Dark Chocolate',
        matchScore: 89,
        chemicalExplanation: "The spicy, citrusy, and resinous terpenes of cardamom cut through the dense, bitter, fatty butter of dark cacao.",
        culinaryTip: 'Infuse warm cream with crushed cardamom pods before folding into dark chocolate to make an aromatic ganache.'
      }
    ]
  },
  {
    id: 'dark_chocolate',
    name: 'Dark Chocolate',
    category: 'bitter',
    chemicalClass: 'Pyrazines & Polyphenols',
    mainCompounds: ['Tetramethylpyrazine', 'Phenylethylamine', 'Isovaleraldehyde'],
    description: 'Rich, bitter, complex, and luxurious. Created by roasting fermented cacao beans, which drives intense Maillard reactions.',
    scienceExplanation: 'Maillard reactions generate alkylpyrazines, supplying the unmistakable roasted, chocolatey aroma, while astringent polyphenols provide bitterness and structure.',
    pairings: [
      {
        ingredientId: 'coffee',
        ingredientName: 'Coffee',
        matchScore: 97,
        chemicalExplanation: 'Both ingredients undergo heavy roasting and share identical pyrazines, making their combination incredibly dense and complex.',
        culinaryTip: 'Dust espresso-infused desserts with high-quality unsweetened cocoa powder to bridge the roasted aromas.'
      },
      {
        ingredientId: 'blue_cheese',
        ingredientName: 'Blue Cheese',
        matchScore: 84,
        chemicalExplanation: 'The pungent, salty methyl ketones in blue cheese cut through chocolate’s heavy fat and bitter cocoa solids, providing an unexpected savory contrast.',
        culinaryTip: 'Create a dark chocolate truffle filled with a subtle, velvety blue cheese and cream reduction.'
      }
    ]
  },
  {
    id: 'lime',
    name: 'Lime Juice',
    category: 'sour',
    chemicalClass: 'Citric Acids & Terpenes',
    mainCompounds: ['Limonene', 'Citral', 'Gamma-terpinene', 'Citric acid'],
    description: 'Sharply sour, refreshing, and intensely aromatic. The green skin contains oil-rich glands packed with volatile terpenes.',
    scienceExplanation: 'Citric acid drives a low pH (around 2.0), triggering rapid salivation. Volatile limonene provides the refreshing citrus smell, while citral supplies the herbal-lemony punch.',
    pairings: [
      {
        ingredientId: 'chili',
        ingredientName: 'Chili Pepper',
        matchScore: 88,
        chemicalExplanation: 'The low pH and citric acid of lime stimulate taste buds, helping to dilute and physically lift capsaicin molecules off pain receptors.',
        culinaryTip: 'Squeeze fresh lime juice over fiery wings or spicy tacos at the final moment to brighten the flavors and tame the heat.'
      },
      {
        ingredientId: 'mint',
        ingredientName: 'Mint',
        matchScore: 92,
        chemicalExplanation: "Mint's cooling menthol interacts with lime's terpene-rich limonene, generating a powerful, refreshing burst of summery aromas.",
        culinaryTip: 'Muddle mint leaves gently (do not shred) with fresh lime juice and sugar to release oils without releasing bitter tannins.'
      }
    ]
  },
  {
    id: 'yogurt',
    name: 'Yogurt',
    category: 'sour',
    chemicalClass: 'Aliphatic Acids & Carbonyls',
    mainCompounds: ['Lactic acid', 'Diacetyl', 'Acetaldehyde'],
    description: 'Creamy, tart, cooling, and thick. Produced by fermenting milk with thermophilic lactic acid bacteria.',
    scienceExplanation: 'Bacteria convert lactose sugar into sour lactic acid, lowering pH. Diacetyl supplies the buttery note, while acetaldehyde provides the characteristic green-apple tartness.',
    pairings: [
      {
        ingredientId: 'chili',
        ingredientName: 'Chili Pepper',
        matchScore: 96,
        chemicalExplanation: 'The dairy protein casein acts as a physical detergent, capturing hydrophobic capsaicin and soothing burning sensations instantly.',
        culinaryTip: 'Serve fiery hot curries, kebabs, or chilis with a dollop of cold unsweetened Greek yogurt to balance thermal discomfort.'
      },
      {
        ingredientId: 'honey',
        ingredientName: 'Honey',
        matchScore: 89,
        chemicalExplanation: "Honey's intense fructose sweetness perfectly offsets yogurt's sharp lactic sourness, creating a harmonious, balanced dessert base.",
        culinaryTip: 'Drizzle wildflower honey and sprinkle toasted nuts over thick strained yogurt for a simple Greek-style treat.'
      }
    ]
  },
  {
    id: 'lamb',
    name: 'Lamb',
    category: 'umami',
    chemicalClass: 'Branched-Chain Fatty Acids',
    mainCompounds: ['4-Methyloctanoic acid', '4-Methylnonanoic acid', 'Aldehydes'],
    description: 'Gamey, rich, and deeply savory. The unique flavor of lamb lies in the high concentration of branched-chain fatty acids in its fat tissues.',
    scienceExplanation: 'Upon heating, branched-chain fatty acids volatilize, releasing the distinctively earthy, gamey flavor profile that dissolves perfectly in hot animal lipids.',
    pairings: [
      {
        ingredientId: 'rosemary',
        ingredientName: 'Rosemary',
        matchScore: 93,
        chemicalExplanation: "Rosemary's woodsy, resinous terpenes (pinene, camphor) dissolve directly into lamb's hot fat, neutralizing overly greasy, gamey off-notes.",
        culinaryTip: 'Pierce the lamb joint and insert fresh rosemary sprigs and garlic cloves before roasting to infuse lipids thoroughly.'
      },
      {
        ingredientId: 'mint',
        ingredientName: 'Mint',
        matchScore: 91,
        chemicalExplanation: "Mint's cooling menthol provides a crisp sensory contrast to lamb's rich, greasy, and heavy mouthfeel, cutting through the fat.",
        culinaryTip: 'Serve roast lamb with a traditional mint sauce made with minced fresh mint, sugar, and vinegar to cleanse the palate.'
      }
    ]
  },
  {
    id: 'mint',
    name: 'Mint',
    category: 'sweet',
    chemicalClass: 'Terpenoids & Ketones',
    mainCompounds: ['Menthol', 'Menthone', 'Limonene'],
    description: 'Cooling, highly refreshing, and sweet. Menthol physically triggers cold-sensitive receptors in the mouth.',
    scienceExplanation: 'Menthol binds to the TRPM8 ion channels on sensory nerves, sending a biological "cooling" signal to the brain, even though no physical temperature drop occurs.',
    pairings: [
      {
        ingredientId: 'lime',
        ingredientName: 'Lime Juice',
        matchScore: 92,
        chemicalExplanation: 'The icy sensation of menthol pairs with the sour, salivating citric acid of lime, reinforcing a high-vibrancy freshness.',
        culinaryTip: 'Tear fresh spearmint into lime-infused waters, cocktails, or fruit salads for instant cooling relief.'
      },
      {
        ingredientId: 'lamb',
        ingredientName: 'Lamb',
        matchScore: 91,
        chemicalExplanation: 'Menthol physically cuts through the greasy warmth of lamb fat, resetting palate receptors between rich bites of roasted meat.',
        culinaryTip: 'Fold finely chopped fresh mint into a cold yogurt sauce to spoon over hot grilled lamb skewers.'
      }
    ]
  },
  {
    id: 'cinnamon',
    name: 'Cinnamon',
    category: 'sweet',
    chemicalClass: 'Phenylpropanoids',
    mainCompounds: ['Cinnamaldehyde', 'Eugenol', 'Cinnamyl acetate'],
    description: 'Sweet, woody, warming, and highly aromatic. Obtained from the inner bark of Cinnamomum trees.',
    scienceExplanation: 'Cinnamaldehyde is the primary volatile compound responsible for the classic sweet, spicy aroma, while trace eugenol adds a comforting, clove-like background.',
    pairings: [
      {
        ingredientId: 'apple',
        ingredientName: 'Apple',
        matchScore: 94,
        chemicalExplanation: "Cinnamon's cinnamaldehyde links with apple's sweet fruit esters, warming up the apple's crisp acidity and completing the classic baking profile.",
        culinaryTip: 'Toss sliced tart apples with a pinch of ground cinnamon and lemon juice to enhance sweetness without adding extra sugar.'
      },
      {
        ingredientId: 'dark_chocolate',
        ingredientName: 'Dark Chocolate',
        matchScore: 88,
        chemicalExplanation: 'Cinnamon adds a sweet, warm, and exotic woodsy element that complements dark chocolate’s roasted Maillard pyrazines.',
        culinaryTip: 'Stir a pinch of ground cinnamon and a dash of chili powder into hot dark chocolate for a Mexican-inspired hot cocoa.'
      }
    ]
  },
  {
    id: 'salmon',
    name: 'Salmon',
    category: 'umami',
    chemicalClass: 'Lipids & Carotenoids',
    mainCompounds: ['Astaxanthin', 'Omega-3 fatty acids', '1-Octen-3-ol'],
    description: 'Rich, fatty, buttery, and mild. The pink color is derived from astaxanthin, a powerful natural antioxidant.',
    scienceExplanation: 'The high concentration of healthy polyunsaturated fatty acids (Omega-3s) gives salmon its rich, melting mouthfeel, while subtle aldehydes supply its fresh, clean marine scent.',
    pairings: [
      {
        ingredientId: 'lime',
        ingredientName: 'Lime Juice',
        matchScore: 90,
        chemicalExplanation: 'The sharp citric acid of lime cuts through the heavy, coating salmon lipids, cleaning the palate and highlighting the delicate fish sweetness.',
        culinaryTip: 'Squeeze fresh lime juice over a seared salmon fillet right as it comes off the heat to preserve its crisp skin.'
      },
      {
        ingredientId: 'soy_sauce',
        ingredientName: 'Soy Sauce',
        matchScore: 93,
        chemicalExplanation: 'The dense free glutamates of soy sauce penetrate the fatty salmon flesh, amplifying its natural savory umami.',
        culinaryTip: 'Glaze salmon fillets with a reduction of soy sauce, ginger, and honey during the final minutes of baking.'
      }
    ]
  },
  {
    id: 'miso',
    name: 'Miso Paste',
    category: 'umami',
    chemicalClass: 'Glutamates & Pyrazines',
    mainCompounds: ['Glutamic acid', 'Ethyl hexanoate', 'Tetramethylpyrazine'],
    description: 'Salty, sweet, deeply savory, and complex. A traditional Japanese seasoning produced by fermenting soybeans with salt and koji.',
    scienceExplanation: 'Fermentation releases massive pools of free glutamates and aspartates, while the mold fermentation creates sweet, fruity esters (ethyl hexanoate) and earthy pyrazines.',
    pairings: [
      {
        ingredientId: 'honey',
        ingredientName: 'Honey',
        matchScore: 91,
        chemicalExplanation: 'The floral sugars of honey balance miso’s heavy salinity, while miso’s complex koji notes prevent honey from tasting cloyingly sweet.',
        culinaryTip: 'Whisk white miso paste with wildflower honey and rice vinegar to make a rich, glossy glaze for vegetables or poultry.'
      },
      {
        ingredientId: 'mushroom',
        ingredientName: 'Mushroom',
        matchScore: 94,
        chemicalExplanation: "Both share earthy, woodsy compounds (octenols in mushrooms, pyrazines in miso) and massive free amino acid profiles, doubling the umami depth.",
        culinaryTip: 'Sauté cremini or shiitake mushrooms and deglaze the pan with a spoonful of miso dissolved in warm water or dashi.'
      }
    ]
  },
  {
    id: 'honey',
    name: 'Honey',
    category: 'sweet',
    chemicalClass: 'Saccharides & Aromatics',
    mainCompounds: ['Fructose', 'Glucose', 'Methyl syringate', 'Phenylethanol'],
    description: 'Thick, floral, sweet, and sticky. Created by bees collecting nectar from flowers.',
    scienceExplanation: 'Mainly made of simple sugars fructose and glucose. Trace compounds like phenylethanol supply the unmistakable floral, honeyed, rose-like aroma.',
    pairings: [
      {
        ingredientId: 'blue_cheese',
        ingredientName: 'Blue Cheese',
        matchScore: 92,
        chemicalExplanation: 'Fructose sugars instantly soothe the metallic, salty burn of blue cheese mold ketones, leaving behind a smooth, sweet, and funky finish.',
        culinaryTip: 'Drizzle raw honey over a blue cheese pizza or flatbread right out of the oven.'
      },
      {
        ingredientId: 'ginger',
        ingredientName: 'Ginger',
        matchScore: 90,
        chemicalExplanation: "Honey's smooth, coating viscosity wraps around ginger's spicy gingerols, muting raw heat while highlighting ginger's citrus notes.",
        culinaryTip: 'Infuse ginger juice, fresh honey, and hot water to make a quick soothing tonic.'
      }
    ]
  },
  {
    id: 'mushroom',
    name: 'Mushroom',
    category: 'umami',
    chemicalClass: 'Octenols & Glutamates',
    mainCompounds: ['1-Octen-3-ol', 'Glutamic acid', 'Guanylic acid'],
    description: 'Earthy, woodsy, meaty, and savory. Wild mushrooms carry higher chemical complexity than cultivated button varieties.',
    scienceExplanation: '1-Octen-3-ol provides the distinct "mushroom" earthy smell, while naturally occurring guanylate and glutamate amino acids supply the rich savory taste.',
    pairings: [
      {
        ingredientId: 'garlic',
        ingredientName: 'Garlic',
        matchScore: 92,
        chemicalExplanation: "Garlic's hot organosulfurs blend seamlessly with the earthy, volatile octenols of mushrooms, building a robust, comforting savory base.",
        culinaryTip: 'Sauté mushrooms in butter or oil until browned before throwing in minced garlic to avoid burning the garlic.'
      },
      {
        ingredientId: 'thyme',
        ingredientName: 'Thyme',
        matchScore: 90,
        chemicalExplanation: "Thyme's pinene and thymol terpenes share woodsy, forest-floor aromas with mushroom octenols, resulting in a cohesive herbal pairing.",
        culinaryTip: 'Toss fresh thyme leaves into wild mushrooms sautéed in brown butter.'
      }
    ]
  },
  {
    id: 'thyme',
    name: 'Thyme',
    category: 'bitter',
    chemicalClass: 'Phenols & Terpenes',
    mainCompounds: ['Thymol', 'Carvacrol', 'P-Cymene'],
    description: 'Earthy, dry, herbal, and slightly medicinal. Exceptionally versatile in cooked savory dishes.',
    scienceExplanation: 'Thymol and carvacrol are antiseptic phenols that provide a warm, herbaceous, slightly pungent woodsy scent that is highly stable during slow cooking.',
    pairings: [
      {
        ingredientId: 'onion',
        ingredientName: 'Onion',
        matchScore: 91,
        chemicalExplanation: 'Thyme’s phenolic thymol notes add a rustic, earthy dimension that grounds the sweet caramelized sugars of cooked onions.',
        culinaryTip: 'Always add fresh thyme stems to slow-cooking french onion soup broths.'
      },
      {
        ingredientId: 'mushroom',
        ingredientName: 'Mushroom',
        matchScore: 90,
        chemicalExplanation: 'The shared earthy, forest-floor chemical undertones create a comforting, rustic flavor bridge.',
        culinaryTip: 'Use thyme-infused butter to pan-fry forest mushrooms like chantarelles or porcini.'
      }
    ]
  },
  {
    id: 'apple',
    name: 'Apple',
    category: 'sweet',
    chemicalClass: 'Aliphatic Esters & Acids',
    mainCompounds: ['Ethyl butyrate', 'Hexyl acetate', 'Malic acid'],
    description: 'Crisp, sweet, juicy, and tart. The distinct aroma of ripe apples is driven by volatile fruity esters.',
    scienceExplanation: 'Fruity esters (ethyl butyrate) provide the sweet top-notes, while malic acid provides the sour, crisp structure that stimulates salivary flow.',
    pairings: [
      {
        ingredientId: 'cinnamon',
        ingredientName: 'Cinnamon',
        matchScore: 94,
        chemicalExplanation: "Apple's sweet fruit esters are warmed up by cinnamon's cinnamaldehyde, creating a classic, comforting sensory combination.",
        culinaryTip: 'Bake sliced apples with a light dusting of cinnamon and a splash of cider to concentrate the esters.'
      },
      {
        ingredientId: 'blue_cheese',
        ingredientName: 'Blue Cheese',
        matchScore: 87,
        chemicalExplanation: "The crisp acidity and malic acid of apple cut through blue cheese's heavy dairy fats, clearing the tongue and offsetting the strong mold ketones.",
        culinaryTip: 'Serve thin slices of tart Granny Smith apples on a cheese board directly alongside blue cheese wedges.'
      }
    ]
  },
  {
    id: 'parmesan',
    name: 'Parmesan Cheese',
    category: 'salty',
    chemicalClass: 'Glutamates & Short-Chain Acids',
    mainCompounds: ['Glutamic acid', 'Isovaleric acid', 'Ethyl butyrate'],
    description: 'Sharp, salty, crystalline, and packed with savory umami. Aged for 12 to 36 months.',
    scienceExplanation: 'Aging breaks down milk proteins into crystalline white lactate and massive amounts of free glutamic acid. Isovaleric acid provides the sharp, aged cheese scent.',
    pairings: [
      {
        ingredientId: 'tomato',
        ingredientName: 'Tomato',
        matchScore: 96,
        chemicalExplanation: 'Both contain incredibly dense free glutamic acid pools. Combining them triggers a rich, overlapping umami saturation.',
        culinaryTip: 'Grate fresh Parmesan over roasted tomatoes or slow-simmered marinara sauce to finish the dish.'
      },
      {
        ingredientId: 'onion',
        ingredientName: 'Onion',
        matchScore: 93,
        chemicalExplanation: "Parmesan's salty bite and savory amino profile contrast and highlight the sweet, caramelized sugars of cooked onions.",
        culinaryTip: 'Top French onion soup croutons with a generous layer of grated Parmesan before broiling.'
      }
    ]
  }
];

export const allIngredientsDatabase: IngredientCategory[] = [
  {
    id: 'sweet',
    name: 'Sweet',
    chemicalSignatures: ['Fructose & Glucose', 'Vanillin', 'Lactones', 'Esters'],
    scientificDescription: 'Driven by carbohydrates (sugars like sucrose, glucose, and fructose) that bind to T1R2 and T1R3 G-protein-coupled receptors on the tongue, signaling calories, density, and natural energy.',
    colorTheme: {
      bg: 'bg-amber-50/60',
      text: 'text-amber-900',
      border: 'border-amber-200/60',
      accent: 'bg-amber-500',
      badge: 'bg-amber-100 text-amber-800 border-amber-200'
    },
    ingredients: [
      { name: 'Honey', subCategory: 'Nectar', chemicalCompounds: ['Fructose', 'Glucose', 'Phenylethanol'], isInteractive: true, profileId: 'honey' },
      { name: 'Apple', subCategory: 'Pome Fruit', chemicalCompounds: ['Ethyl butyrate', 'Hexyl acetate', 'Malic acid'], isInteractive: true, profileId: 'apple' },
      { name: 'Cinnamon', subCategory: 'Bark Spice', chemicalCompounds: ['Cinnamaldehyde', 'Eugenol', 'Cinnamyl acetate'], isInteractive: true, profileId: 'cinnamon' },
      { name: 'Basil', subCategory: 'Tender Herb', chemicalCompounds: ['Linalool', 'Estragole', 'Eugenol'], isInteractive: true, profileId: 'basil' },
      { name: 'Cardamom', subCategory: 'Seed Spice', chemicalCompounds: ['1,8-Cineole', 'Alpha-terpinyl acetate'], isInteractive: true, profileId: 'cardamom' },
      { name: 'Mint', subCategory: 'Soft Herb', chemicalCompounds: ['Menthol', 'Menthone', 'Limonene'], isInteractive: true, profileId: 'mint' },
      { name: 'Maple Syrup', subCategory: 'Sap Reduction', chemicalCompounds: ['Maple furanone', 'Vanillin', 'Syringaldehyde'], isInteractive: false },
      { name: 'Vanilla Bean', subCategory: 'Orchid Pod', chemicalCompounds: ['Vanillin', 'Guaiacol', '4-hydroxybenzaldehyde'], isInteractive: false },
      { name: 'Coconut', subCategory: 'Drupe', chemicalCompounds: ['Delta-octalactone', 'Delta-decalactone'], isInteractive: false },
      { name: 'Sweet Potato', subCategory: 'Tuber', chemicalCompounds: ['Maltol', 'Furfural', 'Beta-amylase'], isInteractive: false },
      { name: 'Fresh Fig', subCategory: 'Syconium', chemicalCompounds: ['Benzaldehyde', 'Linalool', 'Alpha-copaene'], isInteractive: false },
      { name: 'Strawberry', subCategory: 'Aggregate Fruit', chemicalCompounds: ['Furaneol', 'Methyl butyrate', 'Linalool'], isInteractive: false },
      { name: 'Peach', subCategory: 'Stone Fruit', chemicalCompounds: ['Gamma-undecalactone', 'Benzaldehyde', 'Linalool'], isInteractive: false },
      { name: 'Mango', subCategory: 'Tropical Fruit', chemicalCompounds: ['Ethyl butyrate', 'Ocimene', 'Alpha-pinene'], isInteractive: false },
      { name: 'Agave Nectar', subCategory: 'Succulent Sap', chemicalCompounds: ['Fructose', 'Glucose', 'Saponins'], isInteractive: false },
      { name: 'Wild Blackberry', subCategory: 'Bramble Fruit', chemicalCompounds: ['Ethyl lactate', 'Alpha-ionone', 'Linalool'], isInteractive: false },
      { name: 'Star Anise', subCategory: 'Pod Spice', chemicalCompounds: ['Anethole', 'Limonene', 'Foeniculin'], isInteractive: false },
      { name: 'Toasted Caramel', subCategory: 'Pyrolyzed Sugar', chemicalCompounds: ['Maltol', 'Cyclotene', 'Diacetyl'], isInteractive: false }
    ]
  },
  {
    id: 'sour',
    name: 'Sour',
    chemicalSignatures: ['Citric Acid', 'Lactic Acid', 'Acetic Acid', 'Malic Acid'],
    scientificDescription: 'Triggered by hydrogen ions (H+) from organic acids dissolved in liquids. These ions block potassium channels in sour taste cells, sending warnings of freshness, fermentation, or unripeness.',
    colorTheme: {
      bg: 'bg-lime-50/60',
      text: 'text-lime-900',
      border: 'border-lime-200/60',
      accent: 'bg-lime-500',
      badge: 'bg-lime-100 text-lime-800 border-lime-200'
    },
    ingredients: [
      { name: 'Lime Juice', subCategory: 'Citrus', chemicalCompounds: ['Citric acid', 'Limonene', 'Citral'], isInteractive: true, profileId: 'lime' },
      { name: 'Yogurt', subCategory: 'Fermented Dairy', chemicalCompounds: ['Lactic acid', 'Diacetyl', 'Acetaldehyde'], isInteractive: true, profileId: 'yogurt' },
      { name: 'Ginger', subCategory: 'Rhizome', chemicalCompounds: ['Gingerol', 'Zingerone', 'Shogaol'], isInteractive: true, profileId: 'ginger' },
      { name: 'Blue Cheese', subCategory: 'Aged Cheese', chemicalCompounds: ['2-Heptanone', '2-Nonanone', 'Butyric acid'], isInteractive: true, profileId: 'blue_cheese' },
      { name: 'Chili Pepper', subCategory: 'Nightshade', chemicalCompounds: ['Capsaicin', 'Dihydrocapsaicin', 'Alkylpyrazines'], isInteractive: true, profileId: 'chili' },
      { name: 'Lemon Juice', subCategory: 'Citrus', chemicalCompounds: ['Citric acid', 'Limonene', 'Gamma-terpinene'], isInteractive: false },
      { name: 'Apple Cider Vinegar', subCategory: 'Acidified Cider', chemicalCompounds: ['Acetic acid', 'Ethyl acetate', 'Acetaldehyde'], isInteractive: false },
      { name: 'Tamarind', subCategory: 'Legume Pod', chemicalCompounds: ['Tartaric acid', 'Furfural', '2-phenylacetaldehyde'], isInteractive: false },
      { name: 'Sourdough Bread', subCategory: 'Fermented Grain', chemicalCompounds: ['Lactic acid', 'Acetoin', 'Ethyl lactate'], isInteractive: false },
      { name: 'Hibiscus Flowers', subCategory: 'Petals', chemicalCompounds: ['Malic acid', 'Citric acid', 'Anthocyanins'], isInteractive: false },
      { name: 'Green Apple', subCategory: 'Pome Fruit', chemicalCompounds: ['Malic acid', 'Hexyl acetate', 'Butyl acetate'], isInteractive: false },
      { name: 'Kumquat', subCategory: 'Citrus', chemicalCompounds: ['Limonene', 'Citric acid', 'Myrcene'], isInteractive: false },
      { name: 'Kimchi', subCategory: 'Lacto-Ferment', chemicalCompounds: ['Lactic acid', 'Dimethyl disulfide', 'Allyl isothiocyanate'], isInteractive: false },
      { name: 'Kombucha', subCategory: 'Scoby Ferment', chemicalCompounds: ['Gluconic acid', 'Acetic acid', 'Ethyl acetate'], isInteractive: false },
      { name: 'Cranberry', subCategory: 'Heaths Berry', chemicalCompounds: ['Quinic acid', 'Malic acid', 'Benzoic acid'], isInteractive: false },
      { name: 'Rhubarb Stalk', subCategory: 'Stalk Herb', chemicalCompounds: ['Oxalic acid', 'Malic acid', 'Hexanal'], isInteractive: false },
      { name: 'Sumac Powder', subCategory: 'Dried Drupe', chemicalCompounds: ['Malic acid', 'Tannins', 'Caryophyllene'], isInteractive: false }
    ]
  },
  {
    id: 'salty',
    name: 'Salty',
    chemicalSignatures: ['Sodium Chloride', 'Mineral Salts', 'Iodides'],
    scientificDescription: 'Perceived through epithelial sodium channels (ENaC) on taste receptor cells. Crucial for electrolyte homeostasis, salt enhances volatile vaporization and suppresses bitterness.',
    colorTheme: {
      bg: 'bg-sky-50/60',
      text: 'text-sky-900',
      border: 'border-sky-200/60',
      accent: 'bg-sky-500',
      badge: 'bg-sky-100 text-sky-800 border-sky-200'
    },
    ingredients: [
      { name: 'Soy Sauce', subCategory: 'Fermented Bean', chemicalCompounds: ['Glutamic acid', 'Hemifuranone', 'Ethyl lactate'], isInteractive: true, profileId: 'soy_sauce' },
      { name: 'Anchovy', subCategory: 'Cured Fish', chemicalCompounds: ['Inosine monophosphate', 'Trimethylamine'], isInteractive: true, profileId: 'anchovy' },
      { name: 'Parmesan Cheese', subCategory: 'Hard Cheese', chemicalCompounds: ['Glutamic acid', 'Isovaleric acid', 'Ethyl butyrate'], isInteractive: true, profileId: 'parmesan' },
      { name: 'Sea Salt', subCategory: 'Mineral Crystal', chemicalCompounds: ['Sodium chloride', 'Magnesium chloride', 'Sulfate minerals'], isInteractive: false },
      { name: 'Prosciutto', subCategory: 'Cured Pork', chemicalCompounds: ['Octanal', 'Hexanal', 'Branched aldehydes'], isInteractive: false },
      { name: 'Pickled Capers', subCategory: 'Bud Ferment', chemicalCompounds: ['Rutin', 'Methyl isothiocyanate', 'Benzyl alcohol'], isInteractive: false },
      { name: 'Kalamata Olives', subCategory: 'Brined Drupe', chemicalCompounds: ['Oleuropein', 'Guaiacol', 'Ethyl acetate'], isInteractive: false },
      { name: 'Feta Cheese', subCategory: 'Brined Cheese', chemicalCompounds: ['Butyric acid', '2-Heptanone', 'Hexanoic acid'], isInteractive: false },
      { name: 'Kombu Kelp', subCategory: 'Marine Algae', chemicalCompounds: ['Sodium chloride', 'Glutamic acid', 'Iodine compounds'], isInteractive: false },
      { name: 'Salted Butter', subCategory: 'Cultured Fat', chemicalCompounds: ['Sodium chloride', 'Diacetyl', 'Lactic acid'], isInteractive: false },
      { name: 'Crispy Bacon', subCategory: 'Smoked Pork', chemicalCompounds: ['Guaiacol', 'Alkylpyrazines', 'Dimethyl disulfide'], isInteractive: false },
      { name: 'Beluga Caviar', subCategory: 'Sturgeon Roe', chemicalCompounds: ['Trimethylamine', 'Lipids', 'Amino acids'], isInteractive: false },
      { name: 'Halloumi', subCategory: 'Grilling Cheese', chemicalCompounds: ['Octanoic acid', 'Decanoic acid'], isInteractive: false },
      { name: 'Salicornia (Sea Beans)', subCategory: 'Halophyte', chemicalCompounds: ['Sodium salts', 'Saponins', 'Hexanal'], isInteractive: false }
    ]
  },
  {
    id: 'bitter',
    name: 'Bitter',
    chemicalSignatures: ['Alkaloids', 'Phenols', 'Terpenes', 'Flavonoids'],
    scientificDescription: 'Detected by the T2R family of about 25 different G-protein-coupled receptors. Historically a defense mechanism against toxins, bitterness adds complexity, depth, and structural contrast.',
    colorTheme: {
      bg: 'bg-zinc-100/60',
      text: 'text-zinc-900',
      border: 'border-zinc-300/60',
      accent: 'bg-zinc-600',
      badge: 'bg-zinc-100 text-zinc-800 border-zinc-200'
    },
    ingredients: [
      { name: 'Coffee', subCategory: 'Roasted Seed', chemicalCompounds: ['2-Furfurylthiol', 'Alkylpyrazines', 'Guaiacol'], isInteractive: true, profileId: 'coffee' },
      { name: 'Dark Chocolate', subCategory: 'Fermented Bean', chemicalCompounds: ['Tetramethylpyrazine', 'Phenylethylamine', 'Theobromine'], isInteractive: true, profileId: 'dark_chocolate' },
      { name: 'Rosemary', subCategory: 'Resinous Herb', chemicalCompounds: ['1,8-Cineole', 'Camphor', 'Alpha-Pinene'], isInteractive: true, profileId: 'rosemary' },
      { name: 'Thyme', subCategory: 'Woody Herb', chemicalCompounds: ['Thymol', 'Carvacrol', 'P-Cymene'], isInteractive: true, profileId: 'thyme' },
      { name: 'Matcha Green Tea', subCategory: 'Stoneground Leaf', chemicalCompounds: ['Epigallocatechin gallate', 'L-theanine', 'Caffeine'], isInteractive: false },
      { name: 'Bitter Melon', subCategory: 'Gourd', chemicalCompounds: ['Momordicines', 'Charantin'], isInteractive: false },
      { name: 'Grapefruit Peel', subCategory: 'Citrus', chemicalCompounds: ['Naringin', 'Limonene', 'Nooptkatone'], isInteractive: false },
      { name: 'Wild Arugula', subCategory: 'Cruciferous Leaf', chemicalCompounds: ['Erucin', 'Sulforaphane', 'Dimethyl sulfide'], isInteractive: false },
      { name: 'Tonic Water', subCategory: 'Infused Carbonate', chemicalCompounds: ['Quinine', 'Limonene', 'Citric acid'], isInteractive: false },
      { name: 'Hops', subCategory: 'Humulus Cone', chemicalCompounds: ['Humulene', 'Myrcene', 'Cohumulone'], isInteractive: false },
      { name: 'Dandelion Greens', subCategory: 'Taproot Leaves', chemicalCompounds: ['Taraxacin', 'Luteolin', 'Sesquiterpene lactones'], isInteractive: false },
      { name: 'Raw Cacao Nibs', subCategory: 'Crushed Beans', chemicalCompounds: ['Theobromine', 'Proanthocyanidins', 'Caffeine'], isInteractive: false },
      { name: 'Roasted Chicory Root', subCategory: 'Taproot Roast', chemicalCompounds: ['Lactucin', 'Inulin pyrolysis volatiles', 'Furfural'], isInteractive: false },
      { name: 'English Walnut', subCategory: 'Juglans Seed', chemicalCompounds: ['Juglone', 'Ellagitannins', 'Linoleic acid'], isInteractive: false },
      { name: 'Turmeric Rhizome', subCategory: 'Zingiberaceae', chemicalCompounds: ['Curcumin', 'Ar-turmerone', 'Zingiberene'], isInteractive: false }
    ]
  },
  {
    id: 'umami',
    name: 'Umami',
    chemicalSignatures: ['Glutamic Acid', 'Inosine Monophosphate (IMP)', 'Guanylic Acid (GMP)'],
    scientificDescription: 'Elicited by L-glutamate and 5\'-ribonucleotides binding to heterodimeric T1R1+T1R3 receptors. It flags the presence of high-density proteins and amino acids, creating rich mouthfeel.',
    colorTheme: {
      bg: 'bg-rose-50/60',
      text: 'text-rose-900',
      border: 'border-rose-200/60',
      accent: 'bg-rose-500',
      badge: 'bg-rose-100 text-rose-800 border-rose-200'
    },
    ingredients: [
      { name: 'Garlic', subCategory: 'Allium Bulb', chemicalCompounds: ['Allicin', 'Diallyl disulfide', 'Allyl methyl trisulfide'], isInteractive: true, profileId: 'garlic' },
      { name: 'Tomato', subCategory: 'Solanum Berry', chemicalCompounds: ['Glutamic acid', 'Linalool', '(Z)-3-hexenal'], isInteractive: true, profileId: 'tomato' },
      { name: 'Onion', subCategory: 'Allium Bulb', chemicalCompounds: ['Propanethial S-oxide', 'Dipropyl disulfide'], isInteractive: true, profileId: 'onion' },
      { name: 'Lamb', subCategory: 'Ruminant Meat', chemicalCompounds: ['4-Methyloctanoic acid', '4-Methylnonanoic acid'], isInteractive: true, profileId: 'lamb' },
      { name: 'Salmon', subCategory: 'Fatty Fish', chemicalCompounds: ['Astaxanthin', 'Omega-3 lipids', '1-Octen-3-ol'], isInteractive: true, profileId: 'salmon' },
      { name: 'Miso Paste', subCategory: 'Koji Bean', chemicalCompounds: ['Glutamic acid', 'Ethyl hexanoate', 'Tetramethylpyrazine'], isInteractive: true, profileId: 'miso' },
      { name: 'Mushroom', subCategory: 'Fungi Sporocarp', chemicalCompounds: ['1-Octen-3-ol', 'Glutamic acid', 'Guanylic acid'], isInteractive: true, profileId: 'mushroom' },
      { name: 'Aged Beef Ribeye', subCategory: 'Cattle Roast', chemicalCompounds: ['Inosine monophosphate', 'Glutamic acid', 'Methyl furans'], isInteractive: false },
      { name: 'Concentrated Chicken Broth', subCategory: 'Poultry Reduction', chemicalCompounds: ['Glutamic acid', 'Carnosine', 'Anserine'], isInteractive: false },
      { name: 'Monosodium Glutamate (MSG)', subCategory: 'Purified Salt', chemicalCompounds: ['Free glutamate ions', 'Sodium'], isInteractive: false },
      { name: 'Black Garlic', subCategory: 'Aged Allium', chemicalCompounds: ['S-allyl-cysteine', 'Melanoidins', '5-hydroxymethylfurfural'], isInteractive: false },
      { name: 'Black Truffle', subCategory: 'Mycorrhizal Fungi', chemicalCompounds: ['Dimethyl sulfide', '2-Methylbutyrate', 'Androstenol'], isInteractive: false },
      { name: 'Nutritional Yeast', subCategory: 'Deactivated Yeast', chemicalCompounds: ['Glutamic acid', 'Guanylic acid', 'Beta-glucans'], isInteractive: false },
      { name: 'Oyster Sauce', subCategory: 'Mollusk Extract', chemicalCompounds: ['Glutamic acid', 'Succinic acid', 'Sodium'], isInteractive: false },
      { name: 'Smoked Pork Belly', subCategory: 'Cured Pork', chemicalCompounds: ['Guaiacol', 'Methyl sulfides', 'Oleic acid'], isInteractive: false },
      { name: 'Pan-Roasted Duck', subCategory: 'Waterfowl Meat', chemicalCompounds: ['Sulfur-containing furans', 'Dimethyl trisulfide'], isInteractive: false },
      { name: 'Seared Scallops', subCategory: 'Bivalve Mollusk', chemicalCompounds: ['Glycine', 'Adenosine monophosphate', 'Glutamate'], isInteractive: false }
    ]
  }
];
