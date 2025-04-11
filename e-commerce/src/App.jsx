import Login from "./components/login";
import Register from "./components/register";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Upload from "./components/Upload";
import LandingPage from "./page/LandingPage";
import Classic from "./page/Classic";

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
      </Routes>
    </div>
  );
}

export default App;
