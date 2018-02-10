'use strict';

var side1 = parseFloat(prompt('Please, input a value of first side', ''));
var side2 = parseFloat(prompt('Please, input a value of second side', ''));
var side3 = parseFloat(prompt('Please, input a value of third side', ''));

var square = 0, p = 0, type;

if (side1 > 0 && side2 > 0 && side3 > 0) {
    if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
        p = (side1 + side2 + side3) / 2;
        square = Math.sqrt(p * (p - side1) * (p - side2) * (p - side3));
        square = (Math.trunc(square) === square) ? square.toFixed(0) : square.toFixed(2);

        if (
            side1 ** 2 + side2 ** 2 === side3 ** 2 ||
            side1 ** 2 + side3 ** 2 === side2 ** 2 ||
            side2 ** 2 + side3 ** 2 === side1 ** 2 
        ) {
            type = 'right';
        } else if (side1 === side2 && side2 === side3) {
            type = 'equilateral';
        } else if (side1 === side2 || side2 === side3 || side1 === side3) {
            type = 'isosceles';
        } else {
            type = 'scalene';
        }
        console.log(`Type of triangle is ${type} triangle and square is ${square}`);
    } else {
        console.log("Incorrect data");
    }
} else {
    console.log("Incorrect data");
}
