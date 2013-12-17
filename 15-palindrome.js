// STEPS:
// 1. Convert the user-inputted string to lowercase. Split the string into characters (this will store it in an array). Store in VAR1.
// 2. Create a variable that will be used to hold the string without spaces (VAR2). Make this string empty.
// 3. Create a FOR-LOOP to run thru each element of VAR1. For each element...
//    A. IF the element's value is not a space aka (' '), THEN...
//       -> add that element's value to VAR2.
// 4. Create another variable that will be used to hold the string reversed (VAR3). Make this string empty.
// 5. Create a FOR-LOOP to run thru each element of VAR2. For each element...
//    A. (Use the following format to use the for loop to run thru the elements of VAR2 in reverse order: VAR2[VAR2.length - 1 - i]) -> add the element to VAR3
// 6. Return VAR2 == VAR3

function Palindrome(str) {
  var characters = str.toLowerCase().split('');
  var noSpaces = '';
  for (var i = 0; i < characters.length; i++){
    if (characters[i] != ' '){
      noSpaces += characters[i];
    }
  }
  var reversed = '';
  for (var j = 0; j < noSpaces.length; j++){
    reversed += noSpaces[noSpaces.length - 1 - j];          // [noSpaces.length - 1] ->  would start at the last element. j starts w/ a value at 0 (so start at the last element). Then w/ each iteration thru the for loop, j increases and we run further from the end of the noSpaces string towards the beginning.
  }
  return noSpaces == reversed;
}