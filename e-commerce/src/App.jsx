import Login from "./components/Login";
import Register from "./components/Register";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Upload from "./components/Upload";
import LandingPage from "./page/LandingPage"; 
import Classic from "./page/Classic";
import Bold from "./page/Bold";
import Formal from "./page/Formal";
import Products from "./page/Products";


function App() {
  return (
    <div>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/products/classic" element={<Classic />} />
        <Route path="/products/formal" element={<Formal />} />
        <Route path="/products/bold" element={<Bold />} />    
        <Route path="/all/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
