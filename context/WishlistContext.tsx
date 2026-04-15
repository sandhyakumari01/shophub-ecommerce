// D: \code\shophub - ecommerce\frontend\context\WishlistContext.tsx
"use client";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";


export const WishlistContext = createContext<any>(null);

export const WishlistProvider = ({ children }: any) => {

  const [wishlist, setWishlist] = useState<any[]>(() => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem("wishlist");
      return data ? JSON.parse(data) : [];
    }
    return [];
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  }, [wishlist, isMounted]);

  const addToWishlist = (product: any) => {
    const exist = wishlist.find((item) => item.id === product.id);

    if (exist) {
      toast("Already in wishlist ❤️");
      return;
    }

    setWishlist((prev) => [...prev, product]);
    toast.success("Added to wishlist ❤️");
  };

  const removeFromWishlist = (id: number) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
    toast.error("Removed ❌");
  };

  const toggleWishlist = (product: any) => {
    const exist = wishlist.find((item) => item.id === product.id);

    if (exist) {
      setWishlist((prev) =>
        prev.filter((item) => item.id !== product.id)
      );
      toast.error("Removed ❌");
    } else {
      setWishlist((prev) => [...prev, product]);
      toast.success("Added ❤️");
    }
  };

  if (!isMounted) return null;

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};