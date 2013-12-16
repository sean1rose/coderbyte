// STEPS:

// Calculate the mean:
// 1. Create a variable to hold the sum of all #s in the array
// 2. Create a FOR loop to run thru all the #s in the array; FOR EACH #...
//    - add that # to the sum variable
// 3. Divide the sum by the number of elements/numbers in the array (using the length of the array)

// Calculate the mode:
// 1. Create 3 counter-variables. One will serve to hold the mode's value (COUNTER1), one will serve to keep track of the number of times that the mode appears (COUNTER2), and one to serve as a counter (COUNTER3).
// 2. Create a FOR loop to run thru all the #s in the array; FOR EACH #...
//    A. create a side variable to hold the current #/element that we are working on in the for-loop
//    B. Create another FOR loop. This for loop will be used to run thru all of the other remaining elements/numbers in the for loops. FOR EACH #...
//      1) IF (we're operating on different elements - 2 elements can have the same value, but we're making sure that we are not operating on the same exact element that we stored in the side variable earlier) AND (the value of the side variable is EQIVALENT to the value of the current element)...
//        a. Then add 1 to the counter variable (COUNTER3)
//        b. Create another IF-statement at this point. IF COUNTER1 is greater than the counter that serves to keep track of the number of times that the mode appears (COUNTER2)...
//            -> Set value of COUNTER 3 to become the new value of COUNTER2, and
//            -> Make the side variable become the COUNTER1. This means that the side variable becomes the new mode!
//    C. Reset COUNTER3 to equal 0

// Calculate the return values:
// 1. If the mode equals the mean -> return 1; otherwise return 0


//CODE:
function MeanMode(arr) {
	//mean calculation:
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	var mean = (sum / arr.length);
	
	//mode calculation:
	var polePosNum = 0;       //*note: polePosNum is going to be the mode
	var polePosCount = 0;
	var counter = 0;
	for (var j = 0; j < arr.length; j++){
		var sideNumber = arr[j];
		for (var k = 0; k < arr.length; k++){
			if (j != k && sideNumber === arr[k]){
				counter += 1;
				if (counter > polePosCount){
					polePosCount = counter;
					polePosNum = sideNumber;
				}
			}
		}
		counter = 0;
	}
	if (polePosNum === mean){
		return 1;
	} else {
		return 0;
	}
}