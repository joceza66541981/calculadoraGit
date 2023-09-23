var screen = document.querySelector('#screen');
var currentInput = '';

function appendNumber(number) {
    currentInput += number;
    screen.value = currentInput;
}

function calculateLog() {
    try {
        const value = parseFloat(currentInput);
        if (value <= 0) {
            throw "Error";
        }
        const result = Math.log(value);
        currentInput = result.toString();
        screen.value = currentInput;
    } catch (error) {
        currentInput = 'Error';
        screen.value = currentInput;
    }
}

function appendText(text) {
    currentInput += text;
    screen.value = currentInput;
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        screen.value = currentInput;
    }
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        screen.value = currentInput;
    } catch (error) {
        screen.value = 'Error';
        currentInput = '';
    }
}

function calculateInverseTrig(func) {
    var value = parseFloat(screen.value);

    if (func === 'sin') {
        currentInput = (Math.asin(value * (Math.PI / 180))).toString();
        screen.value = currentInput;
    } else if (func === 'cos') {
        currentInput = (Math.acos(value * (Math.PI / 180))).toString();
        screen.value = currentInput;
    } else if (func === 'tan') {
        currentInput = (Math.atan(value * (Math.PI / 180))).toString();
        screen.value = currentInput;
    }
}

function calculateTrig(func) {
    var value = parseFloat(screen.value);

    if (func === 'sin') {
        currentInput = (Math.sin(value * (Math.PI / 180))).toString();
        screen.value = currentInput;
    } else if (func === 'cos') {
        currentInput = (Math.cos(value * (Math.PI / 180))).toString();
        screen.value = currentInput;
    } else if (func === 'tan') {
        currentInput = (Math.tan(value * (Math.PI / 180))).toString();
        screen.value = currentInput;
    }
}

function insertPI() {
    currentInput += (Math.PI).toString();
    screen.value = currentInput;
}

function changeSign() {
    screen.value = (-parseFloat(screen.value)).toString();
}

function calculateFactorial() {
    var num = parseFloat(screen.value);
    if (num < 0 || !Number.isInteger(num)) {
        screen.value = 'Error';
        currentInput = '';
    } else {
        var result = 1;
        for (var i = 2; i <= num; i++) {
            result *= i;
        }
        currentInput = result.toString();
        screen.value = currentInput;
    }
}

function calculatePercentage() {
    var num = parseFloat(screen.value);
    currentInput = (num / 100).toString();
    screen.value = currentInput;
}

function clearAll() {
    currentInput = '';
    screen.value = '';
}

function clearScreen() {
    currentInput = currentInput.slice(0, -1);
    screen.value = currentInput;
}
