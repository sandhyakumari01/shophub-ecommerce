"use client";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ForgotPassword } from "@/app/services/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function ForgotPasswordPage() {
  const router = useRouter();

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async () => {
    if (!email || !newPassword || !confirmPassword) {
      toast.error("All fields are required");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const response = await ForgotPassword({
      email,
      newPassword,
    });

    if (response?.success) {
      toast.success(response.message || "Password updated");

      setTimeout(() => {
        router.push("/auth/login");
      }, 1500);
    } else {
      toast.error(response?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Reset Password</h2>

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full p-2 border rounded mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="relative mb-3">
          <input
            type={showNewPassword ? "text" : "password"}
            placeholder="New Password"
            className="w-full p-2 border rounded pr-10"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <span
            onClick={() => setShowNewPassword(!showNewPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
          >
            {showNewPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <div className="relative mb-3">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className="w-full p-2 border rounded pr-10"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <span
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>


        <Button
          onClick={handleSubmit}
          className="w-full  text-white py-5 rounded cursor-pointer "
        >
          Reset Password
        </Button>

        <div className="flex justify-between text-sm mt-3">
          <a href="/auth/login" className="text-indigo-600 hover:underline">
            Login
          </a>

          <a href="/auth/signup" className="text-indigo-600 hover:underline">
            SignUp
          </a>
        </div>
      </div>
    </div>
  );
}