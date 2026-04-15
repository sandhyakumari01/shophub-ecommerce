"use client";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import { ShoppingCart, Heart, Store } from "lucide-react";
import Link from "next/link";
import { UserMenu } from "./userMenu";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function Navbar() {
  const router = useRouter();
  const { isAuthenticated } = useSelector((state: any) => state.auth);
  // const { cart } = useContext(CartContext);

  const cart = useSelector(
    (state: any) => state.cart.items
  );
  const wishlist = useSelector(
    (state: any) => state.wishlist.items
  );

  return (
    <nav className="sticky top-0 z-50 w-full shadow-md bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">

        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-primary p-1.5 text-white">
              <Store size={22} />
            </div>
            <span className="text-2xl font-black tracking-tight text-gray-900">
              Shop<span className="text-primary">Hub</span>
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-6">


          <Link href="/wishlist" className="relative flex items-center gap-1">
            <Heart size={18} />
            Wishlist
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1">
                {wishlist.length}
              </span>
            )}
          </Link>

          <Link href="/cart" className="relative flex items-center gap-1">
            <ShoppingCart size={18} />
            Cart
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 text-xs bg-primary text-white rounded-full px-1">
                {cart.length}
              </span>
            )}
          </Link>

          {isAuthenticated ? (
            <UserMenu />
          ) : (
            <Button
              className="p-3 rounded-md"
              onClick={() => router.push("/auth/login")}
            >
              Login
            </Button>
          )}

        </div>
      </div>
    </nav>
  );
}