const container = document.getElementById('container');
const resetButton = document.getElementById('resetButton');

let gridSize = 16;
let gridItems = [];

function createGrid(size) {
  container.innerHTML = '';
  gridItems = [];

  for (let i = 0; i < size * size; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.style.backgroundColor = 'white';
    gridItem.addEventListener('mouseover', changeColor);
    container.appendChild(gridItem);
    gridItems.push(gridItem);
  }

  const gridItemWidth = 100 / size;
  const gridItemHeight = gridItemWidth;
  gridItems.forEach(item => {
    item.style.width = `${gridItemWidth}%`;
    item.style.height = `${gridItemHeight}%`;
  });
}

function changeColor(e) {
  const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
  const currentColor = e.target.style.backgroundColor;

  if (currentColor === 'rgb(0, 0, 0)') {
    e.target.style.backgroundColor = randomColor;
  } else if (currentColor === 'white') {
    e.target.style.backgroundColor = randomColor;
  } else {
    const currentRGB = currentColor.match(/\d+/g).map(Number);
    const newRGB = currentRGB.map(value => Math.max(0, value - 25.6));
    e.target.style.backgroundColor = `rgb(${newRGB[0]}, ${newRGB[1]}, ${newRGB[2]})`;
  }
}

function resetGrid() {
  const newSize = prompt('Enter the number of squares per side (max 100):');
  if (newSize && newSize <= 100) {
    gridSize = newSize;
    createGrid(gridSize);
  } else {
    alert('Invalid input. Using default grid size of 16.');
    createGrid(16);
  }
}

createGrid(gridSize);
resetButton.addEventListener('click', resetGrid);
