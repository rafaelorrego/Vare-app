import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductList from './components/ProductList';
import ContactForm from './components/ContactForm';
import Navbar from './components/Navbar';
import Services from './components/Services';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="App flex">
      <Navbar />
      <div className="ml-64 p-4 flex-1">
        <main className="p-4">
          <section id="products">
            <ProductList />
          </section>
          <section id="services">
            <Services />
          </section>
          <section id="contact">
            <ContactForm />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
