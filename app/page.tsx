import AffiliateProductsList from "@/components/affiliateProduct/affiliateProductList";
import Products from "@/components/productCard";


export default function Home() {
  return (
    <div>
      {/* <h1>Normal Products</h1> */}
      <Products />

      {/* <h1>Affiliate Products</h1> */}
      <AffiliateProductsList />
    </div>
  );
}