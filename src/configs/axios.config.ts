import axios, { type AxiosInstance } from "axios";
import Cookies from "js-cookie";
import type { AuthCookie } from "@/types";

export const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STARWARS_API,
  timeout: 10000,
});

const cookieName: AuthCookie = "accessToken";

export const api2: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_AUTH_URL as string,
  timeout: 10000,
});

api2.interceptors.request.use((config) => {
  // 1. Mengambil token dari cookie
  const token = Cookies.get(cookieName); // cookieName adalah 'accessToken'

  // 2. Jika token ada, tambahkan ke header
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  // 3. Mengembalikan konfigurasi
  return config;
});

api2.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      Cookies.remove(cookieName);
    }
    if (error instanceof Error) {
      return Promise.reject(error);
    }
    return Promise.reject(new Error(String(error)));
  },
);
