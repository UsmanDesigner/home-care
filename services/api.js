import axios from "axios";
import { useRuntimeConfig } from "#app";

export const useApi = () => {
  const config = useRuntimeConfig();

  const request = async (method, url, options = {}) => {
    try {
      const response = await axios({
        method,
        url: `${config.public.baseURL}${url}`,
        ...options,
      });

      return response.data;
    } catch (error) {
      console.error(
        `Error during ${method} request to ${url}:`,
        error.response?.data || error.message
      );
      throw error;
    }
  };

  const GET = (url, params = {}) => request("GET", url, { params });
  const POST = (url, body) => request("POST", url, { data: body });
  const PUT = (url, body) => request("PUT", url, { data: body });
  const DEL = (url) => request("DELETE", url);

  return {
    GET,
    POST,
    PUT,
    DEL,
  };
};
