import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { CartItem as CartItemType } from '../../context/CartContext';
import './CartItem.css';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const quantity = parseInt(e.target.value, 10);
    if (!isNaN(quantity) && quantity > 0) {
      updateQuantity(item.product.id, quantity);
    }
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateQuantity(item.product.id, item.quantity - 1);
    } else {
      removeFromCart(item.product.id);
    }
  };

  const handleIncrease = () => {
    updateQuantity(item.product.id, item.quantity + 1);
  };

  return (
    <div className="cart-item">
      <Link to={`/product/${item.product.id}`} className="cart-item-image-link">
        <img src={item.product.image} alt={item.product.name} className="cart-item-image" />
      </Link>
      <div className="cart-item-details">
        <Link to={`/product/${item.product.id}`} className="cart-item-name-link">
          <h3 className="cart-item-name">{item.product.name}</h3>
        </Link>
        <p className="cart-item-price">${item.product.price.toFixed(2)}</p>
        <div className="cart-item-quantity">
          <button className="quantity-btn" onClick={handleDecrease} aria-label="Decrease quantity">
            −
          </button>
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={handleQuantityChange}
            className="quantity-input"
            aria-label="Quantity"
          />
          <button className="quantity-btn" onClick={handleIncrease} aria-label="Increase quantity">
            +
          </button>
        </div>
        <p className="cart-item-total">
          Total: ${(item.product.price * item.quantity).toFixed(2)}
        </p>
      </div>
      <button
        className="remove-btn"
        onClick={() => removeFromCart(item.product.id)}
        aria-label="Remove item"
      >
        ×
      </button>
    </div>
  );
};

export default CartItem;


