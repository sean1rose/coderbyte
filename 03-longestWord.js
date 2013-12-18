// STEPS:
// See below to the right of the code...

function LongestWord(sen) { 
  var words = sen.split(' ');                             // Split the user-inputted sentence into words
  var counter = 0;                                        // Create a counter to keep track of the # of letters in a word
  var poleposcount = 0;                                   // Create a pole position counter to keep track of the # of letters the longest word has
  var poleposword = '';                                   // Create an empty string to store the longest word
  for (var i = 0; i < words.length; i++){                 // Create a FOR LOOP to run thru each word in the sentence. FOR EACH word...
    var sideword = words[i];                                // Store the current word in a side variable for later use
    for (var j = 0; j < sideword.length; j++){              // Create another FOR LOOP to run thru each character in the current side word. FOR EACH character...
      if (sideword[j] >= 'a' && sideword[j] <= 'z'){          // So long as the character is a letter...
        counter += 1;                                           // -> Add 1 to the counter (this counts the # of letters in the current side word)
      }
      if (counter > poleposcount){                            // After running thru each letter, if the counter (# of letters in the current word) is greater than the pole position counter (# of letters in the longest word)...
        poleposcount = counter;                                 // -> Assign the counter as the new pole position counter (the current value for the counter becomes the value of the pole position counter)
        poleposword = sideword;                                 // -> Assign the current side word as the pole position word aka the current word becomes the current longest word (so far at least)
      }
    }
    counter = 0;                                            // Reset the counter at the end of the 1st FOR-LOOP
  }
  return poleposword;                                     // Return the longest word
}