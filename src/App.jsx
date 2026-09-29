import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import './App.css';

// Landing Page Component for route "/"
const LandingPage = () => {
  return (
    <div className="landing-page-hero">
      <div className="landing-overlay"></div>
      
      {/* Optional top bar on landing page */}
      <header className="landing-header">
        <div className="landing-header-container">
          <div className="landing-brand">
            <span className="brand-leaf-icon">🌿</span>
            <span className="brand-logo-text">Paradise Nursery</span>
          </div>
          <nav className="landing-nav-links">
            <Link to="/about" className="landing-nav-item">About Us</Link>
            <Link to="/plants" className="landing-nav-item">Browse Plants</Link>
            <Link to="/cart" className="landing-nav-item">Cart</Link>
          </nav>
        </div>
      </header>

      <main className="landing-content">
        <div className="landing-card">
          <div className="landing-badge">NURTURING GREEN LIFESTYLES</div>
          <h1 className="landing-title">PARADISE NURSERY</h1>
          <p className="landing-description">
            Bring nature home with beautiful, healthy and carefully selected houseplants.
          </p>
          <div className="landing-cta-group">
            <Link to="/plants" className="btn btn-get-started" id="get-started-btn">
              GET STARTED
            </Link>
            <Link to="/about" className="btn btn-learn-more">
              Learn More About Us
            </Link>
          </div>
        </div>
      </main>

      <footer className="landing-footer">
        <p>© 2026 Paradise Nursery. Cultivating peace, wellness, and botanical beauty.</p>
      </footer>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/plants" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
          {/* Catch-all fallback to Home */}
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
