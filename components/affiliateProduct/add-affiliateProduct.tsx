import { useState } from "react";
import { addAffiliateProduct } from "@/app/services/affiliateProducts";
import { toast } from "react-toastify";

export default function AdminDashboard() {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    image: "",
    affiliateLink: "",
    source: "amazon",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const data = await addAffiliateProduct(formData);
      if (data.success) {
        toast.success(data.message || "Product added successfully");

        setFormData({
          title: "",
          price: "",
          image: "",
          affiliateLink: "",
          source: "amazon",
        });
      } else {
        toast.error(data.message || "Error adding product ❌");
      }
    } catch (error: any) {
      toast.error(error.message || "Server Error ❌");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Admin Dashboard
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="title" placeholder="Product Title" value={formData.title} onChange={handleChange} className="w-full p-2 border rounded" required />

          <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} className="w-full p-2 border rounded" required />

          <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} className="w-full p-2 border rounded" required />

          <input type="text" name="affiliateLink" placeholder="Affiliate Link" value={formData.affiliateLink} onChange={handleChange} className="w-full p-2 border rounded" required />

          <select name="source" value={formData.source} onChange={handleChange} className="w-full p-2 border rounded">
            <option value="amazon">Amazon</option>
            <option value="flipkart">Flipkart</option>
            <option value="meesho">Meesho</option>
          </select>

          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}