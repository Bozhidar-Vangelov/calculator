const userInput = document.getElementById("user-input");
const result = document.getElementById("result");
const numbers = Array.from(document.querySelectorAll(".num"));
const operators = Array.from(document.querySelectorAll(".operator"));
const clearButton = document.getElementById("clear");
const equalButton = document.getElementById("equal");
const backButton = document.getElementById("back");

let firstNum = 0;
let secondNum = 0;
let operator = undefined;
let isReset = false;

numbers.forEach((number) => {
  number.addEventListener("click", numberHandler);
});

operators.forEach((operator) => {
  operator.addEventListener("click", () =>
    operatorHandler(operator.textContent)
  );
});

clearButton.addEventListener("click", clearHandler);

equalButton.addEventListener("click", resultHandler);

backButton.addEventListener("click", backHandler);

function clearHandler() {
  result.value = "";
  userInput.value = 0;
  firstNum = 0;
  secondNum = 0;
}

function numberHandler(e) {
  if (userInput.value === "0" || isReset) {
    resetDisplay();
  }
  userInput.value += e.target.textContent;
}

function resetDisplay() {
  userInput.value = "";
  isReset = false;
}

function operatorHandler(operatorInput) {
  console.log(isReset + "isReset on OperatorHandler");
  console.log(operator + "Operator on operatorHandler");
  console.log(operatorInput);
  if (operator !== undefined) {
    resultHandler();
  }
  firstNum = Number(userInput.value);
  console.log(firstNum);
  operator = operatorInput;
  result.value = `${firstNum}${operator}`;

  console.log(operator);
  isReset = true;
}

function resultHandler() {
  console.log(isReset);
  if (operator === undefined || isReset) {
    return;
  }

  console.log(operator + "operator");
  console.log(firstNum + "firstNum");
  console.log(secondNum + "secondNum");

  secondNum = userInput.value;
  userInput.value = operate(operator, firstNum, secondNum);
  result.value = `${firstNum}${operator}${secondNum}=`;
  operator = undefined;
  console.log(operator + "resultHandler");
}

function backHandler() {
  let display = userInput.value;
  console.log(display.length);
  console.log(display);
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
    case "+":
      return add(firstNum, secondNum);
    case "-":
      return subtract(firstNum, secondNum);
    case "x":
      return multiply(firstNum, secondNum);
    case "÷":
      return divide(firstNum, secondNum);
  }
}
