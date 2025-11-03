import axios from "axios";
import { API_BASE } from "@/config";
import { useUserStore } from "@/stores/user";
import { token_name } from "@/constants/base";

const request = axios.create({
  baseURL: API_BASE,
  timeout: 8000,
});

request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(token_name);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export default request;
