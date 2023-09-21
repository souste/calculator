const numButtons = document.querySelectorAll(".num-button");
const operatorButtons = document.querySelectorAll(".op-button");
const display = document.querySelector(".display");
const clearButton = document.querySelector(".clear-button");
const equalsButton = document.querySelector(".equals-button");
const deleteButton = document.querySelector(".delete-button");

let firstNumber = "";
let secondNumber = "";
let chainedNumbersValue = "";
let clickedNumber = "";
let operator = "";
display.innerText = 0;
let resultValue = "";

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

function operate(op, num1, num2) {
  if (op === "/" && num2 === 0) return "ERROR!!";
  if (op === "+") return add(num1, num2);
  if (op === "-") return subtract(num1, num2);
  if (op === "*") return multiply(num1, num2);
  if (op === "/") return divide(num1, num2);
}

numButtons.forEach((button) => {
  button.addEventListener("click", numberDisplay);
});

function numberDisplay(event) {
  if (event.target.value === ".")
    document.getElementById("decimal-button").disabled = true;
  clickedNumber = event.target.value;
  if (operator === "" && secondNumber === "") {
    firstNumber += clickedNumber;
    display.innerText = firstNumber;
  } else if (operator !== "") {
    secondNumber += clickedNumber;
    display.innerText = secondNumber;
  }
}

operatorButtons.forEach((button) => {
  button.addEventListener("click", operatorCalculation);
});

function operatorCalculation(event) {
  document.getElementById("decimal-button").disabled = false;

  chainedNumbersValue = operate(
    operator,
    parseFloat(firstNumber),
    parseFloat(secondNumber)
  );
  if (operator === "") {
    operator = event.target.value;
    clickedNumber = "";
  } else {
    if (chainedNumbersValue !== "ERROR!!") {
      operator = event.target.value;
      firstNumber = +chainedNumbersValue.toFixed(5);
      display.innerText = firstNumber;
      secondNumber = "";
    } else {
      display.innerText = chainedNumbersValue;
    }
  }
}

equalsButton.addEventListener("click", equalsCalculation);

function equalsCalculation() {
  document.getElementById("decimal-button").disabled = false;
  if (firstNumber !== "" && secondNumber === "") {
    display.innerText = firstNumber;
    resultValue = firstNumber;
    operator = "";
  } else {
    resultValue = operate(
      operator,
      parseFloat(firstNumber),
      parseFloat(secondNumber)
    );
    if (resultValue !== "ERROR!!") {
      display.innerText = +resultValue.toFixed(5);
      firstNumber = +resultValue.toFixed(5);
      secondNumber = "";
      operator = "";
    } else {
      display.innerText = resultValue;
    }
  }
}

clearButton.addEventListener("click", () => {
  display.innerText = 0;
  firstNumber = "";
  secondNumber = "";
  operator = "";
  document.getElementById("decimal-button").disabled = false;
});

deleteButton.addEventListener("click", () => {
  if (operator === "" && secondNumber === "") {
    let newNumber = firstNumber.slice(0, -1);
    firstNumber = newNumber;
    display.innerText = firstNumber;
  } else if (operator !== "") {
    let newNumber = secondNumber.slice(0, -1);
    secondNumber = newNumber;
    display.innerText = secondNumber;
  }
});
