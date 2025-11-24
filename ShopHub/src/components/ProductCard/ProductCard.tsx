import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../data/mockProducts';
import { useCart } from '../../context/CartContext';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (product.inStock) {
      addToCart(product);
    }
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <div className="product-image-container">
          <img src={product.image} alt={product.name} className="product-image" />
          {!product.inStock && (
            <div className="out-of-stock-badge">Out of Stock</div>
          )}
        </div>
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">${product.price.toFixed(2)}</p>
        </div>
      </Link>
      <button
        className={`add-to-cart-btn ${!product.inStock ? 'disabled' : ''}`}
        onClick={handleAddToCart}
        disabled={!product.inStock}
      >
        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
      </button>
    </div>
  );
};

export default ProductCard;


