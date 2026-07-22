/* Ingredient matrix data — taste profile is primary axis, compound is secondary filter */
const INGREDIENTS = [
  // ---- SWEET ----
  { id:'honey', name:'Honey', symbol:'Hn', taste:'sweet', compound:'sugars',
    discovered:'~8000 BCE, Neolithic', note:'The only sugar source available before agriculture — bees had already solved concentration and preservation.',
    pairing:['Sharp cheese','Thyme','Char-grilled fruit'] },
  { id:'sugarcane', name:'Sugarcane', symbol:'Sc', taste:'sweet', compound:'sugars',
    discovered:'~350 CE, India', note:'Crystallized sucrose let sweetness be stored, traded, and dosed precisely for the first time.',
    pairing:['Ginger','Dark rum','Citrus peel'] },
  { id:'fig', name:'Ripe Fig', symbol:'Fg', taste:'sweet', compound:'sugars',
    discovered:'~9400 BCE, Jordan Valley', note:'Among the first cultivated fruit — its fructose spike was a Neolithic sugar rush.',
    pairing:['Blue cheese','Prosciutto','Walnut'] },

  // ---- SOUR ----
  { id:'vinegar', name:'Vinegar', symbol:'Vg', taste:'sour', compound:'acids',
    discovered:'~5000 BCE, Babylon', note:'Acetic acid from over-fermented wine — humanity\u2019s first controlled preservative.',
    pairing:['Fried food','Cucumber','Mint'] },
  { id:'lemon', name:'Lemon', symbol:'Lm', taste:'sour', compound:'acids',
    discovered:'~700 CE, Middle East', note:'Citric acid brightens fat and stalls browning by lowering pH on contact.',
    pairing:['Olive oil','Fish','Parsley'] },
  { id:'yogurt', name:'Yogurt', symbol:'Yg', taste:'sour', compound:'acids',
    discovered:'~5000 BCE, Central Asia', note:'Lactic-acid bacteria curdle milk protein deliberately — fermentation as preservation.',
    pairing:['Cucumber','Dill','Garlic'] },

  // ---- SALTY ----
  { id:'seasalt', name:'Sea Salt', symbol:'Ss', taste:'salty', compound:'salts',
    discovered:'~6000 BCE, Romania', note:'Sodium chloride was currency-grade — it drew out water and starved bacteria of it.',
    pairing:['Chocolate','Caramel','Tomato'] },
  { id:'rocksalt', name:'Rock Salt', symbol:'Rs', taste:'salty', compound:'salts',
    discovered:'~6050 BCE, Austria', note:'Mined rather than evaporated — the Hallstatt salt mines shaped entire trade economies.',
    pairing:['Roasted root veg','Butter','Rosemary'] },
  { id:'soysauce', name:'Soy Sauce', symbol:'Sy', taste:'salty', compound:'salts',
    discovered:'~200 BCE, China', note:'Fermented soy delivers salt alongside free glutamate — salty and umami in one bottle.',
    pairing:['Ginger','Scallion','Rice vinegar'] },

  // ---- BITTER ----
  { id:'coffee', name:'Coffee Bean', symbol:'Cf', taste:'bitter', compound:'alkaloids',
    discovered:'~850 CE, Ethiopia', note:'Roasting develops caffeine and hundreds of bitter melanoidins in the same ten minutes.',
    pairing:['Cardamom','Dark chocolate','Orange zest'] },
  { id:'cacao', name:'Cacao', symbol:'Ca', taste:'bitter', compound:'alkaloids',
    discovered:'~1900 BCE, Mesoamerica', note:'Theobromine gives raw cacao its bitterness, tamed later by sugar and fat.',
    pairing:['Chili','Sea salt','Vanilla'] },
  { id:'bittermelon', name:'Bitter Melon', symbol:'Bm', taste:'bitter', compound:'alkaloids',
    discovered:'~1280s CE, China', note:'Cucurbitacins make it one of the most intensely bitter vegetables ever cultivated on purpose.',
    pairing:['Black bean','Egg','Chili'] },

  // ---- UMAMI ----
  { id:'kombu', name:'Kombu Seaweed', symbol:'Kb', taste:'umami', compound:'glutamates',
    discovered:'~700 CE, Japan', note:'The kelp that let a Japanese chemist isolate glutamate and name a fifth taste in 1908.',
    pairing:['Bonito','Soy sauce','Mushroom'] },
  { id:'parmesan', name:'Parmesan', symbol:'Pm', taste:'umami', compound:'glutamates',
    discovered:'~1200s CE, Italy', note:'Aging crystallizes free glutamate into the crunchy specks in a well-aged wheel.',
    pairing:['Tomato','Basil','Black pepper'] },
  { id:'tomato', name:'Tomato', symbol:'Tm', taste:'umami', compound:'glutamates',
    discovered:'~700 BCE, Mesoamerica', note:'Ripening converts glutamic acid into a savory backbone strong enough to carry a whole sauce.',
    pairing:['Basil','Olive oil','Garlic'] },

  // ---- PUNGENT ----
  { id:'chili', name:'Chili Pepper', symbol:'Ch', taste:'pungent', compound:'pungent-compounds',
    discovered:'~5500 BCE, Mexico', note:'Capsaicin binds heat receptors directly — the body reads it as real temperature.',
    pairing:['Lime','Cilantro','Mango'] },
  { id:'garlic', name:'Garlic', symbol:'Gr', taste:'pungent', compound:'pungent-compounds',
    discovered:'~2600 BCE, Egypt', note:'Crushing triggers a reaction that builds allicin fresh, seconds before you taste it.',
    pairing:['Olive oil','Chili','Parsley'] },
  { id:'blackpepper', name:'Black Pepper', symbol:'Bp', taste:'pungent', compound:'pungent-compounds',
    discovered:'~2000 BCE, India', note:'Piperine was valuable enough to fund empires — pungency you could tax by the sack.',
    pairing:['Butter','Steak','Strawberry'] },
];

const TASTE_META = {
  sweet:   { label:'Sweet',   color:'#C97A2E' },
  sour:    { label:'Sour',    color:'#2FE6C9' },
  salty:   { label:'Salty',   color:'#8FA6B8' },
  bitter:  { label:'Bitter',  color:'#6B4E71' },
  umami:   { label:'Umami',   color:'#4C6B58' },
  pungent: { label:'Pungent', color:'#B5583A' },
};

const COMPOUND_META = {
  'sugars':            'Sugars',
  'acids':             'Acids',
  'salts':              'Salts',
  'alkaloids':          'Alkaloids',
  'glutamates':         'Glutamates',
  'pungent-compounds':  'Pungent Compounds',
};
