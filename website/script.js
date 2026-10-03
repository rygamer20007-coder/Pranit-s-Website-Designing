// mobile nav toggle
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

// scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => observer.observe(el));

// footer year
document.getElementById('year').textContent = new Date().getFullYear();

// contact form (no backend yet — just confirms locally)
const form = document.getElementById('quoteForm');
const status = document.getElementById('formStatus');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  status.textContent = "Thanks — we'll get back to you soon.";
  form.reset();
});
