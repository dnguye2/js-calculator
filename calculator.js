const prompt = require('prompt');

const calculator = function(error, promptInput) {
  validation(promptInput.num1, promptInput.num2, promptInput.operation);
  performOperation(promptInput.num1, promptInput.num2, promptInput.operation);
}

// performing operations helper function
const performOperation = function(num1, num2, operation) {
  switch(operation) {
    case 'add':
    case '+':
      console.log(parseInt(num1) + parseInt(num2));
      break;
    case 'subtract':
    case '-':
      console.log(num1 - num2);
      break;
    case 'multiply':
    case '*':
      console.log(num1 * num2);
      break;
    case 'divide':
    case '/':
      console.log(num1 / num2);
      break;
    default:
      console.log('Not a valid operator.')
      break;
  } 
}

// input validation helper function
const validation = function(num1, num2, operation) {
  // handling division by zero
  if(num2 == 0 && (operation === 'divide' || operation === '/')) {
    console.log('Cannot divide by zero.')
    process.exit(1)
  }
  // handling inputs that aren't a number
  if(isNaN(num1) || isNaN(num2) || num1 === '' || num2 === ''){
    console.log('Not a number.')
    process.exit(1)
  }
}


//start the prompt
prompt.start();

//collect two numbers (num1 and num2) and an operation
//then call the function `calculator` with the user input
prompt.get(['num1','num2','operation'], calculator);