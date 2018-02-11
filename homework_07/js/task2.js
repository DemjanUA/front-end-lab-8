'use strict';

var secretNumber = 0, prize = 0, min = 0, max = 5, massage = '', userNumber = 0, currentPrize, baseAttemptPrize = 10, prizeCof = 3, rangeCof = 2;
const maxAttempt = 3;

if (confirm('Do you want to play a game?')) {
  do {
    secretNumber = Math.floor(min + Math.random() * (max + 1 - min));
    for (var i = 3; i >= 1; i--) {
      currentPrize = Math.floor(baseAttemptPrize / (2 ** (maxAttempt - i)));
      massage = 
        `Enter a number from ${min} to ${max}\n` +
        `Attempts left: ${i}\n` +
        `Total prize: ${prize}\n` +
        `Possible prize on current attempt: ${currentPrize}`
      ;
      
      userNumber = parseInt(prompt(massage, min));
      if (userNumber === secretNumber) {
        prize += currentPrize;

        baseAttemptPrize *= prizeCof;
        min *= rangeCof;
        max *= rangeCof;

        break;
      } else continue;
    }
  } while (confirm('Do you want to play again?'));
  console.log(`Thank you for a game. Your prize is: ${prize}`)
} else {
  console.log('You did not become a millionaire');
}