const numButtons = document.querySelectorAll(".num-button");
const operatorButtons = document.querySelectorAll(".op-button");
const display = document.querySelector(".display");
const clearButton = document.querySelector(".clear-button");
const equalsButton = document.querySelector(".equals-button");

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let firstNumber = "";
let secondNumber = "";
let operator = "";
let displayValue = "";
display.innerText = 0;
let runningValue = "";
let resultValue = "";

function operate(op, num1, num2) {
  if (op === "+") return add(num1, num2);
  if (op === "-") return subtract(num1, num2);
  if (op === "*") return multiply(num1, num2);
  if (op === "/") return divide(num1, num2);
}

numButtons.forEach((button) => {
  button.addEventListener("click", displayVal);
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    runningValue = operate(
      operator,
      parseFloat(firstNumber),
      parseFloat(secondNumber)
    );
    if (operator === "") {
      operator = event.target.value;
      clickedNumber = "";
    } else {
      operator = event.target.value;

      firstNumber = runningValue;
      display.innerText = firstNumber;
      secondNumber = "";
    }
  });
});

equalsButton.addEventListener("click", () => {
  resultValue = operate(
    operator,
    parseFloat(firstNumber),
    parseFloat(secondNumber)
  );
  display.innerText = resultValue;
  firstNumber = resultValue;
  secondNumber = "";
  operator = "";
});

function displayVal(event) {
  clickedNumber = event.target.value;
  if (operator === "" && secondNumber === "") {
    firstNumber += clickedNumber;
    display.innerText = firstNumber;
  } else if (operator !== "") {
    secondNumber += clickedNumber;
    display.innerText = secondNumber;
  }
}

clearButton.addEventListener("click", () => {
  displayValue = "";
  display.innerText = 0;
  firstNumber = "";
  secondNumber = "";
  operator = "";
});
