document.addEventListener('DOMContentLoaded', () => {
  const matrix     = document.getElementById('matrix');
  const emptyState = document.getElementById('matrixEmpty');
  const tasteChips  = document.querySelectorAll('[data-taste]');
  const compoundChips = document.querySelectorAll('[data-compound]');
  const overlay    = document.getElementById('modalOverlay');
  const modalCard  = document.getElementById('modalCard');

  let activeTaste = 'all';
  let activeCompound = 'all';

  // ---- build tiles ----
  INGREDIENTS.forEach(ing => {
    const meta = TASTE_META[ing.taste];
    const tile = document.createElement('button');
    tile.className = 'tile';
    tile.style.setProperty('--tile-color', meta.color);
    tile.dataset.taste = ing.taste;
    tile.dataset.compound = ing.compound;
    tile.innerHTML = `
      <span class="num">${ing.discovered.match(/\d+/) ? ing.discovered.match(/[\d,]+/)[0] : ''}</span>
      <span class="symbol">${ing.symbol}</span>
      <span class="name">${ing.name}</span>
      <span class="taste-tag">${meta.label}</span>
    `;
    tile.addEventListener('click', () => openModal(ing));
    matrix.appendChild(tile);
  });

  function applyFilters(){
    let visible = 0;
    matrix.querySelectorAll('.tile').forEach(tile => {
      const tasteMatch = activeTaste === 'all' || tile.dataset.taste === activeTaste;
      const compoundMatch = activeCompound === 'all' || tile.dataset.compound === activeCompound;
      const show = tasteMatch && compoundMatch;
      tile.classList.toggle('hidden', !show);
      if (show) visible++;
    });
    emptyState.classList.toggle('show', visible === 0);
  }

  tasteChips.forEach(chip => {
    chip.addEventListener('click', () => {
      activeTaste = chip.dataset.taste;
      tasteChips.forEach(c => c.classList.toggle('active', c === chip));
      applyFilters();
    });
  });

  compoundChips.forEach(chip => {
    chip.addEventListener('click', () => {
      activeCompound = chip.dataset.compound;
      compoundChips.forEach(c => c.classList.toggle('active', c === chip));
      applyFilters();
    });
  });

  // ---- modal ----
  function openModal(ing){
    const meta = TASTE_META[ing.taste];
    modalCard.style.setProperty('--modal-color', meta.color);
    modalCard.innerHTML = `
      <button class="modal-close" id="modalClose" aria-label="Close">&times;</button>
      <div class="modal-symbol">${ing.symbol}</div>
      <h3>${ing.name}</h3>
      <div class="modal-meta">
        <span>${meta.label}</span>
        <span>${COMPOUND_META[ing.compound]}</span>
        <span>${ing.discovered}</span>
      </div>
      <p>${ing.note}</p>
      <div class="modal-pairing">
        <h4>Pairs well with</h4>
        <div class="pairing-list">${ing.pairing.map(p => `<span>${p}</span>`).join('')}</div>
      </div>
    `;
    overlay.classList.add('open');
    document.getElementById('modalClose').addEventListener('click', closeModal);
  }

  function closeModal(){ overlay.classList.remove('open'); }

  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

  applyFilters();
});
