export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  inStock: boolean;
}

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    description: 'Premium wireless headphones with noise cancellation and 30-hour battery life.',
    category: 'Electronics',
    inStock: true,
  },
  {
    id: '2',
    name: 'Smart Watch',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
    description: 'Feature-rich smartwatch with fitness tracking, heart rate monitor, and smartphone connectivity.',
    category: 'Electronics',
    inStock: true,
  },
  {
    id: '3',
    name: 'Running Shoes',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
    description: 'Comfortable running shoes with advanced cushioning and breathable material.',
    category: 'Fashion',
    inStock: true,
  },
  {
    id: '4',
    name: 'Laptop Backpack',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500',
    description: 'Durable laptop backpack with multiple compartments and USB charging port.',
    category: 'Accessories',
    inStock: true,
  },
  {
    id: '5',
    name: 'Coffee Maker',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=500',
    description: 'Programmable coffee maker with thermal carafe and auto-shutoff feature.',
    category: 'Home',
    inStock: true,
  },
  {
    id: '6',
    name: 'Bluetooth Speaker',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500',
    description: 'Portable Bluetooth speaker with 360-degree sound and waterproof design.',
    category: 'Electronics',
    inStock: true,
  },
  {
    id: '7',
    name: 'Yoga Mat',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83d11f71?w=500',
    description: 'Non-slip yoga mat with extra cushioning and carrying strap.',
    category: 'Fitness',
    inStock: true,
  },
  {
    id: '8',
    name: 'Wireless Mouse',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500',
    description: 'Ergonomic wireless mouse with precision tracking and long battery life.',
    category: 'Electronics',
    inStock: false,
  },
];


