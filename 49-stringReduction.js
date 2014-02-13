// STEPS
// We're going to use a do-while loop. The loop will execute the code until the while-condition is no longer true.
// In our case, we're setting the variable lastLength to be equal to our inputted-string's length.
// Then, what we're going to DO, is we're going to replace the inputted string using Regular Expressions.
//    1st replace method: /ab|ba/
//      -> If the combo 'ab' or 'ba' is found in the string -> REPLACE it with letter 'c'
//      -> save that as the new string
//    2nd replace method: /bc|cb/
//      -> if the string contains the combination of letters 'bc' or 'cb' -> REPLACE it with lettter 'a'
//      -> save that as the new string
//    3rd replace method: /ac|ca/
//      -> if the string contains the combo 'ac' or 'ca' -> REPLACE it with letter 'b'
//      -> save that as the new string
// The above operations/replace-methods will be done on the string, starting from the beginning of the string.
// As soon as a replace-operation is executed on the string and that is saved as the new string, the do-loop will run thru the string again to see if any of the replace methods apply (again starting from the beginning of the string)
// Until the 3 replace-methods are no longer applicable, the do-loop will continue to execute and as soon as a replace method doesn't apply, the while loop is checked.
// The while loop should fail, as the str.length should now be shorter than lastLength, and then after exiting out of the loop, the length of the string is returned.

function StringReduction(str) { 
  var lastLength;
  
  do {
    lastLength = str.length;
    str = str.replace(/ab|ba/, "c");
    str = str.replace(/bc|cb/, "a");
    str = str.replace(/ac|ca/, "b");
  }
  while (lastLength > str.length)
  
  return str.length;
}