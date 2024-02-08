// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Others/Header';
import Login from './components/Login/Login';
import WelcomePage from './Others/WelcomePage'; 
import CompleteProfile from './Others/CompleteProfile';
import AuthGuard from './authentication/AuthGaurd';
import ExpenseTracker from './components/Expenses/ExpenseTracker';


function App() {
  
  
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/expense-tracker" element={<AuthGuard><ExpenseTracker /></AuthGuard>} />
        <Route path="/welcome" element={<AuthGuard><WelcomePage /></AuthGuard>} />
        <Route path="/complete-profile" element={<AuthGuard><CompleteProfile /></AuthGuard>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;