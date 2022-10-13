const C = document.querySelector('.C');
const posneg = document.querySelector('.posneg');
const modulo = document.querySelector('#modulo');
const DEL = document.querySelector('.DEL');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const divide = document.querySelector('#divide');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const mult = document.querySelector('#mult');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const minus = document.querySelector('#minus');
const zero = document.querySelector('#zero');
const point = document.querySelector('#point');
const equal = document.querySelector('.equal');
const plus = document.querySelector('#plus');
const oldLine = document.querySelector('.toptext');
const typeLine = document.querySelector('.bottomtext');
const btns = document.querySelectorAll('.btn');

let a = 3;
let b = 2;
let ope = '+'

function add(a, b) {
    return a + b;
};

function substract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(a, b, ope) {
    if (ope == '+') {
        return add(a, b);
    } else if (ope == '-') {
        return substract(a, b);
    } else if (ope == '*') {
        return multiply(a, b);
    } else if (ope == '/') {
        return divide(a, b);
    };
};