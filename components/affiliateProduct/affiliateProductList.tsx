"use client";

import { useEffect, useState } from "react";
import AffiliateProducts from "./affiliateProductCard";

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
    fetch("http://localhost:5000/api/affiliate-products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <AffiliateProducts key={product._id} product={product} />
      ))}
    </div>
  );
}