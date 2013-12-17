// STEPS:
// 1. Take the user-input, convert to all lowercase, and then split it into component characters (based on characters aka '')
// 2. Create a counter variable that will be used in the for-loop to keep track of the # of vowels
// 3. Create a FOR-Loop to run thru the component characters. FOR EACH character...
//    - IF the current character is an 'a' OR an 'e' OR an 'i' OR an 'o' OR a 'u'...
//      -> add 1 to the counter variable
// 4. Return the value of the counter variable

function VowelCount(str) {
  var components = str.toLowerCase().split('');
  var vowelCounter = 0;
  for (var i =0; i < components.length; i++){
    if (components[i] === 'a' || components[i] === 'e' || components[i] === 'i' || components[i] === 'o' || components[i] === 'u'){
      vowelCounter += 1;
    }
  }
  return vowelCounter;
}