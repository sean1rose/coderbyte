// GAMEPLAN
// The simplicity of this answer is a sight to behold. The descriptive use of variable names allows the explanation to almost jump out at you.
// Anywho, what this answer does is start with 0 and 1. It then does the Fibonacci calculations by adding the numbers together.
// It creates variable for last number, current number, and next number and cycles through them, adding the last number to the current number and saving the sum as the nextnumber.
// Then it checks the next number to see if it's equal to the user-inputted value.

function FibonacciChecker(num) { 
  if (num == 0){                                    // Making sure to include 0 as a fibonacci number, as 0 won't be included in the code to follow
    return 'yes';
  }
  var lastNumber = 0;                               // Create a variable to serve as the last number. Set value to 0. At this point, this represents the 1st number in the Fibonacci sequence
  var currentNumber = 1;                            // Create a variable that represents the current number. Set the value to 1. At this point (before jumping into the while-loop), current number represents the 2nd number in the Fib-sequence. We're going to be adding the 1st 2 numbers together to get the next number in the sequence, and will continue to do so until we reach the user-inputted number
  while (currentNumber <= num){                     // While current number's value is not greater than the user-inputted number...
    var nextNumber = lastNumber + currentNumber;    // Add last number to current number. The sum becomes nextNumber. 
    if (nextNumber == num){                         // Run a TEST: If nextNumber (which is a number in the Fib-sequence) is equal to the user-inputted number...
      return 'yes';                                 //    -> Return 'yes'
    }
    lastNumber = currentNumber;                     // After the addition of the current and last numbers and then the Test, we're going to change the currentNumber so that it becomes the lastNumber on the next cycle thru the while-loop
    currentNumber = nextNumber;                     // We're also going to change nextNumber so that it becomes the currentNumber in the coming iteration of the while-loop
  }
  return 'no';                                      // If no 'yes' is returned out of the while-loop (meaning no Fib number is matched by the time the sequence passes the user-inputted number) -> RETURN no, as the user input is not a number in the Fibonacci sequence.
}