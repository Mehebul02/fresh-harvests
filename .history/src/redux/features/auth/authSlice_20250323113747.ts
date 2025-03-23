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
      state.user = action.payload.user || null;
      state.token = action.payload?.token || null;
    },
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
    },
  },
})

export const { setUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
