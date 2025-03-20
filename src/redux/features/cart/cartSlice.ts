import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "@/types"; // Ensure you have a product type
import { persistReducer } from "redux-persist"; // Ensure it's imported
import storage from "redux-persist/lib/storage"; // Local storage

interface CartItem extends IProduct {
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

// Redux persist configuration
const persistConfig = {
  key: "cart", // Unique key for this reducer's state
  storage, // Using local storage
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const item = state.cartItems.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  },
});

// Wrap the cart slice reducer with persistReducer
const persistedCartReducer = persistReducer(persistConfig, cartSlice.reducer);

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default persistedCartReducer; // Export persisted reducer
