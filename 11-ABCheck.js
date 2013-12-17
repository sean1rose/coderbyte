// STEPS:
// 1. Convert the user-inputted string to all lowercase. Then split it based on character ('').
// 2. Create a FOR-Loop to run thru the characters. FOR EACH character...
//    - IF (the current character is an 'a') AND either (the character 4 elements previous is a 'b') OR (the character 4 elements after is a 'b')...
//      -> Return true
//    - IF (the current character is an 'b') AND either (the character 4 elements previous is an 'a') OR (the character 4 elements after is an 'a')...
//      -> Return true
// 3. Otherwise, return false

function ABCheck(str) { 
  var components = str.toLowerCase().split('');
  for (i = 0; i < components.length; i++) {
    if ((components[i] === 'a') && ((components[i - 4] === 'b') || (components[i + 4] === 'b'))) {
      return true;
    } else if ((components[i] === 'b') && ((components[i - 4] === 'a') || (components[i + 4] === 'a'))) {
        return true;
      } 
  }
  return false;
}     
