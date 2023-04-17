const countdownInput = document.getElementById("countdown");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const timerDisplay = document.getElementById("timer");

let countdownInterval;
let countdownTime;

function updateTimerDisplay() {
  timerDisplay.innerHTML = countdownTime;
}

function countdown() {
  countdownTime--;
  updateTimerDisplay();
  if (countdownTime === 0) {
    clearInterval(countdownInterval);
    startBtn.disabled = false;
    pauseBtn.disabled = true;
  }
}

function startCountdown() {
  countdownTime = countdownInput.value;
  countdownInterval = setInterval(countdown, 1000);
  startBtn.disabled = true;
  pauseBtn.disabled = false;
}

// Función para pausar el contador
function pauseCountdown() {
  clearInterval(countdownInterval);
  startBtn.disabled = false;
  pauseBtn.disabled = true;
}

// Función para reiniciar el contador
function resetCountdown() {
  clearInterval(countdownInterval);
  countdownInput.value = "";
  timerDisplay.innerHTML = "";
  startBtn.disabled = false;
  pauseBtn.disabled = true;
}

// Agregamos los event listeners a los botones
startBtn.addEventListener("click", startCountdown);
pauseBtn.addEventListener("click", pauseCountdown);
resetBtn.addEventListener("click", resetCountdown);
