const keys = document.querySelector('.calculator-keys')

const calculator = {
    displayValue: "0", 
    firstValue : null , 
    waitingForSecondValue : false,
    operator : null
}

function inputDigit(digit){
    const {displayValue , waitingForSecondValue} = calculator
    if(waitingForSecondValue === true){
        calculator.displayValue = digit
        calculator.waitingForSecondValue = false
    }else{
    calculator.displayValue = displayValue === "0" ? digit : displayValue + digit
    }
}
function inputDecimal(dot){
    

    if(!calculator.displayValue.includes(dot)){
        calculator.displayValue += dot
    }
}
function reset(deleter){
    const {displayValue , waitingForSecondValue , firstValue , operator} = calculator
    calculator.displayValue= "0", 
    calculator.firstValue = null , 
    calculator.waitingForSecondValue = false,
    calculator.operator = null
}
function handleOperator(nextOperator){
    const {displayValue , operator , waitingForSecondValue ,firstValue} = calculator

    const inputValue = parseFloat(displayValue)

    if(firstValue === null && !isNaN(inputValue)){
        calculator.firstValue = inputValue
    }else if(operator ){
        let result = calculate(firstValue , inputValue , operator)

        calculator.displayValue = String(result)
        calculator.firstValue = result
        
    }

    calculator.waitingForSecondValue = true
    calculator.operator = nextOperator    
}

function calculate(firstValue , secondValue , operator){
    if(operator === "+"){
        return firstValue + secondValue
    }if(operator === "-"){
        return firstValue - secondValue
    }if(operator === "*"){
        return firstValue * secondValue
    }if(operator === "/"){
        return firstValue / secondValue
    }

    return secondValue
}

function updateDisplay(){
    const {displayValue} = calculator
    let display = document.querySelector('.calculator-screen')
    display.value = displayValue
    console.log("displayValue" + displayValue)
}

keys.addEventListener('click' , (e)=>{

    const element = e.target

    if(!element.matches('button')){
        return;
    }

    if(element.classList.contains('operator')){
        console.log('operator' ,  element.value)
        handleOperator(element.value)
        updateDisplay()
        return;
    }
    if(element.classList.contains('cleanAll')){
        console.log('clear' ,  element.value)
        reset(element.value)
        updateDisplay()
        return;
    }
    if(element.classList.contains('decimal')){
        console.log('decimal' ,  element.value)
        inputDecimal(element.value)
        updateDisplay()
        return;
    }
    
    console.log("digit" , element.value)
    inputDigit(element.value)
    updateDisplay()
})















// const calculator = {
//     displayValue: '0',
//     firstOperand: null,
//     waitingForSecondOperand: false,
//     operator: null,
//   };
  
//   function inputDigit(digit) {
//     const { displayValue, waitingForSecondOperand } = calculator;
  
//     if (waitingForSecondOperand === true) {
//       calculator.displayValue = digit;
//       calculator.waitingForSecondOperand = false;
//     } else {
//       calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
//     }
  
//     console.log(calculator);
//   }
  
//   function inputDecimal(dot) {
//     if (!calculator.displayValue.includes(dot)) {
//       calculator.displayValue += dot;
//     }
//   }
  
//   function handleOperator(nextOperator) {
//     const { firstOperand, displayValue, operator } = calculator
//     const inputValue = parseFloat(displayValue);
    
//     if (operator && calculator.waitingForSecondOperand)  {
//       calculator.operator = nextOperator;
//       console.log(calculator);
//       return;
//     }
  
  
//     if (firstOperand == null && !isNaN(inputValue)) {
//       calculator.firstOperand = inputValue;
//     } else if (operator) {
//       const result = calculate(firstOperand, inputValue, operator);
  
//       calculator.displayValue = String(result);
//       calculator.firstOperand = result;
//     }
  
//     calculator.waitingForSecondOperand = true;
//     calculator.operator = nextOperator;
//     console.log(calculator);
//   }
  
//   function calculate(firstOperand, secondOperand, operator) {
//     if (operator === '+') {
//       return firstOperand + secondOperand;
//     } else if (operator === '-') {
//       return firstOperand - secondOperand;
//     } else if (operator === '*') {
//       return firstOperand * secondOperand;
//     } else if (operator === '/') {
//       return firstOperand / secondOperand;
//     }
  
//     return secondOperand;
//   }
  
//   function resetCalculator() {
//     calculator.displayValue = '0';
//     calculator.firstOperand = null;
//     calculator.waitingForSecondOperand = false;
//     calculator.operator = null;
//     console.log(calculator);
//   }
  
//   function updateDisplay() {
//     const display = document.querySelector('.calculator-screen');
//     display.value = calculator.displayValue;
//   }
  
//   updateDisplay();
  
//   const keys = document.querySelector('.calculator-keys');
//   keys.addEventListener('click', (event) => {
//     const { target } = event;
//     if (!target.matches('button')) {
//       return;
//     }
  
//     if (target.classList.contains('operator')) {
//       handleOperator(target.value);
//           updateDisplay();
//       return;
//     }
  
//     if (target.classList.contains('decimal')) {
//       inputDecimal(target.value);
//           updateDisplay();
//       return;
//     }
  
//     if (target.classList.contains('cleanAll')) {
//       resetCalculator();
//           updateDisplay();
//       return;
//     }
  
//     inputDigit(target.value);
//     updateDisplay();
//   });