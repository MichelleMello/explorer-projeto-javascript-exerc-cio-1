let numberOne = prompt("Enter the first number");
let numberTwo = prompt("Enter the second number");  

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

let sum = numberOne + numberTwo;
let difference = numberOne - numberTwo;
let product = numberOne * numberTwo;
let quotient = numberOne / numberTwo;
let remainder = numberOne % numberTwo;

alert('The sum of ' + numberOne + ' and ' + numberTwo + ' is ' + sum)
alert('The difference of ' + numberOne + ' and ' + numberTwo + ' is ' + difference)
alert('The product of ' + numberOne + ' and ' + numberTwo + ' is ' + product)   
alert('The quotient of ' + numberOne + ' and ' + numberTwo + ' is ' + quotient)
alert('The remainder of ' + numberOne + ' and ' + numberTwo + ' is ' + remainder)

if (sum % 2 == 0) {
    alert('The sum of ' + numberOne + ' and ' + numberTwo + ' is even')
} else { 
    alert('The sum of ' + numberOne + ' and ' + numberTwo + ' is odd')
}

if (numberOne == numberTwo) {
    alert('The numbers are equal')
} else {
    alert('The numbers are not equal')
}