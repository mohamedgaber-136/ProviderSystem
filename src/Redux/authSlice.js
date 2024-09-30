// src/features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  accessToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    },
    clearUser: (state) => {
      state.user = null;
      state.accessToken = null;
    },
    updateWishlist: (state, action) => {
      const { payload, type } = action.payload;
      if (type === "add") {
        state.user.wishlist.push(payload);
      } else if (type === "remove") {
        state.user.wishlist = state.user.wishlist.filter(
          (item) => item.product_id !== payload
        );
      }
    },
  },
});

export const { setUser, clearUser, updateWishlist } = authSlice.actions;

export const authReducer = authSlice.reducer;
