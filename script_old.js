// Menu Carousel Functionality
function showMenuCategory(category) {
  // Hide all carousels  // Initialize all carousel states
  const carouselIds = [
    "hot-beverages",
    "cold-beverages",
    "snacks",
    "street-food",
    "desserts"
  ];t carousels = document.querySelectorAll(".menu-carousel");
  carousels.forEach((carousel) => {
    carousel.classList.remove("active");
  });

  // Show selected carousel
  const targetCarousel = document.getElementById(category);
  if (targetCarousel) {
    targetCarousel.classList.add("active");
  }

  // Update tab buttons
  const tabs = document.querySelectorAll(".tab-btn");
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  const activeTab = document.querySelector(`[data-category="${category}"]`);
  if (activeTab) {
    activeTab.classList.add("active");
  }
}

// Carousel navigation functionality
const carouselStates = {};

function initializeCarouselState(carouselId) {
  if (!carouselStates[carouselId]) {
    carouselStates[carouselId] = {
      currentIndex: 0,
      cardsToShow: getCardsToShow(),
      totalCards: document.querySelector(`#${carouselId} .menu-card`)
        ? document.querySelectorAll(`#${carouselId} .menu-card`).length
        : 6,
    };
  }
}

function getCardsToShow() {
  if (window.innerWidth <= 768) return 1;
  if (window.innerWidth <= 1024) return 2;
  return 3;
}

function moveCarousel(carouselId, direction) {
  initializeCarouselState(carouselId);
  const state = carouselStates[carouselId];
  const track = document.querySelector(`#${carouselId} .carousel-track`);
  const prevBtn = document.querySelector(`#${carouselId} .carousel-btn.prev`);
  const nextBtn = document.querySelector(`#${carouselId} .carousel-btn.next`);

  if (!track) return;

  state.cardsToShow = getCardsToShow();
  const maxIndex = Math.max(0, state.totalCards - state.cardsToShow);

  state.currentIndex += direction;

  // Handle boundaries
  if (state.currentIndex < 0) {
    state.currentIndex = 0;
  } else if (state.currentIndex > maxIndex) {
    state.currentIndex = maxIndex;
  }

  // Calculate card width (220px card + 20px gap)
  const cardWidth = 240;
  const translateX = -state.currentIndex * cardWidth;

  track.style.transform = `translateX(${translateX}px)`;

  // Update button states
  if (prevBtn) {
    prevBtn.disabled = state.currentIndex === 0;
  }
  if (nextBtn) {
    nextBtn.disabled = state.currentIndex >= maxIndex;
  }
}

// Initialize carousel functionality
function initializeCarousel() {
  // Add click events to tab buttons
  const tabButtons = document.querySelectorAll(".tab-btn");
  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.dataset.category;
      showMenuCategory(category);
    });
  });

  // Initialize all carousel states
  const carouselIds = [
    "hot-beverages",
    "cold-beverages",
    "snacks",
    "street-food",
    "desserts",
  ];
  carouselIds.forEach((id) => {
    initializeCarouselState(id);
    moveCarousel(id, 0); // Set initial state
  });

  // Initialize first category
  showMenuCategory("hot-beverages");
}

// Handle window resize
window.addEventListener("resize", () => {
  // Reset carousel states on resize
  Object.keys(carouselStates).forEach((carouselId) => {
    carouselStates[carouselId].currentIndex = 0;
    moveCarousel(carouselId, 0);
  });
});

// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      navToggle.classList.toggle("active");
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        navToggle.classList.remove("active");
      });
    });
  }

  // Initialize all functionality
  initializeImageLoading();
  refreshImagesOnLoad();
  initializeCarousel();
}); // Force refresh images to prevent caching issues
function refreshImagesOnLoad() {
  setTimeout(() => {
    document.querySelectorAll("img").forEach((img) => {
      const originalSrc = img.src;
      if (originalSrc.includes("picsum.photos")) {
        // Add timestamp to force fresh load
        const separator = originalSrc.includes("?") ? "&" : "?";
        img.src = originalSrc + separator + "t=" + new Date().getTime();
      }
    });
  }, 100);
}

// Image Loading with Fallback System
function initializeImageLoading() {
  const images = document.querySelectorAll("img[data-fallback]");

  images.forEach((img) => {
    // Set initial loading state
    img.style.opacity = "0";
    img.style.transition = "opacity 0.5s ease";

    // Add loading placeholder
    const placeholder = document.createElement("div");
    placeholder.className = "image-placeholder";
    placeholder.style.cssText = `
      width: ${img.offsetWidth || 150}px;
      height: ${img.offsetHeight || 120}px;
      background: linear-gradient(45deg, #f0f0f3, #e0e0e3);
      border-radius: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #999;
      font-size: 14px;
      position: absolute;
      top: 0;
      left: 0;
    `;
    placeholder.textContent = "Loading...";

    // Wrap image in container for placeholder
    const container = document.createElement("div");
    container.style.position = "relative";
    img.parentNode.insertBefore(container, img);
    container.appendChild(img);
    container.appendChild(placeholder);

    // Handle successful load
    img.addEventListener("load", function () {
      this.style.opacity = "1";
      if (placeholder.parentNode) {
        placeholder.remove();
      }
    });

    // Handle load error - use fallback
    img.addEventListener("error", function () {
      console.log(
        `Image failed to load: ${this.src}, using fallback: ${this.dataset.fallback}`
      );
      this.src = this.dataset.fallback;

      // If fallback also fails, show placeholder
      this.addEventListener(
        "error",
        function () {
          this.style.display = "none";
          placeholder.textContent = this.alt || "Image";
          placeholder.style.background =
            "linear-gradient(45deg, #ff6b35, #f7931e)";
          placeholder.style.color = "white";
        },
        { once: true }
      );
    });

    // Force load check after a timeout
    setTimeout(() => {
      if (img.complete && img.naturalWidth === 0) {
        img.dispatchEvent(new Event("error"));
      }
    }, 5000);
  });

  // Handle images without fallbacks
  const regularImages = document.querySelectorAll("img:not([data-fallback])");
  regularImages.forEach((img) => {
    img.style.opacity = "0";
    img.style.transition = "opacity 0.5s ease";

    img.addEventListener("load", function () {
      this.style.opacity = "1";
    });

    img.addEventListener("error", function () {
      this.style.opacity = "0.5";
      this.style.filter = "grayscale(100%)";
    });
  });
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 80; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Navbar Background Change on Scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(240, 240, 243, 0.95)";
    navbar.style.backdropFilter = "blur(10px)";
  } else {
    navbar.style.background = "var(--bg-primary)";
    navbar.style.backdropFilter = "none";
  }
});

// Gallery Lightbox Effect
document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("click", function () {
    const img = this.querySelector("img");
    const overlay = this.querySelector(".gallery-overlay");
    const title = overlay.querySelector("h4").textContent;

    // Create lightbox
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.innerHTML = `
            <div class="lightbox-content">
                <span class="lightbox-close">&times;</span>
                <img src="${img.src}" alt="${title}">
                <div class="lightbox-caption">
                    <h3>${title}</h3>
                    <p>${overlay.querySelector("p").textContent}</p>
                </div>
            </div>
        `;

    // Add lightbox styles
    lightbox.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;

    const content = lightbox.querySelector(".lightbox-content");
    content.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            position: relative;
            background: white;
            padding: 20px;
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        `;

    const lightboxImg = lightbox.querySelector("img");
    lightboxImg.style.cssText = `
            max-width: 100%;
            max-height: 70vh;
            object-fit: contain;
            border-radius: 15px;
        `;

    const closeBtn = lightbox.querySelector(".lightbox-close");
    closeBtn.style.cssText = `
            position: absolute;
            top: 10px;
            right: 20px;
            font-size: 30px;
            color: #666;
            cursor: pointer;
            z-index: 1;
        `;

    const caption = lightbox.querySelector(".lightbox-caption");
    caption.style.cssText = `
            text-align: center;
            margin-top: 15px;
            color: #333;
        `;

    document.body.appendChild(lightbox);

    // Animate in
    setTimeout(() => {
      lightbox.style.opacity = "1";
    }, 10);

    // Close lightbox
    const closeLightbox = () => {
      lightbox.style.opacity = "0";
      setTimeout(() => {
        document.body.removeChild(lightbox);
      }, 300);
    };

    closeBtn.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    // Close on Escape key
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closeLightbox();
      }
    });
  });
});

// WhatsApp Button Animation
document.querySelectorAll(".whatsapp-btn").forEach((btn) => {
  btn.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-3px) scale(1.05)";
  });

  btn.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Scroll Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for scroll animation
document
  .querySelectorAll(
    ".menu-item, .package-card, .review-card, .gallery-item, .info-card"
  )
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

// Menu Item Hover Effects
document.querySelectorAll(".menu-item").forEach((item) => {
  item.addEventListener("mouseenter", function () {
    const img = this.querySelector("img");
    img.style.transform = "scale(1.1) rotate(5deg)";
  });

  item.addEventListener("mouseleave", function () {
    const img = this.querySelector("img");
    img.style.transform = "scale(1) rotate(0deg)";
  });
});

// Package Card Pulse Effect
document.querySelectorAll(".package-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    if (!this.classList.contains("featured")) {
      this.style.animation = "pulse 0.6s ease-in-out";
    }
  });

  card.addEventListener("mouseleave", function () {
    this.style.animation = "";
  });
});

// Add pulse animation to CSS
const style = document.createElement("style");
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.03); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);

// Loading Animation for Images - Enhanced Version
function enhanceImageLoading() {
  document.querySelectorAll("img").forEach((img) => {
    // Skip if already processed
    if (img.dataset.processed) return;
    img.dataset.processed = "true";

    // Set initial state
    if (!img.style.opacity) {
      img.style.opacity = "0";
      img.style.transition = "opacity 0.5s ease, transform 0.3s ease";
    }

    // Handle successful load
    img.addEventListener("load", function () {
      this.style.opacity = "1";
      this.style.transform = "scale(1)";
    });

    // Handle error
    img.addEventListener("error", function () {
      console.warn(`Failed to load image: ${this.src}`);
      this.style.opacity = "0.7";
      this.style.filter = "grayscale(50%)";
    });

    // Check if already loaded
    if (img.complete) {
      img.style.opacity = "1";
    }
  });
}

// Call enhanced loading
enhanceImageLoading();

// Review Cards Stagger Animation
document.querySelectorAll(".review-card").forEach((card, index) => {
  card.style.animationDelay = `${index * 0.1}s`;
});

// Contact CTA Button Glow Effect
const ctaButton = document.querySelector(".contact-cta .whatsapp-btn");
if (ctaButton) {
  setInterval(() => {
    ctaButton.style.boxShadow =
      "0 0 20px rgba(37, 211, 102, 0.5), 6px 6px 12px #d1d9e6, -6px -6px 12px #ffffff";
    setTimeout(() => {
      ctaButton.style.boxShadow =
        "6px 6px 12px #d1d9e6, -6px -6px 12px #ffffff";
    }, 1000);
  }, 3000);
}

// Parallax Effect for Hero Section
window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const heroImage = document.querySelector(".food-showcase");
  if (heroImage) {
    heroImage.style.transform = `translateY(${scrolled * 0.2}px)`;
  }
});

// Dynamic Time-based Greeting
function updateGreeting() {
  const hour = new Date().getHours();
  const greetingElement = document.querySelector(".hero-subtitle");

  if (greetingElement) {
    let greeting;
    if (hour < 12) {
      greeting =
        "Start your morning with authentic Indian breakfast and fresh chai";
    } else if (hour < 17) {
      greeting = "Enjoy a delicious lunch with our daily special Indian dishes";
    } else {
      greeting =
        "End your day with comforting Indian dinner and warm hospitality";
    }
    greetingElement.textContent = greeting;
  }
}

// Update greeting on page load
updateGreeting();

// Food Showcase Rotation
function rotateFoodShowcase() {
  const showcaseImgs = document.querySelectorAll(".showcase-img");
  if (showcaseImgs.length > 0) {
    showcaseImgs.forEach((img, index) => {
      setTimeout(() => {
        img.style.transform = "scale(1.05)";
        setTimeout(() => {
          img.style.transform = "scale(1)";
        }, 500);
      }, index * 200);
    });
  }
}

// Rotate showcase every 5 seconds
setInterval(rotateFoodShowcase, 5000);

console.log("🍛 Chai & Spice Cafe - Website loaded successfully!");
