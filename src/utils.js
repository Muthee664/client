// Function to generate an initial scribble game board
export const generateInitialBoard = () => {
  // Example board configuration; modify as needed
  const rows = 10;
  const cols = 10;
  const board = Array.from({ length: rows }, () => Array(cols).fill(null));
  
  // Add some initial values or shapes to the board as needed
  return board;
};
