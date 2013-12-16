// STEPS:
// 1. Convert the user-input (which initially consists of just numbers) to a string
// 2. Create a VAR1 to store the end result (this can be an array or string)
// 3. Create a for loop to run thru each number of the user-input; for each number..
//			- add the current # to VAR1
//			- if the current # AND (the # immediately subsequent) are both odd, then...
//					-> add a '-' to VAR1
// 4.	Return VAR1.
// * If used an array to store the end result, then as the very very 1st step, convert the entire user-input to a string AND split based on ('') and store in a VAR. Also, in step 4, you'll need to join VAR1 using (''). Moral of the story is that you cannot use a for-loop to run thru just numbers. The for-loop will only be able to run thru a string or an array (so need to convert user-inputted #s to a string or conver to a string and then store in an array)

function DashInsert(num) {
	var numbers = num.toString();
	var result = '';
	for (var i = 0; i < numbers.length; i++){
		result += numbers[i];
		if (numbers[i] % 2 === 1 && numbers[i+1] % 2 === 1){
			result += '-';
		}
	}
	return result
}