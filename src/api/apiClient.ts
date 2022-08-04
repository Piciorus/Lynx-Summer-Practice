import axios, { AxiosError, AxiosResponse } from "axios";
import appConfig from "../config/appConfig";

const apiClient = axios.create({
  baseURL: appConfig.apiUrl,
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Client-ID ${appConfig.apiKey}`,
  },
});

apiClient.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error: AxiosError) => {
    if (error.response?.status === 500) {
      return Promise.reject(error.message);
    }

    return Promise.reject(error);
  }
);

export default apiClient;
