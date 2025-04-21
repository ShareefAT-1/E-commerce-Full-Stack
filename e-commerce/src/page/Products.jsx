import React, { useEffect, useState } from "react";
import axiosbase from "../config/axios-config";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await axiosbase.get("/products");
      setProducts(response.data.products);
      console.log("Fetched products:", response.data.products);
      setLoading(false);
    } catch (error) {
      setError("Error fetching products");
      setLoading(false);
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading products...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

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
              <Link to={`/all-products/${product._id}`}>
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
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No products available</p>
        )}
      </div>
    </div>
  );
}

export default Products;
