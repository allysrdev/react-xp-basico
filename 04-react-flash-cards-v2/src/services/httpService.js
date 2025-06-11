import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 10000, // 10s
});

export async function read(url) {
  const { data } = await axiosInstance.get(url);

  return data;
}

export async function exclude(url) {
  const { data } = await axiosInstance.delete(url);
  console.log(data);
}

export async function create(url, object) {
  await axiosInstance.post(url, object);
}
