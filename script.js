const numButtons = document.querySelectorAll(".num-button");
const operatorButtons = document.querySelectorAll(".op-button");
const display = document.querySelector(".display");
const clearButton = document.querySelector(".clear-button");
const equalsButton = document.querySelector(".equals-button");
const deleteButton = document.querySelector(".delete-button");
const minusButton = document.getElementById("minus-button");

let firstNumber = "";
let secondNumber = "";
let chainedNumbersValue = "";
let clickedNumber = "";
let operator = "";
display.innerText = 0;
let resultValue = "";

document.getElementById("minus-button").disabled = true;

// Calculator Functions

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

// Event Listeners

numButtons.forEach((button) => {
  button.addEventListener("click", numberDisplay);
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", operatorCalculation);
});

equalsButton.addEventListener("click", equalsCalculation);

clearButton.addEventListener("click", clearDisplay);

deleteButton.addEventListener("click", deleteNumber);

minusButton.addEventListener("click", () => {
  console.log("clickedNumber", clickedNumber);
  if (operator === "" && secondNumber === "") {
    firstNumber = -firstNumber;
    display.innerText = -display.innerText;
  } else if (operator !== "") {
    secondNumber = -secondNumber;
    display.innerText = -display.innerText;
  }
});

// Click Event Listener Functions

function numberDisplay(event) {
  if (display.innerText.length > 10) {
    document.getElementByClassName("num-button").disabled = true;
  }
  if (event.target.value === ".")
    document.getElementById("decimal-button").disabled = true;
  clickedNumber = event.target.value;
  if (operator === "" && secondNumber === "") {
    firstNumber += clickedNumber;
    display.innerText = firstNumber;
    document.getElementById("minus-button").disabled = false;
  } else if (operator !== "") {
    secondNumber += clickedNumber;
    display.innerText = secondNumber;
    document.getElementById("minus-button").disabled = false;
  }
}

function operatorCalculation(event) {
  document.getElementById("decimal-button").disabled = false;
  document.getElementById("minus-button").disabled = false;
  chainedNumbersValue = operate(
    operator,
    parseFloat(firstNumber),
    parseFloat(secondNumber)
  );
  if (operator === "") {
    operator = event.target.value;
    clickedNumber = "";
    document.getElementById("minus-button").disabled = true;
  } else {
    if (chainedNumbersValue !== "ERROR!!") {
      operator = event.target.value;
      firstNumber = +chainedNumbersValue.toFixed(2);
      display.innerText = firstNumber;
      secondNumber = "";
      document.getElementById("minus-button").disabled = true;
    } else {
      display.innerText = chainedNumbersValue;
    }
  }
}

function equalsCalculation() {
  document.getElementById("decimal-button").disabled = false;
  document.getElementById("minus-button").disabled = false;
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
      display.innerText = +resultValue.toFixed(2);
      firstNumber = +resultValue.toFixed(2);
      secondNumber = "";
      operator = "";
      document.getElementById("minus-button").disabled = true;
    } else {
      display.innerText = resultValue;
    }
  }
}

function clearDisplay() {
  display.innerText = 0;
  firstNumber = "";
  secondNumber = "";
  operator = "";
  document.getElementById("decimal-button").disabled = false;
  document.getElementById("minus-button").disabled = true;
}

function deleteNumber() {
  if (operator === "" && secondNumber === "") {
    let newNumber = firstNumber.slice(0, -1);
    firstNumber = newNumber;
    display.innerText = firstNumber;
  } else if (operator !== "") {
    let newNumber = secondNumber.slice(0, -1);
    secondNumber = newNumber;
    display.innerText = secondNumber;
  }
}
