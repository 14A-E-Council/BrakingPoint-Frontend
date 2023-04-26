import axios from "axios";


const axiosInstance = axios.create({
  baseURL: "http://localhost:8000", // replace with the URL of your backend server
});
// const $axios = axios.create({
//   baseURL: "http://localhost:5000/",
//   withCredentials: true,
// });

export default axios;
