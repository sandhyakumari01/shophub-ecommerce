"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { getProducts } from "@/lib/api";
import ProductCardSkeleton from "./skeleton/productSkeleton";

export default function Products() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data.products);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);


  if (loading) {
    return (
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-8">
        {[...Array(8)].map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="p-6 mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-8">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="group block w-full"
          >
            <div className="overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-gray-100">

              <div className="relative h-56 overflow-hidden bg-gray-100">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {product.discountPercentage && (
                  <span className="absolute left-3 top-3 rounded-full bg-indigo-600 px-2 py-1 text-xs font-bold text-white">
                    -{Math.round(product.discountPercentage)}%
                  </span>
                )}
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between gap-2">
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

                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-gray-900">
                      ₹{product.price}
                    </span>
                  </div>

                  <div className="rounded-full bg-indigo-50 p-2 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>

            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}