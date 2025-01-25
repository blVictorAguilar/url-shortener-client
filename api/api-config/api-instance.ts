import axios from "axios";
const apiEndpoint = import.meta.env.VITE_API_ENDPOINT;

const config = {
  baseURL: apiEndpoint,
  timeout: 2000,
};

export const api_instance = axios.create(config);
