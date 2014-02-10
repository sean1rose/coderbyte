function RunLength(str) { 
  var result = '';                          // This will be our end-result string (in format: "#letter#letter#letter") 
  var counter = 1;                          // Set up a counter to count # of times a letter occurs / is repeated. Starts at 1.
  var currentChar = str[0];                 // Set up a variable to track the current character of the string which we will be tracking. Start with the very 1st letter of the string.
  for (var i = 1; i < str.length; i++){     // For-Loop: For each letter in the string (loop starts at the next letter over)...
    if (currentChar == str[i]){             //          If the current character is the same as the next letter...
      counter++;                            //            -> Increase the counter by 1 
    } else {                                //          Otherwise (if current letter is not the same as the next letter)...
      result += counter + currentChar;      //            -> Add to the result string: counter's value (aka # of times the current letter was repeated) + the actual current character
      currentChar = str[i];                 //            -> Change the current character to the next letter
      counter = 1;                          //            -> Reset the counter to 1
    }
  }
  result += counter + currentChar;          // After for-loop is exited out of... one last time add to the result string: counter's value + actual current character
  return result;                            // Return the result string
}