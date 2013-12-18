// STEPS: see to the right of each line of code below...

function LetterCapitalize(str) {
  var words = str.split(' ');                         // Split the user-inputted-string into component words
  var results = '';                                   // Create an empty string that will store our final output
  for (var i = 0; i < words.length; i++) {            // Create a FOR-LOOP to run thru each word of the user-input. FOR EACH word...
    var sideWord = words[i];                          // Store the current word in a side variable
    results += sideWord[0].toUpperCase();             // Take the 1st letter of the side word, capitalize it, and add it to our final string
    for (var j = 1; j < sideWord.length; j++) {       // Create another FOR-LOOP to run thru each letter of the side word (each letter other than the 1st letter, which is why we start w/ var j = 1). FOR EACH letter...
      results += sideWord[j];                         // Add the current letter to the final string (these letters will come after the now-capitalized-1st letter)
    }
    results += ' ';                                   // After running thru the for-loop of the side word, add a space (' ') to the final string, so that each word in the final string will separated by a space
  }
  return results;                                     // Return the final string
}