import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { "Content-Type": "application/json" },
});

export const getBanners = async () => {
  try {
    const response = await axiosInstance.get(`/banner`);
    return response.data;
  } catch (error: any) {
    console.error("Error while fetching banners:", error.response);
    return error.response.data;
  }
};
