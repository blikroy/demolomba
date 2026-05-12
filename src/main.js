// Modal functionality
const modalOverlay = document.getElementById('modalOverlay');
const cookieBanner = document.getElementById('cookieBanner');

// Close modal function
function closeModal() {
  if (modalOverlay) {
    modalOverlay.classList.add('hidden');
  }
  document.body.style.overflow = '';
}

// Close cookie banner function
function closeCookieBanner() {
  if (cookieBanner) {
    cookieBanner.classList.add('hidden');
  }
  localStorage.setItem('cookieAccepted', 'true');
}

// Check if cookie was already accepted
if (localStorage.getItem('cookieAccepted') === 'true') {
  if (cookieBanner) {
    cookieBanner.classList.add('hidden');
  }
}

// Show modal after a delay (simulating the popup behavior)
setTimeout(() => {
  // Check if modal was already closed in this session
  if (sessionStorage.getItem('modalClosed') !== 'true') {
    document.body.style.overflow = 'hidden';
    if (modalOverlay) {
      modalOverlay.classList.remove('hidden');
    }
  }
}, 2000);

// Close modal when clicking outside
if (modalOverlay) {
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
      sessionStorage.setItem('modalClosed', 'true');
    }
  });
}

// Close button handler
const modalClose = document.querySelector('.modal-close');
if (modalClose) {
  modalClose.addEventListener('click', () => {
    closeModal();
    sessionStorage.setItem('modalClosed', 'true');
  });
}

// Cookie banner button handler
const cookieBtn = document.querySelector('.cookie-btn');
if (cookieBtn) {
  cookieBtn.addEventListener('click', closeCookieBanner);
}

// Quantity buttons functionality
const quantityContainers = document.querySelectorAll('.quantity');

for (const container of quantityContainers) {
  const minusBtn = container.querySelector('.minus');
  const plusBtn = container.querySelector('.plus');
  const input = container.querySelector('input');

  if (minusBtn) {
    minusBtn.addEventListener('click', () => {
      const currentValue = Number.parseInt(input.value) || 1;
      if (currentValue > 1) {
        input.value = (currentValue - 1).toString();
      }
    });
  }

  if (plusBtn) {
    plusBtn.addEventListener('click', () => {
      const currentValue = Number.parseInt(input.value) || 1;
      input.value = (currentValue + 1).toString();
    });
  }
}

// Thumbnail image switching
const thumbnails = document.querySelectorAll('.featured-thumbnails img');
const mainImage = document.querySelector('.featured-main-image img');

for (const thumb of thumbnails) {
  thumb.addEventListener('click', () => {
    for (const t of thumbnails) {
      t.classList.remove('active');
    }
    thumb.classList.add('active');
    if (mainImage) {
      mainImage.src = thumb.src;
    }
  });
}

// Form submissions (prevent default and show feedback)
const forms = document.querySelectorAll('form');
for (const form of forms) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]');
    if (email && email.value) {
      alert('¡Gracias por suscribirte! Pronto recibirás nuestras ofertas.');
      email.value = '';

      // If it's the modal form, close the modal
      if (form.classList.contains('modal-form')) {
        closeModal();
        sessionStorage.setItem('modalClosed', 'true');
      }
    }
  });
}

// Add to cart button
const addToCartBtn = document.querySelector('.add-to-cart');
if (addToCartBtn) {
  addToCartBtn.addEventListener('click', () => {
    alert('¡Producto agregado al carrito!');
  });
}

// Smooth scroll for navigation links
for (const anchor of document.querySelectorAll('a[href^="#"]')) {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const href = anchor.getAttribute('href');
    if (href && href !== '#') {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }
  });
}

// Announcement bar slider animation (simple CSS alternative)
const announcementSlider = document.querySelector('.announcement-slider');
if (announcementSlider) {
  // Add subtle animation on load
  announcementSlider.animate(
    [
      { opacity: 0, transform: 'translateY(-10px)' },
      { opacity: 1, transform: 'translateY(0)' },
    ],
    {
      duration: 500,
      easing: 'ease-out',
    }
  );
}

// Hero slider navigation (basic implementation)
const heroPrev = document.querySelector('.hero-prev');
const heroNext = document.querySelector('.hero-next');

if (heroPrev) {
  heroPrev.addEventListener('click', () => {
    // Would cycle through slides in a full implementation
    console.log('Previous slide');
  });
}

if (heroNext) {
  heroNext.addEventListener('click', () => {
    // Would cycle through slides in a full implementation
    console.log('Next slide');
  });
}

// Category and collection navigation buttons
const navBtns = document.querySelectorAll('.nav-btn');
for (const btn of navBtns) {
  btn.addEventListener('click', () => {
    // Would handle carousel navigation in a full implementation
    console.log('Navigation clicked');
  });
}

// Expose functions to global scope for onclick handlers
window.closeModal = closeModal;
window.closeCookieBanner = closeCookieBanner;

// Add loading animation to images
for (const img of document.querySelectorAll('img')) {
  img.addEventListener('load', () => {
    img.style.animation = 'fadeIn 0.3s ease';
  });
}

// Add CSS animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;
document.head.appendChild(style);

console.log('BARRO Alfarería - Website loaded successfully');