import React, { useState } from 'react';
import { MENU_ITEMS, CATEGORIES } from '../data/menuData';
import { FaLeaf, FaDrumstickBite, FaFire, FaStar } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import heroImage from '../assets/Gemini_Generated_Image_hlktf1hlktf1hlkt.png';

const FullMenu = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [dietFilter, setDietFilter] = useState('all'); // all, veg, non-veg
    const { addToCart } = useCart();

    const filteredItems = MENU_ITEMS.filter(item => {
        const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
        const dietMatch = dietFilter === 'all' ||
            (dietFilter === 'veg' && item.tags.includes('Veg')) ||
            (dietFilter === 'non-veg' && item.tags.includes('Non-Veg'));
        return categoryMatch && dietMatch;
    });

    const SpiceIndicator = ({ level }) => {
        if (!level) return null;
        return (
            <div className="spice-indicator">
                {[...Array(level)].map((_, i) => (
                    <FaFire key={i} className="spice-icon" />
                ))}
            </div>
        );
    };

    return (
        <div className="full-menu-page">
            {/* Hero Section - Matching Home Page Style */}
            <section className="menu-hero-full">
                <div className="hero-background">
                    <img
                        src={heroImage}
                        alt="Chai & Spice Cafe"
                        className="hero-image"
                    />
                    <div className="hero-overlay"></div>
                </div>
                <div className="hero-content-wrapper">
                    <div className="menu-hero-content">
                        <div className="hero-badge">
                            <span>🍽️ Complete Menu</span>
                        </div>
                        <h1>Discover Our Flavors</h1>
                        <p>From aromatic chai to hearty street food - explore our complete collection</p>
                    </div>
                </div>
            </section>

            <div className="container menu-page-container">
                {/* Filters */}
                <div className="menu-filters-section">
                    <div className="diet-filters">
                        <button
                            className={`diet-filter-btn ${dietFilter === 'all' ? 'active' : ''}`}
                            onClick={() => setDietFilter('all')}
                        >
                            All
                        </button>
                        <button
                            className={`diet-filter-btn veg ${dietFilter === 'veg' ? 'active' : ''}`}
                            onClick={() => setDietFilter('veg')}
                        >
                            <FaLeaf /> Vegetarian
                        </button>
                        <button
                            className={`diet-filter-btn non-veg ${dietFilter === 'non-veg' ? 'active' : ''}`}
                            onClick={() => setDietFilter('non-veg')}
                        >
                            <FaDrumstickBite /> Non-Veg
                        </button>
                    </div>

                    <div className="category-filters">
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat.id}
                                className={`category-filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(cat.id)}
                            >
                                <span className="category-icon">{cat.icon}</span>
                                <span>{cat.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Menu Items Grid */}
                <div className="full-menu-grid">
                    {filteredItems.map(item => (
                        <div key={item.id} className="full-menu-item">
                            <div className="menu-item-image-wrapper">
                                <img src={item.image} alt={item.name} loading="lazy" />
                                {item.popular && (
                                    <div className="popular-badge">
                                        <FaStar /> Popular
                                    </div>
                                )}
                                <div className="diet-badge">
                                    {item.tags.includes('Veg') ? (
                                        <FaLeaf className="veg-icon" />
                                    ) : (
                                        <FaDrumstickBite className="non-veg-icon" />
                                    )}
                                </div>
                                <div className="price-overlay">{item.price}</div>
                            </div>

                            <div className="menu-item-details">
                                <div className="menu-item-header">
                                    <h3>{item.name}</h3>
                                    <SpiceIndicator level={item.spiceLevel} />
                                </div>

                                <p className="description">{item.description}</p>

                                <div className="menu-item-footer">
                                    <div className="tags">
                                        {item.tags.slice(0, 3).map((tag, idx) => (
                                            <span key={idx} className="tag">{tag}</span>
                                        ))}
                                    </div>
                                    <button
                                        className="add-to-cart-btn"
                                        aria-label="Add to cart"
                                        onClick={() => addToCart(item)}
                                    >
                                        <span>+</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredItems.length === 0 && (
                    <div className="no-items">
                        <p>No items found matching your filters</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FullMenu;
