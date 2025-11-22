// src/components/Experience.jsx
import React from 'react';
import {
    FaSeedling,
    FaHeart,
    FaUsers,
    FaPhone,
    FaMapMarkerAlt,
    FaClock,
    FaEnvelope,
    FaStar,
    FaCoffee
} from 'react-icons/fa';

// Images
import experienceImage from '../assets/Gemini_Generated_Image_c1uh21c1uh21c1uh.png';
import visitImage from '../assets/Gemini_Generated_Image_mc4zgcmc4zgcmc4z.png';

const Experience = () => {
    return (
        <>
            {/* ---------- Why Choose Us (Experience) ---------- */}
            <section id="experience" className="experience-section section-padding">
                <div className="container">
                    <div className="experience-grid">
                        {/* Left – Visuals */}
                        <div className="experience-visual">
                            <div className="visual-card">
                                <img src={experienceImage} alt="Chai & Spice Ambiance" />
                                <div className="card-overlay">
                                    <span>Est. 2015</span>
                                </div>
                            </div>
                            <div className="visual-card">
                                <img src={visitImage} alt="Delicious Chai" />
                            </div>

                            {/* Floating Badges */}
                            <div className="floating-elements">
                                <div className="floating-badge">
                                    <FaStar /> <span>4.9/5 Rating</span>
                                </div>
                                <div className="floating-badge">
                                    <FaCoffee /> <span>100% Organic</span>
                                </div>
                            </div>
                        </div>

                        {/* Right – Content */}
                        <div className="experience-content">
                            <div className="section-badge">
                                <span>✨ Why Choose Us</span>
                            </div>
                            <h2 className="section-title">
                                Crafting Memories, <span className="title-accent">One Cup at a Time</span>
                            </h2>
                            <p className="section-description">
                                We believe that great coffee and chai are more than just beverages—they are
                                experiences that bring people together. Our commitment to quality ensures
                                that every sip is a journey of flavor.
                            </p>

                            <div className="experience-features">
                                {/* Feature 1 */}
                                <div className="feature-modern">
                                    <div className="feature-icon-modern">
                                        <FaSeedling />
                                    </div>
                                    <div className="feature-content">
                                        <h4>Farm-to-Cup Freshness</h4>
                                        <p>We source our ingredients directly from sustainable farms to ensure peak freshness.</p>
                                    </div>
                                </div>

                                {/* Feature 2 */}
                                <div className="feature-modern">
                                    <div className="feature-icon-modern">
                                        <FaHeart />
                                    </div>
                                    <div className="feature-content">
                                        <h4>Made with Passion</h4>
                                        <p>Our recipes are crafted with love, honoring traditional methods while embracing innovation.</p>
                                    </div>
                                </div>

                                {/* Feature 3 */}
                                <div className="feature-modern">
                                    <div className="feature-icon-modern">
                                        <FaUsers />
                                    </div>
                                    <div className="feature-content">
                                        <h4>Community Centric</h4>
                                        <p>We are more than a cafe; we are a gathering place for friends, families, and dreamers.</p>
                                    </div>
                                </div>
                            </div>

                            <a href="#menu" className="btn-modern primary">
                                Explore Our Menu
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------- Visit Us Section ---------- */}
            <section id="visit" className="visit-section">
                <div className="container">
                    <div className="experience-grid">
                        {/* Content Side (Left) */}
                        <div className="experience-content">
                            <div className="section-badge">
                                <span>📍 Visit Us</span>
                            </div>
                            <h2 className="section-title">Come Say Hello</h2>
                            <p className="section-description">
                                We'd love to see you! Stop by for a cup of chai, a delicious meal, and great conversation.
                            </p>

                            <div className="contact-info-modern">
                                {/* Location */}
                                <div className="info-item">
                                    <div className="feature-icon-modern">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Location</h4>
                                        <p style={{ color: 'var(--text-medium)' }}>
                                            123 Spice Avenue<br />
                                            Foodie City, FC 12345
                                        </p>
                                    </div>
                                </div>

                                {/* Hours */}
                                <div className="info-item">
                                    <div className="feature-icon-modern">
                                        <FaClock />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Opening Hours</h4>
                                        <p style={{ color: 'var(--text-medium)' }}>
                                            Mon – Fri: 7am – 9pm<br />
                                            Sat – Sun: 8am – 10pm
                                        </p>
                                    </div>
                                </div>

                                {/* Contact */}
                                <div className="info-item">
                                    <div className="feature-icon-modern">
                                        <FaPhone />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Contact</h4>
                                        <p style={{ color: 'var(--text-medium)' }}>
                                            +1 (555) 123-4567<br />
                                            hello@chaiandspice.com
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="https://maps.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-modern primary"
                            >
                                <FaMapMarkerAlt /> Get Directions
                            </a>
                        </div>

                        {/* Image Side (Right) */}
                        <div className="experience-visual">
                            <div className="visual-card" style={{ width: '100%', height: '100%', border: 'none' }}>
                                <img src={visitImage} alt="Visit our cafe" style={{ borderRadius: 'var(--radius-lg)' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Experience;