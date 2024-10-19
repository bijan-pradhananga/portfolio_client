import axios, { AxiosInstance } from 'axios';

const API: AxiosInstance = axios.create({
  baseURL: 'https://portfolio-server-qjh8.onrender.com',
  withCredentials: true,
});

export default API;
