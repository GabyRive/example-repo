//Examples
//Methods
var mack = [];
mack.push("Mack");
mack.push("the", "Knife");
//.push - method can be used to add values to the end of an array.
console.log(mack); //['Mack', 'the', 'Knife']
console.log(mack.join(" ")); //Mack the Knife
//.join - determines the text that is glued between the array’s elements.
console.log(mack.pop()); //Knife
//.pop - it removes the value at the end of the array and returns it.
console.log(mack); //['Mack', 'the']

//Objects
var day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running", "television"]
};
console.log(day1.squirrel); //false
console.log(day1.events); //list of events
console.log(day1.wolf); //undifined

day1.wolf = false;
console.log(day1.wolf); //false

//delete
var anObject = {
  left: 1,
  right: 2
};
console.log(anObject.left); //1
console.log(anObject.right); //2
delete anObject.left;
console.log(anObject.left); //undefined
console.log('right' in anObject); //true
console.log('left' in anObject); //false

//Shift and Unshift
//corresponding methods for adding and removing things at the start of an array

console.log("coconuts".slice(4, 7)); //nut
console.log("coconut".indexOf("u")); //5
console.log('coconut'.lastIndexOf('o')); //3
//---------
//Exercises
function range(start, end, step) {
  if (step == null) step = 1;
  var array = [];

  if (step > 0) {
    for (var i = start; i <= end; i += step)
      array.push(i);
  } else {
    for (var i = start; i >= end; i += step)
      array.push(i);
  }
  return array;
}

function sum(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++)
    total += array[i];
  return total;
}

console.log(range(1, 10));
//[1, ... , 10]
console.log(range(5, 2, -1));
//[5, 4, 3, 2]
console.log(sum(range(1, 10)));
// 55
