//exmaples from chapter 3
//Parameters and Scope
var x = "outside";
var f1 = function() {
  var x = "inside f1";
};
f1();
console.log(x);

var y = "outside";
var f2 = function() {
  y = "inside f2"; //difference is that variable "y" changes definition.
};
f2();
console.log(y);

//Nested Scope
var landscape = function() {
  var result = "";
  var flat = function(size) {
    for (var count = 0; count < size; count++)
      result += "_";
  };
  var mountain = function(size) {
    result += "/";
    for (var count = 0; count < size; count++)
      result += "'";
    result += "\\";
  };
  flat(3);
  mountain(4);
  flat(6);
  mountain(1);
  flat(1);
  return result;
};
console.log(landscape());

//Declaration Notation
function square(x) {
  x = 5;
  return x * x;
}
console.log("the value of square is", square());

//Closure
function wrapValue(n) {
  var localVariable = n;
  return function() {
    return localVariable;
  };
}
var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());

//previous example into a way to create functions that multiply by an arbitrary amount.
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}
var twice = multiplier(2);
console.log(twice(5));

//Recursion
function power(base, exponent) {
  if (exponent == 0)
    return 1;
  else
    return base * power(base, exponent - 1);
}
console.log(power(2, 3));

//Exercises
//Minimum
console.log(Math.min(0, 10));
console.log(Math.min(0, -10));

//Recursion
function isEven(x) {
  if (x == 0)
    return true;
  else if (x == 1)
    return false;
  else if (x < 0)
    return isEven(-x);
  else {
    return isEven(x - 2);
  }
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

//Bean counting
function countChar(string, ch){
  var counted = 0;
  for (var i=0; i < string.length; i++)
  if (string.charAt(i) == ch)
  counted += 1;
  return counted;
}

function countBs(string){
  return countChar(string, "B");
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
