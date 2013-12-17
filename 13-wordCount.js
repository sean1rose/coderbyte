// STEPS:
// 1. Split the user-inputted string into component words (split it based on a space aka ' '). The split method will return an array
// 2. Return the length of the array, which in this case, will return the # of elements in the array aka the # of words.

function WordCount(str) {
  var words = str.split(' ');
  return words.length;
}

// I just looked at another answer, apparently an even more concise way to code this would be...
// return str.split(' ').length