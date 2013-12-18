// *note: I forgot who, exactly, I ripped this answer off of (1 of the other coderbyte users), 
// but I think this answer is genius. I remember first trying to wrap my head around the question 
// (this being challenge #4, it was 1 of the 1st ones I did) and using multiples pieces of scratch paper 
// but not being able to make substantial process. I finally gave in, and when I found this answer... 
// they say coding can be like an art form, and I think in this case, it is... Anywho, on to the steps...

// STEPS:
// 1. Split the user input based on character (letters and spaces and punctuations marks aka '')
// 2. Create an array, filled w/ 26 one-character-strings representing all letters of the alphabet, in order.
// 3. Create another array, filled w/ 26 one-character-strings, representing every letter shifted over by 1. So start w/ 'b' and then proceed all the way to 'a'
//    - (the point is that we are lining up the original alphabet w/ a new one so that we'll be able to grab the index of the character of the user-inputted string and cross-reference it w/ our 2 arrays of alphabets)
// 4. Capitalize all of the vowels in the new alphabet array since we want our output to have capital vowels.
// 5. Create an empty string to hold our final result.
// 6. Create a FOR-LOOP to run thru each character of the user-input. FOR EACH CHARACTER...
//    A. IF the current element is a letter (if the current element is a letter b/w 'a' and 'z')...
//        -> THEN: 1) take the value of the current element (which should be a letter); 2) find the index of that letter in the old alphabet array; and 3) store that index in a side variable;
//                 3) use that side index to access the value of the current element in the new alphabet array; and 4) add that value to the final string
//    B. OTHERWISE (if the current element is NOT a letter)...
//        -> THEN: add the value of the current element (which could be a space or any other symbol/punctuation mark) to the final string
// 7. Return the value of the final string.

function LetterChanges(str) { 
  var parts = str.split('');
  var oldAlpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 
  var newAlpha = ['b', 'c', 'd', 'E', 'f', 'g', 'h', 'I', 'j', 'k', 'l', 'm', 'n', 'O', 'p', 'q', 'r', 's', 't', 'U', 'v', 'w', 'x', 'y', 'z', 'A'];
  var result = '';
  for (var i = 0; i < parts.length; i++){
    if (parts[i] >= 'a' && parts[i] <= 'z'){
      var sideIndex = oldAlpha.indexOf(parts[i]);
      result += newAlpha[sideIndex];
    } else {
      result += parts[i];
    }
  }
  return result;
}