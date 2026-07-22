document.addEventListener('DOMContentLoaded', () => {
  const grid       = document.getElementById('recipeGrid');
  const noResults  = document.getElementById('noResults');
  const searchBox  = document.getElementById('searchBox');
  const filterList = document.getElementById('eraFilterList');

  let activeEra = 'all';
  let query = '';

  // pre-select era from ?era= query param, if present
  const params = new URLSearchParams(window.location.search);
  const eraParam = params.get('era');
  if (eraParam && ERA_META[eraParam]) activeEra = eraParam;

  // ---- build sidebar counts ----
  function countFor(era){
    return era === 'all' ? RECIPES.length : RECIPES.filter(r => r.era === era).length;
  }

  function renderSidebar(){
    filterList.querySelectorAll('.era-filter-item').forEach(item => {
      item.classList.toggle('active', item.dataset.era === activeEra);
      const countEl = item.querySelector('.count');
      if (countEl) countEl.textContent = countFor(item.dataset.era);
    });
  }

  filterList.addEventListener('click', (e) => {
    const btn = e.target.closest('.era-filter-item');
    if (!btn) return;
    activeEra = btn.dataset.era;
    renderSidebar();
    render();
  });

  searchBox.addEventListener('input', (e) => {
    query = e.target.value.trim().toLowerCase();
    render();
  });

  // ---- build + render cards ----
  function buildCard(r){
    const meta = ERA_META[r.era];
    const card = document.createElement('article');
    card.className = 'recipe-card';
    card.style.setProperty('--swatch-color', meta.color);

    card.innerHTML = `
      <button class="recipe-summary" aria-expanded="false">
        <div class="recipe-swatch">${meta.label}</div>
        <div class="recipe-info">
          <h3>${r.title}</h3>
          <p>${r.tagline}</p>
        </div>
        <div class="recipe-meta">
          <span class="badge">${r.difficulty}</span>
          <span class="badge">${r.time}</span>
          <svg class="recipe-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        </div>
      </button>
      <div class="recipe-detail">
        <div class="recipe-detail-inner">
          <div>
            <h5>Method</h5>
            <ol class="steps-list">
              ${r.steps.map(s => `<li>${s}</li>`).join('')}
            </ol>
          </div>
          <div class="science-drawer">
            <button class="science-drawer-toggle">
              <span>The Science Behind It — ${r.scienceTip}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
            </button>
            <div class="science-body"><p style="margin:0;">${r.science}</p></div>
          </div>
        </div>
      </div>
    `;

    const summaryBtn = card.querySelector('.recipe-summary');
    summaryBtn.addEventListener('click', () => {
      const isOpen = card.classList.toggle('expanded');
      summaryBtn.setAttribute('aria-expanded', String(isOpen));
    });

    const drawer = card.querySelector('.science-drawer');
    drawer.querySelector('.science-drawer-toggle').addEventListener('click', (e) => {
      e.stopPropagation();
      drawer.classList.toggle('open');
    });

    return card;
  }

  function render(){
    grid.innerHTML = '';
    const filtered = RECIPES.filter(r => {
      const eraMatch = activeEra === 'all' || r.era === activeEra;
      const searchMatch = !query || r.title.toLowerCase().includes(query) || r.tagline.toLowerCase().includes(query);
      return eraMatch && searchMatch;
    });

    noResults.classList.toggle('show', filtered.length === 0);
    filtered.forEach(r => grid.appendChild(buildCard(r)));
  }

  renderSidebar();
  render();
});
