import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about">
      <div className="about-container">
        <h1>About ShopHub</h1>
        
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            ShopHub was founded with a simple mission: to provide customers with 
            high-quality products at affordable prices. We believe that everyone 
            deserves access to the best products, whether it's the latest technology, 
            fashionable clothing, or essential home items.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to make online shopping easy, enjoyable, and accessible 
            for everyone. We strive to offer a wide selection of products, excellent 
            customer service, and a seamless shopping experience from browsing to checkout.
          </p>
        </section>

        <section className="about-section">
          <h2>Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Fast Shipping</h3>
              <p>Quick and reliable delivery to your doorstep</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💳</div>
              <h3>Secure Payments</h3>
              <p>Safe and secure payment processing</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>Easy Returns</h3>
              <p>Hassle-free return policy</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h3>Quality Products</h3>
              <p>Carefully curated selection of quality items</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Contact Information</h2>
          <div className="contact-info">
            <p><strong>Email:</strong> support@shophub.com</p>
            <p><strong>Phone:</strong> 1-800-SHOPHUB</p>
            <p><strong>Address:</strong> 123 Commerce Street, Business City, BC 12345</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;


