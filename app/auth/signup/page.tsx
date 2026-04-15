"use client";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { AuthenticateSignup } from "@/app/services/auth";
import { Label } from "@/components/ui/label";
import { toast } from 'react-toastify';
import { useRouter } from "next/navigation";
import { loginSuccess } from "@/redux/authSlice";
import { useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import AuthRedirectLayout from "@/components/authRedirectLayout";


function SignupContent() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ name: "", email: "", password: "" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const validate = () => {
    let newErrors = { name: "", email: "", password: "" };
    let isValid = true;

    if (!formData.name) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

  }

  const handleSignup = async () => {
    if (!validate()) return;

    try {
      const response = await AuthenticateSignup(formData);

      if (response?.success || response?.message === "User created successfully") {
        toast.success(response.message || "Signup successful");


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
        toast.error(response?.message || "Signup failed");
      }
    } catch (error: any) {
      const message =
        error?.response?.data?.message || "Something went wrong";
      toast.error(message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Create Account</h2>


        <Label className="text-gray-600 my-1">Name <span className="text-red-600">*</span></Label>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mb-3">{errors.name}</p>
        )}


        <Label className="text-gray-600 my-1">Email <span className="text-red-600">*</span></Label>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mb-3">{errors.email}</p>
        )}

        <div className="relative mb-3">
          <Label className="text-gray-600 my-1">Password <span className="text-red-600">*</span></Label>
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded pr-10"
          />

          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-[67%] -translate-y-1/2 cursor-pointer text-gray-600"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm mb-3">{errors.password}</p>
        )}

        <Button
          onClick={handleSignup}
          className="w-full bg-primary hover:bg-secondary text-white  rounded py-5 cursor-pointer "
        >
          Signup
        </Button>

        <p className="text-sm mt-3">
          Already have account? <a href="/auth/login" className="text-indigo-600">Login</a>
        </p>
      </div>
    </div>
  );
}
export default function SignupPage() {
  return (
    <AuthRedirectLayout>
      <SignupContent />
    </AuthRedirectLayout>
  );
}