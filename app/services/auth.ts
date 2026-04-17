import axios from "axios";

import {
  SignupPayload,
  AuthResponse,
  LoginPayload,
} from "../interface/auth.interface";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { "Content-Type": "application/json" },
});

export const AuthenticateSignup = async (
  data: SignupPayload,
): Promise<AuthResponse> => {
  try {
    const response = await axiosInstance.post("/auth/signup", data);
    return response.data;
  } catch (error: any) {
    console.error("Error call Signup", error.response);
    return error.response?.data;
  }
};

export const AuthenticateLogin = async (
  data: LoginPayload,
): Promise<AuthResponse> => {
  try {
    const response = await axiosInstance.post("/auth/login", data);
    return response.data;
  } catch (error: any) {
    console.error("Error call Login", error.response);
    return error.response?.data;
  }
};

export const AuthenticateLogout = async (): Promise<AuthResponse> => {
  try {
    const response = await axiosInstance.post("/auth/logout");
    return response.data;
  } catch (error: any) {
    console.error("Error call Logout", error.response);
    return error.response?.data;
  }
};

export const ForgotPassword = async (data: {
  email: string;
  newPassword: string;
}) => {
  try {
    const response = await axiosInstance.post("/auth/forgot-password", data);
    return response.data;
  } catch (error: any) {
    return error.response?.data;
  }
};
