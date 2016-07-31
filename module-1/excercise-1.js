//Exercise 1
//number
console.log(1);
//string
console.log('hello');
//variable
var x =1;
console.log(x);
//expressions
console.log(x + 2);
//multiple arguments
console.log(x, x, 1, 2 +2);
//MATH EXERCISES
// + example#1
console.log(1 +1);
//+ example#2
var a = 3
var b = 5
console.log(a + b);
//Exercise 2
//post and pre increment example
var x = 2
var y = 3
console.log(x++);
console.log(y++);
console.log(++x);
console.log(++y);
//Exercise 3
var prompt = require('prompt-sync')();
var x = Number(prompt('What you want as your first number?'));
var y = Number(prompt('What you want as your second number?'));
console.log(x - y);
//Exrcise 4
var prompt = require('prompt-sync')();
var x = Number(prompt('What you want as your number?'));
console.log(x % 2);
//Exercise 5 (stuck)
var prompt = require('prompt-sync')();
var x = Number(prompt('What you want as your first number?'));
var y = Number(prompt('What you want as your second number?'));
console.log(x/y, y/x);
//Exercise 6
var prompt = require('prompt-sync')();
var A = Number(prompt('How many ounces of Medalla did you had?'));
var W = Number(prompt('Enter your weight?'));
var H = Number(prompt('How many hours has passed since your last Medalla?'));
console.log((A * 5.14/W * 0.69) - 0.015 * H );
