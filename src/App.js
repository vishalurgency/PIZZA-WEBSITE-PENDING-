import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Menu from './components/Menu';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Menu />
      <Footer />
    </div>
  );
};

export default App;
