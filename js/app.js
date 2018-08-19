const deck = document.getElementsByClassName('deck')[0];
const resetButton = document.getElementsByClassName('restart')[0];
const timer = document.getElementsByClassName('timer')[0];

let openCards = [];
let seconds = 0
let minutes = 0

resetButton.addEventListener('click', resetGame);
deck.addEventListener('click', flipCard);

function setupDeck() {
  const cards = [];
  const icons = ['fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-anchor', 'fa fa-bolt', 'fa fa-cube', 'fa fa-anchor', 'fa fa-leaf', 'fa fa-bicycle', 'fa fa-diamond', 'fa fa-bomb', 'fa fa-leaf', 'fa fa-bomb', 'fa fa-bolt', 'fa fa-bicycle', 'fa fa-paper-plane-o', 'fa fa-cube']
  for (const icon of icons) {
    const card = document.createElement('li');
    card.classList.add('card');
    card.innerHTML = `<i class='${icon}'></i>`
    cards.push(card);
  }
  shuffle(cards);
  for (const card of cards) {
    deck.appendChild(card);
  }
}

function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function flipCard(e) {
  e.target.classList.add('open', 'show');
  checkForMatch(e.target);
}

function checkForMatch(card) {
  if (!openCards.length || cardMatches(card) || !(openCards.length % 2)) {
    openCards.push(card);
  } else {
    setTimeout(function() {
      card.classList.remove('open', 'show');
    }, 1000)
  }
}

function cardMatches(card) {
  result = openCards.some(function(openCard) {
    return openCard.firstElementChild.classList[1] === card.firstElementChild.classList[1];
  })
  return result;
}

function resetGame() {
  deck.innerHTML = '';
  seconds = 0;
  minutes = 0;
  openCards = [];
  setupDeck();
}

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

  timer.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

  startTimer();
}

/*
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

setupDeck();
startTimer();
