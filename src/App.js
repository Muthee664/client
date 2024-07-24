import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Game from './components/Game'; 
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <a href="/game">Game</a> | 
            <a href="/signup">Signup</a> | 
            <a href="/login">Login</a>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Game />} />  {/* Set Game as the landing page */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
