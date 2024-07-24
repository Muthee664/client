import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Game = () => {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem('token');

  const [targetNumber, setTargetNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleGuess = () => {
    const parsedGuess = parseInt(guess, 10);
    if (isNaN(parsedGuess)) {
      setMessage('Please enter a valid number.');
      return;
    }

    if (parsedGuess < targetNumber) {
      setMessage('Too low! Try again.');
    } else if (parsedGuess > targetNumber) {
      setMessage('Too high! Try again.');
    } else {
      setMessage('Congratulations! You guessed the number!');
      setTargetNumber(generateRandomNumber()); // Generate a new number after a correct guess
    }
  };

  return (
    <div>
      <h1>Game Page</h1>
      {isAuthenticated ? (
        <div>
          <p>Welcome back! Enjoy the game!</p>
          <div>
            <h2>Guess the Number Game</h2>
            <p>Guess a number between 1 and 100:</p>
            <input
              type="number"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              min="1"
              max="100"
            />
            <button onClick={handleGuess}>Submit Guess</button>
            <p>{message}</p>
          </div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please log in to access all features of the game.</p>
          {/* Optionally, provide a link to login or signup */}
        </div>
      )}
    </div>
  );
};

export default Game;
