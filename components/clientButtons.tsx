// D: \code\shophub - ecommerce\frontend\components\clientButtons.tsx
"use client";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { CartContext } from "@/context/CartContext";
import { WishlistContext } from "@/context/WishlistContext";
import { addToWishlist } from "@/redux/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/cartSlice";

export default function ClientButtons({ product }: any) {
  const dispatch = useDispatch();
  const router = useRouter();
  // const { cart, addToCart } = useContext(CartContext);
  // const { wishlist, addToWishlist } = useContext(WishlistContext);


  // const isInCart = cart.some((item: any) => item.id === product.id);
  // const isInWishlist = wishlist.some((item: any) => item.id === product.id);

  const cart = useSelector((state: any) => state.cart.items);
  const wishlist = useSelector(
    (state: any) => state.wishlist.items
  );

  const isInCart = cart.some((item: any) => item.id === product.id);
  const isInWishlist = wishlist.some(
    (item: any) => item.id === product.id
  );

  const isOutOfStock =
    product.availabilityStatus !== "In Stock";

  return (
    <div className="flex gap-4 mt-4">

      {isOutOfStock ? (
        <button
          disabled
          className="flex-1 bg-gray-400 text-white py-3 rounded-xl cursor-not-allowed"
        >
          Out of Stock
        </button>
      ) : isInCart ? (
        <button
          onClick={() => router.push("/cart")}
          className="flex-1 bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition cursor-pointer"
        >
          Go to Cart 🛒
        </button>
      ) : (
        <button
          // onClick={() => addToCart(product)}
          onClick={() => dispatch(addToCart(product))}
          className="flex-1 bg-primary text-white py-3 rounded-xl hover:bg-secondary transition cursor-pointer"
        >
          Add to Cart 🛒
        </button>
      )}

      {/* WISHLIST BUTTON */}
      {isInWishlist ? (
        <button
          onClick={() => router.push("/wishlist")}
          className="flex-1 border border-red-500 text-red-500 py-3 rounded-xl hover:bg-red-50 transition cursor-pointer"
        >
          Go to Wishlist ❤️
        </button>
      ) : (
        <button
          // onClick={() => addToWishlist(product)}
          onClick={() => dispatch(addToWishlist(product))}
          className="flex-1 border py-3 rounded-xl hover:bg-gray-100 transition cursor-pointer"
        >
          ❤️ Wishlist
        </button>
      )}

    </div>
  );
}