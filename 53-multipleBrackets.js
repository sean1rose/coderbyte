// GAMEPLAN
// This is almost the same as BracketMatcher exercise, except we're taking into account both parentheses '(' ')' and brackets '[' ']'.
// Also, we're counting how many total sets of brackets are utilized in the string.

function MultipleBrackets(str) { 
  var openP = 0;                                  // Counter to keep track of the # of open parentheses '('
  var closeP = 0;                                 // Counter to keep track of the # of closed parentheses ')'
  var openB = 0;                                  // Counter to keep track of the # of open brackets '['
  var closeB = 0;                                 // Counter to keep track of the # of close brackets ']'
  var counter = 0;                                // Counter to keep track of the total # of sets/pairs of brackets
  for (var i = 0; i < str.length; i++){           // FOR LOOP: Traverse thru each character of the string. FOR EACH CHARACTER...
    if (str[i] == '('){                           //    -> IF the character is an open parentheses...
      openP += 1;                                 //      -> Increase the open-parentheses counter by 1
      counter += 1;                               //      -> Also increase the total bracket counter by 1
    }
    if (str[i] == ')'){                           //    -> IF the character is a closed-parentheses...
      closeP += 1;                                //      -> Increase the close-parentheses counter by 1
    }
    if (str[i] == '['){                           //    -> IF the character is an open-bracket...
      openB += 1;                                 //      -> Increase the open-bracket counter by 1
      counter += 1;                               //      -> Also increase the total bracket counter by 1
    }
    if (str[i] == ']'){                           //    -> IF the character is a closed-bracket...
      closeB += 1;                                //      -> Increase the close-bracket counter by 1
    }
  }
  if (openP == closeP && openB == closeB){        // IF there's a closed parentheses for every open parentheses AND there's a closed bracket for every open bracket...
    return 1 + ' ' + counter;                     //    -> Return 1 + space + total-bracket-counter's value (concated)
  } else {                                        // OTHERWISE...
    return 0;                                     //    -> Return 0
  }
}}