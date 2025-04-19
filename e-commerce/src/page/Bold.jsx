import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import img17 from "../assets/products/17.jpg";
import img18 from "../assets/products/18.jpg";
import img19 from "../assets/products/19.jpg";
import img20 from "../assets/products/20.jpg";
import img21 from "../assets/products/21.jpg";

const Bold = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    { img: img17, title: "Scarlet Blaze", price: "$199" },
    { img: img18, title: "Emerald Edge", price: "$229" },
    { img: img19, title: "Royal Noir", price: "$249" },
    { img: img20, title: "Bold Elegance", price: "$189" },
    { img: img21, title: "Steel Grey", price: "$259" },
  ];

  return (
    <div className="font-['Segoe_UI'] px-5 py-6 bg-[#fdfdfd]">

      <div className="flex justify-between items-center py-2.5">
        <div>
          <h2 className="font-bold text-2xl">Velocia</h2>
        </div>
        <div className="flex space-x-5 font-medium text-[#333]">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/products" className="hover:underline">Shop</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/login" className="hover:underline">Login</Link>
        </div>
      </div>

      <div className="text-center my-10">
        <h1 className="text-4xl font-semibold mb-2">Bold Collection</h1>
        <p className="text-lg text-gray-600">The suits that make a statement.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-8"> 
        {products.map((product, index) => (
          <div
            key={index}
            className={`w-[250px] relative rounded-lg overflow-hidden shadow-md ${
              index % 2 === 0 ? "transform translate-y-3" : "transform -translate-y-3"
            }`} 
          >
            <img src={product.img} alt={product.title} className="w-full h-[300px] object-cover" />
            <div className="bg-white text-center p-3">
              <h3 className="font-semibold my-1">{product.title}</h3>
              <p className="text-gray-700 text-base">{product.price}</p>
              <button className="mt-2 px-4 py-1.5 bg-black text-white transition hover:bg-gray-700">View</button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-200 text-gray-800 py-16 text-center rounded-xl mt-12">
        <p className="italic text-2xl">"A suit is not just a piece of clothing, it's an expression of who you are."</p>
        <p className="mt-3 text-fuchsia-800">— Velocia</p>
      </div>

      <div className="mt-16 bg-black text-white py-10 text-center rounded-xl">
        <h2 className="text-3xl font-semibold mb-4">Discover Our Exclusive Bold Collection</h2>
        <p className="text-lg mb-6">Experience the power and elegance of our handpicked suits, designed for those who dare to stand out.</p>
        <Link to="/products" className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">Shop Now</Link>
      </div>

      <div className="text-center mt-20 py-5 text-sm text-gray-400">
        <p>© 2025 Velocia. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Bold;