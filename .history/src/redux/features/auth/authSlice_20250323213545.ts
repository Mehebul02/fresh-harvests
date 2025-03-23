import { RootState } from "@/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
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
      console.log("setUser Payload:", action.payload); // Debugging: Log the payload
      state.user = action.payload.user;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.email = null; // Reset email as well
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default persistReducer({ key: "auth", storage }, authSlice.reducer);

// Selectors
export const useCurrentToken = () => useSelector((state: RootState) => state.auth.token);
export const useCurrentUser = () => useSelector((state: RootState) => state.auth.user);