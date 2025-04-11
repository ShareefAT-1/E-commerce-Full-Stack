import React, { useState } from "react";
import axiosbase from "../config/axios-config";

const Upload = () => {  
  const [file, setFile] = useState();

  const handleUpload = (e) => {
    e.preventDefault();
    const formData = new FormData();  
    formData.append("file", file);
    axiosbase
      .post("/products/upload", formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-orange-900">
      <div className="bg-gray-900 bg-opacity-60 backdrop-blur-md p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-700">
        <h2 className="text-2xl font-bold text-center text-gray-300 mb-4">
          Upload Your File
        </h2>

        <form className="space-y-4 flex flex-col items-center">
          <input
            className="w-full p-2 border border-gray-600 rounded-lg bg-gray-800 text-gray-200 cursor-pointer focus:ring-2 focus:ring-orange-500 focus:outline-none shadow-lg shadow-orange-600/20"
            onChange={(e) => setFile(e.target.files[0])}
            type="file"
          />
          <button
            className="w-full bg-orange-600 text-white py-2 rounded-lg font-semibold hover:bg-orange-700 transition-all duration-300 shadow-md shadow-orange-500/40 hover:shadow-orange-500/80"
            onClick={handleUpload}
          >
            Upload File
          </button>
        </form>

        <p className="text-center text-gray-400 mt-4 text-sm">
          Don't have an account?{" "}
          <a href="/register" className="text-orange-400 font-medium hover:underline">
            Register
          </a>
        </p>
        <p className="text-center text-gray-400 mt-2 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-orange-400 font-medium hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Upload;
