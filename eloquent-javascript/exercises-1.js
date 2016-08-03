//Looping triangle

for (var x = '#'; x.length < 8; x += '#')
console.log(x);

//Fizz Buzz
for (var y = 0; y <= 100; y++) {
  var output = "";
  if (y % 3 == 0)
  output += "Fizz"
  // return "Fizz";
  if (y % 5 == 0)
  output += "Buzz"
  console.log(output || y);
}

//Chess board
var size = 8;
var board = '';

for (var i = 0; i < size; i++) {
  for (var j = 0; j < size; j++) {
    if ((i + j) % 2 == 0)
      board += ' ';
    else
      board += '#';
    }
    board += '\n';
}
console.log(board);
