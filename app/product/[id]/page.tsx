import { getProductDetailsById } from "@/lib/api";
import Image from "next/image";
import ClientButtons from "@/components/clientButtons";
import Reviews from "@/components/reviews";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  rating?: number;
  brand?: string;
  category?: string;
  stock?: number;
  shippingInformation?: string;
  warrantyInformation?: string;
  returnPolicy?: string;
  reviews?: any[];
  availabilityStatus?: string;
};

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  try {
    const { id } = await params;
    const product: Product = await getProductDetailsById(id);

    return (
      <div className="p-6 max-w-7xl mx-auto mb-10">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="w-full ">
            <div className="relative w-full h-[400px] md:h-[600px] bg-gray-100 rounded-2xl overflow-hidden">
              <Image
                src={product.thumbnail}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4  max-h-[90vh] overflow-y-auto pr-2 no-scrollbar">
            <h1 className="text-3xl font-bold text-gray-900">
              {product.title}
            </h1>

            <p className="text-yellow-500 font-medium">
              ⭐ {product.rating || "4.5"} / 5
            </p>

            <p
              className={`text-sm font-semibold ${
                product.availabilityStatus === "In Stock"
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {product.availabilityStatus === "In Stock"
                ? "In Stock"
                : "Out of Stock"}
            </p>

            <div className="text-sm text-gray-500">
              {product.brand && <p>Brand: {product.brand}</p>}
              {product.category && <p>Category: {product.category}</p>}
            </div>

            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>

            <div className="text-3xl font-bold">₹{(product.price).toFixed(2)}</div>

            <ClientButtons product={product} />

            <div className="text-sm text-gray-500 space-y-1">
              <p>🚚 {product.shippingInformation}</p>
              <p>🔁 {product.returnPolicy}</p>
              <p>🛡️ {product.warrantyInformation}</p>
            </div>

            <Reviews reviews={product.reviews} />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="p-6 text-center text-red-500">Failed to load product</div>
    );
  }
}
