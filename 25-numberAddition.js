// STEPS:
// 1. Create a variable (VAR1) to hold the sum of #s.
// 2. Create a variable (VAR2) to hold each # contained in the parameter/string (this is so that we can take into account #s with multiple digits aka #s > 9 aka 10, 11, etc.)
// 3. Create a for-loop that runs thru each character of the parameter-string. For each character...
//  - If the character is a # -> add it to VAR2
//  - Otherwise, if the character is not a # and VAR2 is not blank...
//    -> parse VAR2 as an integer and add it to VAR1
//    -> reset VAR2
// 4. If, after running thru the for-loop, VAR2 still has a value (this would happen if there were a # at the very end of the parameter-string) -> add VAR2 to VAR1 as an integer
// 5. Return VAR1
// *DO NOT FORGET to PARSE the integers in steps 3 and 4!!! 

function NumberAddition(str) { 
  var sum = 0;
  var curNum = '';
  for (var i = 0; i < str.length; i++) {
    if (str[i] >= '0' && str[i] <= '9') {
      curNum += str[i];
    } else if (curNum != '') {                  // As soon as there's a character...
      sum += parseInt(curNum);                  // -> ...convert whatever is in curNum to an integer (could be multiple digits) and add to sum
      curNum = '';                              // Reset curNum to blank (allowing you to add further numbers later on in the for loop)
    }
  }
  if (curNum != '') {
    sum += parseInt(curNum);
  }
  return sum;  
}