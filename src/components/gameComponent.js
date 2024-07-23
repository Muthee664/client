// client/src/components/GameComponent.js
import React, { useState, useEffect } from 'react';

const GameComponent = ({ userId }) => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then(response => response.json())
      .then(data => setScore(data.score || 0))
      .catch(error => console.error('Error fetching user score:', error));
  }, [userId]);

  const handleScoreUpdate = (newScore) => {
    setScore(newScore);

    fetch(`/api/users/${userId}/score`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ score: newScore })
    })
      .then(response => response.json())
      .then(data => console.log('Score updated:', data))
      .catch(error => console.error('Error updating score:', error));
  };

  return (
    <div>
      <h2>Your Score: {score}</h2>
      {/* Game logic goes here */}
      <button onClick={() => handleScoreUpdate(score + 10)}>Increase Score</button>
    </div>
  );
};

export default GameComponent;
