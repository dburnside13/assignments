const readline = require("readline-sync")

const num1 = readline.keyIn('Please enter your first number ')
const num2 = readline.keyIn('Please enter your second number ')
const op = readline.keyIn('Please enter the operation to perform: (a)dd, (s)ub, (m)ul, (d)iv')

function add (num1, num2){  
    return num1 + num2
}
function sub (num1, num2){  
    return num1 - num2
}
function mul (num1, num2){  
    return num1 * num2
}
function div (num1, num2){  
    return num1 / num2
}
if (op === 'a') {
    console.log(add (num1, num2))
}
else if (op === 's'){
    console.log(sub (num1, num2))
}
else if (op === 'm'){
    console.log(mul (num1, num2))
}
else if (op === 'd'){
    console.log(div (num1, num2))
}

// const userName = readline.question('May I have your name? ');
// console.log('Hi ' + userName + '!');
