"use client";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CartContext } from "@/context/CartContext";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import Link from "next/link";
import CartSkeleton from "@/components/skeleton/cartSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "@/redux/cartSlice";
import ProtectedLayout from "@/components/protectesRoute";

function CartContent() {
  const router = useRouter();
  const dispatch = useDispatch();

  const cart = useSelector((state: any) => state.cart.items);
  // const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const subtotal = cart.reduce(
    (acc: any, item: any) => acc + item.price * (item.quantity || 1),
    0,
  );
  const shipping = subtotal > 1000 ? 0 : 99;
  const total = subtotal + shipping;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <CartSkeleton />;
  }

  if (cart.length === 0) {
    return (
      <div className="flex h-[60vh] flex-col items-center justify-center gap-4 text-center">
        <div className="rounded-full bg-gray-100 p-6 text-gray-400">
          <ShoppingBag size={48} />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Your cart is empty</h2>
        <p className="text-gray-500">
          Looks like you haven't added anything yet.
        </p>
        <Link
          href="/"
          className="mt-2 rounded-full bg-indigo-600 px-8 py-3 font-semibold text-white transition-all hover:bg-indigo-700"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl p-6 lg:p-12 mb-10">
      <h1 className="mb-8 text-3xl font-black tracking-tight text-gray-900">
        Your Bag
      </h1>

      <div className="grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6  max-h-[700px] overflow-y-auto  no-scrollbar">
          {cart.map((item: any) => (
            <div
              key={item.id}
              className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-hover hover:shadow-md"
            >
              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-gray-50">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-bold text-gray-800">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.category}</p>
                  </div>
                  <button
                    // onClick={() => removeFromCart(item.id)}
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="text-gray-400 transition-colors hover:text-red-500 cursor-pointer"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
                <span className="text-[14px] font-black text-gray-900 block md:hidden my-2">
                  ₹{(item.price * (item.quantity || 1)).toFixed(2)}
                </span>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 rounded-lg border border-gray-200 px-2 py-1">
                    <button
                      // onClick={() =>
                      //   updateQuantity(item.id, (item.quantity || 1) - 1)
                      // }
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: (item.quantity || 1) - 1,
                          })
                        )
                      }
                      className="rounded p-1 transition-colors hover:bg-gray-100 cursor-pointer"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-4 text-center text-sm font-bold">
                      {item.quantity || 1}
                    </span>
                    <button
                      // onClick={() =>
                      //   updateQuantity(item.id, (item.quantity || 1) + 1)
                      // }
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: (item.quantity || 1) + 1,
                          })
                        )
                      }
                      className="rounded p-1 transition-colors hover:bg-gray-100 cursor-pointer"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <span className="text-lg font-black text-gray-900 hidden md:block">
                    ₹{(item.price * (item.quantity || 1)).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="h-fit rounded-3xl bg-gray-50 p-8">
          <h2 className="text-xl font-bold text-gray-900">Order Summary</h2>

          <div className="mt-6 space-y-4">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span className="font-semibold">₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span
                className={`font-semibold ${shipping === 0 ? "text-green-600" : "text-gray-900"}`}
              >
                {shipping === 0 ? "Free" : `₹${shipping.toFixed(2)}`}
              </span>
            </div>
            <hr className="border-gray-200" />
            <div className="flex justify-between text-lg font-bold text-gray-900">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={() => router.push("/checkout")}
            className="mt-8 w-full rounded-2xl bg-indigo-600 py-4 font-bold text-white transition-all hover:bg-indigo-700 hover:shadow-lg active:scale-95 cursor-pointer"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
export default function CartPage() {
  return (
    <ProtectedLayout>
      <CartContent />
    </ProtectedLayout>
  );
}