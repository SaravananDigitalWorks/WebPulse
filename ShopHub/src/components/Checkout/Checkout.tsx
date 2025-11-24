import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  country: string;
}

const Checkout: React.FC = () => {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    }
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }
    if (!formData.zipCode.trim()) {
      newErrors.zipCode = 'Zip code is required';
    }
    if (!formData.country.trim()) {
      newErrors.country = 'Country is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    clearCart();
    navigate('/checkout/success', { state: { orderData: formData, total: getTotalPrice() } });
  };

  if (cartItems.length === 0) {
    return (
      <div className="checkout-empty">
        <h2>Your cart is empty</h2>
        <p>Add items to your cart before checkout.</p>
      </div>
    );
  }

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div className="checkout-container">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h3>Shipping Information</h3>
          
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? 'error' : ''}
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="address">Address *</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className={errors.address ? 'error' : ''}
            />
            {errors.address && <span className="error-message">{errors.address}</span>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="city">City *</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={errors.city ? 'error' : ''}
              />
              {errors.city && <span className="error-message">{errors.city}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="zipCode">Zip Code *</label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className={errors.zipCode ? 'error' : ''}
              />
              {errors.zipCode && <span className="error-message">{errors.zipCode}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="country">Country *</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className={errors.country ? 'error' : ''}
            />
            {errors.country && <span className="error-message">{errors.country}</span>}
          </div>

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Processing...' : 'Place Order'}
          </button>
        </form>

        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="order-items">
            {cartItems.map((item) => (
              <div key={item.product.id} className="order-item">
                <img src={item.product.image} alt={item.product.name} />
                <div className="order-item-details">
                  <p className="order-item-name">{item.product.name}</p>
                  <p className="order-item-quantity">Qty: {item.quantity}</p>
                </div>
                <p className="order-item-price">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
          <div className="order-total">
            <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;


