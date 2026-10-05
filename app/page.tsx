"use client";

import { useEffect, useState } from "react";

import Products from "@/components/productCard";
import AffiliateProductsList from "@/components/affiliateProduct/affiliateProductList";
import BannerCarousel from "./banner/page";
import AffiliateProductBanner from "@/components/affiliateProduct/affiliateCarousel";

import BestSeller from "@/components/products/bestseller";
import FeatureProduct from "@/components/products/featureProduct";

import { getProducts } from "@/app/services/product";

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getProducts();
        setProducts(res?.data || res || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mx-8 space-y-10">
      <Products />
      <AffiliateProductBanner />
      <AffiliateProductsList />
      <BannerCarousel />

      <BestSeller products={products} loading={loading} />
      <FeatureProduct products={products} loading={loading} />
    </div>
  );
}