// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: localStorage.getItem('token') || '',
  userEmail: localStorage.getItem('userEmail') || '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  
  reducers: {
    login: (state, action) => {
      const { token, userEmail} = action.payload;
      state.token = token;
      state.userEmail = userEmail;
      localStorage.setItem('token', token);
      localStorage.setItem('userEmail', userEmail);
    },
    logout: (state) => {
      state.token = '';
      state.userEmail = '';
      localStorage.removeItem('token');
      localStorage.removeItem('userEmail');
      localStorage.removeItem('postId');
    }, 
  },
});


export const selectIsLoggedIn = (state) => !!(state.auth.token);

export const { login, logout} = authSlice.actions;

export default authSlice.reducer;