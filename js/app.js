const deck = document.getElementsByClassName('deck')[0];
const resetButton = document.getElementsByClassName('restart')[0];
const tally = document.getElementsByClassName('moves')[0];
const stars = document.getElementsByClassName('stars')[0];

let moves = 0;
const icons = ['fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-anchor',
  'fa fa-bolt', 'fa fa-cube', 'fa fa-anchor', 'fa fa-leaf',
'fa fa-bicycle', 'fa fa-diamond', 'fa fa-bomb', 'fa fa-leaf',
'fa fa-bomb', 'fa fa-bolt', 'fa fa-bicycle',
'fa fa-paper-plane-o', 'fa fa-cube'];

resetButton.addEventListener('click', resetGame);
deck.addEventListener('click', flipCard);

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
  if (openCards.length % 2) {
    moves++;
    tally.textContent = moves;
    if (moves === 25 || moves === 30 || moves === 40 || moves === 45) {
      stars.firstElementChild.remove();
    }
  }
  e.target.classList.add('open', 'show');
  checkForMatch(e.target);
}

function resetGame() {
  deck.innerHTML = '';
  tally.textContent = 0;
  seconds = 0;
  minutes = 0;
  moves = 0;
  stars.innerHTML = '';
  openCards = [];
  setupDeck();
}

setupDeck();
startTimer();
