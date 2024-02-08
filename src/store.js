// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authentication/authSlice';
import expenseReducer from './components/Expenses/expenseSlice';
import themeReducer from './components/Expenses/themeSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    expenses: expenseReducer,
    theme: themeReducer,
  }
});

export default store;