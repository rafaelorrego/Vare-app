// src/components/Cart.jsx
import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    // agregamos algunos productos de ejemplo
    { id: 1, name: 'Pizza', price: 30.000, quantity: 1 },
    { id: 2, name: 'Burger', price: 25.000, quantity: 2 },
  ]);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Carrito de Compras</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id} className="flex justify-between mb-2">
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)} x {item.quantity}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <h3 className="text-xl font-bold">Total: ${total.toFixed(2)}</h3>
        <button className="bg-green-500 text-white px-4 py-2 rounded mt-4">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
