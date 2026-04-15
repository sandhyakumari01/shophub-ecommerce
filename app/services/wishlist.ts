import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { "Content-Type": "application/json" },
});

export const getWishlistProducts = async (userId: string) => {
  try {
    const response = await axios.get(`${axiosInstance}/wishlist/${userId}`);
    return response.data;
  } catch (error: any) {
    console.error("Error while getting wishlist products", error.response);
    return error.response?.data;
  }
};

export const addWishlistProduct = async (userId: string, productId: number) => {
  try {
    const response = await axios.post(`${axiosInstance}/add`, {
      userId,
      productId,
    });
    return response.data;
  } catch (error: any) {
    console.error("Error while adding wishlist product", error.response);
    return error.response?.data;
  }
};

export const removeWishlistProduct = async (
  userId: string,
  productId: number,
) => {
  try {
    const response = await axios.delete(`${axiosInstance}/remove`, {
      data: { userId, productId },
    });
    return response.data;
  } catch (error: any) {
    console.error("Error while removing wishlist product", error.response);
    return error.response?.data;
  }
};
