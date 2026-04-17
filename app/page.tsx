import AffiliateProductsList from "@/components/affiliateProduct/affiliateProductList";
import Products from "@/components/productCard";
import BannerCarousel from "./banner/page";
import AffiliateProductBanner from "@/components/affiliateProduct/affiliateCarousel";


export default function Home() {
  return (
    <div className="mx-8">
      <Products />
      <AffiliateProductBanner />
      <AffiliateProductsList />
      <BannerCarousel />
    </div>
  );
}