import axios from "axios";
import Cookies from "js-cookie";

export const request = axios.create({
  // No baseURL! Let relative paths go to localhost:3000 for proxying
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  // withCredentials: false, // Not needed if using header-based auth
});

// Add an interceptor to include the Authorization header with the token from the cookie
request.interceptors.request.use((config) => {
  const token = Cookies.get("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Remove Authorization header logic. Rely on cookies for auth.
