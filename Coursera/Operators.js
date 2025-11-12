// Tarea 1: Uso del operador lógico &&

var score = 8;
console.log("Mid.level skills: ", score > 0 && score < 10);

// Tarea 2: Utilización del operador lógico || 

var timeRemaining = 0;
var energy = 10;

console.log("Game over: ", timeRemaining == 0 || energy == 0);

// Tarea 3: Uso del operador módulo, %, para comprobar si un número 
// dado es impar

var num1 = 2;
var num2 = 5;

var test1 = num1 %2;
var test2 = num2 %2;

var result1 = test1 == 0;
var result2 = test2 == 0;

console.log("Is", num1, "an even number?", result1)
console.log("Is", num1, "an even number?", result2)

// Tarea 4: Suma de números utilizando el operador +

console.log(5+10);

// Tarea 5: Concatenar números y cadenas utilizando el operador +

var now = "Now in ";
var three = 3;
var d = "D!";

console.log(now + three + d)

// Tarea 6: Utilizar el operador += para acumular valores en una variable

var counter = 0;
counter += 5;
counter += 3;
console.log(counter)
