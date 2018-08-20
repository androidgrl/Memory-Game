const timer = document.getElementsByClassName('timer')[0];

let openCards = [];
let seconds = 0
let minutes = 0

function startTimer() {
  setTimeout(add, 1000);
}

function add() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
    }
  }
  timer.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" + (seconds > 9 ? seconds : "0" + seconds);
  startTimer();
}

