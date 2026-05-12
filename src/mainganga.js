// Ganga Home Clone - Main JavaScript

// Cookie Banner
function closeCookieBanner() {
  const banner = document.getElementById('cookieBanner');
  if (banner) {
    banner.classList.add('hidden');
    localStorage.setItem('cookieAccepted', 'true');
  }
}

// Make function available globally
window.closeCookieBanner = closeCookieBanner;

// Check if cookies were already accepted
document.addEventListener('DOMContentLoaded', () => {
  const cookieAccepted = localStorage.getItem('cookieAccepted');
  if (cookieAccepted === 'true') {
    const banner = document.getElementById('cookieBanner');
    if (banner) {
      banner.classList.add('hidden');
    }
  }

  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mainNav = document.querySelector('.main-nav');

  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mainNav.classList.toggle('mobile-open');
      mobileMenuBtn.classList.toggle('active');
    });
  }

  // Color options interaction
  const colorBtns = document.querySelectorAll('.color-btn');
  for (const btn of colorBtns) {
    btn.addEventListener('click', (e) => {
      const target = e.currentTarget;
      const container = target.closest('.colors');
      if (container) {
        for (const b of container.querySelectorAll('.color-btn')) {
          b.classList.remove('active');
        }
      }
      target.classList.add('active');
    });
  }

  // Search input focus animation
  const searchBox = document.querySelector('.search-box');
  const searchInput = searchBox?.querySelector('input');

  if (searchInput) {
    searchInput.addEventListener('focus', () => {
      searchBox?.classList.add('focused');
    });

    searchInput.addEventListener('blur', () => {
      searchBox?.classList.remove('focused');
    });
  }

  // Smooth scroll for navigation links
  const anchors = document.querySelectorAll('a[href^="#"]');
  for (const anchor of anchors) {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href && href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  // Product card hover effect enhancement
  const productCards = document.querySelectorAll('.product-card');
  for (const card of productCards) {
    card.addEventListener('mouseenter', () => {
      card.classList.add('hovered');
    });
    card.addEventListener('mouseleave', () => {
      card.classList.remove('hovered');
    });
  }

  // Add to cart functionality (demo)
  const addToCartHandler = (productName) => {
    console.log(`Added to cart: ${productName}`);
    // Could add toast notification here
  };

  for (const card of productCards) {
    card.addEventListener('click', () => {
      const productName = card.querySelector('.product-name')?.textContent || 'Product';
      addToCartHandler(productName);
    });
  }

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    }
  }, observerOptions);

  const observedElements = document.querySelectorAll('.product-card, .category-card');
  for (const el of observedElements) {
    observer.observe(el);
  }

  // Header scroll effect
  let lastScrollY = window.scrollY;
  const header = document.querySelector('.main-header');

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (header) {
      if (currentScrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        header.classList.add('hidden');
      } else {
        header.classList.remove('hidden');
      }
    }

    lastScrollY = currentScrollY;
  });

  console.log('Ganga Home Clone loaded successfully!');
});
const logo = document.getElementById("logo");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    logo.style.height = "50px";
  } else {
    logo.style.height = "";
  }
});
// Add additional styles for mobile nav
const mobileStyles = document.createElement('style');
mobileStyles.textContent = `
  @media (max-width: 768px) {
    .main-nav.mobile-open {
      display: block !important;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: white;
      z-index: 999;
      padding: 80px 20px 20px;
      overflow-y: auto;
    }

    .main-nav.mobile-open .nav-list {
      flex-direction: column;
      align-items: flex-start;
      gap: 15px;
    }

    .main-nav.mobile-open .nav-link {
      font-size: 18px;
      padding: 10px 0;
      width: 100%;
      border-bottom: 1px solid #eee;
    }

    .mobile-menu-btn.active svg line:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }

    .mobile-menu-btn.active svg line:nth-child(2) {
      opacity: 0;
    }

    .mobile-menu-btn.active svg line:nth-child(3) {
      transform: rotate(-45deg) translate(5px, -5px);
    }

    .main-header.scrolled {
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    }

    .main-header.hidden {
      transform: translateY(-100%);
    }

    .main-header {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
  }

  .visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(mobileStyles);