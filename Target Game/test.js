    const box = document.getElementById("box");
    const scoreDisplay = document.getElementById("score");
    const timerDisplay = document.getElementById("timer");
    const gameArea = document.getElementById("game-area");

    let score = 0;
    let timeLeft = 30;
    let gameInterval;
    let timerInterval;

    function randomPosition() {
      const maxX = gameArea.clientWidth - box.offsetWidth;
      const maxY = gameArea.clientHeight - box.offsetHeight;
      const x = Math.floor(Math.random() * maxX);
      const y = Math.floor(Math.random() * maxY);
      box.style.left = x + "px";
      box.style.top = y + "px";
    }

    box.addEventListener("click", () => {
      if (timeLeft > 0) {
        score++;
        scoreDisplay.textContent = "Score: " + score;
        randomPosition();
      }
    });

    function startGame() {
      score = 0;
      timeLeft = 30;
      scoreDisplay.textContent = "Score: 0";
      timerDisplay.textContent = "Time Left: 30s";
      box.style.display = "block";
      randomPosition();


      clearInterval(timerInterval);
      clearInterval(gameInterval);

      timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = "Time Left: " + timeLeft + "s";
        if (timeLeft <= 0) {
          clearInterval(timerInterval);
          clearInterval(gameInterval);
          alert("⏰ Time's up! Your score is: " + score);
        }
      }, 1000);
    }
  