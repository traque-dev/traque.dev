import _axios from 'axios';

export const axios = _axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
