"use client";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Create Account</h2>

        <input type="text" placeholder="Name" className="w-full p-2 border rounded mb-3" />

        <input type="email" placeholder="Email" className="w-full p-2 border rounded mb-3" />

        <div className="relative mb-3">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full p-2 border rounded pr-10"
          />

          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button className="w-full bg-green-600 text-white py-2 rounded">Signup</button>

        <p className="text-sm mt-3">
          Already have account? <a href="/auth/login" className="text-indigo-600">Login</a>
        </p>
      </div>
    </div>
  );
}
