console.log("For additions, press 1");
console.log("For subtractions, press 2");
console.log("For multiplications, press 3");
console.log("For divisions, press 4");
console.log("For power operations, press 5");
console.log("To find area of a circle, press 6")
console.log("For square root operations, press 7")

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

if (choice === "5"){
    num1 = prompt("Base: ")
    num2 = prompt("Exponent: ")
    sum = Math.pow(parseFloat(num1), parseFloat(num2))
    console.log(num1 + " to the power of " + num2 + " is " + sum);
}

if (choice === "6"){
    const pi = 3.14159265359;
    radius = prompt("What is the radius of the circle? : ")
    area = pi * parseFloat(radius) * parseFloat(radius)
    console.log("The area of the circle is " + area);
}

if (choice === "7"){
    num1 = prompt("Number: ")
    sqrtsum = Math.sqrt(num1)
    console.log("The square root of " + num1 + " is " + sqrtsum);
}