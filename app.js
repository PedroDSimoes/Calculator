let display = document.querySelector("#display");
let result;
let currentNumber;
let currentOperator;

  document.addEventListener('keydown', function(event) {
    if (event.key.match(/[0-9]/)) {
      appendNumber(event.key);
    } else if (event.key === '+') {
      setOperator('+');
    } else if (event.key === '-') {
      setOperator('-');
    } else if (event.key === '*') {
      setOperator('*');
    } else if (event.key === '/') {
      setOperator('/');
    } else if (event.key === '.') {
      appendNumber('.');
    } else if (event.key === 'Enter') {
      equals();
    } else if (event.key === 'Backspace') {
      clearLast();
    }
  });
  
  function clearLast() {
    let current = display.innerHTML;
    display.innerHTML = current.slice(0, -1);
    if (isNaN(result) || display.innerHTML === "") {
        clearDisplay();
        equals();
      }
  }

function appendNumber(number) {
    if (currentNumber === undefined) {
      display.textContent = number;
    } else {
      display.textContent += number;
    }
    currentNumber = parseFloat(display.textContent);
  }

  function setOperator(operator) {
    if (result === undefined) {
        result = currentNumber;
    } if (operator === 'pow') {
        display.textContent = currentNumber+'²';
    } if (operator === '\u221A') {
      display.textContent = '\u221A'; 
    } if (operator === '\u006C\u006E') {
        display.textContent = 'ln';
    } if (operator === 'reverse') {
        display.textContent = '+/-'
    } if (operator !== undefined) {
        display.textContent += operator;
        calculate();
    } 
    currentOperator = operator;
    currentNumber = undefined;
    display.textContent += operator;
  }

function calculate() {
    if (currentOperator === '+') {
        result += currentNumber;
    } else if (currentOperator === '-') {
        result -= currentNumber;
    } else if (currentOperator === '*') {
        result *= currentNumber;
    } else if (currentOperator === '/') {
        result /= currentNumber;
    } else if (currentOperator === '\u006C\u006E') {
        result = Math.log(currentNumber);
    } else if (currentOperator === '\u221A') {
        result = Math.sqrt(currentNumber);
    } else if (currentOperator=== 'pow') {
        result = currentNumber*currentNumber;
    } else if (currentOperator === 'reverse') {
        result = currentNumber * (-1);
    }
      else {
        currentNumber = parseFloat(display.innerHTML);
    }
    display.textContent = result;
    currentNumber = result;
    currentOperator = undefined;
}

function equals() {
    if (currentOperator !== undefined) {
        currentNumber = parseFloat(display.textContent);
        calculate();
        display.textContent = currentNumber;
    }
}
function clearDisplay() {
    display.textContent ="";
    result = undefined;
    currentNumber = undefined;
    currentOperator = undefined;
}