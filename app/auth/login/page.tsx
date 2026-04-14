"use client";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { AuthenticateLogin } from "@/app/services/auth";
import { toast } from "react-toastify";
import { loginSuccess } from "@/redux/authSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setError] = useState({ email: "", password: "" })

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = async () => {

    let hasError = false;

    if (!formData.email) {
      setError((prev) => ({ ...prev, email: "Email is required" }));
      hasError = true;
    }

    if (!formData.password) {
      setError((prev) => ({ ...prev, password: "Password is required" }));
      hasError = true;
    }

    if (hasError) return;

    try {
      const response = await AuthenticateLogin(formData)
      if (response?.success) {
        toast.success(response.message || "Login successful");
        if (response?.success && response?.user) {
          dispatch(
            loginSuccess({
              user: response.user,
              isAuthenticated: true,
            })
          );
        }
        setTimeout(() => {
          router.push("/");
        }, 1500);
      } else {
        toast.error(response?.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
    }

  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <Label className="text-gray-600 my-1">Email <span className="text-red-600">*</span></Label>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded mb-3"
          value={formData.email}
          onChange={handleInputChange}
          name="email"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mb-3">{errors.email}</p>
        )}
        <div className="relative mb-3">
          <Label className="text-gray-600 my-1">Password <span className="text-red-600">*</span></Label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full p-2 border rounded pr-10"
            value={formData.password}
            onChange={handleInputChange}
            name="password"
          />

          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm mb-3">{errors.password}</p>
        )}

        <Button
          onClick={handleSubmit}
          className="w-full bg-primary text-white py-5 rounded cursor-pointer">
          Login
        </Button>

        <p className="text-sm mt-3">
          Forgot Password?{" "}
          <a href="/auth/forgot-password" className="text-indigo-600">
            Click here
          </a>
        </p>

        <p className="text-sm mt-2">
          Don't have account?{" "}
          <a href="/auth/signup" className="text-indigo-600">
            Signup
          </a>
        </p>
      </div>
    </div>
  );
}