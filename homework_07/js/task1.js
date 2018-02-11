'use strict';

var n = parseFloat(prompt('Please, enter natural number between 0 and 20', ''));
const space = '   ', block = '[~]'

if (Number.isInteger(n) && n > 0 && n <= 20) {
  for (var i = 0, str = '', k = 1; i < n; i++, k = i * 2 + 1) {
      str += `${space.repeat(n - k/2)}${block.repeat(k)}${space.repeat(n - k/2)}\n`;
  }
  console.log(str);
} else {
  console.log('Incorrect!')
}