import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';
import FullMenu from './pages/FullMenu';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import './App.css';
import './styles/cart-checkout.css';
import './styles/responsive.css';

function HomePage() {
  return (
    <>
      <Hero />
      <MenuSection />
      <Experience />
    </>
  );
}

function App() {
  // Initialize animations on load
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in", "visible");

          // Staggered animations for children
          const children = entry.target.querySelectorAll(
            ".menu-item-modern, .feature-modern, .info-item"
          );
          children.forEach((child, index) => {
            child.classList.add("fade-in", "visible", `stagger-${Math.min(index + 1, 5)}`);
          });
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    // Add loaded class to body
    document.body.classList.add("loaded");

    return () => observer.disconnect();
  }, []);

  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/menu" element={<FullMenu />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
