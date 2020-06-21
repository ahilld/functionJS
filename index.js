//isAdult

const userAgeInput = prompt ('Pleas enter your age ');

const userAgeToNumber = userAgeInput - 0;

if (userAgeToNumber >= 18) {
    alert('you are an adult');
} else {
    alert('you are a minor');
}

// checkMultiplicity

const number1 = prompt ('Pleas enter the first number ');

const number1ToNumber = number1 -0;

const number2 = prompt ('Pleas enter the second number ');

const number2ToNumber = number2 -0;

if (number1ToNumber % number2ToNumber) {
    alert('numbers are not multiple')
} else {
    alert('numbers are multiple')
}
