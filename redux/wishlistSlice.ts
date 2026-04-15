import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

interface WishlistState {
  items: Product[];
}

const initialState: WishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<Product>) => {
      const exist = state.items.find((item) => item.id === action.payload.id);

      if (exist) {
        toast.info("Product is already in the wishlist ❤️");
      } else {
        state.items.push(action.payload);
        toast.success("Product added to wishlist ❤️");
      }
    },

    removeFromWishlist: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      toast.error("Product removed from wishlist ❌");
    },

    toggleWishlist: (state, action: PayloadAction<Product>) => {
      const exist = state.items.find((item) => item.id === action.payload.id);

      if (exist) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id,
        );
        toast.error("Product removed from wishlist ❌");
      } else {
        state.items.push(action.payload);
        toast.success("Product added to wishlist ❤️");
      }
    },
  },
});

export const { addToWishlist, removeFromWishlist, toggleWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
