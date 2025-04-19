import axios from "axios";

// Create an axios instance with the base URL for the backend
const axiosbase = axios.create({
  baseURL: "http://localhost:4000", // Backend server URL
});

export default axiosbase;
