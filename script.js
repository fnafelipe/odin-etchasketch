function createGrid(numberOfSize) {
  const grid = document.getElementById("container");
  for (let i = 0; i < numberOfSize; i++) {
    for (let j = 0; j < numberOfSize; j++) {
      const square = document.createElement("div");
      square.className = "unhovered square";
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

createGrid(16);
