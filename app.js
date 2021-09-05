const displayNumber = document.querySelector(".calculator-numbers");
const numbers = Array.from(document.querySelectorAll(".num"));
const operators = Array.from(document.querySelectorAll(".operator"));
const clearButton = document.getElementById("clear");
const equalButton = document.getElementById("equal");
const backButton = document.getElementById("back");

let firstNum = 0;
let secondNum = 0;
let operator = undefined;

numbers.forEach((number) => {
  number.addEventListener("click", numberHandler);
});

operators.forEach((operator) => {
  operator.addEventListener("click", operatorHandler);
});

clearButton.addEventListener("click", clearHandler);

equalButton.addEventListener("click", resultHanlder);

backButton.addEventListener("click", backHandler);

function clearHandler() {
  displayNumber.value = 0;
}

function numberHandler(e) {
  if (
    displayNumber.value === "0" ||
    displayNumber.value === "+" ||
    displayNumber.value === "-" ||
    displayNumber.value === "÷" ||
    displayNumber.value === "x"
  ) {
    resetDisplay();
  }
  displayNumber.value += e.target.textContent;
}

function resetDisplay() {
  displayNumber.value = "";
}

function operatorHandler(e) {
  firstNum = displayNumber.value;

  operator = e.target.textContent;
  displayNumber.value = operator;
}

function resultHanlder() {
  secondNum = displayNumber.value;
  displayNumber.value = operate(operator, firstNum, secondNum);
}

function backHandler() {
  let display = displayNumber.value;
  displayNumber.value = displayNumber.value.substring(0, display.length - 1);
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
