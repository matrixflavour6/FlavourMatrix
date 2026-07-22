document.addEventListener('DOMContentLoaded', () => {
  const grid          = document.getElementById('recipeGrid');
  const noResults      = document.getElementById('noResults');
  const searchBox      = document.getElementById('searchBox');
  const filterList      = document.getElementById('eraFilterList');
  const difficultyList   = document.getElementById('difficultyFilterList');

  let activeEra = 'all';
  let activeDifficulty = 'all';
  let query = '';

  const params = new URLSearchParams(window.location.search);
  const eraParam = params.get('era');
  if (eraParam && ERA_META[eraParam]) activeEra = eraParam;

  // ---- checkbox progress persistence ----
  const STORAGE_KEY = 'FlavourMatrix-recipe-progress';
  let progress = {};
  try {
    progress = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch (e) { progress = {}; }

  function saveProgress(){
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); } catch (e) { /* ignore */ }
  }

  function countFor(era){
    return era === 'all' ? RECIPES.length : RECIPES.filter(r => r.era === era).length;
  }

  function renderSidebar(){
    filterList.querySelectorAll('.era-filter-item').forEach(item => {
      item.classList.toggle('active', item.dataset.era === activeEra);
      const countEl = item.querySelector('.count');
      if (countEl) countEl.textContent = countFor(item.dataset.era);
    });
    difficultyList.querySelectorAll('.difficulty-chip').forEach(item => {
      item.classList.toggle('active', item.dataset.difficulty === activeDifficulty);
    });
  }

  filterList.addEventListener('click', (e) => {
    const btn = e.target.closest('.era-filter-item');
    if (!btn) return;
    activeEra = btn.dataset.era;
    renderSidebar();
    render();
  });

  difficultyList.addEventListener('click', (e) => {
    const btn = e.target.closest('.difficulty-chip');
    if (!btn) return;
    activeDifficulty = btn.dataset.difficulty;
    renderSidebar();
    render();
  });

  searchBox.addEventListener('input', (e) => {
    query = e.target.value.trim().toLowerCase();
    render();
  });

  function buildCard(r){
    const meta = ERA_META[r.era];
    const card = document.createElement('article');
    card.className = 'recipe-card';
    card.style.setProperty('--swatch-color', meta.color);

    const doneSteps = progress[r.id] || [];
    const completedCount = r.steps.filter((_, i) => doneSteps.includes(i)).length;
    const pct = Math.round((completedCount / r.steps.length) * 100);

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
          ${pct > 0 ? `<span class="badge progress-badge">${pct}% done</span>` : ''}
          <svg class="recipe-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        </div>
      </button>
      <div class="recipe-detail">
        <div class="recipe-detail-inner">
          <div>
            <div class="method-head">
              <h5>Cooking Mode</h5>
              <span class="progress-text">${completedCount}/${r.steps.length} steps</span>
            </div>
            <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
            <ul class="steps-list">
              ${r.steps.map((s, i) => `
                <li class="step-item ${doneSteps.includes(i) ? 'done' : ''}" data-step="${i}">
                  <span class="step-checkbox"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 13l4 4L19 7"/></svg></span>
                  <span><span class="step-num">${i + 1}.</span> ${s}</span>
                </li>
              `).join('')}
            </ul>
          </div>
          <div class="science-drawer">
            <button class="science-drawer-toggle">
              <span>The Chemical Analysis — ${r.scienceTip}</span>
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

    card.querySelectorAll('.step-item').forEach(stepEl => {
      stepEl.addEventListener('click', (e) => {
        e.stopPropagation();
        const stepIndex = Number(stepEl.dataset.step);
        const current = progress[r.id] || [];
        const isDone = current.includes(stepIndex);
        progress[r.id] = isDone ? current.filter(i => i !== stepIndex) : [...current, stepIndex];
        saveProgress();

        stepEl.classList.toggle('done', !isDone);
        const newDone = progress[r.id];
        const newCompleted = r.steps.filter((_, i) => newDone.includes(i)).length;
        const newPct = Math.round((newCompleted / r.steps.length) * 100);
        card.querySelector('.progress-text').textContent = `${newCompleted}/${r.steps.length} steps`;
        card.querySelector('.progress-fill').style.width = `${newPct}%`;

        const summaryMeta = card.querySelector('.recipe-meta');
        let progressBadge = summaryMeta.querySelector('.progress-badge');
        if (newPct > 0) {
          if (!progressBadge) {
            progressBadge = document.createElement('span');
            progressBadge.className = 'badge progress-badge';
            summaryMeta.insertBefore(progressBadge, summaryMeta.querySelector('.recipe-chevron'));
          }
          progressBadge.textContent = `${newPct}% done`;
        } else if (progressBadge) {
          progressBadge.remove();
        }
      });
    });

    return card;
  }

  function render(){
    grid.innerHTML = '';
    const filtered = RECIPES.filter(r => {
      const eraMatch = activeEra === 'all' || r.era === activeEra;
      const difficultyMatch = activeDifficulty === 'all' || r.difficulty === activeDifficulty;
      const searchMatch = !query || r.title.toLowerCase().includes(query) || r.tagline.toLowerCase().includes(query) || r.scienceTip.toLowerCase().includes(query);
      return eraMatch && difficultyMatch && searchMatch;
    });

    noResults.classList.toggle('show', filtered.length === 0);
    filtered.forEach(r => grid.appendChild(buildCard(r)));
  }

  renderSidebar();
  render();
});
