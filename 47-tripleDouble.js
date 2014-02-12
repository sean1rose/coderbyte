// GAMEPLAN
// Basically, we're going to be traversing thru the 1st input looking for an instance of 3 straight of the same character.
// When 3 straight of the same digit is found, that digit is stored in a side variable.
// We then run thru the 2nd inputted-number to see if we can find 2 straight of that same digit.

function TripleDouble(num1,num2) { 
  var numOne = num1.toString().split('');                       // Take the 1st input, convert to a string, and split based on character 
  var numTwo = num2.toString().split('');                       // Take the 2nd input, convert to a string, and split based on character
  var tester = '';                                              // Create a variable called 'tester' to store our triple-occurrence
  for (var i = 0; i < numOne.length; i++){                      // FOR-LOOP: Traverse thru each digit/character of the 1st input. For each digit...
    var sideNum = numOne[i];                                    //    -> Store the current digit we're on in the for-loop traverseal into a side variable
    if (numOne[i+1] == sideNum && numOne[i+2] == sideNum){      //    -> IF the next digit/character and the digit after that are both the same as the current side variable/digit... (aka we have 3 in a row of the same digit)...
      tester = sideNum;                                         //        -> Store that digit in the our 'tester' variable
      break;                                                    //        -> Break out of the for-loop
    }
  }
  for (var j = 0; j < numTwo.length; j++){                      // 2nd FOR-LOOP: Traverse trhu each character of the 2nd input. For each digit...
    if (numTwo[j] == tester && numTwo[j+1] == tester){          //    -> IF the current digit and the next digit are both equal to our tester variable (a double matches our previously found triple)...
      return 1;                                                 //        -> Then return 1
    }
  }
  return 0;                                                     // Otherwise we'll return 0
}