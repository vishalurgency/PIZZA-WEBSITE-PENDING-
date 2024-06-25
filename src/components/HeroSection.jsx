import React from 'react';
import './HeroSection.css';
import p1 from './p1.jpg'

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <h1>Welcome to PizzaLand</h1>
      <p>The best pizza in town</p>
      <button>Order Now</button>
      <img src={p1} alt="" />
    </section>
  );
};

export default HeroSection;
