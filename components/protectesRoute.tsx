"use client";

import { useSelector } from "react-redux";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedLayout({ children }: any) {
  const router = useRouter();
  const pathname = usePathname();

  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated
  );

  useEffect(() => {
    if (!isAuthenticated) {
      router.push(`/auth/login?redirect=${pathname}`);
    }
  }, [isAuthenticated, pathname]);

  if (!isAuthenticated) return null;

  return children;
}