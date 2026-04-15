"use client";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import { CreditCard, Truck, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useSelector } from "react-redux";
import ProtectedLayout from "@/components/protectesRoute";

function CheckoutContent() {
  // const { cart } = useContext(CartContext);
  const cart = useSelector((state: any) => state.cart.items)

  const subtotal = cart.reduce((acc: number, item: any) => acc + (item.price * (item.quantity || 1)), 0);
  const shipping = subtotal > 1000 ? 0 : 99;
  const total = subtotal + shipping;



  return (
    <div className="min-h-screen bg-gray-50/50 pb-20 mb-10">
      <div className="mx-auto max-w-6xl px-4 pt-10">

        <Link href="/cart" className="mb-6 flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-primary transition-colors">
          <ChevronLeft size={16} />
          Back to Cart
        </Link>

        <div className="grid gap-10 lg:grid-cols-12">

          <div className="lg:col-span-7">
            <h1 className="text-3xl font-black text-gray-900 mb-8">Checkout</h1>

            <section className="rounded-3xl bg-white p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-indigo-100 p-2 rounded-lg text-primary">
                  <Truck size={20} />
                </div>
                <h2 className="text-xl font-bold text-gray-800">Shipping Information</h2>
              </div>

              <form className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase text-gray-400 ml-1">Full Name</label>
                    <input type="text" placeholder="Enter Your Name" className="w-full rounded-xl border border-gray-200 p-3 outline-none focus:border-primary transition-all bg-gray-50/50" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase text-gray-400 ml-1">Email Address</label>
                    <input type="email" placeholder="Enter Your Email" className="w-full rounded-xl border border-gray-200 p-3 outline-none focus:border-primary transition-all bg-gray-50/50" />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase text-gray-400 ml-1">Street Address</label>
                  <textarea rows={3} placeholder="House no, Street name, Landmark" className="w-full rounded-xl border border-gray-200 p-3 outline-none focus:border-primary transition-all bg-gray-50/50" />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <input placeholder="City" className="rounded-xl border border-gray-200 p-3 outline-none focus:border-primary transition-all bg-gray-50/50" />
                  <input placeholder="State" className="rounded-xl border border-gray-200 p-3 outline-none focus:border-primary transition-all bg-gray-50/50" />
                  <input placeholder="Pincode" className="rounded-xl border border-gray-200 p-3 outline-none focus:border-primary transition-all bg-gray-50/50" />
                </div>
              </form>
            </section>


          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-24 rounded-3xl  p-8 shadow-2xl">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>

              <div className="max-h-[300px] overflow-y-auto pr-2 space-y-4 mb-8 custom-scrollbar">
                {cart.map((item: any) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-xl bg-gray-200">
                      <img src={item.thumbnail} alt={item.title} className="h-full w-full object-cover" />
                      <span className="absolute -top-1 -right-1 bg-white text-indigo-900 text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center">
                        {item.quantity || 1}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold line-clamp-1">{item.title}</h4>
                      <p className="text-xs  capitalize">{item.category}</p>
                    </div>
                    <span className="font-bold">₹{(item.price * (item.quantity || 1)).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 border-t border-white/10 pt-6">
                <div className="flex justify-between ">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between ">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "FREE" : `₹${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-xl font-black pt-2">
                  <span>Total</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
              </div>

              <button className="mt-8 w-full rounded-2xl text-white py-4 font-extrabold bg-primary  transition-all hover:bg-secondary hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 cursor-pointer">
                <CreditCard size={20} />
                Pay Now
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <ProtectedLayout>
      <CheckoutContent />
    </ProtectedLayout>
  );
}