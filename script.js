function createGrid(numberOfSize) {
  const grid = document.getElementById("container");
  for (let i = 0; i < numberOfSize; i++) {
    for (let j = 0; j < numberOfSize; j++) {
      const square = document.createElement("div");
      square.className = "square";
      console.log(square);
      grid.appendChild(square);
      console.log(grid);
    }
  }
}

createGrid(16);
