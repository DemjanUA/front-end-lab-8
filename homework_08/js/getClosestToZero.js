'use strict';

function getClosestToZero() {
    let index = 0;
    let closest = Math.abs(arguments[index]);

    for (let i = 1; i < arguments.length; i++) {
        if (Math.abs(arguments[i]) < closest) {
            index = i;
            closest = Math.abs(arguments[i]);
        }
    }
    
    return arguments[index];
}