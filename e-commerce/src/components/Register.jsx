import { useState } from "react";
import axiosbase from "../config/axios-config";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.phone
    ) {
      alert("Please fill in all fields!");
      return;
    }

    try {
      await axiosbase.post("/register", formData);
      alert("Registration Successful!");
      setFormData({
    username: "",
    email: "",
    password: "",
    phone: "",
  });
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration Failed!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="bg-gray-900 bg-opacity-60 backdrop-blur-md p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-700">
        <h2 className="text-2xl font-bold text-center text-gray-300 mb-4">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400">
              Full Name
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border border-gray-600 rounded-lg bg-gray-800 text-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-lg shadow-blue-600/20"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border border-gray-600 rounded-lg bg-gray-800 text-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-lg shadow-blue-600/20"
              placeholder="Enter your email to register"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border border-gray-600 rounded-lg bg-gray-800 text-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-lg shadow-blue-600/20"
              placeholder="Password"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border border-gray-600 rounded-lg bg-gray-800 text-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-lg shadow-blue-600/20"
              placeholder="+91........."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md shadow-blue-500/40 hover:shadow-blue-500/80"
          >
            Register
          </button>
        </form>

        <p className="text-center text-gray-400 mt-4 text-sm">
          Alreedy have an account?{" "}
          <a
            href="/login"
            className="text-blue-400 font-medium hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
