"use client";

import { ArrowRight, Star } from "lucide-react";

type Props = {
  product: any;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div className="overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-gray-100">

      <div className="relative h-56 overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {product.discount && (
          <span className="absolute top-2 left-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">
            -{product.discount}%
          </span>
        )}
      </div>

      <div className="p-3 space-y-2">

        <div className="flex items-start justify-between gap-2">
          <h2 className="truncate text-base font-semibold text-gray-800 group-hover:text-indigo-600">
            {product.title}
          </h2>

          <div className="flex items-center gap-1 text-amber-500">
            <Star size={14} fill="currentColor" />
            <span className="text-xs text-gray-500">
              {product.rating || "4.5"}
            </span>
          </div>

        </div>

        <p className="mt-1 line-clamp-2 text-sm text-gray-500">
          {product.description}
        </p>

        <div className="flex items-center justify-between pt-2">
          <div>
            <p className="text-lg font-bold text-gray-900">
              ₹{product.price}
            </p>
            {product.originalPrice && (
              <p className="text-xs text-gray-400 line-through">
                ₹{product.originalPrice}
              </p>
            )}
          </div>

          <div className="rounded-full bg-indigo-50 p-2 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white">
            <ArrowRight size={16} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;