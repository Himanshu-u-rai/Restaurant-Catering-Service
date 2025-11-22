import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaUser, FaPhone, FaMapMarkerAlt, FaEnvelope, FaCreditCard, FaCheckCircle } from 'react-icons/fa';

const Checkout = () => {
    const { cartItems, getCartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        pincode: '',
        paymentMethod: 'cod',
        specialInstructions: ''
    });

    const subtotal = getCartTotal();
    const tax = subtotal * 0.05;
    const deliveryFee = subtotal > 500 ? 0 : 40;
    const total = subtotal + tax + deliveryFee;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulate order placement
        setTimeout(() => {
            setOrderPlaced(true);
            clearCart();

            // Redirect to home after 3 seconds
            setTimeout(() => {
                navigate('/');
            }, 3000);
        }, 1000);
    };

    if (cartItems.length === 0 && !orderPlaced) {
        navigate('/cart');
        return null;
    }

    if (orderPlaced) {
        return (
            <div className="checkout-page">
                <div className="container">
                    <div className="order-success">
                        <div className="success-icon">
                            <FaCheckCircle />
                        </div>
                        <h1>Order Placed Successfully!</h1>
                        <p>Thank you for your order. We'll start preparing it right away.</p>
                        <div className="order-details-box">
                            <h3>Order Details</h3>
                            <p><strong>Total Amount:</strong> ₹{total.toFixed(2)}</p>
                            <p><strong>Payment Method:</strong> {formData.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Online Payment'}</p>
                            <p><strong>Delivery Address:</strong> {formData.address}, {formData.city} - {formData.pincode}</p>
                        </div>
                        <p className="redirect-message">Redirecting to home page...</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="checkout-page">
            <div className="container">
                <h1 className="checkout-title">Checkout</h1>

                <div className="checkout-layout">
                    <div className="checkout-form-section">
                        <form onSubmit={handleSubmit}>
                            <div className="form-section">
                                <h2><FaUser /> Personal Information</h2>
                                <div className="form-grid">
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="Enter your full name"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number *</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="10-digit mobile number"
                                            pattern="[0-9]{10}"
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>

                            <div className="form-section">
                                <h2><FaMapMarkerAlt /> Delivery Address</h2>
                                <div className="form-group">
                                    <label htmlFor="address">Street Address *</label>
                                    <textarea
                                        id="address"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="House/Flat No., Building Name, Street"
                                        rows="3"
                                    />
                                </div>

                                <div className="form-grid">
                                    <div className="form-group">
                                        <label htmlFor="city">City *</label>
                                        <input
                                            type="text"
                                            id="city"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="City"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="pincode">Pincode *</label>
                                        <input
                                            type="text"
                                            id="pincode"
                                            name="pincode"
                                            value={formData.pincode}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="6-digit pincode"
                                            pattern="[0-9]{6}"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="form-section">
                                <h2><FaCreditCard /> Payment Method</h2>
                                <div className="payment-options">
                                    <label className="payment-option">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="cod"
                                            checked={formData.paymentMethod === 'cod'}
                                            onChange={handleInputChange}
                                        />
                                        <span className="payment-label">
                                            <strong>Cash on Delivery</strong>
                                            <small>Pay when you receive your order</small>
                                        </span>
                                    </label>

                                    <label className="payment-option">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="online"
                                            checked={formData.paymentMethod === 'online'}
                                            onChange={handleInputChange}
                                        />
                                        <span className="payment-label">
                                            <strong>Online Payment</strong>
                                            <small>UPI / Cards / Net Banking</small>
                                        </span>
                                    </label>
                                </div>
                            </div>

                            <div className="form-section">
                                <div className="form-group">
                                    <label htmlFor="specialInstructions">Special Instructions (Optional)</label>
                                    <textarea
                                        id="specialInstructions"
                                        name="specialInstructions"
                                        value={formData.specialInstructions}
                                        onChange={handleInputChange}
                                        placeholder="Any special requests or dietary requirements?"
                                        rows="3"
                                    />
                                </div>
                            </div>

                            <button type="submit" className="place-order-btn">
                                Place Order - ₹{total.toFixed(2)}
                            </button>
                        </form>
                    </div>

                    <div className="order-summary-section">
                        <div className="order-summary-sticky">
                            <h2>Order Summary</h2>

                            <div className="order-items">
                                {cartItems.map(item => {
                                    const itemPrice = parseFloat(item.price.replace('₹', ''));
                                    const itemTotal = itemPrice * item.quantity;

                                    return (
                                        <div key={item.id} className="order-item">
                                            <div className="order-item-image">
                                                <img src={item.image} alt={item.name} />
                                                <span className="item-quantity">{item.quantity}x</span>
                                            </div>
                                            <div className="order-item-info">
                                                <h4>{item.name}</h4>
                                                <span className="item-price">₹{itemTotal.toFixed(2)}</span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="summary-calculations">
                                <div className="summary-row">
                                    <span>Subtotal</span>
                                    <span>₹{subtotal.toFixed(2)}</span>
                                </div>

                                <div className="summary-row">
                                    <span>Tax (5%)</span>
                                    <span>₹{tax.toFixed(2)}</span>
                                </div>

                                <div className="summary-row">
                                    <span>Delivery</span>
                                    <span className={deliveryFee === 0 ? 'free-text' : ''}>
                                        {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee.toFixed(2)}`}
                                    </span>
                                </div>

                                <div className="summary-divider"></div>

                                <div className="summary-row total-row">
                                    <span>Total Amount</span>
                                    <span>₹{total.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
