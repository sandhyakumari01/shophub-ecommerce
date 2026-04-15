"use client";

import { useEffect, useState } from "react";
import AffiliateProducts from "./affiliateProductCard";
import AdminDashboard from "./add-affiliateProduct";
import { getAffiliateProducts } from "@/app/services/affiliateProducts";

interface Product {
  _id: string;
  title: string;
  price: number;
  image: string;
  affiliateLink: string;
  source?: string;
}

export default function AffiliateProductsList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAffiliateProducts();
        setProducts(response.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <AffiliateProducts key={product._id} product={product} />
        ))}
      </div>

      <div className="mt-10">
        <AdminDashboard />
      </div>
    </div>
  );
}