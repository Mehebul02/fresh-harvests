// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  user: null, // Ensure user is initialized here if needed
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
    },
    setUser: (state, action) => {
      state.user = action.payload; // Example: Ensure user is defined in cart if used
    },
  },
});

export const { addItem, removeItem, setUser } = cartSlice.actions;
export default cartSlice.reducer;
