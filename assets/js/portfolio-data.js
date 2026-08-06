/* ==========================================================================
   WEBRION PORTFOLIO DATA & INTERACTIVE GALLERY MANAGER
   Contains metadata for 12 showcase projects, filter logic, and modals
   ========================================================================== */

// Image pool — 6 unique images cycling through 12 projects
const IMG = {
  fashion:  'assets/images/portfolio/nova-fashion.jpg',
  grocery:  'assets/images/portfolio/freshmart.jpg',
  edu:      'assets/images/portfolio/eduspark.jpg',
  food:     'assets/images/portfolio/foodhub.jpg',
  cab:      'assets/images/portfolio/quickride.jpg',
  hotel:    'assets/images/portfolio/hotelnest.jpg',
};

const portfolioProjects = [
  {
    id: 'nova-fashion',
    title: 'Nova Fashion',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce Website',
    image: IMG.fashion,
    shortDesc: 'Ultra-modern luxury apparel and couture e-commerce platform with fast cart & checkout.',
    fullDesc: 'Nova Fashion is a high-end luxury e-commerce experience built for premium fashion brands. Features interactive lookbook galleries, real-time variant selection, integrated payment gateways, customer reviews, and order tracking.',
    tech: ['React', 'Node.js', 'MongoDB', 'Payment Gateway'],
    liveUrl: '#',
    caseStudy: 'Designed to elevate high-end fashion branding, Nova Fashion features micro-animations, fast checkout, and 99.9% uptime.'
  },
  {
    id: 'freshmart',
    title: 'FreshMart',
    category: 'ecommerce',
    categoryLabel: 'Grocery E-Commerce',
    image: IMG.grocery,
    shortDesc: 'Vibrant online grocery store with real-time stock inventory and quick delivery slots.',
    fullDesc: 'FreshMart empowers local grocery chains with an online store. Includes category filter, search auto-complete, slot booking, delivery driver dashboard, and SMS notifications.',
    tech: ['HTML5', 'JavaScript', 'Firebase', 'CSS3'],
    liveUrl: '#',
    caseStudy: 'Built for high speed and mobile responsiveness, allowing customers to complete orders in under 60 seconds.'
  },
  {
    id: 'quickride',
    title: 'QuickRide',
    category: 'mobile',
    categoryLabel: 'Cab Booking Platform',
    image: IMG.cab,
    shortDesc: 'Real-time cab booking application with live GPS driver tracking & fare calculator.',
    fullDesc: 'QuickRide provides seamless ride booking, driver assignment, fare estimation, map integration, and automated invoice billing for city transport.',
    tech: ['Flutter', 'Firebase', 'Google Maps API', 'Node.js'],
    liveUrl: '#',
    caseStudy: 'Optimized for low-bandwidth mobile networks with smooth cross-platform iOS & Android performance.'
  },
  {
    id: 'eduspark',
    title: 'EduSpark',
    category: 'student',
    categoryLabel: 'Learning Management System',
    image: IMG.edu,
    shortDesc: 'Interactive LMS platform for students, online courses, quizzes, and certificate generation.',
    fullDesc: 'EduSpark provides students and universities with course management, live quiz engine, assignment submission portal, automated PDF certificate generation, and performance analytics.',
    tech: ['React', 'Python', 'Django', 'MongoDB'],
    liveUrl: '#',
    caseStudy: 'Developed as a comprehensive student project showcase with complete documentation, source code, and live demo.'
  },
  {
    id: 'foodhub',
    title: 'FoodHub',
    category: 'mobile',
    categoryLabel: 'Food Delivery App',
    image: IMG.food,
    shortDesc: 'On-demand food ordering platform with restaurant dashboards and live order status.',
    fullDesc: 'FoodHub connects hungry customers with top local restaurants. Offers interactive menus, customization options, live map tracking, and discount coupon modules.',
    tech: ['Flutter', 'Express', 'MongoDB', 'Socket.io'],
    liveUrl: '#',
    caseStudy: 'Increased order conversion rate by 35% using intuitive glassmorphism cards and one-tap checkout.'
  },
  {
    id: 'hotelnest',
    title: 'HotelNest',
    category: 'business',
    categoryLabel: 'Hotel Booking Website',
    image: IMG.hotel,
    shortDesc: 'Boutique hotel booking portal with room availability calendar & instant confirmation.',
    fullDesc: 'HotelNest is a luxury hospitality portal featuring high-res photo galleries, 3D room tours, room selection calendar, payment gateway, and automated email confirmation.',
    tech: ['JavaScript', 'HTML5/CSS3', 'Node.js', 'Stripe'],
    liveUrl: '#',
    caseStudy: 'Enhanced direct hotel bookings with clean UI design and integrated customer review system.'
  },
  {
    id: 'healthcare-plus',
    title: 'HealthCare Plus',
    category: 'web-app',
    categoryLabel: 'Hospital Management',
    image: IMG.edu,
    shortDesc: 'Web application for doctor appointment scheduling and patient medical records.',
    fullDesc: 'HealthCare Plus streamlines hospital management with electronic health records (EHR), doctor schedules, online prescription generator, and patient portal.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Express'],
    liveUrl: '#',
    caseStudy: 'HIPAA-friendly architecture designed for fast loading times and multi-department administrative control.'
  },
  {
    id: 'travelgo',
    title: 'TravelGo',
    category: 'business',
    categoryLabel: 'Travel Agency Website',
    image: IMG.grocery,
    shortDesc: 'Interactive travel agency showcase with tour package builder and query system.',
    fullDesc: 'TravelGo inspires wanderlust with rich visual destination cards, customizable itinerary planners, WhatsApp direct booking integration, and multi-currency pricing.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'WhatsApp API'],
    liveUrl: '#',
    caseStudy: 'Empowered travel agency with 2.5x more leads via direct WhatsApp quote button.'
  },
  {
    id: 'buildspace',
    title: 'BuildSpace',
    category: 'business',
    categoryLabel: 'Construction Company Website',
    image: IMG.fashion,
    shortDesc: 'Corporate architecture portfolio displaying commercial projects & client quote estimator.',
    fullDesc: 'BuildSpace highlights architectural achievements, completed commercial builds, structural design expertise, safety standards, and project consultation request forms.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Vercel'],
    liveUrl: '#',
    caseStudy: 'Elevated corporate trust with sleek dark/light mode switcher and responsive project showcase grid.'
  },
  {
    id: 'pixelcafe',
    title: 'PixelCafe',
    category: 'portfolio',
    categoryLabel: 'Coffee Shop Website',
    image: IMG.food,
    shortDesc: 'Aesthetic artisan coffee shop menu, location finder, and table reservation app.',
    fullDesc: 'PixelCafe brings the warm ambience of artisan coffee online. Includes interactive coffee menu, table booking form, customer feedback module, and location maps.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    liveUrl: '#',
    caseStudy: 'Crafted with soft pink and lavender light-mode palette for maximum visual appeal.'
  },
  {
    id: 'legalpro',
    title: 'LegalPro',
    category: 'business',
    categoryLabel: 'Law Firm Website',
    image: IMG.cab,
    shortDesc: 'Professional legal advisory website with attorney profiles and consultation booking.',
    fullDesc: 'LegalPro delivers a strong professional presence for law firms. Features attorney bios, practice area overviews, confidential case evaluation forms, and client testimonials.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Formspree'],
    liveUrl: '#',
    caseStudy: 'Built with clean typography, secure code standards, and accessible design.'
  },
  {
    id: 'fitlife-gym',
    title: 'FitLife Gym',
    category: 'business',
    categoryLabel: 'Fitness & Gym Website',
    image: IMG.hotel,
    shortDesc: 'High-energy gym website with class schedules, trainer profiles & membership plans.',
    fullDesc: 'FitLife Gym motivates fitness enthusiasts with interactive class timetables, personal trainer showcases, online membership package sales, and BMI calculator.',
    tech: ['React', 'CSS3', 'Firebase', 'WhatsApp API'],
    liveUrl: '#',
    caseStudy: 'High conversion landing page with dynamic call-to-actions and membership package highlights.'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  renderPortfolioGrid('all');
  initPortfolioFilters();
  initProjectSearch();
});

function renderPortfolioGrid(filter = 'all', searchQuery = '') {
  const gridContainer = document.getElementById('portfolioGrid');
  if (!gridContainer) return;

  gridContainer.innerHTML = '';

  const filtered = portfolioProjects.filter(project => {
    const matchesFilter = filter === 'all' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  if (filtered.length === 0) {
    gridContainer.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; color: var(--accent-lavender);"></i>
        <h3>No projects found matching your search</h3>
        <p>Try adjusting your search query or filter category.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(project => {
    const card = document.createElement('div');
    card.className = 'portfolio-card glass-card';
    card.setAttribute('data-category', project.category);

    const techBadgesHTML = project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');

    card.innerHTML = `
      <div class="portfolio-img-box">
        <img src="${project.image}" alt="${project.title}" loading="lazy" />
        <div class="portfolio-overlay">
          <button class="btn btn-primary btn-sm" onclick="openCaseStudyModal('${project.id}')">
            <i class="fas fa-eye"></i> Case Study
          </button>
          <a href="https://wa.me/919087923641?text=Hi%20Webrion!%20I%20am%20interested%20in%20a%20website%20similar%20to%20${encodeURIComponent(project.title)}" target="_blank" class="btn btn-whatsapp btn-sm">
            <i class="fab fa-whatsapp"></i> Demo Quote
          </a>
        </div>
      </div>
      <div class="portfolio-content">
        <span class="badge-tag" style="align-self: flex-start; margin-bottom: 0.25rem;">${project.categoryLabel}</span>
        <h3 style="font-size: 1.35rem; font-weight: 700;">${project.title}</h3>
        <p style="font-size: 0.9rem; color: var(--text-muted);">${project.shortDesc}</p>
        <div class="tech-badges">${techBadgesHTML}</div>
      </div>
    `;

    gridContainer.appendChild(card);
  });
}

function initPortfolioFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      const searchInput = document.getElementById('portfolioSearchInput');
      const searchVal = searchInput ? searchInput.value : '';
      renderPortfolioGrid(filter, searchVal);
    });
  });
}

function initProjectSearch() {
  const searchInput = document.getElementById('portfolioSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const activeFilterBtn = document.querySelector('.filter-btn.active');
      const activeFilter = activeFilterBtn ? activeFilterBtn.getAttribute('data-filter') : 'all';
      renderPortfolioGrid(activeFilter, e.target.value);
    });
  }
}

// Case Study Modal
function openCaseStudyModal(projectId) {
  const project = portfolioProjects.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('caseStudyModal');
  const modalBody = document.getElementById('caseStudyModalBody');

  if (modal && modalBody) {
    const techBadgesHTML = project.tech.map(t => `<span class="tech-tag" style="font-size: 0.85rem;">${t}</span>`).join('');

    modalBody.innerHTML = `
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: center; margin-bottom: 2rem;">
        <div>
          <span class="badge-tag">${project.categoryLabel}</span>
          <h2 style="font-size: 2.2rem; margin: 0.5rem 0 1rem 0;">${project.title}</h2>
          <p style="color: var(--text-muted); font-size: 1.05rem; margin-bottom: 1.5rem;">${project.fullDesc}</p>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 2rem;">${techBadgesHTML}</div>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <a href="https://wa.me/919087923641?text=Hi%20Webrion!%20I%20want%20to%20build%20a%20project%20like%20${encodeURIComponent(project.title)}" target="_blank" class="btn btn-whatsapp">
              <i class="fab fa-whatsapp"></i> Get Custom Quote
            </a>
            <a href="contact.html" class="btn btn-pink">
              <i class="fas fa-paper-plane"></i> Contact Team
            </a>
          </div>
        </div>
        <div>
          <div class="glass-card" style="padding: 10px; border-radius: var(--radius-md);">
            <img src="${project.image}" alt="${project.title}" style="border-radius: var(--radius-md); width: 100%;" />
          </div>
        </div>
      </div>
      <div style="background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-lavender);">
        <h4 style="font-weight: 700; margin-bottom: 0.5rem;"><i class="fas fa-rocket" style="color: var(--accent-pink);"></i> Project Impact & Key Result</h4>
        <p style="color: var(--text-muted); margin: 0;">${project.caseStudy}</p>
      </div>
    `;

    modal.classList.add('open');
  }
}

function closeCaseStudyModal() {
  const modal = document.getElementById('caseStudyModal');
  if (modal) modal.classList.remove('open');
}
