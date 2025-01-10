import axios from "axios";

// Buat instance Axios
const axiosInstance = axios.create({
  baseURL: "https://api.pianoprogression.web.id", // URL backend Anda
});

// Tambahkan interceptor untuk menyisipkan token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Ambil token dari localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Tambahkan header Authorization
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
