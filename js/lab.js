document.addEventListener('DOMContentLoaded', () => {
  const matrix       = document.getElementById('matrix');
  const emptyState    = document.getElementById('matrixEmpty');
  const catChips      = document.querySelectorAll('[data-cat]');
  const extendedToggle= document.getElementById('extendedToggle');
  const overlay        = document.getElementById('modalOverlay');
  const modalCard       = document.getElementById('modalCard');

  let activeCat = 'all';
  let showExtended = false;

  // ---- build tiles ----
  COMPOUNDS.forEach(cmp => {
    const meta = CATEGORY_META[cmp.category];
    const tile = document.createElement('button');
    tile.className = 'tile' + (cmp.core ? '' : ' extended-only');
    tile.style.setProperty('--tile-color', meta.color);
    tile.dataset.cat = cmp.category;
    tile.innerHTML = `
      <span class="symbol">${cmp.symbol}</span>
      ${cmp.core ? '<span class="core-flag" title="Core element"></span>' : ''}
      <span class="name">${cmp.name}</span>
    `;
    tile.addEventListener('click', () => openModal(cmp));
    matrix.appendChild(tile);
  });

  function applyFilters(){
    let visible = 0;
    matrix.querySelectorAll('.tile').forEach(tile => {
      const catMatch = activeCat === 'all' || tile.dataset.cat === activeCat;
      const extendedOk = showExtended || !tile.classList.contains('extended-only');
      const show = catMatch && extendedOk;
      tile.classList.toggle('hidden', !show);
      if (show) visible++;
    });
    emptyState.classList.toggle('show', visible === 0);
  }

  catChips.forEach(chip => {
    chip.addEventListener('click', () => {
      activeCat = chip.dataset.cat;
      catChips.forEach(c => c.classList.toggle('active', c === chip));
      applyFilters();
    });
  });

  extendedToggle.addEventListener('click', () => {
    showExtended = !showExtended;
    matrix.classList.toggle('show-extended', showExtended);
    extendedToggle.classList.toggle('active', showExtended);
    extendedToggle.querySelector('span').textContent = showExtended
      ? 'Showing all 115 compounds'
      : 'Show extended set (82 more)';
    applyFilters();
  });

  // ---- modal ----
  function openModal(cmp){
    const meta = CATEGORY_META[cmp.category];
    modalCard.style.setProperty('--modal-color', meta.color);
    modalCard.innerHTML = `
      <button class="modal-close" id="modalClose" aria-label="Close">&times;</button>
      <div class="modal-symbol">${cmp.symbol}</div>
      <h3>${cmp.name}</h3>
      <div class="modal-meta">
        <span>${meta.label}</span>
        <span>${cmp.core ? 'Core element' : 'Extended catalog'}</span>
      </div>
      <div class="modal-field">
        <h4>Chemical Formula</h4>
        <p class="modal-formula">${cmp.formula}</p>
      </div>
      <div class="modal-field">
        <h4>Molar Mass</h4>
        <p>${cmp.molarMass}</p>
      </div>
      <div class="modal-field">
        <h4>Biochemical Action</h4>
        <p>${cmp.action}</p>
      </div>
      <div class="modal-field">
        <h4>Cooking Uses</h4>
        <p>${cmp.uses}</p>
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
