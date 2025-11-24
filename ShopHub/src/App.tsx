import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ProductProvider } from './context/ProductContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <ProductProvider>
        <CartProvider>
          <div className="App">
            <Header />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/checkout/success" element={<Checkout />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </CartProvider>
      </ProductProvider>
    </Router>
  );
}

export default App;
