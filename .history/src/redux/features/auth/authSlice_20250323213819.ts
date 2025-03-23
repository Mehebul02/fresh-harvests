import { RootState } from "@/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";



type TAuthState = {
  user: null | string;
  token: null | string;
  email: null | string;
};

const initialState: TAuthState = {
  user: null,
  token: null,
  email: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<TAuthState>) => {
      console.log("setUser Payload:", action.payload); 
      state.user = action.payload?.user || null;
      state.email = action.payload?.email || null;
      state.token = action.payload?.token || null;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default persistReducer({ key: "auth", storage }, authSlice.reducer);

// Selectors
export const useCurrentToken = (state: RootState) => state.auth.token;
export const selectCurrentUser = (state: RootState) => state.auth.user;
