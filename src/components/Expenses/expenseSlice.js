// expensesSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const expensesSlice = createSlice({
  name: 'expenses',
  initialState: {
    list: [],
  },
  reducers: {
    setExpenses: (state, action) => {
      state.list = action.payload;
    },
    addExpense: (state, action) => {
      state.list = [...state.list, action.payload];
    },
    deleteExpense: (state, action) => {
      state.list = state.list.filter(expense => expense.id !== action.payload);
    },
    updateExpense: (state, action) => {
      state.list = state.list.map(expense =>
        expense.id === action.payload.id ? { ...expense, ...action.payload.updatedExpense } : expense
      );
    },
  },
});

export const { setExpenses, addExpense, deleteExpense, updateExpense } = expensesSlice.actions;

export const selectExpenses = state => state.expenses.list;

export default expensesSlice.reducer;