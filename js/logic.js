let openCards = [];
const modal = document.getElementById('myModal');
const modalContent = document.getElementsByClassName('modal-content')[0];
const stars = document.getElementsByClassName('stars')[0];

//check if the card is a duplicate, if it is a match, or if it is a new card
function checkForMatch(card) {
  if (!noDuplicates()) {
    openCards.pop();
  } else if (openCards.length % 2) {
    console.log('first card');
  } else if (cardMatches()) {
    if (openCards.length === icons.length) {
      setTimeout(function() {
        modalContent.firstElementChild.innerText = `Congratulations you finished the game in ${minutes}` +
          ` minute${pluralize(minutes)} ${seconds} second${pluralize(seconds)} and ${moves} moves!` +
          ` Your star rating was ${starCount()} star${pluralize(starCount())} Would you like to play again?`
        modal.style.display = 'block';
      }, 300);
    }
  } else {
    setTimeout(function() {
      const secondCard = openCards.pop();
      const firstCard = openCards.pop();
      secondCard.classList.remove('open', 'show');
      firstCard.classList.remove('open','show');
    }, 800);
  }
}

//check if the card's icons are the same
function cardMatches() {
  const result = openCards[openCards.length - 1].firstElementChild.className === openCards[openCards.length - 2].firstElementChild.className;
  return result;
}

//check if the card has already been added to the list of open cards
function noDuplicates() {
  const result = openCards.every(function(elem, i, array) {
    return array.lastIndexOf(elem) === i
  })
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
