import React from 'react';
import './Products.css';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Bubble Trouble #21",
      description: "Frech, laut, knallig – Neonpink zum Verlieben.",
      tagline: "Wer leise sein will, nimmt 'ne andere Farbe.",
      price: "10€",
      image: "/images/01.jpeg"
    },
    {
      id: 2,
      name: "Burnt Coral #12",
      description: "Ein satter Korallton, der Wärme und Frische verbindet",
      tagline: "Sunset auf deinen Lippen",
      price: "10€",
      image: "/images/02.jpeg"
    },
    {
      id: 3,
      name: "Spicy Flame #18",
      description: "Knallrot mit Power, für mutige Moves und große Auftritte",
      tagline: "Wenn dein Lippenstift zuerst den Raum betritt",
      price: "10€",
      image: "/images/03.jpeg"
    },
    {
      id: 4,
      name: "Crimson Queen #19",
      description: "Rot mit Statement-Vibes",
      tagline: "Bold lips, bold energy",
      price: "10€",
      image: "/images/04.jpeg"
    },
    {
      id: 5,
      name: "Fire Clay #8",
      description: "einzigartig & edgy",
      tagline: "Feuer trifft Eleganz",
      price: "10€",
      image: "/images/05.jpeg"
    },
    {
      id: 6,
      name: "Nude Vibe #6",
      description: "Der perfekte Everyday-Look, soft, cremig, schlicht.",
      tagline: "Dezent, aber nie zu übersehen.",
      price: "10€",
      image: "/images/06.jpeg"
    },
    {
      id: 7,
      name: "Soft Cappuccino #2",
      description: "Ein warmes Nude mit leichtem Braunstich – classy & cozy.",
      tagline: "Für die Tage, an denen weniger mehr ist",
      price: "10€",
      image: "/images/07.jpeg"
    },
    {
      id: 8,
      name: "Velvet Mocha #3",
      description: "Ein dunkler, weicher Braunton – edel, smooth, elegant",
      tagline: "So soft wie Samt, so bold wie Kaffee.",
      price: "10€",
      image: "/images/08.jpeg"
    }
  ];

  const handleWhatsAppOrder = (product) => {
    const message = `Hallo! Ich interessiere mich für ${product.name} (${product.price}). Können Sie mir mehr Informationen geben?`;
    const whatsappUrl = `https://wa.me/491793799608?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
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
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="product-overlay">
                  <button 
                    className="btn btn-primary order-btn"
                    onClick={() => handleWhatsAppOrder(product)}
                  >
                    Jetzt bestellen
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
    </section>
  );
};

export default Products; 