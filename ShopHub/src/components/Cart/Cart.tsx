import React from 'react';
import { useCart } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart: React.FC = () => {
  const { cartItems, getTotalPrice, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your cart is empty</h2>
        <p>Start shopping to add items to your cart.</p>
        <Link to="/" className="shop-btn">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="cart-header">
        <h2>Shopping Cart</h2>
        <button onClick={clearCart} className="clear-cart-btn">
          Clear Cart
        </button>
      </div>
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.product.id} item={item} />
        ))}
      </div>
      <div className="cart-summary">
        <div className="cart-total">
          <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
        </div>
        <Link to="/checkout" className="checkout-btn">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;


