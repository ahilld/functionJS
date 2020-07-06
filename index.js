//isAdult

function isAdult(age) {

    return age >= 18;
}

// checkMultiplicity

function checkMultiplicity(number1, number2,) {

    return !(number1 % number2);
}
//trigon

function trigon(a, b, c, ) {

    return a < (b + c) && b < (a + c) && c < (a + b);
}

//area

function rhombusArea(a, h) {

    if (h > a) {
        return ('incorrect value');
    } else {
        return a * h;
    }
}

function cylinderArea(r, h,) {

    return 2 * 3.14 * r * (r + h);

}

function trigonArea(a, h) {

    return a * h / 2;

}

function rectangle(a, b) {

    return a * b;

}