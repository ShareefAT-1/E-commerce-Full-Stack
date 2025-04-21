import React from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Login from "./components/Login";
import Register from "./components/Register";
import Upload from "./components/Upload";
import Classic from "./page/Classic";
import Bold from "./page/Bold";
import Formal from "./page/Formal";
import Products from "./page/Products";
import ProductDetail from "./page/ProductDetail";
import WishlistPage from "./page/WishlistPage";
import Cartlist from "./page/Cartlist";
import LandingPage from "./page/LandingPage"; 

function App() {
  return (
    <div>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<LandingPage />} /> 
        <Route path="/all-products" element={<Products />} />
        <Route path="/all-products/:id" element={<ProductDetail />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/cart" element={<Cartlist />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/upload" element={<Upload />} />

        <Route path="/products/classic" element={<Classic />} />
        <Route path="/products/formal" element={<Formal />} />
        <Route path="/products/bold" element={<Bold />} />
      </Routes>
    </div>
  );
}

export default App;
