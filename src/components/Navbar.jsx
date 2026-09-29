import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const location = useLocation();
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <span className="brand-icon">🌿</span>
          <div className="brand-text">
            <span className="brand-title">PARADISE NURSERY</span>
            <span className="brand-tagline">Botanical Sanctuary</span>
          </div>
        </Link>

        <div className="navbar-links">
          <Link
            to="/"
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/plants"
            className={`nav-link ${location.pathname === '/plants' ? 'active' : ''}`}
          >
            Plants
          </Link>
          <Link
            to="/about"
            className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
          >
            About Us
          </Link>
          <Link
            to="/cart"
            className={`nav-link nav-cart-link ${location.pathname === '/cart' ? 'active' : ''}`}
            aria-label="View Shopping Cart"
          >
            <span className="cart-icon-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="cart-svg-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <span className="cart-badge">{totalItems}</span>
            </span>
            <span className="cart-label">Cart</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
