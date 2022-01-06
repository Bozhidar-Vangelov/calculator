const userInput = document.getElementById('user-input');
const result = document.getElementById('result');
const numbers = Array.from(document.querySelectorAll('.num'));
const operators = Array.from(document.querySelectorAll('.operator'));
const clearButton = document.getElementById('clear');
const equalButton = document.getElementById('equal');
const backButton = document.getElementById('back');

let firstNum = 0;
let secondNum = 0;
let operator = undefined;
let isReset = false;

numbers.forEach((number) => {
  number.addEventListener('click', numberHandler);
});

operators.forEach((operator) => {
  operator.addEventListener('click', () =>
    operatorHandler(operator.textContent)
  );
});

clearButton.addEventListener('click', clearHandler);

equalButton.addEventListener('click', resultHandler);

backButton.addEventListener('click', backHandler);

function clearHandler() {
  result.value = '';
  userInput.value = 0;
  firstNum = 0;
  secondNum = 0;
}

function numberHandler(e) {
  if (userInput.value === '0' || isReset) {
    resetDisplay();
  }
  userInput.value += e.target.textContent;
}

function resetDisplay() {
  userInput.value = '';
  isReset = false;
}

function operatorHandler(operatorInput) {
  if (operator !== undefined) {
    resultHandler();
  }
  firstNum = Number(userInput.value);

  operator = operatorInput;
  result.value = `${firstNum}${operator}`;

  isReset = true;
}

function resultHandler() {
  if (operator === undefined || isReset) {
    return;
  }

  secondNum = userInput.value;

  if (operator === '÷' && secondNum === '0') {
    result.value = "You can't divide by 0!";
    result.style.fontSize = '25px';
    return;
  }

  userInput.value = operate(operator, firstNum, secondNum);
  result.value = `${firstNum}${operator}${secondNum}=`;
  operator = undefined;
}

function backHandler() {
  let display = userInput.value;

  if (display.length <= 1) {
    userInput.value = 0;
  } else {
    userInput.value = display.substring(0, display.length - 1);
  }
}

function add(firstNum, secondNum) {
  return firstNum + secondNum;
}

function subtract(firstNum, secondNum) {
  return firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
  return firstNum * secondNum;
}

function divide(firstNum, secondNum) {
  return firstNum / secondNum;
}

function operate(operator, firstNum, secondNum) {
  firstNum = Number(firstNum);
  secondNum = Number(secondNum);

  switch (operator) {
    case '+':
      return add(firstNum, secondNum);
    case '-':
      return subtract(firstNum, secondNum);
    case 'x':
      return multiply(firstNum, secondNum);
    case '÷':
      return divide(firstNum, secondNum);
  }
}
