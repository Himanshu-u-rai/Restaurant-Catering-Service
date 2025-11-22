import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import logo from '../assets/Chaiandspiceslogo.png';
import logoLight from '../assets/Chaiandspiceslogolight.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.classList.toggle('nav-open', !isMobileMenuOpen);
  };

  // Scroll spy to update active link and logo
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 150) {
          current = section.getAttribute('id');
        }
      });

      if (current) setActiveSection(current);

      // Check if scrolled past hero section (approximately 100vh)
      const heroSection = document.getElementById('home');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        setIsScrolled(window.scrollY > heroHeight * 0.7); // Switch at 70% of hero height
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle navigation - works for both routing and scrolling
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();

    // Close mobile menu
    setIsMobileMenuOpen(false);
    document.body.classList.remove('nav-open');

    // If we're not on home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation, then scroll
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <>
      {/* Standalone Logo */}
      <a
        href="/"
        onClick={(e) => { e.preventDefault(); navigate('/'); }}
        className={`standalone-logo ${isScrolled ? 'scrolled' : ''}`}
        aria-label="Chai & Spice Home"
      >
        <img
          src={isScrolled ? logo : logoLight}
          alt="Chai & Spice"
          className="logo-image"
        />
      </a>

      {/* Floating Navigation */}
      <nav className={`floating-nav ${isMobileMenuOpen ? 'menu-active' : ''}`}>
        <div className="nav-links">
          <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, 'home')}>Home</a>
          <a href="#menu" className={`nav-link ${activeSection === 'menu' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, 'menu')}>Menu</a>
          <a href="#experience" className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, 'experience')}>Experience</a>
          <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, 'contact')}>Visit Us</a>
        </div>

        <div className="nav-actions">
          <button
            className="cart-icon-btn"
            onClick={() => navigate('/cart')}
            aria-label="View cart"
          >
            <FaShoppingCart />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>

          <button
            className={`menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div className={`mobile-nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-nav-links">
          <a href="#home" className={`mobile-nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, 'home')}>Home</a>
          <a href="#menu" className={`mobile-nav-link ${activeSection === 'menu' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, 'menu')}>Menu</a>
          <a href="#experience" className={`mobile-nav-link ${activeSection === 'experience' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, 'experience')}>Experience</a>
          <a href="#contact" className={`mobile-nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, 'contact')}>Visit Us</a>
        </div>
      </div>

      {/* Dim overlay for mobile menu */}
      <div
        className={`nav-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-hidden="true"
      ></div>
    </>
  );
};

export default Navbar;
