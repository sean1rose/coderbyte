// STEPS:
// parseInt takes a string and returns an integer. It takes 2 parameters. 
// The first is the inputted string you want to convert to an integer.
// The second parameter is a number, which reprsents the numerical counting system to be used. 
// Inputting a 2 as the 2nd parameter will allow us to use the binary system, thus we can convert a string reprsenting a decimal number into a binary number.

function BinaryConverter(str) { 
  return parseInt(str, 2);
}

