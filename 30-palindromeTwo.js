// EXPLANATION
// This is basically the same idea as was used in Palindrome I (Exercise 15). It uses the same framework, but adds a few extra conditions in the first for-loop
// Bascially, the if-statement w/in the 1st for loop is filtering out all spaces and punctuation marks. So only letters are added to the results string.
// The results-string is then reversed in the 2nd for loop, with that reversed string being added to var reverse.
// results is then tested against reverse

function PalindromeTwo(str) {
  var parts = str.toLowerCase().split('');
  var results = '';
  for (var i = 0; i < parts.length; i++){
    if (parts[i] != ' ' && parts[i] >= 'a' && parts[i] <= 'z'){
      results += parts[i];
    }
  }
  var reverse = '';
  for (var j = 0; j < results.length; j++){
    reverse += results[results.length - j - 1];
  }
  return results == reverse;
}