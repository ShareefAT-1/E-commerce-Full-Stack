import React, { useEffect, useState } from "react";
import axiosbase from "../config/axios-config"; 

function Products() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axiosbase.get("/products"); 
      setProducts(response.data.products); 
      console.log("Fetched products:", response.data.products); 
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="products-container px-12 py-8">
      <h1 className="text-3xl font-semibold text-center mb-6">Our Products</h1>
      <div className="product-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product._id}
              className="product-card bg-white shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <div className="w-full h-96 relative">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-medium mb-2">{product.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                <p className="font-bold text-lg">${product.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Loading products...</p>
        )}
      </div>
    </div>
  );
}

export default Products;
