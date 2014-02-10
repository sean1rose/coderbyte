// GAMEPLAN:
// We are going to traverse through the 2nd string, making sure each individual character of str2 can be found in str1

function StringScramble(str1,str2){
  var parts1 = str1.split('');                  // Break str1 into its component parts (turns string into array of component parts)
  var parts2 = str2.split('');                  // Break str2 into its component parts
  var tester = true;                            // Create a tester variable, default set to true. This will be set to false, if at any time during the traversal of str2, a str2 character is not found within str1
  for (var i = 0; i < parts2.length; i++){      // Create a FOR-LOOP: Going to run through each character in the 2nd string. Remember that the entire str2 needs to be found in str1. In other words, each character/part of str2 has to also be in str1.
    if (parts1.indexOf(parts2[i]) == -1){       //    IF: (the current character of str2) is not found in str1...    (indexOf == -1 when an element is not found)
      tester = false;                           //        -> Change the tester variable to value 'false'
    }
  }
  return tester;                                // Return the value of tester. If true, then every str2 character was found in str1. If false, at least one str2 character was not found in str1 by virtue of using the indexOf method.
}