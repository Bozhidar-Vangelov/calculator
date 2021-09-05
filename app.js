const displayNumber = document.querySelector(".calculator-numbers");
const numbers = Array.from(document.querySelectorAll(".num"));
const operators = Array.from(document.querySelectorAll(".operator"));
const clearButton = document.querySelector(".span-2");

numbers.forEach((number) => {
  number.addEventListener("click", numberHandler);
});

operators.forEach((operator) => {
  operator.addEventListener("click", operate);
});

clearButton.addEventListener("click", clearHandler);

function clearHandler() {
  displayNumber.value = 0;
}

function numberHandler(e) {
  if (displayNumber.value === "0") {
    resetDisplay();
  }
  displayNumber.value += e.target.textContent;
}

function resetDisplay() {
  displayNumber.value = "";
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
      displayNumber.value = "+";
      return add(firstNum, secondNum);
    case "-":
      displayNumber.value = "-";
      return subtract(firstNum, secondNum);
    case "x":
      displayNumber.value = "x";
      return multiply(firstNum, secondNum);
    case "÷":
      displayNumber.value = "÷";
      return divide(firstNum, secondNum);
  }
}
