import axios from 'axios';

export const baseURL = 'https://api.themoviedb.org/3/';

const api = axios.create({
  baseURL,
});

api.interceptors.request.use((config) => {
  config.params = { ...config.params, api_key: process.env.REACT_APP_API_KEY };
  return config;
});

export default api;
