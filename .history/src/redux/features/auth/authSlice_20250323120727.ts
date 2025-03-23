import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,  // Set initial state to null
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user || null; // Ensuring null or undefined values
      state.token = action.payload?.token || null;
    },
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
