'use strict';

function reverseNumber(n) {
    let str = String(n);
    if (n === 0) {
        return 0;
    } else if (n > 0) {
        let result = '';
        for (let i = str.length - 1; i >= 0; i--) {
            result += str[i];
        }
        return parseInt(result);
    } else {
        let result = '-';
        for (let i = str.length - 1; i > 0; i--) {
            result += str[i];
        }
        return parseInt(result);
    }
}