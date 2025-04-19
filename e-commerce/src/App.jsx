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
        <Route path="/products/formal" element={<Bold/>} />
        <Route path="/products/bold" element={<Formal/>} />
      </Routes>
    </div>
  );
}

export default App;