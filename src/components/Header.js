import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1 className="logo-text">
              <span className="logo-bele">BELE</span>
              <span className="logo-vue">VUE</span>
            </h1>
            <p className="logo-tagline">Premium Lipsticks</p>
          </div>
          
          <nav className="nav">
            <a href="#home" className="nav-link">Home</a>
            <a href="#products" className="nav-link">Produkte</a>
            <a href="#contact" className="nav-link">Kontakt</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 