// GAMEPLAN
// This is basically the same challenge as Dash Insert #1... 
// Except we add the extra condition that if there's 2 consecutive even #s, we're going to insert an asterisk between them.
// Steps by step analysis below...

function DashInsertII(num) { 
  var parts = num.toString().split('');                 // Convert the inputted number into a string, split the string up based on character to create an array and save in a variable
  var result = '';                                      // Create an empty string to save our result
  for (var i = 0; i < parts.length; i++){               // FOR-LOOP: Traverse thru each character/digit of the number-turned-string. For each digit...
    result += parts[i];                                 //    -> Add the current digit to the result string
    if (parts[i] % 2 === 1 && parts[i+1] % 2 === 1){    //    -> IF the current digit and the very next digit are both odd (when dividing by 2 there's a remainder of 1)...
      result += '-';                                    //        -> Insert a dash 
    }                                                   //    -> IF the current digit and the very next digit are both even (and they don't equal zero)...
    if (parts[i] % 2 === 0 && parts[i+1] % 2 === 0 && parts[i] != '0' && parts[i+1] != '0'){
      result += '*';                                    //        -> Insert an asterisk
    }
  }
  return result;                                        // After completing the for-loop, return the result string.
}