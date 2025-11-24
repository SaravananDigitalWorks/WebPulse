import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>ShopHub</h3>
          <p>Your one-stop shop for all your needs.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: support@shophub.com</p>
          <p>Phone: 1-800-SHOPHUB</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 ShopHub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

