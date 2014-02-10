// GAMEPLAN
// We are going to incorporate our PrimeTime function from the previous coderbyte exercise. 
// PrimeTime will be used to check if an integer is prime or not.
// So we are going to run through each and every integer until the nth-(num)-prime number is reached.


// Remember, PrimeTime will return 'true' if a number is prime and 'false' if a number is not prime. It does this by checking if the inputted number (num) is divisble by any number up to its half-way point(value of num divided by 2).
function PrimeTime(num) { 
  for (var i = 2; i < num / 2; i++){
    if (num % i === 0){
      return false;
    }
  }
  return true;
}

function PrimeMover(num) { 
  if (num == 1){                // Set a conditional branch for the 1st prime number (if inputted-num is 1), the 1st prime number being 2
    return 2;
  } else if (num == 2){         // Set another else-if branch for the 2nd prime number, the 2nd prime number being 3
    return 3;
  } else {                      // The following algorithm will be used for the 3rd prime number all the way to the nth prime number....
  var count = 0;                // Set a counter variable to 0. This will track what prime number we are currently at while going through the while-loop (the 1st prime number, 2nd, nth, etc). 
  var i = 2;                    // Set variable i to equal 2. i represents an integer we are checking. We are checking to see if i is prime or not, and will increase i by 1 every iteration of the while-loop.
  while (count < num) {         // So as soon as the counter gets to (num), which represents the nth-prime-number we are looking for, we will return the value of i. i should at that point represent the current / integer prime number. BUT BEFORE WE GET TO THE nth PRIME NUMBER...
    i++;                        //  -> add 1 to the integer
    if (PrimeTime(i)) {         //  -> we will then check every single integer, using PrimeTime, to see whether that integer is prime or not;
      count++;                  //      -> if the integer is, indeed, prime -> increase count by 1. Remember, count keeps track of the current prime number 
    }
  }
  return i;                     // the value of i will be returned as soon count gets to num (as soon as the current prime number reaches the n-th prime number we are looking for)
  }
}
