import React from "react";
import { Link } from "react-router-dom";

import img3 from "../assets/products/3.jpg";
import img7 from "../assets/products/7.jpg";
import img10 from "../assets/products/10.jpg";
import img11 from "../assets/products/11 WEDDING_SUITS.jpg";
import img16 from "../assets/products/10.jpg";
import img15 from "../assets/products/10.jpg";

const Classic = () => {
  const products = [
    { img: img3, title: "Charcoal Grey", price: "$199" },
    { img: img7, title: "Royal Navy", price: "$229" },
    { img: img10, title: "Midnight Black", price: "$249" },
    { img: img11, title: "Ivory Classic", price: "$189" },
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
        <h1 className="text-4xl font-semibold mb-2">Classic Collection</h1>
        <p className="text-lg text-gray-600">Elegance that never goes out of style.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-5">
        {products.map((product, index) => (
          <div key={index} className="w-[250px] relative rounded-lg overflow-hidden shadow-md">
            <img src={product.img} alt={product.title} className="w-full h-[300px] object-cover" />
            <div className="bg-white text-center p-3">
              <h3 className="font-semibold my-1">{product.title}</h3>
              <p className="text-gray-700 text-base">{product.price}</p>
              <button className="mt-2 px-4 py-1.5 bg-black text-white transition hover:bg-gray-700">View</button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-10 mt-24">

        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <img src={img16} alt="Modern Collection" className="w-full h-full object-cover brightness-90 transition-transform duration-300 hover:scale-[1.03]" />
          <div className="absolute bottom-8 left-10 text-white z-10">
            <h2 className="text-3xl font-medium mb-2">Modern Suits</h2>
            <button className="bg-white text-black px-5 py-2 rounded font-medium hover:bg-gray-100 transition">Explore</button>
          </div>
        </div>

        <div className="h-24 bg-gray-100 rounded-xl"></div>

        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <img src={img15} alt="Wedding Collection" className="w-full h-full object-cover brightness-90 transition-transform duration-300 hover:scale-[1.03]" />
          <div className="absolute bottom-8 left-10 text-white z-10">
            <h2 className="text-3xl font-medium mb-2">Wedding Suits</h2>
            <button className="bg-white text-black px-5 py-2 rounded font-medium hover:bg-gray-100 transition">Explore</button>
          </div>
        </div>
      </div>

      <div className="text-center mt-20 py-5 text-sm text-gray-400">
        <p>© 2025 Velocia. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Classic;

