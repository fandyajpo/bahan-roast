import axios, { AxiosInstance } from "axios";

export const client: AxiosInstance = axios.create({
  timeout: 5000,
});
