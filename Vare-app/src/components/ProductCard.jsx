import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
      <h2 className="text-xl font-bold mt-2">{product.name}</h2>
      <p className="text-gray-700">{product.description}</p>
      <p className="text-lg font-semibold mt-2">${product.price}</p>
    </div>
  );
}

export default ProductCard;
