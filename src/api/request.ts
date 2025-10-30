import axios from "axios";
import { API_BASE } from "@/config";

const request = axios.create({
  baseURL: API_BASE,
  timeout: 8000,
});

export default request;
