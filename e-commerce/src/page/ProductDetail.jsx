import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams for URL params
import { useDispatch } from "react-redux"; // Import useDispatch for Redux actions
import axios from "axios"; // Import axios for API calls
import { BsHandbagFill } from "react-icons/bs"; // Import icons
import { FaRegHeart, FaTruck, FaCreditCard } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { addToCartlist } from "../feature/cartlistSlice";
import { addToWishlist } from "../feature/wishlistSlice";
 // Assuming you have these actions

const ProductDetail = () => {
  const { id } = useParams(); // Use useParams to get the product ID from URL
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();  // Assuming you're using Redux for state management

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const token = localStorage.getItem("user_access_token");
        const response = await axios.get(`http://localhost:4000/products/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProduct(response.data.product);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(price);

  // Handle Add to Cart
  const handleAddToCart = () => {
    dispatch(addToCartlist(product));  // Dispatching the action to add to the cart
  };

  // Handle Add to Wishlist
  const handleAddToWishlist = () => {
    dispatch(addToWishlist(product));  // Dispatching the action to add to the wishlist
  };

  return (
    <div className="p-6">
      {product ? (
        <div className="grid grid-cols-5 gap-4 max-w-7xl mx-auto bg-white shadow-md rounded-lg p-6">
          <div className="col-span-2 row-span-4">
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-96 object-cover rounded-lg mb-4"
            />
            <div className="pt-6">
              <div className="flex gap-3">
                <button
                  onClick={handleAddToCart}
                  className="uppercase border border-black bg-[#F28C82] hover:bg-[#F28C99] w-[50%] px-3 py-3 rounded-xl flex justify-center items-center gap-2 text-xl font-semibold"
                >
                  <BsHandbagFill />
                  Add to Bag
                </button>
                <button
                  onClick={handleAddToWishlist}
                  className="uppercase border border-gray-400 hover:border-black w-[50%] px-3 py-3 rounded-xl flex justify-center items-center gap-2 text-xl font-semibold"
                >
                  <FaRegHeart /> Wishlist
                </button>
              </div>
            </div>
          </div>

          <div className="col-span-3 row-span-4 flex flex-col gap-5">
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <p className="text-gray-700 text-lg mb-2">{product.description}</p>
            <p className="text-xl font-semibold text-green-700">{formatPrice(product.price)}</p>
            <hr />

            <div className="flex gap-3 items-center text-xl">
              <h2 className="uppercase">Delivery Options</h2>
              <FaTruck />
            </div>
            <div className="relative w-fit">
              <input
                type="text"
                placeholder="Enter Pincode"
                className="border border-gray-400 outline-none px-2 py-1 w-xs rounded"
              />
              <button
                type="submit"
                className="absolute right-0.5 top-0 font-medium rounded-xl text-sm px-4 py-2 cursor-pointer text-[#F28C82]"
              >
                Search
              </button>
            </div>
            <span className="text-xs text-gray-500">
              Please enter PIN code to check delivery time & Pay on Delivery Availability
            </span>
            <div className="flex flex-col">
              <span className="text-gray-500">100% Original Products</span>
              <span className="text-gray-500">Pay on delivery might be available</span>
              <span className="text-gray-500">Easy 7 days returns and exchanges</span>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center text-xl gap-3">
                <h2 className="uppercase">Best Offers</h2>
                <BiSolidOffer />
              </div>
              <ul className="text-gray-500 list-disc pl-4">
                <li>Applicable on: Orders above ₹4000 (only on first purchase)</li>
                <li>Coupon code: <strong>SAVINGSPLUS</strong></li>
                <li>Coupon Discount: 20% off</li>
              </ul>
              <span className="text-[#F28C82] font-semibold cursor-pointer">
                View Eligible Products
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center text-xl gap-3">
                <h2 className="uppercase">10% Discount on IDFC FIRST SWYP Credit Card</h2>
                <FaCreditCard />
              </div>
              <ul className="text-gray-500 list-disc pl-4">
                <li>Min Spend ₹850, Max Discount ₹350</li>
              </ul>
              <span className="text-[#F28C82] font-semibold cursor-pointer">
                Terms & Conditions
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center text-xl gap-3">
                <h2 className="uppercase">10% Discount on HSBC Credit Cards</h2>
                <FaCreditCard />
              </div>
              <ul className="text-gray-500 list-disc pl-4">
                <li>Min Spend ₹5000, Max Discount ₹1500</li>
              </ul>
              <span className="text-[#F28C82] font-semibold cursor-pointer">
                Terms & Conditions
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center text-xl font-medium">Loading product details...</div>
      )}
    </div>
  );
};

export default ProductDetail;
