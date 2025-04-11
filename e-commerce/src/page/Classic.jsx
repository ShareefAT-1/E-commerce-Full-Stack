import React from "react";
import "../css/Classic.css";
import { Link } from "react-router-dom";

import img3 from "../assets/products/3.jpg";
import img7 from "../assets/products/7.jpg";
import img10 from "../assets/products/10.jpg";
import img11 from "../assets/products/11 WEDDING_SUITS.jpg";
import img16 from "../assets/products/10.jpg";
import img15 from "../assets/products/10.jpg";


// New category images
// import imgModern from "../assets/categories/modern.jpg";
// import imgWedding from "../assets/categories/wedding.jpg";

const Classic = () => {
  const products = [
    { img: img3, title: "Charcoal Grey", price: "$199" },
    { img: img7, title: "Royal Navy", price: "$229" },
    { img: img10, title: "Midnight Black", price: "$249" },
    { img: img11, title: "Ivory Classic", price: "$189" },
  ];

  return (
    <div className="classic-page">
      {/* Navbar */}
      <div className="nav">
        <div className="nav-left">
          <h2>Velocia</h2>
        </div>
        <div className="nav-right">
          <Link to="/">Home</Link>
          <Link to="/products">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>

      <div className="category-banner">
        <h1>Classic Collection</h1>
        <p>Elegance that never goes out of style.</p>
      </div>

      <div className="image-section">
        {products.map((product, index) => (
          <div className="img-box" key={index}>
            <img src={product.img} alt={product.title} />
            <div className="info">
              <h3>{product.title}</h3>
              <p>{product.price}</p>
              <button>View</button>
            </div>
          </div>
        ))}
      </div>

      <div className="category-showcase">
        <div className="category-block">
          <img src={img16} alt="Modern Collection" />
          <div className="overlay">
            <h2>Modern Suits</h2>
            <button>Explore</button>
          </div>
        </div>

        <div className="spacer-block"></div>

        <div className="category-block">
          <img src={img15} alt="Wedding Collection" />
          <div className="overlay">
            <h2>Wedding Suits</h2>
            <button>Explore</button>
          </div>
        </div>
      </div>

      <div className="footer">
        <p>© 2025 Velocia. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Classic;
