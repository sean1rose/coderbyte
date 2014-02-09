// STEPS:
// 1. We're going to run a for-loop up to the (inputted-number's 1/2 way point). We're starting the loop at 2 (rather than 0 or 1), because 2 is the first prime number.
// 2. If the inputted number is divisble *without remainder* by [ANY of the numbers up to (inputted-number's 1/2 way point)] -> return false, as that number is not prime...
//    Think about it - the number is not going to be divisible by any number past its half way point, as if that were the case, then it would've been divisible by a number before its half way point
//    Also, think about variable i in our loop. We're going to check if inputted number is ever divisible by i (without remainder). But this test/check will only be done on all integers up to inputted-number's half way point.


function PrimeTime(num) { 
  for (var i = 2; i < num / 2; i++){
    if (num % i === 0){
      return false;
    }
  }
  return true;
}
   