/* Shared era data — single source of truth for colors, copy, icons */
const ERAS = [
  {
    id: 'neolithic',
    label: 'Neolithic',
    years: '10,000–4,000 BCE',
    color: 'var(--era-1)',
    colorHex: '#B5583A',
    headline: 'Fire turned tough grain into something a body could <em>use</em>.',
    fact: '<strong>Grinding + fire</strong> unlocked starch in wild grains — the first known act of food chemistry, 12,000 years before the word existed.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 2c-2 3-4 5-4 8a4 4 0 0 0 8 0c0-3-2-5-4-8z"/><path d="M8 15h8v3a4 4 0 0 1-8 0v-3z"/><path d="M12 22v-4"/></svg>`
  },
  {
    id: 'ancient',
    label: 'Ancient Civ.',
    years: '4,000 BCE–500 CE',
    color: 'var(--era-2)',
    colorHex: '#C97A2E',
    headline: 'Rot, guided carefully, became a technology of flavor.',
    fact: '<strong>Fermentation</strong> in Mesopotamia and Egypt let microbes do the chemistry — bread, beer, and garum were controlled decay.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 3c2 0 3 1.4 3 3 0 1-1 1.6-1 2.6 0 1.6 2 2 2 5.4 0 3.4-1.8 6-4 6s-4-2.6-4-6c0-3.4 2-3.8 2-5.4C10 7.6 9 7 9 6c0-1.6 1-3 3-3z"/></svg>`
  },
  {
    id: 'medieval',
    label: 'Medieval',
    years: '500–1,500 CE',
    color: 'var(--era-3)',
    colorHex: '#6B4E71',
    headline: 'Spice routes rewired what a continent thought "flavorful" meant.',
    fact: '<strong>Trade-route spices</strong> — pepper, saffron, clove — carried aromatic compounds no European kitchen had synthesized before.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M7 21h10M9 21V10a3 3 0 0 1 6 0v11"/><path d="M9 10h6M6 6l2-3M18 6l-2-3"/></svg>`
  },
  {
    id: 'industrial',
    label: 'Industrial',
    years: '1760–1900',
    color: 'var(--era-4)',
    colorHex: '#4C6B58',
    headline: 'Chemists in lab coats made kitchens run on precision, not luck.',
    fact: '<strong>Canning, refrigeration, and synthetic leavening</strong> turned cooking from folk craft into repeatable, testable process.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></svg>`
  },
  {
    id: 'modern',
    label: 'Molecular',
    years: '1950–Present',
    color: 'var(--era-5)',
    colorHex: '#2FE6C9',
    headline: 'Now we cook with syringes, and call a gel "the sauce."',
    fact: '<strong>Spherification, sous-vide, foams</strong> — chefs borrowed lab techniques to make texture itself the ingredient.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M9 2h6M10 2v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V2"/><path d="M8.5 14h7"/></svg>`
  }
];

const eraById = id => ERAS.find(e => e.id === id);

function hexToRgb(hex){
  const m = hex.replace('#','');
  const bigint = parseInt(m, 16);
  return `${(bigint >> 16) & 255}, ${(bigint >> 8) & 255}, ${bigint & 255}`;
}
