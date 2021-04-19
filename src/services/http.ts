import axios, { AxiosRequestConfig } from 'axios';

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'content-type': 'application/json',
  },
});

export async function fetcher<T = any>(url: string, config?: AxiosRequestConfig) {
  const { data } = await http({ url, ...config });

  return data as T;
}

export default http;
