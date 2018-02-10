'use strict';

var euroAmount = parseFloat(prompt('Please, input amount of EURO', ''));
var usdAmount = parseFloat(prompt('Please, input amount of USD', ''));
var uahPerEuroExchangeCof = 33.2324;
var uahPerUsdExchangeCof = 27.1240;

console.log(
  `${euroAmount} euros are equal ` +
  `${Math.trunc(euroAmount * uahPerEuroExchangeCof)} UAH, ` +
  `${usdAmount} dollars are equal ${Math.trunc(usdAmount * uahPerUsdExchangeCof)} ` +
  `UAH, one euro is equal ${(uahPerEuroExchangeCof / uahPerUsdExchangeCof).toFixed(3)} dollars.`
);