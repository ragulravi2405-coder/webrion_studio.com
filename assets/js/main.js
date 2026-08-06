/* ==========================================================================
   WEBRION - CORE MAIN JAVASCRIPT
   Navbar scroll, dark/light theme, active link, stat counters, poster modal
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initThemeToggle();
  initActiveNav();
  initCounters();
  initPosterModals();
});

// Sticky Navbar Scroll Effect
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        if (navMenu.classList.contains('open')) {
          icon.className = 'fas fa-times';
        } else {
          icon.className = 'fas fa-bars';
        }
      }
    });
  }
}

// Dark / Light Theme Toggle
function initThemeToggle() {
  const themeBtns = document.querySelectorAll('.theme-toggle');
  const savedTheme = localStorage.getItem('webrion-theme') || 'light';
  
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcons(savedTheme);

  themeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('webrion-theme', newTheme);
      updateThemeIcons(newTheme);
    });
  });
}

function updateThemeIcons(theme) {
  const themeBtns = document.querySelectorAll('.theme-toggle');
  themeBtns.forEach(btn => {
    const icon = btn.querySelector('i');
    if (icon) {
      icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
  });
}

// Active Page Link Highlighter
function initActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Statistics Animated Counter
function initCounters() {
  const statNumbers = document.querySelectorAll('.stat-number[data-target]');
  if (statNumbers.length === 0) return;

  const observerOptions = {
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const targetVal = parseInt(target.getAttribute('data-target'), 10);
        const prefix = target.getAttribute('data-prefix') || '';
        const suffix = target.getAttribute('data-suffix') || '';
        
        let count = 0;
        const duration = 2000;
        const step = Math.ceil(targetVal / (duration / 30));

        const timer = setInterval(() => {
          count += step;
          if (count >= targetVal) {
            count = targetVal;
            clearInterval(timer);
          }
          target.innerText = `${prefix}${count}${suffix}`;
        }, 30);

        observer.unobserve(target);
      }
    });
  }, observerOptions);

  statNumbers.forEach(num => observer.observe(num));
}

// Poster Lightbox Modal Handler
function initPosterModals() {
  const posterTriggers = document.querySelectorAll('[data-poster-src]');
  const posterModal = document.getElementById('posterModal');
  const posterImg = document.getElementById('posterModalImg');
  const posterClose = document.getElementById('posterModalClose');

  if (posterTriggers.length && posterModal && posterImg) {
    posterTriggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const src = trigger.getAttribute('data-poster-src');
        posterImg.src = src;
        posterModal.classList.add('open');
      });
    });

    if (posterClose) {
      posterClose.addEventListener('click', () => {
        posterModal.classList.remove('open');
      });
    }

    posterModal.addEventListener('click', (e) => {
      if (e.target === posterModal) {
        posterModal.classList.remove('open');
      }
    });
  }
}
