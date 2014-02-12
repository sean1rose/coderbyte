// GAMEPLAN
// Count all of the open '(' and count all of the ')' and test whether they match or not

function BracketMatcher(str) { 
  var open = 0;                             // Create a counter to keep track of the # of open brackets
  var close = 0;                            // Create another counter to keep track of the # of close brackets
  for (var i = 0; i < str.length; i++){     // FOR LOOP: Traverse thru each character of the inputted string. FOR EACH character...
    if (str[i] == '('){                     //    -> IF the character is an open bracket aka '('...
      open += 1;                            //        -> Add 1 to the open-counter
    }
    if (str[i] == ')'){                     //    -> IF the character is a close bracket aka ')'...
      close += 1;                           //        -> add 1 to the close-counter
    }
  }
  if (open == close){                       // IF open-counter is equal in value to the close-counter...
    return 1;                               //    -> Return 1
  } else {                                  // Otherwise, return 0
    return 0;
  }
}