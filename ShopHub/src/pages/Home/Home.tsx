import React from 'react';
import { useProducts } from '../../context/ProductContext';
import ProductList from '../../components/ProductList/ProductList';
import './Home.css';

const Home: React.FC = () => {
  const { products } = useProducts();

  return (
    <div className="home">
      <div className="home-header">
        <h1>Welcome to ShopHub</h1>
        <p>Discover amazing products at great prices</p>
      </div>
      <ProductList products={products} />
    </div>
  );
};

export default Home;


