const screen = document.getElementById('screen');

function appendValue(value) {
    if (screen.value === '0' || screen.value === 'Error') {
        screen.value = value;
    } else {
        screen.value += value;
    }
}

function add(n1, n2) {
    return n1 + n2;
}

function subtract() {
    return n1 - n2;
}

function multiply() {
    return n1 * n2;
}

function divide() {
    return n1 / n2;
}

function operate() {

    let str = document.getElementById("result").value;
    let result = str.match(/\d+|D/g);
    oper = result[1];
    num1 = result[0];
    num2 = result[2];

    console.log("oper: " + oper);
    console.log("num1: " + num1);
    console.log("num2: " + num2);

    switch (oper) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
            case '=':
    }
}

function clearScreen() {
    result.value = '0';
}

function clearOne() {

}

function displayResult(res) {
    //document.getElementById("result").value = result;
    result.value = res;
}

function toggleSign() {

}