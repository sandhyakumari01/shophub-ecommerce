"use client";

import { ArrowRight } from "lucide-react";

interface Product {
  _id: string;
  title: string;
  price: number;
  image: string;
  affiliateLink: string;
  source?: string;
}

export default function AffiliateProducts({
  product,
}: {
  product: Product;
}) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-gray-100">

      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="truncate text-base font-semibold text-gray-800 group-hover:text-indigo-600">
          {product.title}
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Source: {product.source || "Store"}
        </p>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">
            ₹{product.price}
          </span>

          <button
            onClick={() => window.open(product.affiliateLink, "_blank")}
            className="rounded-full bg-indigo-50 p-2 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}