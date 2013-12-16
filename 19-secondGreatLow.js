// PLAN: We are going to take out any repeat elements from the inputted-array. Then we'll sort in ascending order. Then take the second lowest and second greatest.
// STEPS:
// 1. Create a new side-array with 1 element in it - this element should be the 1st element in the user-inputted array.
// 2. Create a FOR-loop to run thru the original user-inputted array. FOR each element in the original array...
//    - IF the element in the original array doesn't already exist in our side-array...
//       -> add the element to our side-array
// 3. Sort the side array in ascending order
// 4. Take the second lowest element from the sorted side array and store in a variable
// 5. Take the second greatest element from the sorted side array and store in a variable
// 6. Return the values with a space in b/w

function SecondGreatLow(arr) {
	var results = [arr[0]];
	for (var i = 0; i < arr.length; i++){
		if (results.indexOf(arr[i]) === -1){			// results.indexOf(arr[i]) === 0  -> would mean that the value already exists in results at index 0. So by using results.indexOf(arr[i]) === -1, we are saying that if the value doesn't already exist in results. This is how we get rid of duplicate values.
			results.push(arr[i]);
		}
	}
	results.sort(function(a,b) {return a - b});
	var secondLowest = results[1];
	var secondGreatest = results[results.length-2];		// length-1 -> returns the last element in the array; length-2 returns the 2nd to last; etc
	return secondLowest + ' ' + secondGreatest;
}