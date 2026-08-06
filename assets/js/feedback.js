/* ==========================================================================
   WEBRION CLIENT REVIEWS & FEEDBACK MANAGER
   Renders testimonials and manages interactive customer feedback submission
   ========================================================================== */

const defaultTestimonials = [
  {
    name: 'Aravind Swaminathan',
    role: 'Founder, Nova Retail',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    comment: 'Webrion built our e-commerce store for ₹4,999 in just 3 days! The design is super modern, fast, and sales doubled within two weeks.'
  },
  {
    name: 'Priya Ramakrishnan',
    role: 'Computer Science Student, SRM',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    comment: 'The Student Premium Project package saved my final year viva! Full code, database integration, live deployment, and presentation slides were delivered on time.'
  },
  {
    name: 'Karthik Subramanian',
    role: 'CEO, QuickRide Mobility',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    comment: 'Outstanding Flutter app development! The UI is super smooth and glassmorphic. Webrion is our go-to software partner.'
  },
  {
    name: 'Meera Nambiar',
    role: 'Director, EduSpark EdTech',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    comment: 'Integrating Groq AI Chatbot into our learning platform was seamless. The Webrion team was available 24/7 on WhatsApp.'
  },
  {
    name: 'Rohan Deshmukh',
    role: 'Manager, HotelNest Resorts',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    comment: 'Affordable, secure, and beautiful website design. We received glowing feedback from our guests on the new booking experience.'
  },
  {
    name: 'Ananya Sharma',
    role: 'Final Year Student, VIT',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    comment: 'Got my portfolio website and mini project done in ₹2,999! Clean code, proper documentation, and excellent guidance.'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  renderTestimonials();
  initFeedbackForm();
});

function renderTestimonials() {
  const container = document.getElementById('testimonialsGrid');
  if (!container) return;

  const stored = JSON.parse(localStorage.getItem('webrion-reviews') || '[]');
  const allReviews = [...stored, ...defaultTestimonials];

  container.innerHTML = '';

  allReviews.forEach(item => {
    const starsHTML = '★'.repeat(item.rating) + '☆'.repeat(5 - item.rating);
    const card = document.createElement('div');
    card.className = 'testimonial-card glass-card';

    card.innerHTML = `
      <div>
        <div class="stars" style="font-size: 1.1rem; margin-bottom: 1rem;">${starsHTML}</div>
        <p style="color: var(--text-muted); font-size: 0.95rem; font-style: italic;">"${item.comment}"</p>
      </div>
      <div class="client-info">
        <img src="${item.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80'}" alt="${item.name}" class="client-avatar" />
        <div>
          <h4 style="font-size: 1rem; font-weight: 700;">${item.name}</h4>
          <span style="font-size: 0.8rem; color: var(--accent-lavender); font-weight: 600;">${item.role}</span>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

function initFeedbackForm() {
  const form = document.getElementById('feedbackForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('fbName').value.trim();
    const role = document.getElementById('fbRole').value.trim() || 'Client';
    const rating = parseInt(document.getElementById('fbRating').value, 10);
    const comment = document.getElementById('fbComment').value.trim();

    if (!name || !comment) {
      alert('Please fill in your name and comment!');
      return;
    }

    const newReview = {
      name,
      role,
      rating,
      comment,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80'
    };

    const existing = JSON.parse(localStorage.getItem('webrion-reviews') || '[]');
    existing.unshift(newReview);
    localStorage.setItem('webrion-reviews', JSON.stringify(existing));

    form.reset();
    renderTestimonials();

    const successMsg = document.getElementById('fbSuccessMsg');
    if (successMsg) {
      successMsg.style.display = 'block';
      setTimeout(() => { successMsg.style.display = 'none'; }, 4000);
    }
  });
}
