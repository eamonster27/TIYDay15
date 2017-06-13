console.log(asciiCreator([67, 90, 45, 49, 48, 49]))
console.log(asciiCreator([111, 79, 115]))

function asciiCreator(values) {
  // create a string based on the values passed in as an array
  var newString = "";
  for(let i = 0; i < values.length; ++i){
    newString = newString + String.fromCharCode(values[i]);
  }

  return newString;
}

console.assert(asciiCreator([67, 90, 45, 49, 48, 49]) === "CZ-101");
console.assert(asciiCreator([111, 79, 115]) === "oOs");
