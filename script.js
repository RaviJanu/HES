  // Header scroll state
  const header = document.getElementById('site-header');
  const toTop = document.getElementById('toTop');
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 20;
    header.classList.toggle('scrolled', scrolled);
    toTop.classList.toggle('show', window.scrollY > 500);
  });

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  // Back to top
  toTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

  // Reveal on scroll
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, {threshold:0.15});
  revealEls.forEach(el => io.observe(el));

  // Growth bars animate on view
  const bars = document.querySelectorAll('.growth-bar i');
  const barIo = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.width = e.target.dataset.width + '%';
        barIo.unobserve(e.target);
      }
    });
  }, {threshold:0.4});
  bars.forEach(b => barIo.observe(b));

  // Footer year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Contact form (demo submit)
  document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    const btn = this.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.textContent = 'Message Sent ✓';
    btn.style.background = '#3fae5c';
    setTimeout(() => { btn.textContent = original; btn.style.background=''; this.reset(); }, 2400);
  });
