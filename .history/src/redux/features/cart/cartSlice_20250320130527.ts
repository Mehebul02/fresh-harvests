import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "@/types"; // Ensure you have a product type

interface CartItem extends IProduct {
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
      addToCart: (state, action) => {
        const item = state.cart.find((product) => product.id === action.payload.id);
        if (item) {
          item.quantity += action.payload.quantity;
        } else {
          state.cart.push({ ...action.payload, quantity: 1 });
        }
      },
      removeFromCart: (state, action) => {
        state.cart = state.cart.filter((product) => product.id !== action.payload);
      },
      increaseQuantity: (state, action) => {
        const item = state.cart.find((product) => product.id === action.payload);
        if (item) {
          item.quantity += 1;
        }
      },
      decreaseQuantity: (state, action) => {
        const item = state.cart.find((product) => product.id === action.payload);
        if (item && item.quantity > 1) {
          item.quantity -= 1;
        } else {
          // If the quantity is 1, remove the item from the cart
          state.cart = state.cart.filter((product) => product.id !== action.payload);
        }
      },
    },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
