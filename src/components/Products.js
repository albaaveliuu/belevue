import React, { useState, useRef } from 'react';
import './Products.css';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const modalImageRef = useRef(null);

  const products = [
    {
      id: 1,
      name: "Bubble Trouble",
      description: "Frech, laut, knallig – Neonpink zum Verlieben.",
      tagline: "Wer leise sein will, nimmt 'ne andere Farbe.",
      price: "10€",
      image: "/images/01.jpeg"
    },
    {
      id: 2,
      name: "Burnt Coral",
      description: "Ein satter Korallton, der Wärme und Frische verbindet",
      tagline: "Sunset auf deinen Lippen",
      price: "10€",
      image: "/images/02.jpeg"
    },
    {
      id: 3,
      name: "Spicy Flame",
      description: "Knallrot mit Power, für mutige Moves und große Auftritte",
      tagline: "Wenn dein Lippenstift zuerst den Raum betritt",
      price: "10€",
      image: "/images/03.jpeg"
    },
    {
      id: 4,
      name: "Crimson Queen",
      description: "Rot mit Statement-Vibes",
      tagline: "Bold lips, bold energy",
      price: "10€",
      image: "/images/04.jpeg"
    },
    {
      id: 5,
      name: "Fire Clay",
      description: "einzigartig & edgy",
      tagline: "Feuer trifft Eleganz",
      price: "10€",
      image: "/images/05.jpeg"
    },
    {
      id: 6,
      name: "Nude Vibe",
      description: "Der perfekte Everyday-Look, soft, cremig, schlicht.",
      tagline: "Dezent, aber nie zu übersehen.",
      price: "10€",
      image: "/images/06.jpeg"
    },
    {
      id: 7,
      name: "Soft Cappuccino",
      description: "Ein warmes Nude mit leichtem Braunstich – classy & cozy.",
      tagline: "Für die Tage, an denen weniger mehr ist",
      price: "10€",
      image: "/images/07.jpeg"
    },
    {
      id: 8,
      name: "Velvet Mocha",
      description: "Ein dunkler, weicher Braunton – edel, smooth, elegant",
      tagline: "So soft wie Samt, so bold wie Kaffee.",
      price: "10€",
      image: "/images/08.jpeg"
    }
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    setZoomLevel(1); // Reset zoom when opening modal
  };

  const handleWhatsAppOrder = (product) => {
    const message = `Hallo! Ich interessiere mich für ${product.name} (${product.price}). Können Sie mir mehr Informationen geben?`;
    const whatsappUrl = `https://wa.me/491793799608?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    setZoomLevel(1); // Reset zoom when closing modal
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    const newZoom = Math.max(0.5, Math.min(3, zoomLevel + delta));
    setZoomLevel(newZoom);
  };

  const resetZoom = () => {
    setZoomLevel(1);
  };

  return (
    <section id="products" className="section products-section">
      <div className="container">
        <h2 className="section-title">Unsere Kollektion</h2>
        <p className="section-subtitle">
          Entdecke unsere exklusive Auswahl an Premium Lipsticks. 
          Jede Farbe ist sorgfältig ausgewählt und erzählt ihre eigene Geschichte.
        </p>
        
        <div className="products-grid">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="product-card hover-lift fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="product-image" onClick={() => handleProductClick(product)}>
                <img src={product.image} alt={product.name} />
                <div className="product-overlay">
                  <button className="btn btn-primary order-btn">
                    Produkt ansehen
                  </button>
                </div>
              </div>
              
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-tagline">{product.tagline}</p>
                <div className="product-price">{product.price}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="products-cta">
          <p className="cta-text">
            Alle Bestellungen werden über WhatsApp abgewickelt. 
            Deutschlandweit verfügbar.
          </p>
          <a 
            href="https://wa.me/491793799608?text=Hallo! Ich interessiere mich für Ihre BELEVUE Lipsticks. Können Sie mir mehr Informationen geben?"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary cta-button"
          >
            WhatsApp Kontakt
          </a>
        </div>
      </div>

      {/* Product Modal */}
      {isModalOpen && selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            
            <div className="modal-header">
              <div className="modal-logo">
                <h3 className="logo-text">
                  <span className="logo-bele">BELE</span>
                  <span className="logo-vue">VUE</span>
                </h3>
                <p className="logo-tagline">Premium Lipsticks</p>
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-image-container" onWheel={handleWheel}>
                <img 
                  ref={modalImageRef}
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="modal-image"
                  style={{ transform: `scale(${zoomLevel})` }}
                />
                {zoomLevel !== 1 && (
                  <button className="zoom-reset-btn" onClick={resetZoom}>
                    Reset Zoom
                  </button>
                )}
              </div>
              
              <div className="modal-product-info">
                <h2 className="modal-product-name">{selectedProduct.name}</h2>
                <p className="modal-product-description">{selectedProduct.description}</p>
                <p className="modal-product-tagline">{selectedProduct.tagline}</p>
                <div className="modal-product-price">{selectedProduct.price}</div>
                
                <button 
                  className="btn btn-primary modal-order-btn"
                  onClick={() => handleWhatsAppOrder(selectedProduct)}
                >
                  Jetzt bestellen
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products; 