let openCards = [];
const modal = document.getElementById('myModal');
const modalContent = document.getElementsByClassName('modal-content')[0];
const stars = document.getElementsByClassName('stars')[0];

function checkForMatch(card) {
  if (openCards.length % 2 === 0) {
    openCards.push(card);
  } else if (duplicate(card)) {
    console.log('duplicate');
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
      card.classList.remove('open', 'show');
    }, 800);
  }
}

function cardMatches(card) {
  result = openCards.some(function(openCard) {
    return openCard.firstElementChild.className === card.firstElementChild.className;
  })
  return result;
}

function duplicate(card) {
  result = openCards.some(function(openCard) {
    return openCard === card;
  })
  return result;
}

function pluralize(unit) {
  if (unit === 1) {
    return '';
  } else {
    return 's';
  }
}

function starCount() {
  return stars.childElementCount;
}
