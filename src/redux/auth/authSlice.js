import { createSlice } from '@reduxjs/toolkit';

import { getCurrentUser, logOutUser, loginUser, registerUser } from './authOperations';

const authSlice = createSlice({
  name: 'auth',

  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.user = payload.user;
        state.token = payload.token;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.user = payload.user;
        state.token = payload.token;
      })
      .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.user.name = payload.name;
        state.user.email = payload.email;
      })
      .addCase(logOutUser.fulfilled, (state, { payload }) => {
        state.isLoggedIn = false;
        state.user = { name: null, email: null };
        state.token = null;
      });
  },
});

export default authSlice.reducer;
