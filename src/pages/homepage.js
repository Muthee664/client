// client/src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import GameComponent from './../components/gameComponent';

const HomePage = () => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Simulate fetching user ID (replace with actual logic)
    const fetchUserId = async () => {
      const response = await fetch('/api/users');
      const users = await response.json();
      setUserId(users[0]._id); // Assuming the first user for demo purposes
    };

    fetchUserId();
  }, []);

  return (
    <div>
      <h1>Welcome to the Scribble Game</h1>
      {userId ? <GameComponent userId={userId} /> : <p>Loading user data...</p>}
    </div>
  );
};

export default HomePage;
