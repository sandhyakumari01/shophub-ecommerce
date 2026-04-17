import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { "Content-Type": "application/json" },
});

export const getAffiliateProducts = async () => {
  try {
    const response = await axiosInstance.get("/affiliate-products");
    return response.data;
  } catch (error: any) {
    console.error("GET API Error:", error);
    throw error.response?.data || { message: "Something went wrong" };
  }
};
