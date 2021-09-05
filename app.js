const displayNumber = document.querySelector(".calculator-numbers");
const numbers = Array.from(document.querySelectorAll(".num"));
const clearButton = document.querySelector(".span-2");

numbers.forEach((number) => {
  number.addEventListener("click", numberHandler);
});

clearButton.addEventListener("click", clearHandler);

function clearHandler() {
  displayNumber.value = 0;
}

function numberHandler(e) {
  displayNumber.value += e.target.textContent;
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
    case "/":
      return divide(firstNum, secondNum);
  }
}
