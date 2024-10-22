// src/app/store/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    user: null,
  },
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload;
      // Guardar credenciales en Session Storage
      sessionStorage.setItem('user', JSON.stringify(action.payload));
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
      // Eliminar credenciales de Session Storage
      sessionStorage.removeItem('user');
    },
    checkSession(state) {
      const user = JSON.parse(sessionStorage.getItem('user'));
      if (user) {
        state.isLoggedIn = true;
        state.user = user;
      }
    },
  },
});

export const { login, logout, checkSession } = authSlice.actions;

export default authSlice.reducer;
