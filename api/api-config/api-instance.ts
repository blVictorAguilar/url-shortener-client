import axios from "axios";

const config = {
  baseURL: "http://localhost:3000",
  timeout: 2000,
};

export const api_instance = axios.create(config);
