import React, { useState } from 'react';
import './Game.css'; // Ensure CSS is correctly applied

const Game = () => {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const startGame = () => {
    setScore(0);
    setGameOver(false);
    // Initialize or reset game logic here
  };

  const endGame = () => {
    setGameOver(true);
    // Logic to handle game over
  };

  const handleScore = (points) => {
    setScore(prevScore => prevScore + points);
  };

  return (
    <div className="game-container">
      <h1>Simple Game</h1>
      <div>
        <h2>Score: {score}</h2>
        {gameOver ? (
          <div>
            <h3>Game Over</h3>
            <button onClick={startGame}>Play Again</button>
          </div>
        ) : (
          <div className="game-buttons">
            <button onClick={() => handleScore(10)}>Add 10 Points</button>
            <button onClick={endGame}>End Game</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Game; // Ensure default export
