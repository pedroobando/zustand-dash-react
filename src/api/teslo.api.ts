import axios from 'axios';
import { useAuthStore } from '../stores';

export const tesloApi = axios.create({
  baseURL: 'http://localhost:3000/api',
});

//TODO: Interceptor
//* Esto Lee el store de Zustand
tesloApi.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  console.log({ token });

  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  return config;
});
