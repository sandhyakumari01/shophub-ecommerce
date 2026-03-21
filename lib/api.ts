export const getProducts = async () => {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
};

export const getProductDetailsById = async (id: string) => {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("API ERROR:", res.status);
      throw new Error("Failed to fetch product");
    }

    return res.json();
  } catch (error) {
    console.error("FETCH ERROR:", error);
    throw error;
  }
};