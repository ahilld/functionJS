//isAdult

isAdult();

function isAdult() {

    const userAgeInput = prompt('Pleas enter your age ');

    const userAgeToNumber = userAgeInput - 0;

    if (userAgeToNumber >= 18) {
        alert('you are an adult');
    } else {
        alert('you are a minor');
    }
}

// checkMultiplicity

checkMultiplicity();

function checkMultiplicity() {


    const number1 = prompt('Pleas enter the first number ');

    const number1ToNumber = number1 - 0;

    const number2 = prompt('Pleas enter the second number ');

    const number2ToNumber = number2 - 0;

    if (number1ToNumber % number2ToNumber) {
        alert('numbers are not multiple')
    } else {
        alert('numbers are multiple')
    }
}
//trigon

trigon();

function trigon() {

    const a = prompt('enter side a ');
    const b = prompt('enter side b ');
    const c = prompt('enter side c ');
    const aToNumber = a - 0;
    const bToNumber = b - 0;
    const cToNumber = c - 0;

    if (aToNumber < bToNumber + cToNumber && bToNumber < aToNumber + cToNumber && cToNumber < aToNumber + bToNumber) {
        alert('a triangle is possible to build');
    } else {
        alert('a triangle is not possible to build');
    }
}

