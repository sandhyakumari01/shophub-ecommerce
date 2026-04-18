"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

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

      <div className="relative h-56 bg-gray-100 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
      </div>


      <div className="p-4">
        <h2 className="text-sm font-semibold text-gray-800 group-hover:text-secondary line-clamp-2">
          {product?.title}
        </h2>

        {/* <p className="mt-1 text-sm text-gray-500">
          Source: {product.source || "Store"}
        </p> */}

        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">
            ₹{product.price}
          </span>
        </div>

        <Button
          onClick={() => window.open(product.affiliateLink, "_blank")}
          className="mt-3 w-full flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-white font-medium hover:bg-secondary transition cursor-pointer"
        >
          Buy Now
          <ArrowRight size={16} />
        </Button>
      </div>

    </div>
  );
}