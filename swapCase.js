// PLAN:
// We want to test whether each character in the string is lower or upper case. If it's the former, convert to the latter and vice versa. Want to use an array, and push the results of each iteration of the for-loop to that array.
// STEPS:
// 1. Create an array (ARR1)
// 2. Create a for-loop so we can run thru each character of the paramter-string; for each character...
//		- if the current character is equivalent to (the character in uppercase form)...
//				-> convert the current character to lowercase form and push to ARR1
//		- if the current character is equivalent to (the character in lowercase form)...
//				-> convert the current character to uppercase form and push to ARR1
//		- otherwise (for all other characters that aren't letters aka #s and symbols)...
//				-> push the character, as is, to ARR1
// 3. Join ARR1 to form a string and RETURN

function swapCase(str) {
	var results = [];
	for (var i = 0; i < str.length; i++){
		if (str[i] === str[i].toUpperCase()){
			results.push(str[i].toLowerCase());
		} else if (str[i] === str[i].toLowerCase()){
			results.push(str[i].toUpperCase());
		} else {
			results.push(str[i]);
		}
	}
	return results.join('');
}