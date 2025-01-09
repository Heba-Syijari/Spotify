import axios from "axios";
export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? `${import.meta.env.BACKEND_BASEURL}/api`
      : `${import.meta.env.BACKEND_VERCEL}/api`,
});
