import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Game from './components/Game'; // Ensure this matches the filename and export
import './App.css';

const App = () => {
  const isAuthenticated = () => !!localStorage.getItem('token');

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <a href="/">Home</a> | 
            <a href="/signup">Signup</a> | 
            <a href="/login">Login</a>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<h1>Welcome to Our Application!</h1>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route 
              path="/game" 
              element={isAuthenticated() ? <Game /> : <Navigate to="/login" />} 
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
