import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaTrash, FaPlus, FaMinus, FaShoppingBag, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, getCartTotal, getCartCount } = useCart();
    const navigate = useNavigate();

    const handleCheckout = () => {
        if (cartItems.length > 0) {
            navigate('/checkout');
        }
    };

    if (cartItems.length === 0) {
        return (
            <div className="cart-page">
                <div className="container">
                    <div className="empty-cart">
                        <div className="empty-cart-icon">
                            <FaShoppingBag />
                        </div>
                        <h2>Your Cart is Empty</h2>
                        <p>Looks like you haven't added anything to your cart yet.</p>
                        <Link to="/menu" className="btn-modern primary large">
                            <FaArrowLeft /> Browse Menu
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    const subtotal = getCartTotal();
    const tax = subtotal * 0.05; // 5% tax
    const deliveryFee = subtotal > 500 ? 0 : 40;
    const total = subtotal + tax + deliveryFee;

    return (
        <div className="cart-page">
            <div className="container">
                <div className="cart-header">
                    <h1>Shopping Cart</h1>
                    <p className="cart-count">{getCartCount()} items</p>
                </div>

                <div className="cart-layout">
                    <div className="cart-items-section">
                        {cartItems.map(item => {
                            const itemPrice = parseFloat(item.price.replace('₹', ''));
                            const itemTotal = itemPrice * item.quantity;

                            return (
                                <div key={item.id} className="cart-item">
                                    <div className="cart-item-image">
                                        <img src={item.image} alt={item.name} />
                                    </div>

                                    <div className="cart-item-details">
                                        <h3>{item.name}</h3>
                                        <p className="cart-item-description">{item.description}</p>
                                        <div className="cart-item-tags">
                                            {item.tags.slice(0, 2).map((tag, idx) => (
                                                <span key={idx} className="tag-small">{tag}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="cart-item-price">
                                        <span className="unit-price">{item.price}</span>
                                    </div>

                                    <div className="cart-item-quantity">
                                        <button
                                            className="quantity-btn"
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            aria-label="Decrease quantity"
                                        >
                                            <FaMinus />
                                        </button>
                                        <span className="quantity-value">{item.quantity}</span>
                                        <button
                                            className="quantity-btn"
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            aria-label="Increase quantity"
                                        >
                                            <FaPlus />
                                        </button>
                                    </div>

                                    <div className="cart-item-total">
                                        <span className="total-price">₹{itemTotal.toFixed(2)}</span>
                                    </div>

                                    <button
                                        className="remove-btn"
                                        onClick={() => removeFromCart(item.id)}
                                        aria-label="Remove item"
                                    >
                                        <FaTrash />
                                    </button>
                                </div>
                            );
                        })}
                    </div>

                    <div className="cart-summary">
                        <h2>Order Summary</h2>

                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>₹{subtotal.toFixed(2)}</span>
                        </div>

                        <div className="summary-row">
                            <span>Tax (5%)</span>
                            <span>₹{tax.toFixed(2)}</span>
                        </div>

                        <div className="summary-row">
                            <span>Delivery Fee</span>
                            <span className={deliveryFee === 0 ? 'free-delivery' : ''}>
                                {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee.toFixed(2)}`}
                            </span>
                        </div>

                        {subtotal < 500 && (
                            <div className="delivery-notice">
                                Add ₹{(500 - subtotal).toFixed(2)} more for free delivery!
                            </div>
                        )}

                        <div className="summary-divider"></div>

                        <div className="summary-row total-row">
                            <span>Total</span>
                            <span>₹{total.toFixed(2)}</span>
                        </div>

                        <button
                            className="checkout-btn"
                            onClick={handleCheckout}
                        >
                            Proceed to Checkout <FaArrowRight />
                        </button>

                        <Link to="/menu" className="continue-shopping">
                            <FaArrowLeft /> Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
