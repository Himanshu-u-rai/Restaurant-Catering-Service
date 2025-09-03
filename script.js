// Modern Cafe Website JavaScript

// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function () {
  // Navigation functionality
  initializeNavigation();

  // Menu filtering functionality
  initializeMenuFilter();

  // Intersection Observer for animations
  initializeAnimations();

  // Mobile menu toggle
  initializeMobileMenu();

  // Hero CTA actions
  initializeHeroActions();

  // Contact actions
  initializeContactActions();
});

// Navigation functionality
function initializeNavigation() {
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove active class from all links (both desktop and mobile)
      document
        .querySelectorAll(".nav-link, .mobile-nav-link")
        .forEach((l) => l.classList.remove("active"));

      // Add active class to clicked link
      this.classList.add("active");

      // Also update the corresponding link in the other navigation
      const href = this.getAttribute("href");
      const correspondingLink = document.querySelector(
        this.classList.contains("nav-link")
          ? `.mobile-nav-link[href="${href}"]`
          : `.nav-link[href="${href}"]`
      );
      if (correspondingLink) {
        correspondingLink.classList.add("active");
      }

      // Smooth scroll to target section
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Update active link on scroll
  window.addEventListener("scroll", updateActiveNavLink);
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");

  let currentSection = "";

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 100 && rect.bottom >= 100) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
}

// Menu filtering functionality
function initializeMenuFilter() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const menuItems = document.querySelectorAll(".menu-item-modern");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = this.getAttribute("data-category");

      // Update active filter button
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      // Filter menu items
      menuItems.forEach((item) => {
        const itemCategory = item.getAttribute("data-category");

        if (category === "all" || itemCategory === category) {
          item.style.display = "flex";
          item.style.opacity = "0";
          item.style.transform = "translateY(20px)";

          // Animate in
          setTimeout(() => {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
          }, 100);
        } else {
          item.style.opacity = "0";
          item.style.transform = "translateY(20px)";

          setTimeout(() => {
            item.style.display = "none";
          }, 300);
        }
      });
    });
  });
}

// Intersection Observer for animations
function initializeAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");

        // Staggered animations for children
        const children = entry.target.querySelectorAll(
          ".menu-item-modern, .feature-modern, .info-item"
        );
        children.forEach((child, index) => {
          child.classList.add("fade-in", `stagger-${Math.min(index + 1, 5)}`);
        });
      }
    });
  }, observerOptions);

  // Observe all sections
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => observer.observe(section));

  // Observe individual elements
  const elements = document.querySelectorAll(
    ".menu-item-modern, .feature-modern, .info-item, .visual-card"
  );
  elements.forEach((element) => observer.observe(element));
}

// Mobile menu toggle
function initializeMobileMenu() {
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileNavMenu = document.querySelector(".mobile-nav-menu");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  if (menuToggle && mobileNavMenu) {
    menuToggle.addEventListener("click", function () {
      this.classList.toggle("active");
      mobileNavMenu.classList.toggle("active");
    });

    // Close mobile menu when clicking on a link
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", function () {
        menuToggle.classList.remove("active");
        mobileNavMenu.classList.remove("active");
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", function (event) {
      if (
        !menuToggle.contains(event.target) &&
        !mobileNavMenu.contains(event.target)
      ) {
        menuToggle.classList.remove("active");
        mobileNavMenu.classList.remove("active");
      }
    });
  }
}

// Hero CTA actions
function initializeHeroActions() {
  const exploreMenuBtn = document.querySelector(".cta-primary");
  const storyBtn = document.querySelector(".cta-secondary");

  if (exploreMenuBtn) {
    exploreMenuBtn.addEventListener("click", function () {
      document.querySelector("#menu").scrollIntoView({
        behavior: "smooth",
      });
    });
  }

  if (storyBtn) {
    storyBtn.addEventListener("click", function () {
      document.querySelector("#experience").scrollIntoView({
        behavior: "smooth",
      });
    });
  }
}

// Contact actions
function initializeContactActions() {
  const whatsappButtons = document.querySelectorAll(
    '.btn-modern[data-action="whatsapp"], .btn-modern:has(.fa-whatsapp)'
  );
  const directionsButtons = document.querySelectorAll(
    '.btn-modern[data-action="directions"], .btn-modern:has(.fa-directions)'
  );

  whatsappButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const message = encodeURIComponent(
        "Hi! I'd like to know more about Chai & Spice Cafe."
      );
      const phoneNumber = "919876543210"; // Replace with actual number
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    });
  });

  directionsButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const address = encodeURIComponent(
        "123 Spice Street, Flavor Town, Mumbai, Maharashtra 400001"
      );
      window.open(`https://www.google.com/maps/search/${address}`, "_blank");
    });
  });
}

// Parallax effect for hero section
window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const heroVideo = document.querySelector(".hero-video");
  const heroContent = document.querySelector(".hero-content-modern");

  if (heroVideo) {
    heroVideo.style.transform = `translateY(${scrolled * 0.5}px)`;
  }

  if (heroContent) {
    heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
});

// Floating navigation hide/show on scroll
let lastScrollTop = 0;
window.addEventListener("scroll", function () {
  const currentScrollTop = window.pageYOffset;
  const nav = document.querySelector(".floating-nav");

  if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
    // Scrolling down
    nav.style.transform = "translateX(-50%) translateY(-100%)";
  } else {
    // Scrolling up
    nav.style.transform = "translateX(-50%) translateY(0)";
  }

  lastScrollTop = currentScrollTop;
});

// Add loading animation
window.addEventListener("load", function () {
  document.body.classList.add("loaded");

  // Animate hero elements
  const heroElements = document.querySelectorAll(".hero-content-modern > *");
  heroElements.forEach((element, index) => {
    element.classList.add("fade-in");
    element.style.animationDelay = `${index * 0.1}s`;
  });
});

// Image lazy loading fallback
function initializeImageLoading() {
  const images = document.querySelectorAll("img");

  images.forEach((img) => {
    img.addEventListener("error", function () {
      // If image fails to load, replace with placeholder
      const width = this.width || 300;
      const height = this.height || 200;
      const text = encodeURIComponent(this.alt || "Image");
      this.src = `https://via.placeholder.com/${width}x${height}/8B4513/FFFFFF?text=${text}`;
    });
  });
}

// Initialize image loading
initializeImageLoading();

// Smooth reveal animations
function addRevealAnimations() {
  const revealElements = document.querySelectorAll(
    ".section-title, .section-description, .menu-item-modern, .feature-modern"
  );

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    revealObserver.observe(element);
  });
}

// Initialize reveal animations
addRevealAnimations();
