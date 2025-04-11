import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/products/1.png";
import img2 from "../assets/products/2.png";
import img3 from "../assets/products/3.jpg";
import img4 from "../assets/products/4.jpg";
import img5 from "../assets/products/5.jpg";
import img6 from "../assets/products/6.jpg";
import img7 from "../assets/products/7.jpg";
import img8 from "../assets/products/8.jpg";
import img9 from "../assets/products/9.png";
import img10 from "../assets/products/10.jpg";
import img11 from "../assets/products/11 WEDDING_SUITS.jpg";

const Landing = () => {
  return (
    <div className="landing">
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

      <div className="top-banner">
        <div className="banner-text">
          <h1>Style Meets Sophistication</h1>
          <p>Premium suits and apparel for every occasion.</p>
          <Link to="/products" className="shop-btn">Explore Collection</Link>
        </div>
        <div className="banner-img">
          <img src={img1} alt="main-suit" />
        </div>
      </div>

      <div className="image-section">
        <div className="img-box">
          <Link to="/products/bold">
            <img src={img4} alt="suit2" />
          </Link>
        </div>
        <div className="img-box">
          <Link to="/products/formal">
            <img src={img6} alt="suit3" />
          </Link>
        </div>
        <div className="img-box">
          <Link to="/products/classic">
            <img src={img3} alt="suit4" />
          </Link>
        </div>
      </div>

      <div className="footer">
        <p>© 2025 Velocia. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Landing;
