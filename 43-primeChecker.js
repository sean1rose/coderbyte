// STRATEGY
// This is basically a hodge-podge of answers to previous coderbyte exercises (PrimeTime and PermutationStep).
// Chances are, if you've gotten this far into the exercises, the concept behind this one should be fairly easy to grasp.
// First, I took the first part of the PermutationStep function - the part that gives me an array of all possible permutations of an inputted number.
// Then I took the PrimeTime function, which returned true if an input was a prime number, and false if not.
// Using a for loop, I run through each element in the result array (containing the permutations), passing each element thru the PrimeTime function.
// If the PrimeTime function returns true; then we have a prime number and we return 1, if not return 0. Tah-dah. 

function PrimeChecker(num) { 
  var result = [];
  var perm = function(current, set){
    if (set.length == 0){
      result.push(parseInt(current));
      return;
    }
    for (var i = 0; i < set.length; i++){
      var pivot = set[i];
      set.splice(i, 1);
      perm(current + pivot, set);
      set.splice(i, 0, pivot);
    }
  }
      
  perm('', num.toString().split(''));
  
  var primeTime = function(numero){
    if (numero == 1){
    return false;
    } else{
    for (var j = 2; j < numero/2; j++){
      if (numero % 2 === 0){
        return false;
      }
    }
    return true;
  }
  }
      
  for (var k = 0; k < result.length; k++){
    if (primeTime(result[k]) === true){
      return 1;
    }
  }
  return 0;
    
}