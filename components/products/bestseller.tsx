"use client";

import ProductCard from "./product-card";

type Props = {
  products: any[];
  loading: boolean;
};

const BestSeller = ({ products, loading }: Props) => {
  const bestSellers = products?.filter((p) => p.isBestSeller);

  if (!loading && !bestSellers?.length) return null;

  if (loading) {
    return (
      <div className="p-6 space-y-4 animate-pulse">
        <div className="h-6 w-40 bg-gray-200 rounded"></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-64 bg-gray-200 rounded-xl"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-8">
      <h2 className="text-2xl font-bold mb-5">🔥 Best Sellers</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {bestSellers.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;