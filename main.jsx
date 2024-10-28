console.log("For additions, press 1");
console.log("For subtractions, press 2");
console.log("For multiplications, press 3");
console.log("For divizions, press 4");

const prompt=require("prompt-sync")({sigint:true});

let choice = prompt(": ");

if (choice === "1") {
    num1 = prompt("Number 1: ")
    num2 = prompt("Number 2: ")
    sum = parseFloat(num1) + parseFloat(num2)
    console.log("Addition of " + num1 + " and " + num2 + " is " + sum);

}

if (choice === "2"){
    num1 = prompt("Number 1: ")
    num2 = prompt("Number 2: ")
    sum = parseFloat(num1) - parseFloat(num2)
    console.log("Subtraction of " + num1 + " and " + num2 + " is " + sum);
}

if (choice === "3"){
    num1 = prompt("Number 1: ")
    num2 = prompt("Number 2: ")
    sum = parseFloat(num1) * parseFloat(num2)
    console.log("Multiplication of " + num1 + " and " + num2 + " is " + sum);
}

if (choice === "4"){
    num1 = prompt("Number 1: ")
    num2 = prompt("Number 2: ")
    sum = parseFloat(num1) / parseFloat(num2)
    console.log("Division of " + num1 + " and " + num2 + " is " + sum);
}