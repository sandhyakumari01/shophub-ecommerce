import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "ShopHub | E-Commerce Store",
  description: "A high-performance E-commerce experience built with Next.js 14 and Tailwind CSS. Featuring seamless navigation, a modern cart system, and responsive design.",
};

import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { ToastContainer } from "react-toastify";
import Providers from "./provider";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });


export default function RootLayout({ children }: any) {
  return (
    <html className={cn("font-sans", geist.variable)}>
      <body className="min-h-screen flex flex-col">
        <Providers>
          <CartProvider>
            <WishlistProvider>
              <ToastContainer
                autoClose={2000}
                newestOnTop
              />

              <Navbar />
              <main className="flex-1">
                {children}
              </main>
              <Footer />

            </WishlistProvider>
          </CartProvider>
        </Providers>
      </body>
    </html>
  );
}
