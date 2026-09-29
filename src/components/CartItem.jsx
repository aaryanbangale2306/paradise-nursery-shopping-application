import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem, increaseQuantity, decreaseQuantity } from '../redux/CartSlice';
import Navbar from './Navbar';

const CartItem = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [checkoutMessage, setCheckoutMessage] = useState('');

  // Calculate total cart amount dynamically: SUM(price * quantity)
  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Calculate total number of items
  const totalItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    setCheckoutMessage('Checkout feature is coming soon!');
    setTimeout(() => {
      setCheckoutMessage('');
    }, 4000);
  };

  const fallbackImage = 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=600&q=80';

  return (
    <div className="page-wrapper">
      <Navbar />

      <main className="cart-container">
        <header className="cart-page-header">
          <span className="section-subtitle">YOUR SELECTION</span>
          <h1 className="cart-page-title">Shopping Cart</h1>
          <p className="cart-page-subtitle">
            Review your chosen houseplants before finalizing your botanical order.
          </p>
        </header>

        {checkoutMessage && (
          <div className="checkout-alert" role="alert">
            <span className="alert-icon">✨</span>
            <span className="alert-text">{checkoutMessage}</span>
          </div>
        )}

        {cartItems.length === 0 ? (
          <div className="empty-cart-card">
            <div className="empty-cart-icon">🛒</div>
            <h2>Your Cart is Empty</h2>
            <p>You have not added any plants to your cart yet.</p>
            <Link to="/plants" className="btn btn-primary continue-shopping-btn">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="cart-layout-grid">
            <section className="cart-items-section" aria-label="Cart Items List">
              <div className="cart-items-header">
                <span>Products ({totalItemCount} {totalItemCount === 1 ? 'item' : 'items'})</span>
              </div>

              <div className="cart-items-list">
                {cartItems.map((item) => {
                  const itemTotal = item.price * item.quantity;

                  return (
                    <article key={item.id} className="cart-item-card">
                      <div className="cart-item-thumbnail-wrap">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="cart-item-thumbnail"
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = fallbackImage;
                          }}
                        />
                      </div>

                      <div className="cart-item-details">
                        <h3 className="cart-item-name">{item.name}</h3>
                        <div className="cart-item-pricing">
                          <span className="unit-price-label">Unit Price:</span>
                          <span className="unit-price-value">₹{item.price}</span>
                        </div>

                        <div className="cart-item-quantity-row">
                          <span className="quantity-label">Quantity:</span>
                          <div className="quantity-controls">
                            <button
                              type="button"
                              className="qty-btn qty-decrease"
                              onClick={() => handleDecrease(item.id)}
                              aria-label={`Decrease quantity of ${item.name}`}
                            >
                              -
                            </button>
                            <span className="quantity-value">{item.quantity}</span>
                            <button
                              type="button"
                              className="qty-btn qty-increase"
                              onClick={() => handleIncrease(item.id)}
                              aria-label={`Increase quantity of ${item.name}`}
                            >
                              +
                            </button>
                          </div>
                        </div>

                        <div className="cart-item-subtotal">
                          <span className="subtotal-label">Subtotal:</span>
                          <span className="subtotal-value">₹{itemTotal}</span>
                        </div>
                      </div>

                      <div className="cart-item-actions">
                        <button
                          type="button"
                          className="btn-delete"
                          onClick={() => handleRemove(item.id)}
                          aria-label={`Delete ${item.name} from cart`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            <line x1="10" y1="11" x2="10" y2="17"></line>
                            <line x1="14" y1="11" x2="14" y2="17"></line>
                          </svg>
                          <span>Delete</span>
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>

            <aside className="order-summary-sidebar" aria-label="Order Summary">
              <div className="order-summary-card">
                <h2 className="summary-title">Order Summary</h2>

                <div className="summary-row">
                  <span>Total Items</span>
                  <span className="summary-val">{totalItemCount}</span>
                </div>

                <div className="summary-row">
                  <span>Total Plants Cost</span>
                  <span className="summary-val">₹{calculateTotalAmount()}</span>
                </div>

                <div className="summary-row">
                  <span>Delivery & Eco-Packaging</span>
                  <span className="summary-val free-tag">FREE</span>
                </div>

                <div className="summary-divider"></div>

                <div className="summary-row total-row">
                  <span>Grand Total</span>
                  <span className="grand-total-val">₹{calculateTotalAmount()}</span>
                </div>

                <div className="cart-action-buttons">
                  <button
                    type="button"
                    className="btn btn-checkout"
                    onClick={handleCheckout}
                  >
                    Checkout
                  </button>

                  <Link to="/plants" className="btn btn-continue-shopping">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        )}
      </main>

      <footer className="footer">
        <p>© 2026 Paradise Nursery. Bringing Nature Into Homes.</p>
      </footer>
    </div>
  );
};

export default CartItem;
