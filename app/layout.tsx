import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";


export const metadata: Metadata = {
  title: "ShopHub | E-Commerce Store",
  description: "A high-performance E-commerce experience built with Next.js 14 and Tailwind CSS. Featuring seamless navigation, a modern cart system, and responsive design.",
};

import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


export default function RootLayout({ children }: any) {
  return (
    <html>
      <body>
        <CartProvider>
      <WishlistProvider>
         <Toaster position="top-right" />
        <Navbar/>
          {children}
          </WishlistProvider>
          <Footer/>
          </CartProvider>
      </body>
    </html>
  );
}
