// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authentication/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
  }
});

export default store;