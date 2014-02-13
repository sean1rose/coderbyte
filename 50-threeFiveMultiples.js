// What I learned...
// I didn't know that you can utilize a for-loop with a number/integer.
// I had only used a for-loop with strings and arrays, so this was new to me.

function ThreeFiveMultiples(num) {
  var sum=0;                              // Create a variable to keep track of our sum. We'll be adding the sum of all multiples of 3 and 5 up to (num)
  for (var i = 3;i < num; i++){           // FOR-LOOP: Starting at 3, incrementing by 1 each iteration, and until num is reached...
    if (i % 3 == 0 || i % 5 == 0){        //    -> IF: the current number is divisible by 3 w/ no remainder or divisible by 5 w/ no remainder (aka the number is a multiple of 3 or 5)...
      sum += i;                           //          -> Add the value of the current number to sum
    }
  }
  return sum;                             // Return sum
}