// PLAN: Run thru each word in a string. With each word, hold and store a letter, then compare that letter against the other letters in the word. Keep track of words w/ repeat letters and # of repeat letters.

// STEPS:
// 1. Split the sentence into words.
// 2. Set the necessary counters and indexes. 1 to hold the pole position word, 1 to hold the # of repeated letters that pole position word contains, and 1 to serve as a general counter while we run thru the letters of each word.
// 3. Run thru each word. FOR EACH WORD, do the following:
//		A. Put aside a variable that holds the value of the current word
//    B. Run thru each letter of the current word, FOR EACH LETTER:
//				1) Put aside a variable that holds the value of the current letter
//				2) Run thru each letter (again) of the current word. FOR EACH LETTER:
//					a. IF (we're dealing with 2 different letter/element positions) AND (the value of the letter in the side variable matches the value of the current letter)
//							-> THEN add 1 to the general counter
//		C. IF the (value of the general counter) is greater than the (value of the pole position counter)...
//				-> (value of the general counter) becomes the new (value of the pole position counter) AND that word becomes the new pole position word.
// 4, IF the value of the pole position counter is at least 1, return the pole position word, otherwise return -1

function LetterCountI(str) {
	var words = str.split(' ');
	var polePosCount = 0;
	var polePosWord = '';
	var counter = 0;
	for (var i = 0; i < words.length; i++){									// run thru each word, FOR EACH word...
		var sideWord = words[i];															// hold the current word in a side variable (this will be the word we're currently working on)
		for (var j = 0; j < sideWord.length; j++){						// run thru each letter in the word, FOR EACH letter...
			var sideLetter = sideWord[j];												// hold the current letter in a side variable. We are going to compare this letter to the other letters in the word...
			for (var k = 0; k < sideWord.length; k++){					// run thru each letter in the word (again), FOR EACH letter...
				if (j != k && sideLetter === sideWord[k]){				// so long as it's not the same exact letter (by same exact I mean it's not only the same letter value, but also it's in the same exact position) & this letter is the same letter as the letter in the side variable (same value aka same letter)
					counter +=1;																		// add 1 to the counter
					if (counter > polePosCount){										// at this point, if the counter is greater than the pole position counter, THEN...
						polePosCount = counter;												// 	- the counter value becomes the new value for the pole position counter
						polePosWord = sideWord;												//	- the current word becomes the new value for the pole position word
					}
				}
			}
			counter = 0;																				// reset the counter to 0. Notice the placement. We want to reset after each comparing a side-Letter against all other letters in the current word. So the counter will be reset multiple times in a word.
		}
	}
	if (polePosCount >= 1){
		return polePosWord;
	} else {
		return -1
	}
}