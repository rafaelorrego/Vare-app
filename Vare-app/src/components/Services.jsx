import React from 'react';

const services = [
  { id: 1, name: 'Delivery ', description: 'Fast and reliable food delivery.', icon: '🚚' },
  { id: 2, name: 'Catering ', description: 'Professional catering for your events.', icon: '🍽️' },
  { id: 3, name: 'Reservacion Online ', description: 'Easily book your table online.', icon: '📅' },
];

const Services = () => {
  return (
    <div className="mt-8 p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Otros Servicios</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {services.map(service => (
          <div key={service.id} className="border rounded-lg p-4 flex flex-col items-center">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold">{service.name}</h3>
            <p className="text-gray-700 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
