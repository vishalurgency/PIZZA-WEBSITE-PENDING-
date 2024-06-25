import React from 'react';
import './Menu.css';

const Menu = () => {
  const pizzas = [
    { name: 'Margherita', description: 'Tomato, mozzarella, and basil', price: '$10' },
    { name: 'Pepperoni', description: 'Pepperoni, mozzarella, and tomato sauce', price: '$12' },
    { name: 'BBQ Chicken', description: 'Chicken, BBQ sauce, and red onions', price: '$14' },
  ];

  return (
    <section id="menu" className="menu-section">
      <h2>Our Menu</h2>
      <div className="menu">
        {pizzas.map((pizza, index) => (
          <div key={index} className="menu-item">
            <h3>{pizza.name}</h3>
            <p>{pizza.description}</p>
            <p className="price">{pizza.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
