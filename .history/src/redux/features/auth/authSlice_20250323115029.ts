import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null, 
  token: null, 
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log("Payload received in setUser:", action.payload); // Debugging line

      state.user = action.payload?.user || null;
      state.token = action.payload?.token || null;
    },
    logoutUser: (state) => {
      console.log("User logged out"); // Debugging line
      state.user = null;
      state.token = null;
    },
  },
})

export const { setUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
