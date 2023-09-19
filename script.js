const numButtons = document.querySelectorAll(".num-button");
const display = document.querySelector(".display");

/* Calculator Functions */

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

function operate(op, num1, num2) {
  if (op === "+") return add(num1, num2);
  if (op === "-") return subtract(num1, num2);
  if (op === "*") return multiply(num1, num2);
  if (op === "/") return divide(num1, num2);
}

// Instructions are to create functions that populate the display when I click the number buttons - should I put this into named function??

numButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    let clickedNumber = event.target.value;
    displayValue += clickedNumber;
    display.innerText = displayValue;
    console.log(displayValue);
  });
});
