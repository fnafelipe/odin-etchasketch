const grid = document.getElementById("container");

function createGrid(numberOfSize) {
  for (let i = 0; i < numberOfSize; i++) {
    for (let j = 0; j < numberOfSize; j++) {
      const square = document.createElement("div");
      square.className = "square";
      square.style.width = `calc(100% / ${numberOfSize})`;
      square.style.height = `calc(100% / ${numberOfSize})`;
      square.addEventListener("mouseover", function (e) {
        hoverChange(e.target);
      });
      grid.appendChild(square);
    }
  }
}

function hoverChange(square) {
  const randomColor = generateRandomColorRGB();
  console.log(randomColor);
  square.style.backgroundColor = randomColor;
  console.log(square);
}

function generateRandomColorRGB() {
  const red = generateRandomNumberRGB();
  const green = generateRandomNumberRGB();
  const blue = generateRandomNumberRGB();
  return `rgb(${red}, ${green}, ${blue})`;
}

function generateRandomNumberRGB() {
  return Math.floor(Math.random() * 256);
}

function generateNewGrid() {
  let newGridSize = getNewGridSize();
  if (newGridSize) {
    clearOldGrid();
    createGrid(newGridSize);
  }
}

function clearOldGrid() {
  grid.innerHTML = "";
}

function getNewGridSize() {
  let newGridSize;
  let isInInterval;
  do {
    newGridSize = parseInt(prompt("Insert a number between 1 and 100"));
    isInInterval = 1 <= newGridSize && newGridSize <= 100;
    console.log(isInInterval);
  } while (!isInInterval);
  return newGridSize;
}

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  generateNewGrid();
});
