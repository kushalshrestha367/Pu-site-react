// import axios from "axios";

// const API = axios.create({
//     baseURL:'http://localhost:8000/api',
//     headers:{
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//         // 'Authorization': localStorage.getItem('token')
//     }
// })

// export default API;
// src/lib/api.js
// import axios from "axios";

// const API = axios.create({
//   baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000/api",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
// });

// /* Attach auth token on every request (if present) */
// API.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// /* Return the response data directly so callers get the payload, not the wrapper */
// API.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       localStorage.removeItem("token");
//     }
//     return Promise.reject(error);
//   }
// );

// export default API;