function FirstFactorial(num) {
  if (num <= 1){
    return 1;
  }
  return num * FirstFactorial(num - 1);
}

// OVERVIEW:

// RECURSEEEEOOOOONNNNNN!!!
// We have a base case of "num is less than or equal to 1," so as soon as num hits 1, the function will return 1. This is how we exit out of our recursive function
// Otherwise, we are multiplying num * the function, itself. BUT, when we call the function w/in the function, we call it with (num - 1).
// Doesn't make sense? Here's an example:

// Example: (take note of how num decreases each time through the recursive function because of (num - 1))...
// num === 4

// 1) FirstFactorial(4)
//    A) num != 1, so the IF-statement does not apply and we do not return 1 yet. Move on to the 2nd part of the function...
//    B) return num * FirstFactorial(num - 1);
//       -> return 4 * FirstFactorial(4 - 1)
//       -> in the next step, we will run FirstFactorial again, with num === 3. DON'T FORGET THAT WE'VE ALREADY RETURNED 4...

// 2) 4 * FirstFactorial(3)
//    A) num != 1, so...
//    B) return 3 * FirstFactorial(3 - 1)
//       -> new num equals 2

// 3) 4 * 3 * FirstFactorial(2)
//    A) num != 1, so...
//    B) return 2 * FirstFactorial(2 - 1)
//       -> new num equals 1 (which means this will be the last instance of our function calling itself since num === 1 we will be returning 1 in the next step)

// 4) 4 * 3 * 2 * FirstFactorial(1)
//    A) num === 1, so return 1...
//    B) 4 * 3 * 2 * 1 === factorial of 4 === 4! ==== 24
