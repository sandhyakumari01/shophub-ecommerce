"use client";

import { useState } from "react";
import { User } from "lucide-react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/authSlice";
import { useRouter } from "next/navigation";

export function UserMenu() {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("persist:auth");
    setOpen(false);
    router.push("/auth/login");
  };

  return (
    <div className="relative" onClick={() => setOpen(!open)}>
      <User size={18} className="cursor-pointer hover:text-primary" />

      {open && (
        <div
          className="absolute right-0 mt-3 w-52 bg-white shadow-lg rounded-xl p-3 z-50"
          onClick={(e) => e.stopPropagation()}
        >
          <p className="font-semibold text-gray-800">Sandhya Kumari</p>
          <p className="text-sm text-gray-500 mb-2">
            sandhya@email.com
          </p>

          <hr className="my-2" />

          <Link href="/profile">
            <button className="w-full text-left text-sm py-1 hover:text-primary cursor-pointer">
              My Profile
            </button>
          </Link>

          <button className="w-full text-left text-sm py-1 hover:text-primary cursor-pointer">
            Orders
          </button>

          <button
            onClick={handleLogout}
            className="w-full text-left text-sm py-1 hover:text-red-500 cursor-pointer"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}