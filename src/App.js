// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import WelcomePage from './Others/WelcomePage'; 
import CompleteProfile from './Others/CompleteProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/complete-profile" element={<CompleteProfile />} />
      </Routes>
    </Router>
  );
}
export default App;