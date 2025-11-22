import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaArrowRight, FaStar } from 'react-icons/fa';
import { MENU_ITEMS, CATEGORIES } from '../data/menuData';
import { useCart } from '../context/CartContext';

const MenuSection = () => {
    const [filter, setFilter] = useState('all');
    const [isCarousel, setIsCarousel] = useState(true);
    const gridRef = useRef(null);
    const autoScrollTimerRef = useRef(null);
    const { addToCart } = useCart();

    // Filter items - show popular items for 'all', or filtered items for specific categories
    const popularItems = MENU_ITEMS.filter(item => item.popular);
    const displayItems = filter === 'all'
        ? popularItems
        : MENU_ITEMS.filter(item => item.category === filter);

    // Handle filter change - always keep carousel active
    const handleFilterChange = (category) => {
        setFilter(category);
        // Always keep carousel active for smooth experience
        setIsCarousel(true);

        // Reset scroll position when filter changes
        if (gridRef.current) {
            gridRef.current.scrollLeft = 0;
        }
    };

    // Carousel Logic
    useEffect(() => {
        const grid = gridRef.current;
        if (!grid || !isCarousel) {
            stopAutoScroll();
            return;
        }

        const startAutoScroll = () => {
            stopAutoScroll();
            let direction = 1;
            autoScrollTimerRef.current = setInterval(() => {
                if (grid) {
                    grid.scrollLeft += direction * 1; // Slower scroll for better readability
                }
            }, 30);
        };

        const stopAutoScroll = () => {
            if (autoScrollTimerRef.current) {
                clearInterval(autoScrollTimerRef.current);
                autoScrollTimerRef.current = null;
            }
        };

        startAutoScroll();
        grid.addEventListener('mouseenter', stopAutoScroll);
        grid.addEventListener('mouseleave', startAutoScroll);

        return () => {
            stopAutoScroll();
            if (grid) {
                grid.removeEventListener('mouseenter', stopAutoScroll);
                grid.removeEventListener('mouseleave', startAutoScroll);
            }
        };
    }, [isCarousel]);

    const scrollCarousel = (direction) => {
        if (gridRef.current) {
            const scrollAmount = 320; // Card width + gap
            gridRef.current.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section id="menu" className="menu-modern">
            <div className="container">
                <div className="menu-header">
                    <div className="section-badge">
                        <span>🍽️ Our Signature Collection</span>
                    </div>
                    <h2 className="section-title">
                        Flavors That
                        <span className="title-accent"> Speak to Your Soul</span>
                    </h2>
                    <p className="section-description">
                        From aromatic masala chai to hearty street food favorites, each item
                        is a journey through India's rich culinary heritage.
                    </p>
                </div>

                <div className="menu-filter-modern">
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat.id}
                            className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
                            onClick={() => handleFilterChange(cat.id)}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                <div
                    className={`menu-grid-modern ${isCarousel ? 'carousel-active' : ''}`}
                    ref={gridRef}
                >
                    {displayItems.map(item => (
                        <div key={item.id} className="menu-card-carousel">
                            <div className="carousel-card-image">
                                <img src={item.image} alt={item.name} loading="lazy" />
                                <div className="image-gradient"></div>
                                {item.popular && (
                                    <div className="popular-badge-carousel">
                                        <FaStar /> Popular
                                    </div>
                                )}
                            </div>
                            <div className="carousel-card-content">
                                <div className="card-title-row">
                                    <h3>{item.name}</h3>
                                    {item.spiceLevel > 0 && (
                                        <div className="spice-level">
                                            {[...Array(item.spiceLevel)].map((_, i) => (
                                                <span key={i} className="spice-dot"></span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <p className="carousel-card-description">{item.description}</p>
                                <div className="carousel-card-bottom">
                                    <div className="price-section">
                                        <span className="price-label">Price</span>
                                        <span className="price-value">{item.price}</span>
                                    </div>
                                    <button
                                        className="quick-add-btn"
                                        aria-label="Add to cart"
                                        onClick={() => addToCart(item)}
                                    >
                                        <span className="btn-icon">+</span>
                                        <span className="btn-text">Add</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {isCarousel && (
                    <div className="carousel-controls">
                        <button className="carousel-btn" aria-label="Previous items" onClick={() => scrollCarousel(-1)}>
                            <FaChevronLeft />
                        </button>
                        <button className="carousel-btn" aria-label="Next items" onClick={() => scrollCarousel(1)}>
                            <FaChevronRight />
                        </button>
                    </div>
                )}

                <div className="menu-cta">
                    <Link to="/menu" className="btn-modern primary large">
                        View Full Menu <FaArrowRight />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default MenuSection;
