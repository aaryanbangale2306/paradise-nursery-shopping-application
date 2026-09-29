import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const AboutUs = () => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="about-container">
        <section className="about-hero">
          <div className="about-hero-content">
            <span className="section-subtitle">OUR STORY & PASSION</span>
            <h1 className="about-title">Welcome to Paradise Nursery</h1>
            <p className="about-lead">
              At Paradise Nursery, we believe that bringing nature into homes transforms everyday spaces into serene botanical sanctuaries.
            </p>
          </div>
        </section>

        <section className="about-story-section">
          <div className="story-grid">
            <div className="story-text">
              <h2>Cultivating Green Spaces Since Inception</h2>
              <p>
                Founded with a profound love for botanical life, Paradise Nursery is committed to providing plant enthusiasts of all skill levels with exceptional, quality houseplants that thrive and inspire.
              </p>
              <p>
                Whether you are decorating an urban studio, refreshing a home office, or designing a sprawling sunroom, our extensive variety of plants offers the ideal botanical companion for every setting and light condition.
              </p>
              <div className="about-cta-container">
                <Link to="/plants" className="btn btn-primary">
                  Explore Plants Collection →
                </Link>
              </div>
            </div>
            <div className="story-image-card">
              <img
                src="https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=800&q=80"
                alt="Paradise Nursery Greenhouse"
                className="story-img"
              />
            </div>
          </div>
        </section>

        <section className="features-section">
          <h2 className="section-heading text-center">Why Choose Paradise Nursery</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🌱</div>
              <h3>Quality Houseplants</h3>
              <p>
                Every plant in our collection is carefully nurtured by experienced botanists using organic, sustainable practices to guarantee optimal health, vigor, and longevity.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🌿</div>
              <h3>Variety of Plants</h3>
              <p>
                From air-purifying indoor favorites and resilient succulents to vibrant outdoor blossoms, we curate an unmatched variety of rare and beloved species.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">✨</div>
              <h3>Healthy Plants Guaranteed</h3>
              <p>
                Our rigorous inspection ensures every plant arrives at your doorstep pest-free, vibrant, and pre-potted in nutrient-rich organic soil ready to flourish.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🛍️</div>
              <h3>Customer-Friendly Experience</h3>
              <p>
                Enjoy seamless browsing, transparent pricing, detailed plant care guidelines, and responsive customer care dedicated to your gardening success.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>© 2026 Paradise Nursery. Bringing Nature Into Homes.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
