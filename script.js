const grid = document.getElementById("container");

function createGrid(numberOfSize) {
  for (let i = 0; i < numberOfSize; i++) {
    for (let j = 0; j < numberOfSize; j++) {
      const square = document.createElement("div");
      square.className = "unhovered square";
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
  square.classList.remove("unhovered");
  square.classList.add("hovered");
  console.log(square);
}

function generateNewGrid() {
  grid.innerHTML = "";
  const newGridSize = prompt("New grid size: ");
  if (newGridSize > 100) {
    console.log("Insert a number between 1 and 100");
  } else {
    createGrid(newGridSize);
  }
}

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  generateNewGrid();
});
