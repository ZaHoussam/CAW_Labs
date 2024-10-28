let countUp;
let seconds = 0;

window.onload = function () {
  // Get all relevant elements for the maze.
  const boundaries = document.querySelectorAll(".boundary");
  const start = document.getElementById("start");
  const end = document.getElementById("end");
  const maze = document.getElementById("maze");
  const status = document.getElementById("status");
  const timerDom = document.querySelector(".timer");
  const card = document.querySelectorAll(".card");
  let gameLost = false;
  let gameStarted = false;
  let counter = 0;

  // Function to turn all walls red (you lose state).
  const turnBoundariesRed = () => {
    boundaries.forEach((boundary) => boundary.classList.add("youlose"));
    status.textContent = "You lose!";
    gameLost = true;
    [...card][0].classList.add("open");
  };

  // Function to reset the maze walls back to normal.
  const resetBoundaries = () => {
    boundaries.forEach((boundary) => boundary.classList.remove("youlose"));
    status.textContent = "Move your mouse over the 'S' to begin.";
    gameLost = false;
    gameStarted = true;
  };

  // Event listener for hovering over any boundary to turn all boundaries red.
  boundaries.forEach((boundary) => {
    boundary.addEventListener("mouseover", function () {
      if (gameStarted && !gameLost) {
        turnBoundariesRed();
        clearInterval(countUp); // Clear any existing interval
      }
    });
  });

  // Event listener for winning the game when reaching the end.
  end.addEventListener("mouseover", function () {
    if (gameStarted && !gameLost) {
      status.textContent = "You win!";
      gameStarted = false;
      [...card][1].classList.add("open");
      clearInterval(countUp); // Clear any existing interval
      // Stop the game after winning.
    }
  });

  // Event listener for resetting the maze when clicking on the start.
  start.addEventListener("click", function () {
    resetBoundaries();
    gameStarted = true;
    startCountUp();
  });

  // Cheating prevention: detect if the mouse leaves the maze area.
  maze.addEventListener("mouseleave", function () {
    if (gameStarted && !gameLost) {
      turnBoundariesRed(); // Player loses if they leave the maze area.
    }
  });
};

function startCountUp() {
  clearInterval(countUp); // Clear any existing interval
  countUp = setInterval(() => {
    seconds++;
    displayTimeElapsed(seconds);
  }, 1000);
}

function displayTimeElapsed(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${String(minutes).padStart(2, "0")}:${String(
    remainderSeconds
  ).padStart(2, "0")}`;
  document.querySelector(".timer").textContent = display;
}
