const clear = document.querySelector('.clear');
const deleteBtn = document.querySelector('.DEL');
const posneg = document.querySelector('.posneg')
const equal = document.querySelector('.equal');

let oldLine = document.querySelector('.toptext');
let currentLine = document.querySelector('.bottomtext');

const operators = document.querySelectorAll('.operator')
const numbers = document.querySelectorAll('.num');

let a = '';
let b = '';
let ope = '';

numbers.forEach((number) => {
    number.addEventListener('click', function (e) {
        handleNumber(e.target.textContent);
        currentLine.textContent = b;
    })
});

function handleNumber(num) {
    b += num;
};

operators.forEach((operator) => { 
    operator.addEventListener('click', function(e) {
        if (a == '') {
            ope = e.target.textContent
            let c = b + ope; 
            a = b;
            b = '';
            oldLine.textContent = c
        } else if (a != '' && b != '') {
            handleEqual()
            ope = e.target.textContent
            let c = a + ope;
            b = ''
            oldLine.textContent = c
        } else {
            ope = e.target.textContent
            let c = a + ope
            b = ''
            oldLine.textContent = c
        }
    })
});

function handleEqual() {
    a = Number(a);
    b = Number(b);

    oldLine.textContent = a + ope + b;
    let result = operate(a, b, ope);

    a = Number(result.toFixed(3));
    currentLine.textContent = a;
}

equal.addEventListener('click', function() {
    a = Number(a);
    b = Number(b);

    oldLine.textContent = a + ope + b;
    let result = operate(a, b, ope);
   
    a = Number(result.toFixed(3));
    currentLine.textContent = a;
});

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

function modulo(a, b) {
    return a % b;
}

function operate(a, b, ope) {
    if (ope == '+') {
        return add(a, b);
    } else if (ope == '-') {
        return substract(a, b);
    } else if (ope == 'x') {
        return multiply(a, b);
    } else if (ope == '/') {
        return divide(a, b);
    } else if (ope == '%') {
        return modulo(a, b);
    };
};

clear.addEventListener('click', () => window.location.reload());

posneg.addEventListener('click', function() {
    b = 0 - b;
    currentLine.textContent = b;
});

deleteBtn.addEventListener('click', () => {
    b = b.toString();
    b = b.slice(0, b.length - 1);
    currentLine.textContent = b;
});