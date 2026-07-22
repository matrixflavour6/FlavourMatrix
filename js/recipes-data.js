const RECIPES = [
  {
    id:'flatbread', title:'Neolithic Flatbread', era:'neolithic',
    difficulty:'Easy', time:'25 min',
    tagline:'Ground einkorn, water, fire — the first processed food.',
    scienceTip:'The Maillard Reaction',
    steps:[
      'Grind whole einkorn or spelt berries into a coarse flour using a mortar or grain mill.',
      'Mix flour with water until it forms a thick, workable paste — no leavening.',
      'Press into thin rounds by hand, about 5mm thick.',
      'Cook on a hot flat stone or dry skillet, 2–3 minutes per side, until deeply browned and blistered.'
    ],
    science:'Browning develops entirely through the Maillard reaction: amino acids and sugars in the grain recombine under dry heat above 140°C, producing hundreds of new flavor compounds and the toasty aroma humans have chased since the first hot stone.'
  },
  {
    id:'porridge', title:'Wild Grain Porridge', era:'neolithic',
    difficulty:'Easy', time:'30 min',
    tagline:'Simmered grain was easier on teeth than raw kernels — and it stretched further.',
    scienceTip:'Starch Gelatinization',
    steps:[
      'Crack wild barley or oat grains coarsely.',
      'Simmer in water, roughly 1 part grain to 3 parts water, for 20–25 minutes.',
      'Stir occasionally as it thickens.',
      'Sweeten with wild honey or foraged berries if available.'
    ],
    science:'Heat forces water into starch granules until they swell and rupture — gelatinization — which is what turns hard grain and water into something spoonable and far easier to digest than the raw kernel.'
  },
  {
    id:'garum', title:'Roman Garum', era:'ancient',
    difficulty:'Advanced', time:'4–6 weeks',
    tagline:'Fermented fish sauce that flavored nearly everything in the Roman kitchen.',
    scienceTip:'Enzymatic Autolysis',
    steps:[
      'Layer small whole fish (anchovy or mackerel) with coarse salt in a sealed vessel, roughly 1 part salt to 5 parts fish.',
      'Leave in a warm, sunlit spot, stirring every few days.',
      'Ferment for 4–6 weeks as the fish breaks down into a strong-smelling liquid.',
      'Strain the liquid through cloth; discard the solids. Use sparingly as a savory seasoning.'
    ],
    science:'Salt draws out water and slows spoilage bacteria while the fish\u2019s own digestive enzymes keep working, breaking proteins down into free amino acids — including glutamate, the source of garum\u2019s intense umami punch.'
  },
  {
    id:'honeycake', title:'Ancient Honey Cake', era:'ancient',
    difficulty:'Medium', time:'50 min',
    tagline:'A dense, honey-soaked cake offered in Egyptian and Greek households alike.',
    scienceTip:'Sugar as Preservative',
    steps:[
      'Mix ground barley flour, crushed dates, and a generous measure of honey into a thick batter.',
      'Fold in chopped nuts and a pinch of salt.',
      'Bake in a covered clay dish over low coals for about 35 minutes.',
      'Soak the warm cake in extra honey before serving.'
    ],
    science:'Honey is roughly 80% sugar, which binds water tightly enough to starve mold and bacteria of the moisture they need — the same reason honey-soaked cakes kept for weeks without spoiling.'
  },
  {
    id:'spicedwine', title:'Medieval Spiced Wine', era:'medieval',
    difficulty:'Easy', time:'20 min',
    tagline:'Hypocras — a warmed wine perfumed with imported spice-route aromatics.',
    scienceTip:'Aromatic Extraction',
    steps:[
      'Combine red wine with cinnamon, clove, and a few threads of saffron in a pot.',
      'Add sugar or honey to taste.',
      'Warm gently over low heat for 10–15 minutes — do not boil.',
      'Strain out the whole spices before serving warm.'
    ],
    science:'Most aromatic spice compounds — cinnamaldehyde, eugenol — are fat- and alcohol-soluble rather than water-soluble, so warm wine pulls far more flavor out of whole spices than water ever could.'
  },
  {
    id:'potage', title:'Medieval Pottage', era:'medieval',
    difficulty:'Medium', time:'1 hr 15 min',
    tagline:'A thick vegetable-and-grain stew that simmered over the hearth for days at a time.',
    scienceTip:'Slow Collagen Breakdown',
    steps:[
      'Combine root vegetables, dried peas, and barley in a large pot with water or broth.',
      'Add a well-worked bone or cut of tough meat if available.',
      'Simmer very gently for 60–90 minutes, topping up liquid as needed.',
      'Season with salt and whatever herbs are on hand.'
    ],
    science:'Long, low simmering slowly converts tough collagen in bone and connective tissue into gelatin, which is what gives an all-day pottage its silky, thickened body without any flour.'
  },
  {
    id:'cannedpreserve', title:'Industrial Preserve Jar', era:'industrial',
    difficulty:'Medium', time:'1 hr 30 min',
    tagline:'Appert\u2019s method — heat-sealed jars that made seasons irrelevant.',
    scienceTip:'Thermal Sterilization',
    steps:[
      'Pack ripe fruit or vegetables tightly into sterilized glass jars.',
      'Fill with hot syrup or brine, leaving a small headspace.',
      'Seal loosely and submerge jars in a boiling water bath for 20–40 minutes depending on contents.',
      'Tighten seals fully once cooled and store at room temperature.'
    ],
    science:'Sustained heat above 100°C destroys the microorganisms and enzymes that cause spoilage, while the sealed jar prevents new contamination — Nicolas Appert\u2019s 1809 method, decades before anyone knew germs were the cause.'
  },
  {
    id:'bakingpowderbiscuit', title:'Industrial Baking Powder Biscuit', era:'industrial',
    difficulty:'Easy', time:'25 min',
    tagline:'Chemical leavening replaced hours of yeast fermentation with a single spoonful.',
    scienceTip:'Acid-Base Leavening',
    steps:[
      'Cut cold butter into flour until it resembles coarse crumbs.',
      'Stir in baking powder, salt, and milk until just combined.',
      'Pat into a 2cm-thick round and cut into biscuits.',
      'Bake at 220°C (425°F) for 12–14 minutes until risen and golden.'
    ],
    science:'Baking powder pairs an acid and a base that only react once wet and heated, releasing carbon dioxide bubbles on demand — turning a fermentation that once took hours into a chemical reaction that takes seconds.'
  },
  {
    id:'spherification', title:'Modern Fruit Caviar', era:'modern',
    difficulty:'Advanced', time:'40 min',
    tagline:'Fruit juice, spherified into pearls that burst with a single bite.',
    scienceTip:'Spherification',
    steps:[
      'Blend fruit juice with sodium alginate until fully dissolved; let rest to remove air bubbles.',
      'Prepare a separate bath of water and calcium lactate.',
      'Drop the juice mixture into the calcium bath using a syringe or pipette, one drop at a time.',
      'Let each sphere set for 2–3 minutes, then rinse gently in clean water.'
    ],
    science:'Calcium ions cross-link alginate molecules into a gel skin the instant they touch, forming a thin membrane around liquid juice — a technique borrowed directly from food-industry chemistry in the early 2000s.'
  },
  {
    id:'sousvide', title:'Modern Sous-Vide Egg', era:'modern',
    difficulty:'Medium', time:'1 hr',
    tagline:'A water bath precise to the degree, for a texture no stovetop can match.',
    scienceTip:'Protein Denaturation Curves',
    steps:[
      'Set a water bath to exactly 63°C (145°F) using an immersion circulator.',
      'Lower whole eggs, still in their shells, into the bath.',
      'Cook for 45–60 minutes without disturbing the temperature.',
      'Remove and crack directly into a bowl — the white will be custardy, the yolk barely set.'
    ],
    science:'Egg white and yolk proteins denature at different, very specific temperatures. Holding the bath a few degrees below the white\u2019s full-set point produces a texture impossible to hit consistently by boiling.'
  }
];

const ERA_META = {
  neolithic:  { label:'Neolithic',    years:'10,000 BCE', color:'#B5583A' },
  ancient:    { label:'Ancient Civ.', years:'3000 BCE',    color:'#C97A2E' },
  medieval:   { label:'Medieval',     years:'500–1500 CE', color:'#6B4E71' },
  industrial: { label:'Industrial',   years:'1800s',       color:'#4C6B58' },
  modern:     { label:'Molecular',    years:'2000s→',      color:'#2FE6C9' },
};
