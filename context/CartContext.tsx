"use client";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const CartContext = createContext<any>(null);

export const CartProvider = ({ children }: any) => {

  const [cart, setCart] = useState<any[]>(() => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem("cart");
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
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, isMounted]);

  const addToCart = (product: any) => {
    const exist = cart.find((item) => item.id === product.id);

    if (exist) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        )
      );
      toast.success("Quantity increased 🛒");
    } else {
      setCart((prev) => [...prev, { ...product, quantity: 1 }]);
      toast.success("Added to cart 🛒");
    }
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    toast.error("Item removed ❌");
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;

    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );

    toast("Quantity updated");
  };

  if (!isMounted) return null;

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};