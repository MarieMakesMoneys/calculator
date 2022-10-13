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

five.addEventListener('click', () => {
    console.log('five');
    document.createElement('div').textContent = '5';
    'typeLine'.appendChild('div');
    console.log('victoire')
});

six.addEventListener('click', () => {
    console.log('6')
});