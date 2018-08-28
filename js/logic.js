let openCards = [];
const modal = document.getElementById('myModal');
const modalContent = document.getElementsByClassName('modal-content')[0];
const stars = document.getElementsByClassName('stars')[0];

//check if the card is a duplicate, if it is a match, or if it is a new card
function checkForMatch(card) {
  if (duplicate(card)) {
    console.log('duplicate');
  } else if (openCards.length % 2 === 0) {
    openCards.push(card);
  } else if (cardMatches(card)) {
    openCards.push(card);
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
      lastCard = openCards.pop();
      lastCard.classList.remove('open','show');
      card.classList.remove('open', 'show');
    }, 800);
  }
}

//check if the card's icons are the same
function cardMatches(card) {
  result = openCards.some(function(openCard) {
    return openCard.firstElementChild.className === card.firstElementChild.className;
  })
  return result;
}

//check if the card has already been added to the list of open cards
function duplicate(card) {
  result = openCards.some(function(openCard) {
    return openCard === card;
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
