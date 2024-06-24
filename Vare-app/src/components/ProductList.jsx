import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Pizza', description: 'Pizza Normal', preci: 30.000, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Burger', description: 'Hamburguesa doble ', price: 25.000, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Lomito Arabe', description: 'lomito arabe mixto', price: 20.000, image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Papas Fritas', description: 'Papas con cheddar ', price: 20.000, image: 'https://via.placeholder.com/150' },
];

const ProductList = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
