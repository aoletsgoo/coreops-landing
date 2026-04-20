// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Cog spotlight — hero section only
const heroEl = document.querySelector('.hero');
const cogsReveal = document.getElementById('heroCogsReveal');

if (heroEl && cogsReveal) {
  let rafPending = false;

  heroEl.addEventListener('mousemove', (e) => {
    if (rafPending) return;
    rafPending = true;
    requestAnimationFrame(() => {
      const rect = heroEl.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const mask = `radial-gradient(circle 370px at ${x}px ${y}px, black 0%, transparent 100%)`;
      cogsReveal.style.webkitMaskImage = mask;
      cogsReveal.style.maskImage = mask;
      rafPending = false;
    });
  });

  heroEl.addEventListener('mouseenter', () => { cogsReveal.style.opacity = '1'; });
  heroEl.addEventListener('mouseleave', () => { cogsReveal.style.opacity = '0'; });
}
