"use client";
import { useState, useEffect } from "react";
import {
  ShoppingCart,
  Heart,
  Store,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { UserMenu } from "./userMenu";
import { Button } from "./ui/button";
import { useRouter, usePathname } from "next/navigation";
import { useSelector } from "react-redux";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const { isAuthenticated } = useSelector((state: any) => state.auth);
  const cart = useSelector((state: any) => state.cart.items);
  const wishlist = useSelector((state: any) => state.wishlist.items);

  const toggleMenu = () => setIsOpen(!isOpen);


  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="sticky top-0 z-50 w-full shadow-md bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">

        <Link href="/" className="flex items-center gap-2">
          <div className="rounded-lg bg-primary p-1.5 text-white">
            <Store size={22} />
          </div>
          <span className="text-2xl font-black tracking-tight text-gray-900">
            Shop<span className="text-primary">Hub</span>
          </span>
        </Link>


        <div className="hidden md:flex items-center gap-8">
          <NavLinks
            cartCount={cart.length}
            wishlistCount={wishlist.length}
          />
          <AuthSection
            isAuthenticated={isAuthenticated}
            router={router}
          />
        </div>


        <div className="md:hidden flex items-center gap-3">

          {isAuthenticated ? (
            <UserMenu />
          ) : (
            <Button
              size="sm"
              onClick={() => router.push("/auth/login")}
            >
              Login
            </Button>
          )}


          <button
            className="p-2 text-gray-600"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </div>


      {isOpen && (
        <div className="md:hidden border-t bg-white p-4 flex flex-col gap-4 animate-in slide-in-from-top">

          <NavLinks
            cartCount={cart.length}
            wishlistCount={wishlist.length}
            mobile
            onClose={() => setIsOpen(false)}
          />

        </div>
      )}
    </nav>
  );
}

/* ================= NAV LINKS ================= */

function NavLinks({
  cartCount,
  wishlistCount,
  mobile = false,
  onClose,
}: any) {
  const linkClass = mobile
    ? "flex items-center gap-3 text-lg py-2 w-full"
    : "relative flex items-center gap-1 hover:text-primary transition-colors";

  return (
    <>
      <Link
        href="/wishlist"
        className={linkClass}
        onClick={onClose} // ✅ CLOSE MENU
      >
        <div className="relative">
          <Heart size={20} />
          {wishlistCount > 0 && (
            <span className="absolute -top-2 -right-2 text-[10px] bg-red-500 text-white rounded-full h-4 w-4 flex items-center justify-center">
              {wishlistCount}
            </span>
          )}
        </div>
        Wishlist
      </Link>

      <Link
        href="/cart"
        className={linkClass}
        onClick={onClose} // ✅ CLOSE MENU
      >
        <div className="relative">
          <ShoppingCart size={20} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 text-[10px] bg-primary text-white rounded-full h-4 w-4 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </div>
        Cart
      </Link>
    </>
  );
}

/* ================= AUTH SECTION ================= */

function AuthSection({ isAuthenticated, router }: any) {
  return isAuthenticated ? (
    <UserMenu />
  ) : (
    <Button
      className="w-full md:w-auto"
      onClick={() => router.push("/auth/login")}
    >
      Login
    </Button>
  );
}