import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import img1 from "../assets/products/1.png";
import img3 from "../assets/products/3.jpg";
import img4 from "../assets/products/4.jpg";
import img6 from "../assets/products/6.jpg";
import img8 from "../assets/products/8.jpg";
import { FaShoppingCart } from "react-icons/fa";

const LandingPage = () => {
  const navigate = useNavigate();
  
  const cartItemsCount = useSelector((state) => state.cartlist.items.length);

  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/login");
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  return (
    <div className="font-sans text-[#222] bg-[#fafafa]">

      <div className="flex justify-between items-center px-10 py-5 bg-white border-b border-gray-200">
        <div>
          <h2 className="font-bold text-2xl text-black">Velocia</h2>
        </div>
        <div className="flex gap-5 text-gray-800">
          <Link to="/">Home</Link>
          <Link to="/products">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
          <button onClick={handleLogout} className="text-red-600 hover:text-red-800">
            Logout
          </button>
          <div className="relative cursor-pointer" onClick={handleCartClick}>
            <FaShoppingCart size={24} />
            {cartItemsCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center px-10 py-16 bg-[#f4f4f4] gap-10">

        <div className="flex-1">
          <h1 className="text-4xl font-semibold mb-3 text-black">Style Meets Sophistication</h1>
          <p className="text-lg mb-5 text-gray-700">Premium suits and apparel for every occasion.</p>
          <div className="mb-5 space-y-2 text-base text-gray-600">
            <p>✔️ Handcrafted Quality</p>
            <p>✔️ Free Shipping</p>
            <p>✔️ Tailored for Perfection</p>
          </div>
          <Link to="/products" className="inline-block bg-black text-white px-5 py-2 rounded mt-2 hover:bg-gray-800">
            Explore Collection
          </Link>
        </div>

        <div className="flex-1 relative w-[300px] h-[400px]">
          <img
            src={img3}
            alt="stack1"
            className="absolute w-[280px] h-[360px] object-cover rounded-lg shadow-lg z-30 rotate-[-5deg] top-0 left-0"
          />
          <img
            src={img6}
            alt="stack2"
            className="absolute w-[280px] h-[360px] object-cover rounded-lg shadow-lg z-20 rotate-0 top-5 left-2"
          />
          <img
            src={img8}
            alt="stack3"
            className="absolute w-[280px] h-[360px] object-cover rounded-lg shadow-lg z-10 rotate-[5deg] top-10 left-5"
          />
        </div>

        <div className="flex-1 relative">
          <img src={img1} alt="main-suit" className="w-[400px] rounded-lg" />
          <div className="absolute inset-0"></div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-5 py-10 px-5">
        <div className="w-[300px] h-[400px] overflow-hidden rounded-lg">
          <Link to="/products/formal">
            <img src={img4} alt="suit2" className="w-full h-full object-cover rounded-lg" />
          </Link>
        </div>
        <div className="w-[300px] h-[400px] overflow-hidden rounded-lg">
          <Link to="/products/bold">
            <img src={img6} alt="suit3" className="w-full h-full object-cover rounded-lg" />
          </Link>
        </div>
        <div className="w-[300px] h-[400px] overflow-hidden rounded-lg">
          <Link to="/products/classic">
            <img src={img3} alt="suit4" className="w-full h-full object-cover rounded-lg" />
          </Link>
        </div>
      </div>

      <div className="text-center py-5 bg-black text-white">
        <p>© 2025 Velocia. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default LandingPage;
