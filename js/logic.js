let openCards = [];

function checkForMatch(card) {
  if (cardMatches(card) || !(openCards.length % 2)) {
    openCards.push(card);
    if (openCards.length === icons.length) {
      setTimeout(function() {
        alert(`Congratulations you finished the game in ${minutes} minute${pluralize(minutes)} ${seconds} second${pluralize(seconds)} and ${moves} moves!  Would you like to play again?`);
        resetGame();
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

function pluralize(unit) {
  if (unit === 1) {
    return '';
  } else {
    return 's';
  }
}
