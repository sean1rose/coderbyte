// GAMEPLAN
// We will use a for loop to run through every integer up to the lessor of num1 or num2.
// We're going to take each integer and test it to see if it's a factor of both num1 and num2 (meaning there's no remainder after dividing the number by the integer)

function Division(num1,num2) { 
  var gcf = 1;                                        // gcf represents the greatest common factor, which is what we're ultimately trying to figure out here. The GCD for 2 numbers is always at least 1.
  for (var i = 0; i <= num1 && i <= num2; i++){       // FOR-LOOP: Starting at 0, and up until i reaches either the value of num1 or num2 (whichever is lesser), for each number up to that point...
    if (num1 % i == 0 && num2 % i == 0){              //    IF: i is a common factor of both num1 and num2... 
                                                      //          ^ Think about the code here. var i reprsents potential common factors. If there is no remainder after dividing num1 by i, then i is a factor of num1. Using the && allows us to test if i is a COMMON factor b/w num1 and num2

      gcf = i;                                        //        -> if i is a common factor -> then make the value of i as the greatest common factor (which is subject to change as we proceed thru the for-loop)
    }
  }
  return gcf;                                         // return the value of the greatest common factor
}