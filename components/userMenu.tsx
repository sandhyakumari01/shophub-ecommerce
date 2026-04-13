"use client";
import { useState } from "react";
import { User } from "lucide-react";
import Link from "next/link";

export function UserMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onClick={() => setOpen(!open)}
    >
      <User size={18} className="cursor-pointer hover:text-indigo-700" />

      {open && (
        <div className="absolute right-0 mt-3 w-52 bg-white shadow-lg rounded-xl p-3 z-50" onClick={(e) => e.stopPropagation()}>

          <p className="font-semibold text-gray-800">
            Sandhya Kumari
          </p>
          <p className="text-sm text-gray-500 mb-2">
            sandhya@email.com
          </p>

          <hr className="my-2" />

          {/* ✅ Profile Link Added */}
          <Link href="/profile">
            <button className="w-full text-left text-sm py-1 hover:text-indigo-600">
              My Profile
            </button>
          </Link>

          <button className="w-full text-left text-sm py-1 hover:text-indigo-600">
            Orders
          </button>

          <button className="w-full text-left text-sm py-1 hover:text-red-500">
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
