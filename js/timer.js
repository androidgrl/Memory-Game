const timer = document.getElementsByClassName('timer')[0];

let seconds = 0;
let minutes = 0;

//every 1 second call add
function startTimer() {
  setTimeout(add, 1000);
}

//add one second to the second count and correctly format seconds, minutes, and hours
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
