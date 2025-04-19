import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const formalClothes = [
  {
    id: "1", // Add an 'id' for each product
    title: "Midnight Velvet Suit",
    description: "A classic deep navy velvet suit, tailored to perfection for formal evenings.",
    image: "https://i.pinimg.com/736x/37/0d/fd/370dfd5fd7b479ae26f07366fc9eafde.jpg",
  },
  {
    id: "2", // Add an 'id' for each product
    title: "Ivory Silk Kurta Set",
    description: "Soft ivory silk with intricate embroidery — elegant and timeless.",
    image: "https://i.pinimg.com/474x/1a/e7/5d/1ae75d6e852e7a7b72c414f650ec0d2a.jpg",
  },
  {
    id: "3", // Add an 'id' for each product
    title: "Charcoal Double-Breasted Blazer",
    description: "Sharp lines, peak lapels, and matte buttons. Boardroom ready.",
    image: "https://i.pinimg.com/736x/79/d4/95/79d4956736dfcbdd478973f3ffe7d3b4.jpg",
  },
];

const Formal = () => {
  return (
    <div className="min-h-screen bg-[#f5f3ef] py-16 px-6 font-serif">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Formal Elegance
        </h1>
        <p className="text-center text-gray-600 text-lg mb-12">
          Classic pieces. Timeless silhouettes. A touch of luxury.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {formalClothes.map((item) => (
            <Link
              key={item.id} // Use the id as the key for each item
              to={`/all/products`} // Navigate to the product details page
              className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all p-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[400px] object-cover rounded-2xl mb-4"
              />
              <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
                {item.title}
              </h2>
              <p className="text-gray-600 text-sm text-center">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Formal;
