// STEPS
// Create 2 arrays - 1 with the alphabet in all lowercase (but type out the alphabet two times, just in case the inputted character is a letter towards the back end of the alphabet, we want to be able to cycle thru the alphabet again...), and another array with the alphabet in all uppercase (x2)
// Create a empty string to store our final result
// Break the inputted string into component parts
// Create a FOR-LOOP - to traverse through the inputted string..
//    IF: the current letter of the inputted string is a lower case letter...
//      -> Use the littleAlpha array to find the index of the current letter in that array. Store that in a variable (ourIndex)
//      -> Take that index # and add the inputted number to it (this represents our nex index number). Use that new index to obtain the new, adjusted letter from littleAlpha and add it to the result string.
//    ELSE IF: the current letter of the inputted string is an upper case letter...
//      -> Repeat the above process, but use the bigAlpha array rather than the littleAlpha array...
//    ELSE: if the current character is not a letter (i.e. it's a space or punctuation mark)...
//      -> add the character, as is, to the result string.
// Return the result string

function CaesarCipher(str,num) { 
  var littleAlpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var bigAlpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var result = '';
  var parts = str.split('');
  var ourIndex = 0;
  for (var i = 0; i < parts.length; i++){
    if (parts[i] >= 'a' && parts[i] <= 'z'){
      ourIndex = littleAlpha.indexOf(parts[i]);
      result += littleAlpha[ourIndex + num];
    } else if (parts[i] >= 'A' && parts[i] <= 'Z'){
      ourIndex = bigAlpha.indexOf(parts[i]);
      result += bigAlpha[ourIndex + num];
    } else {
      result += parts[i];
    }
  }
  return result;
}