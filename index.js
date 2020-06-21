//isAdult

const userAgeInput = prompt ('Pleas enter your age ');

const userAgeToNumber = userAgeInput - 0;

if (userAgeToNumber >= 18) {
    alert('you are an adult');
} else {
    alert('you are a minor');
}