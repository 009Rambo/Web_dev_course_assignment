const GRID_SIZE = 20;
const MOVE_DELAY_MS = 300;

let currentPosition = { x: 0, y: 0 };
let currentDirection = 'right';
let intervalId;

function createGrid() {
  const gridContainer = document.getElementById('grid-container');
  for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
    const square = document.createElement('div');
    square.className = 'square';
    gridContainer.appendChild(square);
  }
}

function updatePosition() {
  const squares = document.getElementsByClassName('square');
  const currentSquareIndex = currentPosition.y * GRID_SIZE + currentPosition.x;
  squares[currentSquareIndex].classList.remove('creature');
  switch (currentDirection) {
    case 'up':
      currentPosition.y--;
      break;
    case 'down':
      currentPosition.y++;
      break;
    case 'left':
      currentPosition.x--;
      break;
    case 'right':
      currentPosition.x++;
      break;
  }
  if (currentPosition.x >= GRID_SIZE) {
    clearInterval(intervalId);
    alert('Failure: creature moved outside the grid!');
    return;
  }
  const newSquareIndex = currentPosition.y * GRID_SIZE + currentPosition.x;
  squares[newSquareIndex].classList.add('creature');
}

function startMoving() {
  const targetSquareIndex = GRID_SIZE * GRID_SIZE - 1;
  const squares = document.getElementsByClassName('square');
  squares[targetSquareIndex].classList.add('target');
  intervalId = setInterval(updatePosition, MOVE_DELAY_MS);
}

document.addEventListener('DOMContentLoaded', () => {
  createGrid();
  startMoving();
});
