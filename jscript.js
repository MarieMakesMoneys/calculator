const clear = document.querySelector('.clear');
const deleteBtn = document.querySelector('.DEL');
const posneg = document.querySelector('.posneg')
const equal = document.querySelector('.equal');

let oldLine = document.querySelector('.toptext');
let currentLine = document.querySelector('.bottomtext');

const operators = document.querySelectorAll('.operator')
const numbers = document.querySelectorAll('.num');

let a = '0';
let b = '';
let ope = '';

numbers.forEach((number) => number.addEventListener('click', function (e) {
    if (ope == '') {
        handleNumber(e.target.textContent);
        currentLine.textContent = b;
    } else if (ope !== '') { // quand on a selectionné un opérateur
        oldLine.textContent = b + ope; // le premier nombre choisi et l'opérateur sont affichés sur la ligne du haut
        a = b; // le premier nombre choisi est rang dans a, pour plus tard operate()
        b = ''; // vide b, qui est rempli par handle number mais revidé quand on essaye d'avoir un plus grand nombre
        handleNumber(e.target.textContent); // b += num tapé
        currentLine.textContent = b; // b est montré sur la ligne du bas
    }
}));

function handleNumber(num) {
    b += num;
};

operators.forEach((operator) => operator.addEventListener('click', function(e) {
    if (ope == '') {
        handleOperator(e.target.textContent);
        currentLine.textContent += ope; 
    } else if (ope !== '') {
        handleEqual();
        handleOperator(e.target.textContent);
        currentLine.textContent += ope; 
    }
}))

function handleOperator(oper) {
    ope = oper;
}

function handleEqual() {
    a = Number(a);
    b = Number(b);
    if (ope == '') {
        oldLine.textContent = a + ope + b;
        ope = '+';
        let result = operate(a, b, ope);
        ope = '';
        b = Number(result.toFixed(3));
        currentLine.textContent = b;
    } else {
        oldLine.textContent = a + ope + b;
        let result = operate(a, b, ope);
        ope = '';
        b = Number(result.toFixed(3));
        currentLine.textContent = b;
    }
}

equal.addEventListener('click', function() {
    a = Number(a);
    b = Number(b);
    if (ope == '') {
        oldLine.textContent = a + ope + b;
        ope = '+';
        let result = operate(a, b, ope);
        ope = '';
        b = Number(result.toFixed(3));
        currentLine.textContent = b;
    } else {
        oldLine.textContent = a + ope + b;
        let result = operate(a, b, ope);
        ope = '';
        b = Number(result.toFixed(3));
        currentLine.textContent = b;
    }
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
    b = b.slice(0, b.length - 1);
    currentLine.textContent = b;
});