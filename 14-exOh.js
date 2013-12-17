// STEPS:
// 1. Split the user-inputted string into component characters. Save this to VAR1.
// 2. Create 2 counters - one to count the # of x's and one to count the # of y's.
// 3. Create a FOR-Loop to run thru VAR1. For each element...
//    A. IF the element is an 'x' -> add 1 to the x-counter
//    B. IF the element is an 'o' -> add 1 to the o-counter
// 4. Create an applicable if statement for the return values (if the x-counter === o-counter -> return true... etc)

function ExOh(str) {
	var letters = str.split('');
	var xCounter = 0;
	var oCounter = 0;
	for (var i = 0; i < letters.length; i++){
		if (letters[i] === 'x'){
			xCounter += 1;
		} else if (letters[i] === 'o'){
			oCounter += 1;
		}
	}
	if (xCounter === oCounter){
		return true;
	} else if {
		return false;
	}
}