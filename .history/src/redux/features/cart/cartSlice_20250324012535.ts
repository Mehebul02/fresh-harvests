import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "@/types"; // Ensure you have a product type
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Local storage

interface CartItem extends IProduct {
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
  favorites: IProduct[]; // Added favorites array
}

const initialState: CartState = {
  cartItems: [],
  favorites: [],
};

// Redux persist configuration
const persistConfig = {
  key: "cart",
  storage,
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
    addToFavorites: (state, action: PayloadAction<IProduct>) => {
      const exists = state.favorites.find((item) => item.id === action.payload.id);
      if (!exists) {
        state.favorites.push(action.payload);
      }
    },
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter((item) => item.id !== action.payload);
    },
  },
});

const persistedCartReducer = persistReducer(persistConfig, cartSlice.reducer);

export const { 
  addToCart, 
  removeFromCart, 
  updateQuantity, 
  addToFavorites, 
  removeFromFavorites 
} = cartSlice.actions;

export default persistedCartReducer;
