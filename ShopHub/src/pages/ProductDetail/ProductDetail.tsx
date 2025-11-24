import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProducts } from '../../context/ProductContext';
import { useCart } from '../../context/CartContext';
import './ProductDetail.css';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getProductById } = useProducts();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = id ? getProductById(id) : undefined;

  if (!product) {
    return (
      <div className="product-detail-error">
        <h2>Product not found</h2>
        <button onClick={() => navigate('/')} className="back-btn">
          Back to Home
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (product.inStock) {
      addToCart(product, quantity);
      navigate('/cart');
    }
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  return (
    <div className="product-detail">
      <button onClick={() => navigate(-1)} className="back-btn">
        ← Back
      </button>
      <div className="product-detail-container">
        <div className="product-detail-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-detail-info">
          <h1>{product.name}</h1>
          <p className="product-detail-price">${product.price.toFixed(2)}</p>
          <p className="product-detail-category">Category: {product.category}</p>
          <p className="product-detail-description">{product.description}</p>
          
          {product.inStock ? (
            <div className="product-detail-actions">
              <div className="quantity-selector">
                <label htmlFor="quantity">Quantity:</label>
                <input
                  type="number"
                  id="quantity"
                  min="1"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="quantity-input"
                />
              </div>
              <button onClick={handleAddToCart} className="add-to-cart-btn">
                Add to Cart
              </button>
            </div>
          ) : (
            <div className="out-of-stock-message">
              <p>This product is currently out of stock.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;


