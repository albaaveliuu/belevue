import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text fade-in-up">
            <h1 className="hero-title">
              Entdecke die <span className="gradient-text">Magie</span> der Lippen
            </h1>
            <p className="hero-subtitle">
              BELEVUE Premium Lipsticks - Wo Eleganz auf Individualität trifft. 
              Jede Farbe erzählt eine Geschichte, jeder Stift ist ein Statement.
            </p>
            <div className="hero-buttons">
              <a href="#products" className="btn btn-primary">
                Kollektion entdecken
              </a>
              <a href="#contact" className="btn btn-secondary">
                Kontakt aufnehmen
              </a>
            </div>
          </div>
          
          <div className="hero-features">
            <div className="feature">
              <h3>Premium Qualität</h3>
              <p>Hochwertige Formeln für langanhaltende Farbintensität</p>
            </div>
            <div className="feature">
              <h3>Exklusive Farben</h3>
              <p>Einzigartige Nuancen für jeden Stil und jede Stimmung</p>
            </div>
            <div className="feature">
              <h3>Made in Germany</h3>
              <p>Handverlesene Qualität aus deutschen Ateliers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 