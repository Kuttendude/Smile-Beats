/**
 * Smile Beats — Scroll animations & mobile menu
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  initMobileMenu();
  initSmoothScroll();
});

// Fade-in / slide-up on scroll
function initScrollAnimations() {
  const fadeElements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  fadeElements.forEach((el) => observer.observe(el));
}

// Mobile menu toggle
function initMobileMenu() {
  const toggle = document.querySelector('.nav-toggle');
  const navRight = document.querySelector('.nav-right');
  const navLinks = document.querySelector('.nav-links');

  if (!toggle || !navRight) return;

  toggle.addEventListener('click', () => {
    navRight.classList.toggle('open');
    navLinks?.classList.toggle('open');
    toggle.setAttribute(
      'aria-expanded',
      navRight.classList.contains('open')
    );
  });

  // Close on link click
  navRight?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navRight.classList.remove('open');
      navLinks?.classList.remove('open');
    });
  });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });
}
