import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3 className="logo-text">
                <span className="logo-bele">BELE</span>
                <span className="logo-vue">VUE</span>
              </h3>
              <p className="logo-tagline">Premium Lipsticks</p>
            </div>
            <p className="footer-description">
              Entdecke die Magie der Lippen mit unseren exklusiven Premium Lipsticks. 
              Jede Farbe erzählt eine Geschichte, jeder Stift ist ein Statement.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Kontakt</h4>
            <div className="contact-info">
              <div className="contact-item">
                <div>
                  <p className="contact-label">WhatsApp</p>
                  <a 
                    href="https://wa.me/491793799608"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    +49 179 3799608
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Folge uns</h4>
            <div className="social-links">
              <a 
                href="https://www.facebook.com/belevue1?_rdr"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <span>Facebook</span>
              </a>
              <a 
                href="https://www.tiktok.com/@studio_belevue1?_t=8mzBL3tPG7d&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <span>TikTok</span>
              </a>
            </div>
            
            <div className="footer-cta">
              <a 
                href="https://wa.me/491793799608?text=Hallo! Ich interessiere mich für Ihre BELEVUE Lipsticks. Können Sie mir mehr Informationen geben?"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Jetzt bestellen
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 BELEVUE. Alle Rechte vorbehalten.</p>
          <p>Premium Lipsticks - Made with ❤️ in Germany</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 