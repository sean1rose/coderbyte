function SimpleAdding(num) {
  if (num === 1){                                 // If num is equal to 1
    return 1;                                     // Return 1
  }
  return num + SimpleAdding(num - 1);             // Return num + the function itself, but with a parameter decreased by 1... (see example below)  
}


// Example:
// num = 3
// SimpleAdding(3)
// 3 does not equal 1 so return:
//    (3 + SimpleAdding(3 - 1)) = 3 + 2
// 2 does not equal 1 so return: 
//    (3 + 2 + SimpleAdding(2 - 1)) = 3 + 2 + 1
// 1 equals 1, so return 1:
// 3 + 2 + 1


// Another answer, but this one uses a for-loop:

//  function SimpleAdding(num) {
//    var sum = num;                              // Store the number parameter in variable sum
//    for (var i = 1; i < num; i++){              // Starting w/ i = 1, and increasing i by 1 w/ each loop so long as i is less than the value of num...
//      sum += i;                                 // Add i to the sum variable. If num were 3, then the sum variable would start with 3. Then we would add to that variable 1, then 2. We wouldn't add 3 because 3 is not less than num (which is 3) (and besides, we already added 3 to the sum variable)
//    }
//    return sum;                                 // Return sum
//  }