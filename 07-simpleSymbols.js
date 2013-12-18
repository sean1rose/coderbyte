// STEPS:
// 1. Split the user-inputted-string based on character. Save this array in VAR1.
// 2. Create a FOR-LOOP to run thru each element of that array. FOR EACH element...
//    IF (every time you have a letter aka everytime you have a character OTHER THAN a '+' or an '=') AND EITHER (the character immediately preceding that character OR immediately after the character is NOT a '+')...
//    -> return false
//        * note: the instructions can help you a great deal here. They say "The str parameter will be composed of + and = symbols with several letters between them"...
//        * also notice how they say the user-input will only consist of +'s, ='s and letters. No other punctuation marks. So my IF statement takes that into account...
// 3. Otherwise, the default action is to return true

function SimpleSymbols(str) {
  var parts = str.split('');
  for (var i = 0; i < parts.length; i++) {
    if ( (parts[i] != '+' && parts[i] != '=') && (parts[i-1] != '+' || parts[i+1] != '+') ) {
      return false;
    }
  }
  return true;
}

// * Note I could've changed my if-statement slightly to say: if ( (parts[i] >= 'a' && parts[i] <= 'z') && ...etc). This would have the same effect and say "if the current character is a letter"


// Another possible answer, which I'll dive into a little bit since I can use the .indexOf() practice...

// function SimpleSymbols(str) { 
//  var strs = str.split("");
//  var letters = "abcdefghijklmnopqrstuvwxyz"
//  for (var i = 0; i < strs.length; i++) {
//    if (letters.indexOf(strs[i]) != -1 && (strs[i-1] != "+" || strs[i+1] != "+")) {
//      return false;
//    }
//  }
//  return true; 
// }

// Note how an extra string is created, which contains all of the letters of the alphabet. 
// The IF-statement uses indexOf. What that line of code is saying is that if the current character of the for loop (strs[i]) DOES EXIST (!= -1) in the letters string (letters.indexOf) aka the current character is a letter...
// AND  (the character before or the character after is NOT a '+')...
// THEN return false