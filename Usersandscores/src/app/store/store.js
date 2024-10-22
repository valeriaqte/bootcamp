// src/app/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import scoresApi from './scoresSlice'; 

const store = configureStore({
  reducer: {
    auth: authReducer,
    [scoresApi.reducerPath]: scoresApi.reducer, // Usa scoresApi para acceder al reducer
    

  },
  
});

export default store;
