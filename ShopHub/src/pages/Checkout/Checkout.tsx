import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CheckoutComponent from '../../components/Checkout/Checkout';
import './CheckoutSuccess.css';

const Checkout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Check if we're on the success page
  if (location.pathname === '/checkout/success') {
    const orderData = location.state?.orderData;
    const total = location.state?.total;

    return (
      <div className="checkout-success">
        <div className="success-content">
          <div className="success-icon">✓</div>
          <h2>Order Placed Successfully!</h2>
          <p>Thank you for your purchase.</p>
          {orderData && (
            <div className="order-details">
              <h3>Order Details</h3>
              <p><strong>Name:</strong> {orderData.name}</p>
              <p><strong>Email:</strong> {orderData.email}</p>
              <p><strong>Total:</strong> ${total?.toFixed(2)}</p>
            </div>
          )}
          <button onClick={() => navigate('/')} className="continue-shopping-btn">
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return <CheckoutComponent />;
};

export default Checkout;


