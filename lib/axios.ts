import axios from 'axios';

export const instance = axios.create({
  timeout: 5000,
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { 'Content-Type': 'application/json' },
});
