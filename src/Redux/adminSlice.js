// src/features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  admin: null,
  accessToken: null,
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setAdmin: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.admin = action.payload.user;
    },
    clearAdmin: (state) => {
      state.user = null;
      state.accessToken = null;
    },
   
  },
});

export const { setAdmin, clearAdmin } = adminSlice.actions;

export const adminReducer = adminSlice.reducer;
