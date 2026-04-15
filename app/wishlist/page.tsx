"use client";

import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { removeFromWishlist } from "@/redux/wishlistSlice";
import ProtectedLayout from "@/components/protectesRoute";

function WishlistContent() {
  const router = useRouter();
  const dispatch = useDispatch();

  const wishlist = useSelector(
    (state: any) => state.wishlist.items
  );

  if (wishlist.length === 0) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold">
          Your Wishlist is Empty 💔
        </h2>
        <button
          onClick={() => router.push("/")}
          className="mt-4 px-6 py-2 bg-primary hover:bg-secondary text-white rounded-lg"
        >
          Browse Products
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto mb-10">
      <h1 className="text-3xl font-bold mb-6">❤️ My Wishlist</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {wishlist.map((item: any) => (
          <div key={item.id} className="rounded-xl p-2 shadow-sm">
            <div className="relative w-full h-52 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={item.thumbnail}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            <h2 className="mt-3 font-semibold">{item.title}</h2>

            <p className="text-green-600 font-bold">₹{item.price}</p>

            <div className="flex gap-2 mt-3">
              <button
                onClick={() => router.push(`/product/${item.id}`)}
                className="flex-1 bg-indigo-600 text-white py-2 rounded-lg"
              >
                View
              </button>

              <button
                onClick={() => dispatch(removeFromWishlist(item.id))}
                className="flex-1 border border-red-500 text-red-500 py-2 rounded-lg"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function WishlistPage() {
  return (
    <ProtectedLayout>
      <WishlistContent />
    </ProtectedLayout>
  );
}