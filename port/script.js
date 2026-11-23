/**
 * Kamal Raj R - Developer Portfolio
 * Interactive Functionality & State Management
 */

// Project Data Store for Deep-Dive Modals
const projectsData = {
  'scrap-metal': {
    title: 'Scrap Metal Exchange',
    category: 'Full-Stack B2B/C2C Trading Platform',
    stack: ['Java', 'Spring Boot', 'React', 'MySQL', 'RESTful APIs', 'Spring Data JPA', 'Postman'],
    overview: 'An end-to-end web platform designed to streamline the recycling and scrap trading market by connecting individual scrap sellers directly with industrial buyers, eliminating intermediary markups and providing real-time pricing transparency.',
    architecture: `[React UI] <---> [Spring Boot REST Controllers] <---> [Business Service Layer]
                        |                                       |
                   [State / Axios]                     [Spring Data JPA Repos]
                                                                |
                                                          [MySQL Database]`,
    keyFeatures: [
      'Comprehensive RESTful API suite for listing scrap items (ferrous & non-ferrous metals), managing inventory, and placing purchase bids.',
      'Responsive React frontend with search, sorting, filtering by metal purity and categories, and live quote calculation.',
      'Robust relational schema in MySQL with normalized tables for Users, Listings, Categories, Quotations, and Transactions.',
      'API validation and global exception handling built in Spring Boot with standard HTTP status responses.',
      'Integration tested using Postman test collections.'
    ],
    endpoints: [
      'GET /api/v1/scrap-items - Browse available scrap listings with pagination & filter',
      'POST /api/v1/scrap-items - Sellers publish new scrap inventory with weight & images',
      'POST /api/v1/quotes - Buyers submit competitive purchase offers to sellers',
      'GET /api/v1/orders/{id} - Real-time tracking of deal confirmation and fulfillment'
    ]
  },
  'therapy-platform': {
    title: 'Mental Health Therapy Platform',
    category: 'Healthcare & Wellness Booking Web App',
    stack: ['Java', 'Spring Boot', 'React', 'MySQL', 'RESTful APIs', 'Spring Security Concepts'],
    overview: 'A confidential, compassionate digital platform enabling individuals to discover verified therapists, book appointment sessions into verified time-slots, and access wellness self-care resources without friction.',
    architecture: `[React Frontend] <---> [RESTful API Endpoints] <---> [Service Logic / Booking Engine]
           |                                                        |
  [Client / Therapist Views]                                   [Spring Data JPA]
                                                                    |
                                                            [MySQL Database]`,
    keyFeatures: [
      'Appointment scheduling engine engineered in Spring Boot with conflict-detection logic to eliminate double-booking.',
      'Role-segregated user management (Therapist vs. Client) allowing therapists to publish availability and clients to book seamlessly.',
      'Curated mental health resource repository categorizing wellness guides, mindfulness practices, and distress helpline links.',
      'Modular REST controllers handling profile modifications, slot status changes, and history logging.',
      'Responsive interface ensuring high confidentiality and comforting UI ergonomics.'
    ],
    endpoints: [
      'GET /api/v1/therapists - Directory of certified therapists with specialization tags',
      'POST /api/v1/appointments/book - Booking transactional endpoint with time slot validation',
      'GET /api/v1/resources/articles - Curated educational mental health resources',
      'PUT /api/v1/users/profile - Secure profile management and appointment history'
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initTypingEffect();
  initThemeToggle();
  initMobileNav();
  initNavbarScroll();
  initScrollSpy();
  initResumeDownload();
});

/* ==========================================================================
   1. Dynamic Typing Effect
   ========================================================================== */
function initTypingEffect() {
  const typedTextEl = document.getElementById('typed-text');
  if (!typedTextEl) return;

  const phrases = [
    'Aspiring Java Full-Stack Developer.',
    'Spring Boot & REST API Specialist.',
    'React Frontend Developer.',
    '400+ LeetCode Problem Solver.',
    'B.E. IT Student @ SKCT Coimbatore.'
  ];

  let phraseIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;
  let typingDelay = 90;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      typedTextEl.textContent = currentPhrase.substring(0, letterIndex - 1);
      letterIndex--;
      typingDelay = 45;
    } else {
      typedTextEl.textContent = currentPhrase.substring(0, letterIndex + 1);
      letterIndex++;
      typingDelay = 90;
    }

    if (!isDeleting && letterIndex === currentPhrase.length) {
      typingDelay = 1800; // Pause at end of sentence
      isDeleting = true;
    } else if (isDeleting && letterIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingDelay = 400; // Pause before typing next
    }

    setTimeout(type, typingDelay);
  }

  type();
}

/* ==========================================================================
   2. Dark / Light Theme Toggle
   ========================================================================== */
function initThemeToggle() {
  const themeBtn = document.getElementById('theme-toggle');
  const html = document.documentElement;

  // Retrieve saved preference or default to dark
  const savedTheme = localStorage.getItem('kamalraj_portfolio_theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const currentTheme = html.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('kamalraj_portfolio_theme', newTheme);
      showToast(`Switched to ${newTheme} mode`);
    });
  }
}

/* ==========================================================================
   3. Mobile Navigation Menu
   ========================================================================== */
function initMobileNav() {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!hamburgerBtn || !navMenu) return;

  hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    const isOpen = navMenu.classList.contains('open');
    hamburgerBtn.setAttribute('aria-expanded', isOpen);
  });

  // Close on nav link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
    });
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target) && navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
    }
  });
}

/* ==========================================================================
   4. Navbar Scroll Shadow
   ========================================================================== */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* ==========================================================================
   5. Active Section Scroll Spy
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset + 120;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { passive: true });
}

/* ==========================================================================
   6. Project Modal Deep-Dive
   ========================================================================== */
function openProjectModal(projectId) {
  const modal = document.getElementById('project-modal');
  const contentArea = document.getElementById('modal-content-area');
  const project = projectsData[projectId];

  if (!modal || !contentArea || !project) return;

  contentArea.innerHTML = `
    <span class="project-type-badge">${project.category}</span>
    <h3 class="modal-project-title" style="margin-top: 10px;">${project.title}</h3>
    
    <div class="modal-tag-row">
      ${project.stack.map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
    </div>

    <h4 class="modal-section-title"><i class="fa-solid fa-align-left"></i> System Overview</h4>
    <p style="color: var(--text-secondary); line-height: 1.7; margin-bottom: 20px;">
      ${project.overview}
    </p>

    <h4 class="modal-section-title"><i class="fa-solid fa-network-wired"></i> Architecture Flow</h4>
    <pre class="modal-architecture-box"><code>${project.architecture}</code></pre>

    <h4 class="modal-section-title"><i class="fa-solid fa-list-check"></i> Key Engineering Highlights</h4>
    <ul class="modal-list">
      ${project.keyFeatures.map(item => `<li><i class="fa-solid fa-circle-check"></i><span>${item}</span></li>`).join('')}
    </ul>

    <h4 class="modal-section-title"><i class="fa-solid fa-code"></i> Key REST API Endpoints</h4>
    <div class="modal-architecture-box">
      ${project.endpoints.map(ep => `<div>&bull; ${ep}</div>`).join('')}
    </div>

    <div style="margin-top: 28px; display: flex; gap: 14px; flex-wrap: wrap;">
      <a href="mailto:kamalrajr232@gmail.com?subject=Inquiry%20regarding%20${encodeURIComponent(project.title)}" class="btn btn-primary">
        <i class="fa-solid fa-envelope"></i> Discuss This Project
      </a>
      <button class="btn btn-secondary" onclick="closeProjectModal()">
        Close
      </button>
    </div>
  `;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = 'auto';
}

// Close modal when clicking outside dialog
document.addEventListener('click', (e) => {
  const modal = document.getElementById('project-modal');
  if (modal && e.target === modal) {
    closeProjectModal();
  }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProjectModal();
  }
});

/* ==========================================================================
   7. Clipboard Copy Helper with Toast
   ========================================================================== */
function copyToClipboard(text, customMessage = 'Copied to clipboard!') {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(customMessage);
    }).catch(() => {
      fallbackCopy(text, customMessage);
    });
  } else {
    fallbackCopy(text, customMessage);
  }
}

function fallbackCopy(text, customMessage) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    showToast(customMessage);
  } catch (err) {
    showToast('Failed to copy');
  }
  document.body.removeChild(textArea);
}

function showToast(message) {
  const toast = document.getElementById('toast-notification');
  if (!toast) return;

  toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${message}`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

/* ==========================================================================
   8. Contact Form Handling
   ========================================================================== */
function handleFormSubmit(e) {
  e.preventDefault();

  const nameInput = document.getElementById('form-name');
  const emailInput = document.getElementById('form-email');
  const subjectInput = document.getElementById('form-subject');
  const messageInput = document.getElementById('form-message');
  const statusDiv = document.getElementById('form-status');
  const submitBtn = document.getElementById('form-submit-btn');

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const subject = subjectInput.value.trim();
  const message = messageInput.value.trim();

  if (!name || !email || !subject || !message) {
    statusDiv.className = 'form-status-msg error';
    statusDiv.textContent = 'Please fill in all fields before sending.';
    return;
  }

  // Construct mailto link as reliable fallback for static hosting
  const mailtoUrl = `mailto:kamalrajr232@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;

  submitBtn.disabled = true;
  submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Preparing...`;

  setTimeout(() => {
    statusDiv.className = 'form-status-msg success';
    statusDiv.innerHTML = `<strong>Thank you, ${name}!</strong> Opening your email client to dispatch the message directly to Kamal.`;
    showToast('Opening email client...');
    
    // Trigger mail client
    window.location.href = mailtoUrl;

    // Reset form after short delay
    setTimeout(() => {
      nameInput.value = '';
      emailInput.value = '';
      subjectInput.value = '';
      messageInput.value = '';
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<i class="fa-solid fa-paper-plane"></i> Send Message`;
    }, 2500);
  }, 600);
}

/* ==========================================================================
   9. Resume Download Handler
   ========================================================================== */
function initResumeDownload() {
  const resumeBtn = document.getElementById('resume-download-btn');
  if (!resumeBtn) return;

  resumeBtn.addEventListener('click', (e) => {
    // If user has a resume.pdf in workspace, this triggers download; otherwise scrolls to contact
    showToast('Direct contact: kamalrajr232@gmail.com | 9629230021');
  });
}
