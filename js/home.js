document.addEventListener('DOMContentLoaded', () => {
  const hero      = document.querySelector('.hero');
  const dialInput = document.getElementById('dialInput');
  const dialFill  = document.getElementById('dialFill');
  const dialFact  = document.getElementById('dialFact');
  const heroEm    = document.getElementById('heroHeadline');
  const figureIcon= document.getElementById('figureIcon');
  const figureTag = document.getElementById('figureTag');
  const figureYear= document.getElementById('figureYear');
  const ticks     = document.querySelectorAll('.dial-ticks button');

  function applyEra(index, animate = true){
    const era = ERAS[index];
    document.documentElement.style.setProperty('--accent', era.color);
    hero.style.setProperty('--accent', era.color);
    hero.style.setProperty('--accent-rgb', hexToRgb(era.colorHex));

    dialFill.style.width = `${(index / (ERAS.length - 1)) * 100}%`;
    dialFact.innerHTML = era.fact;
    heroEm.innerHTML = era.headline;
    figureIcon.innerHTML = era.icon;
    figureTag.textContent = era.label;
    figureYear.textContent = era.years;

    ticks.forEach((t, i) => t.classList.toggle('active', i === index));

    if (animate) {
      figureIcon.style.transform = 'scale(0.7) rotate(-8deg)';
      requestAnimationFrame(() => {
        figureIcon.style.transform = 'scale(1) rotate(0deg)';
      });
    }
  }

  dialInput.addEventListener('input', (e) => applyEra(Number(e.target.value)));

  ticks.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      dialInput.value = i;
      applyEra(i);
    });
  });

  applyEra(0, false);

  // Era-picker cards: paint themselves from the shared era data
  document.querySelectorAll('.era-card').forEach(card => {
    const era = eraById(card.dataset.era);
    if (!era) return;
    card.style.setProperty('--card-color', era.color);
    card.querySelector('.era-icon').innerHTML = era.icon;
  });

  // ---- Timeline Portal ----
  const timelineList = document.getElementById('timelineList');
  const timelineFilter = document.getElementById('timelineFilter');
  if (timelineList && typeof MILESTONES !== 'undefined') {
    MILESTONES.forEach((m, i) => {
      const era = eraById(m.era);
      const el = document.createElement('div');
      el.className = 'milestone';
      el.dataset.tera = m.era;
      el.style.setProperty('--i', i);
      el.style.setProperty('--m-color', era ? era.color : 'var(--era-5)');
      el.innerHTML = `
        <div class="milestone-year">${m.year}</div>
        <h4>${m.title}</h4>
        <p>${m.text}</p>
      `;
      timelineList.appendChild(el);
    });

    timelineFilter.addEventListener('click', (e) => {
      const chip = e.target.closest('.chip');
      if (!chip) return;
      const tera = chip.dataset.tera;
      timelineFilter.querySelectorAll('.chip').forEach(c => c.classList.toggle('active', c === chip));
      timelineList.querySelectorAll('.milestone').forEach(m => {
        m.classList.toggle('hidden', tera !== 'all' && m.dataset.tera !== tera);
      });
    });
  }
});
