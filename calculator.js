const prompt = require("prompt-sync")(); // Please don't touch me :)

console.log("`````");

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
const name = prompt("What's your name? ");

const number1 = parseInt(prompt("Enter your 1st number: "));
const number2 = parseInt(prompt("Enter your 2nd number: "));
const operation = prompt("Enter one of these operations (+, -, /, *):\t");

console.log("--------------");

console.log(`Hi, ${name}.`);

let answer = 0;

if (operation === "+"){
    answer = number1 + number2;
    console.log(`Your answer = ${answer}`);
} else if (operation === "-") { 
    answer = number1 - number2;
    console.log(`Your answer = ${answer}`);
} else if (operation === "/") {
    answer = number1 / number2; 
    console.log(`Your answer = ${answer}`);
} else if (operation === "*"){
    answer = number1 * number2; 
    console.log(`Your answer = ${answer}`);
} else {
    console.log(" OPERATION IS NOT VALID !");
} 

console.log("THANK YOU!");
