let pairedCards = [];
let currentOpenCards = [];
const modal = document.getElementById('myModal');
const modalContent = document.getElementsByClassName('modal-content')[0];
const stars = document.getElementsByClassName('stars')[0];

//check if the card is a duplicate or if it is a match and if game should end
function checkForMatch(card) {
  if (cardsMatch()) {
    deck.addEventListener('click', flipCard);
    pairedCards.push(currentOpenCards[0]);
    pairedCards.push(currentOpenCards[1]);
    currentOpenCards = [];
    if (pairedCards.length === icons.length) {
      setTimeout(function() {
        modalContent.firstElementChild.innerText = `Congratulations you finished the game in ${minutes}` +
          ` minute${pluralize(minutes)} ${seconds} second${pluralize(seconds)} and ${moves} moves!` +
          ` Your star rating was ${starCount()} star${pluralize(starCount())} Would you like to play again?`
        modal.style.display = 'block';
      }, 300);
    }
  } else {
    setTimeout(function() {
      const secondCard = currentOpenCards.pop();
      const firstCard = currentOpenCards.pop();
      secondCard.classList.remove('open', 'show');
      firstCard.classList.remove('open','show');
      deck.addEventListener('click', flipCard);
    }, 800);
  }
}

//check if the card's icons are the same
function cardsMatch() {
  const result = currentOpenCards[0].firstElementChild.className === currentOpenCards[1].firstElementChild.className;
  return result;
}

//check if the card has already been added to the list of cards currently open or in pairs cards
function duplicates() {
  const currentCardsSame = currentOpenCards[0] === currentOpenCards[1];
  const currentCardAlreadyInPairedCards = pairedCards.some(function(card) {
    return card === currentOpenCards[0] || card === currentOpenCards[1];
  })
  const result = currentCardsSame || currentCardAlreadyInPairedCards;
  return result;
}

//add an s to plural units
function pluralize(unit) {
  if (unit === 1) {
    return '';
  } else {
    return 's';
  }
}

//return the number of stars currently displayed
function starCount() {
  return stars.childElementCount;
}
