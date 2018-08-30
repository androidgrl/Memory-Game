const deck = document.getElementsByClassName('deck')[0];
const resetButton = document.getElementsByClassName('restart')[0];
const tally = document.getElementsByClassName('moves')[0];
const playAgain = document.getElementById('play-again');

let moves = 0;
const icons = [
  'fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-anchor',
  'fa fa-bolt', 'fa fa-cube', 'fa fa-anchor', 'fa fa-leaf',
  'fa fa-bicycle', 'fa fa-diamond', 'fa fa-bomb', 'fa fa-leaf',
  'fa fa-bomb', 'fa fa-bolt', 'fa fa-bicycle',
  'fa fa-paper-plane-o', 'fa fa-cube'
];

playAgain.addEventListener('click', resetGame);
resetButton.addEventListener('click', resetGame);
deck.addEventListener('click', flipCard);

//Add stars, create cards, shuffle them, and add them dynamically to page
function setupDeck() {
  for (let i = 0; i < 5; i++) {
    stars.insertAdjacentHTML('afterbegin', '<li><i class="fa fa-star"></i></li>');
  }
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

//shuffle cards
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

//flip card when clicked, adjust star count, and check if card is a match
function flipCard(e) {
  if (e.target.nodeName === 'LI' || e.target.nodeName === 'I') {
    if (currentOpenCards.length % 2) {
      moves++;
      tally.textContent = moves;
      if (moves === 15 || moves === 20 || moves === 25 || moves === 30) {
        stars.firstElementChild.remove();
      }
    }
  }
  if (e.target.nodeName === 'LI') {
    const card = e.target;
    loadCard(card);
  } else if (e.target.nodeName === 'I') {
    const card = e.target.parentNode;
    loadCard(card);
  }
}

//load card into pairedCards array, display card face up, and check if card matches
function loadCard(card) {
  currentOpenCards.push(card);
  if (currentOpenCards.length === 1) {
    card.classList.add('open', 'show');
  } else if (currentOpenCards.length === 2) {
    card.classList.add('open', 'show');
    deck.removeEventListener('click', flipCard);
    checkForMatch(card);
  }
}

//reset the stars, timer, hide the modal and setup the deck again
function resetGame() {
  deck.innerHTML = '';
  tally.textContent = 0;
  seconds = 0;
  minutes = 0;
  moves = 0;
  stars.innerHTML = '';
  pairedCards = [];
  setupDeck();
  modal.style.display = 'none';
}

setupDeck();
startTimer();
