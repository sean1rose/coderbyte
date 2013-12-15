// STEPS:
// 1. Create a prelim function that's used to sort the array in descending order, based on string length
// 2. Sort the user input based on the prelim function
// 3. Access the 3rd value of the sorted array

function prelim (a, b) {
	return b.length - a.length						
	}
	
function ThirdGreatest (strArr) {
	return strArr.sort(prelim)[2]
	}