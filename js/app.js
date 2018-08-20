const deck = document.getElementsByClassName('deck')[0];
const resetButton = document.getElementsByClassName('restart')[0];
const timer = document.getElementsByClassName('timer')[0];

const icons = ['fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-anchor',
  'fa fa-bolt', 'fa fa-cube', 'fa fa-anchor', 'fa fa-leaf',
'fa fa-bicycle', 'fa fa-diamond', 'fa fa-bomb', 'fa fa-leaf',
'fa fa-bomb', 'fa fa-bolt', 'fa fa-bicycle',
'fa fa-paper-plane-o', 'fa fa-cube'];

resetButton.addEventListener('click', resetGame);
deck.addEventListener('click', flipCard);

function setupDeck() {
  const cards = [];
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
    if (openCards.length === icons.length) {
      setTimeout(function() {
        resetGame();
        alert(`Congratulations you finished the game in less than ${minutes + 1} ${minuteOrMinutes()}!  Would you like to play again?`);
      }, 300);
    }
  } else {
    setTimeout(function() {
      card.classList.remove('open', 'show');
    }, 1000);
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

function minuteOrMinutes() {
  if (minutes === 0) {
    return 'minute';
  } else {
    return 'minutes';
  }
}

setupDeck();
startTimer();
