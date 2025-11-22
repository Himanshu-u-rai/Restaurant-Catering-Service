import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer-modern" id="contact">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand Column */}
                    <div className="footer-col footer-brand">
                        <h3>Chai & Spice</h3>
                        <p>
                            Authentic flavors, warm hospitality, and the perfect cup of chai.
                            Join us for a culinary journey through India.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-link" aria-label="Facebook"><FaFacebookF /></a>
                            <a href="#" className="social-link" aria-label="Instagram"><FaInstagram /></a>
                            <a href="#" className="social-link" aria-label="Twitter"><FaTwitter /></a>
                        </div>
                    </div>

                    {/* Opening Hours */}
                    <div className="footer-col">
                        <h4><FaClock className="footer-icon-title" /> Opening Hours</h4>
                        <ul className="footer-hours">
                            <li>
                                <span>Mon - Fri</span>
                                <span>8:00 AM - 10:00 PM</span>
                            </li>
                            <li>
                                <span>Saturday</span>
                                <span>9:00 AM - 11:00 PM</span>
                            </li>
                            <li>
                                <span>Sunday</span>
                                <span>9:00 AM - 9:00 PM</span>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-col">
                        <h4>Contact Us</h4>
                        <ul className="footer-contact-list">
                            <li>
                                <FaMapMarkerAlt className="contact-icon-tiny" />
                                <div>
                                    <span>123 Spice Avenue, Foodie City</span>
                                    <span className="contact-sub">FC 12345, India</span>
                                </div>
                            </li>
                            <li>
                                <FaPhone className="contact-icon-tiny" />
                                <a href="tel:+15551234567">+1 (555) 123-4567</a>
                            </li>
                            <li>
                                <FaEnvelope className="contact-icon-tiny" />
                                <a href="mailto:hello@chaiandspice.com">hello@chaiandspice.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Chai & Spice. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <Link to="/menu">Menu</Link>
                        <Link to="/cart">Order Now</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
