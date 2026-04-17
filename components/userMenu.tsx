"use client";

import { useEffect, useRef, useState } from "react";
import { User } from "lucide-react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/authSlice";
import { useRouter } from "next/navigation";

export function UserMenu() {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const menuRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("persist:auth");
    setOpen(false);
    router.push("/auth/login");
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      {/* ICON */}
      <button onClick={() => setOpen(!open)}>
        <User
          size={18}
          className="cursor-pointer hover:text-primary"
        />
      </button>

      {/* DROPDOWN */}
      {open && (
        <div className="absolute right-0 mt-3 w-52 bg-white shadow-lg rounded-xl p-3 z-50">
          <p className="font-semibold text-gray-800">
            Sandhya Kumari
          </p>

          <p className="text-sm text-gray-500 mb-2">
            sandhya@email.com
          </p>

          <hr className="my-2" />

          <div className="flex flex-col gap-1">
            <Link
              href="/profile"
              onClick={() => setOpen(false)}
              className="text-sm py-1 hover:text-primary"
            >
              My Profile
            </Link>

            <Link
              href="/orders"
              onClick={() => setOpen(false)}
              className="text-sm py-1 hover:text-primary"
            >
              Orders
            </Link>

            <button
              onClick={handleLogout}
              className="text-left text-sm py-1 hover:text-red-500"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}