import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white w-64 h-screen fixed top-0 left-0 flex flex-col justify-center items-center space-y-6">
      <div className="flex flex-col items-center">
        <img
          src="https://via.placeholder.com/50"
          alt="Local Profile"
          className="w-20 h-20 rounded-full mb-4"
        />
        <span className="text-2xl font-bold">Vare-app</span>
      </div>
      <ul className="flex flex-col space-y-4">
        <li><a href="#home" className="hover:underline">Home</a></li>
        <li><a href="#products" className="hover:underline">Productos</a></li>
        <li><a href="#services" className="hover:underline">Servicios</a></li>
        <li><a href="#contact" className="hover:underline">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
