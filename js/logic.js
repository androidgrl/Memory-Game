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

function minuteOrMinutes() {
  if (minutes === 0) {
    return 'minute';
  } else {
    return 'minutes';
  }
}
