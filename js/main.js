/* Shared across all pages: scroll-reveal + staggered children */
document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    targets.forEach(t => t.classList.add('in-view'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  targets.forEach(t => {
    if (t.classList.contains('reveal-stagger')) {
      [...t.children].forEach((child, i) => child.style.setProperty('--i', i));
    }
    io.observe(t);
  });
});
