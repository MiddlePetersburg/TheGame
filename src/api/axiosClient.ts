import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://ya-praktikum.tech/api/v2/',
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
});

export default axiosClient;
