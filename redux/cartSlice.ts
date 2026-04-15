import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  quantity?: number;
}

interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const exist = state.items.find((item) => item.id === action.payload.id);

      if (exist) {
        state.items = state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item,
        );
        toast.success("Quantity increased 🛒");
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
        toast.success("Added to cart 🛒");
      }
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      toast.error("Item removed ❌");
    },

    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>,
    ) => {
      const { id, quantity } = action.payload;

      if (quantity < 1) return;

      state.items = state.items.map((item) =>
        item.id === id ? { ...item, quantity } : item,
      );

      toast("Quantity updated");
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
