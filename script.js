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

  // Set initial nav height variable
  setNavHeightVar();
});
// Dynamic CSS var for nav height (helps mobile positioning & scroll offsets)
function setNavHeightVar() {
  const nav = document.querySelector(".floating-nav");
  if (nav) {
    const h = nav.offsetHeight;
    document.documentElement.style.setProperty("--nav-height", h + "px");
  }
}
window.addEventListener("resize", setNavHeightVar);
window.addEventListener("orientationchange", setNavHeightVar);

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
      if (correspondingLink) correspondingLink.classList.add("active");

      const targetSection = document.querySelector(href);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
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
    if (rect.top <= 100 && rect.bottom >= 100) currentSection = section.id;
  });
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`)
      link.classList.add("active");
  });
}

// Menu filtering functionality
function initializeMenuFilter() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const menuItems = document.querySelectorAll(".menu-item-modern");
  const grid = document.querySelector(".menu-grid-modern");
  let autoScrollTimer = null;
  let isCarousel = false;
  let baseLoopWidth = 0;

  function prepareInfiniteLoop() {
    if (!grid || grid.dataset.loopPrepared === "true") return;
    const originals = Array.from(
      grid.querySelectorAll(".menu-item-modern:not(.__clone)")
    );
    if (originals.length === 0) return;
    originals.forEach((item) => {
      const clone = item.cloneNode(true);
      clone.classList.add("__clone");
      clone.setAttribute("aria-hidden", "true");
      grid.appendChild(clone);
    });
    requestAnimationFrame(() => {
      baseLoopWidth = grid.scrollWidth / 2; // because doubled
      grid.dataset.loopPrepared = "true";
    });
  }

  function enableCarousel() {
    if (!grid || isCarousel) return;
    isCarousel = true;
    grid.classList.add("carousel-active");
    grid.parentElement?.classList.add(
      "carousel-active-wrapper",
      "carousel-edge-fade"
    );
    prepareInfiniteLoop();
    injectCarouselControls();
    startAutoScroll();
  }
  function disableCarousel() {
    if (!grid || !isCarousel) return;
    isCarousel = false;
    stopAutoScroll();
    grid.classList.remove("carousel-active");
    grid.parentElement?.classList.remove(
      "carousel-active-wrapper",
      "carousel-edge-fade"
    );
    const ctrls = grid.parentElement?.querySelector(".carousel-controls");
    ctrls && ctrls.remove();
    // cleanup clones if any
    grid
      .querySelectorAll(".menu-item-modern.__clone")
      .forEach((c) => c.remove());
    grid.dataset.loopPrepared = "false";
    baseLoopWidth = 0;
  }
  function injectCarouselControls() {
    if (!grid?.parentElement) return;
    if (grid.parentElement.querySelector(".carousel-controls")) return;
    const wrap = document.createElement("div");
    wrap.className = "carousel-controls";
    const prev = document.createElement("button");
    prev.className = "carousel-btn";
    prev.setAttribute("aria-label", "Previous items");
    prev.innerHTML = '<i class="fas fa-chevron-left"></i>';
    const next = document.createElement("button");
    next.className = "carousel-btn";
    next.setAttribute("aria-label", "Next items");
    next.innerHTML = '<i class="fas fa-chevron-right"></i>';
    wrap.appendChild(prev);
    wrap.appendChild(next);
    grid.parentElement.appendChild(wrap);
    prev.addEventListener("click", () => scrollByAmount(-1));
    next.addEventListener("click", () => scrollByAmount(1));
  }
  function scrollByAmount(dir = 1) {
    if (!grid) return;
    const card = grid.querySelector(".menu-item-modern");
    const w = card ? card.getBoundingClientRect().width + 16 : 220;
    grid.scrollBy({ left: dir * w * 2, behavior: "smooth" });
  }
  function startAutoScroll() {
    stopAutoScroll();
    if (!grid) return;
    let direction = 1; // always forward
    autoScrollTimer = setInterval(() => {
      if (!isCarousel) return;
      if (!baseLoopWidth) baseLoopWidth = grid.scrollWidth / 2;
      grid.scrollLeft += direction * 1.2;
      if (grid.scrollLeft >= baseLoopWidth) {
        grid.scrollLeft -= baseLoopWidth; // seamless wrap
      }
    }, 20);
    grid.addEventListener("mouseenter", stopAutoScroll);
    grid.addEventListener("mouseleave", () => {
      if (isCarousel) startAutoScroll();
    });
  }
  function stopAutoScroll() {
    if (autoScrollTimer) {
      clearInterval(autoScrollTimer);
      autoScrollTimer = null;
    }
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = this.getAttribute("data-category");
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
      if (category === "all") enableCarousel();
      else disableCarousel();
      menuItems.forEach((item) => {
        const itemCategory = item.getAttribute("data-category");
        if (category === "all" || itemCategory === category) {
          item.style.display = isCarousel ? "block" : "flex";
          item.style.opacity = "0";
          item.style.transform = "translateY(20px)";
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

  // Initialize default state if All is active by default
  const initialActive = document.querySelector(".filter-btn.active");
  if (initialActive && initialActive.getAttribute("data-category") === "all") {
    enableCarousel();
  }

  // Mobile show more toggle
  const showMoreBtn = document.getElementById("showMoreMenu");
  function updateShowMoreVisibility() {
    if (!showMoreBtn) return;
    const isAll =
      document
        .querySelector(".filter-btn.active")
        ?.getAttribute("data-category") === "all";
    // Only show show-more when not carousel (i.e., not 'all' or if user leaves all)
    if (isCarousel) {
      showMoreBtn.style.display = "none";
      return;
    }
    // If more than 6 items in current filter, allow button
    const visibleItems = Array.from(menuItems).filter(
      (it) => it.style.display !== "none"
    );
    const needsCollapse = window.innerWidth <= 640 && visibleItems.length > 6;
    if (needsCollapse) {
      document.body.classList.add("mobile-collapsed");
      showMoreBtn.style.display = "block";
    } else {
      document.body.classList.remove("mobile-collapsed");
      showMoreBtn.style.display = "none";
    }
  }
  if (showMoreBtn) {
    showMoreBtn.addEventListener("click", () => {
      const expanded = showMoreBtn.getAttribute("aria-expanded") === "true";
      if (!expanded) {
        document.body.classList.remove("mobile-collapsed");
        showMoreBtn.setAttribute("aria-expanded", "true");
        showMoreBtn.textContent = "Show Less";
      } else {
        document.body.classList.add("mobile-collapsed");
        showMoreBtn.setAttribute("aria-expanded", "false");
        showMoreBtn.textContent = "Show More";
      }
    });
    window.addEventListener("resize", updateShowMoreVisibility, {
      passive: true,
    });
    setTimeout(updateShowMoreVisibility, 50);
  }
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

    // Observe all sections
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    // Observe individual elements
    const elements = document.querySelectorAll(
      ".menu-item-modern, .feature-modern, .info-item, .visual-card"
    );
    elements.forEach((element) => observer.observe(element));
  });
}

// Mobile menu module with debounce & CSS var width locking
function initializeMobileMenu() {
  const state = { busy: false };
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileNavMenu = document.querySelector(".mobile-nav-menu");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
  const overlay = document.querySelector(".nav-overlay");
  const body = document.body;
  const nav = document.querySelector(".floating-nav");
  const MQ = "(max-width: 768px)";

  if (!menuToggle || !mobileNavMenu || !nav) return;

  function lockWidth() {
    const rect = nav.getBoundingClientRect();
    nav.style.setProperty("--nav-fixed-width", rect.width + "px");
  }
  function clearWidth() {
    nav.style.removeProperty("--nav-fixed-width");
  }

  function toggleMenu() {
    if (state.busy) return;
    state.busy = true;
    const willOpen = !menuToggle.classList.contains("active");
    const isMobile = window.matchMedia(MQ).matches;
    menuToggle.classList.toggle("active", willOpen);
    mobileNavMenu.classList.toggle("active", willOpen);
    menuToggle.setAttribute("aria-expanded", willOpen ? "true" : "false");
    mobileNavMenu.setAttribute("aria-hidden", willOpen ? "false" : "true");
    overlay && overlay.classList.toggle("active", willOpen && isMobile);
    if (isMobile) {
      if (willOpen) {
        lockWidth();
        const scrollbarWidth =
          window.innerWidth - document.documentElement.clientWidth;
        if (scrollbarWidth > 0) {
          document.documentElement.style.setProperty(
            "--scrollbar-comp",
            scrollbarWidth + "px"
          );
          document.documentElement.style.setProperty("--layout-lock", "1");
        }
        body.classList.add("nav-open");
      } else {
        body.classList.remove("nav-open");
        document.documentElement.style.removeProperty("--scrollbar-comp");
        document.documentElement.style.removeProperty("--layout-lock");
        clearWidth();
      }
    } else {
      body.classList.remove("nav-open");
      document.documentElement.style.removeProperty("--scrollbar-comp");
      document.documentElement.style.removeProperty("--layout-lock");
      clearWidth();
    }
    nav.classList.toggle("menu-active", willOpen);
    if (willOpen) {
      setNavHeightVar();
      setTimeout(() => mobileNavLinks[0]?.focus(), 40);
      trapFocus(mobileNavMenu);
    } else {
      releaseFocus();
      menuToggle.focus();
    }
    // release busy after transition
    setTimeout(() => {
      state.busy = false;
    }, 420);
  }

  menuToggle.addEventListener("click", toggleMenu);
  mobileNavLinks.forEach((link) =>
    link.addEventListener("click", () => {
      if (!mobileNavMenu.classList.contains("active")) return;
      toggleMenu();
    })
  );
  document.addEventListener("click", (e) => {
    if (!mobileNavMenu.classList.contains("active")) return;
    if (menuToggle.contains(e.target) || mobileNavMenu.contains(e.target))
      return;
    toggleMenu();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileNavMenu.classList.contains("active"))
      toggleMenu();
  });
  window.addEventListener("resize", () => {
    if (mobileNavMenu.classList.contains("active")) lockWidth();
  });
}

// Simple focus trap implementation
let previousFocusedElement = null;
function trapFocus(container) {
  previousFocusedElement = document.activeElement;
  const focusable = container.querySelectorAll("a, button");
  function handleKey(e) {
    if (e.key !== "Tab") return;
    const items = Array.from(focusable).filter(
      (el) => !el.disabled && el.offsetParent !== null
    );
    if (items.length === 0) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
  container.addEventListener("keydown", handleKey);
  container.dataset.trapAttached = "true";
}
function releaseFocus() {
  // restore previous focus if needed
  if (previousFocusedElement) previousFocusedElement.focus?.();
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

// Removed hide-on-scroll behavior so nav stays visible and doesn't move off-screen
// If future behavior needed, implement with a class toggle that respects mobile layout.

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
