// STEPS:
// 1. Sort the array in ascending order
// 2. Remove the very last element. Store that value in a variable (this is the largest # in the array).
// 3. Create a variable (sum) to store the sum of our arithmetic we will be peforming
// 3. Run thru each remaining element in the array. FOR EACH element... (1st FOR-loop)
//    A. Add the value of the current element to the sum variable
//    B. Run thru all of the other elements in the array. FOR EACH OF THE REMAINING elements... (2nd FOR-loop)
//       1) So long as not the same exact element/number -> add the value of the element to the sum variable...
//          a. After each instance of adding to the sum variable, check to see if the sum is equivalent to the largest #; if so -> return true
//    C. At this point our sum variable would contain the sum of all of the elements in the array (save the largest #). Now, run thru all of the other elements in the array again. FOR EACH OF THE elements... (3rd FOR-loop)
//       1) So long as not the same exact element/number that was initially added to the sum variable -> subtract the value from the sum variable...
//          a. After each instance of subtraction from the sum variable, check to see if the sum is equivalent to the largest #; if so -> return true
// 4. Return false (this will be the default action so long as sum is never equivalent to the largest #)

function ArrayAddition(arr) { 
  arr.sort(function (a,b) {return a - b});
  var largestNumber = arr.pop();
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
    for (var j = 0; j < arr.length; j++) {
      if (i != j) {
        sum += arr[j];
        if (sum === largestNumber) {
          return true;
            }
      }
    }
    for (var k = 0; k < arr.length; k++) {
      if (i != k) {
      sum -= arr[k];
      if (sum === largestNumber) {
        return true;
          }
      }
    }
      }
  return false;      
}