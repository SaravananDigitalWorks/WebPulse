import React, { createContext, useContext, ReactNode } from 'react';
import { mockProducts, Product } from '../data/mockProducts';

interface ProductContextType {
  products: Product[];
  getProductById: (id: string) => Product | undefined;
  getProductsByCategory: (category: string) => Product[];
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const products = mockProducts;

  const getProductById = (id: string): Product | undefined => {
    return products.find((product) => product.id === id);
  };

  const getProductsByCategory = (category: string): Product[] => {
    return products.filter((product) => product.category === category);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        getProductById,
        getProductsByCategory,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};


