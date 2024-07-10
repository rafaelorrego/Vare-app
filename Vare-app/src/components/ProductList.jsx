import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Pizza', description: 'Pizza Normal', preci: 30.000, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Burger', description: 'Hamburguesa, tomate, huevo salsa de la casa y cebolla caramelizada  ', price: 25.000, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Lomito Arabe', description: 'carne, huevo,salsa de ajo, pollo repollo picado pan arabe', price: 20.000, image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Papas Fritas', description: 'Papas con cheddar ', price: 20.000, image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Chivito Uruguayo', description: 'pan, carne, huevo, morron salteado, huevo y  salsa de la casa  ', price: 20.000, image: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Salchipapas', description: 'papas fritas, huevo, pancho picado y salsa de la casa ', price: 20.000, image: 'https://via.placeholder.com/150' },
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
