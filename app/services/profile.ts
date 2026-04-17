import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { "Content-Type": "application/json" },
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const getUserProfile = async () => {
  try {
    const response = await axiosInstance.get("/profile");
    return response.data;
  } catch (error: any) {
    console.error("Error while getting user profile", error);
    return error.response?.data;
  }
};

export const updateProfile = async (data: any) => {
  try {
    const response = await axiosInstance.put("/profile", data);
    return response.data;
  } catch (error: any) {
    console.error("Error while updating user profile", error);
    return error.response?.data;
  }
};
