// STRATEGY
// This code consists of 2 main parts - in the 1st part, we're taking every possible permutation of the inputted number. 
// So every order/combination that the inputted number can be arranged into, is stored into an array.
// Then, that array is sorted into ascending order.
// And using a for loop, as soon as a permutation is reached that is greater than the original inputted number, that is our return value.
// TIPS: the best way to understand this code is to try it out with various examples of different inputted numbers. The recursion can be tricky, as after 1 recursive call of the function, it's likely that you're not jumping directly into the next portion of the original for loop (that'll make sense when you actually do some examples)

function PermutationStep(num) { 
  var result = [];                            // Create an empty array. This will store all of our possible permutations. 
  var perm = function(current, set){          // Create a function, taking two parameters - current and set. Set will be an array. 
    if (set.length == 0){                     // This if-statement will serve as our recursion base case. 
        result.push(parseInt(current));       //   -> As soon as the array/set is empty, we're going to push the value of current (as an integer) into the results array.
        return;                               //   -> and we're going to return out of the (recursive) function 
    }
    for (var i = 0; i < set.length; i++){     // FOR-LOOP: We will traverse thru each element of the set. As you can see on line 22, the set consists of the inputted number (but the number has been converted into a string and split into an array, so each individual digit of the number represents an element of the array). 
                                              // So FOR EACH individual element of the set...
      var pivot = set[i];                     //    -> Take the current element and store it in a side variable (ours is named pivot)
      set.splice(i, 1);                       //    -> Whatever is currently in the set, we're going to splice it so that starting at index position (this is the same index as we're currently on in the for-loop) we'll remove 1 number/element/digit
      perm(current + pivot, set);             //    -> RECURSION TIME: concat the pivot value to current value (remember that we're dealing w/ strings here so we're not adding/performing arithmetic) -> this string will reprsent current in the recursive call. The new set is whatever is left over of the set after it was spliced in the previous step (splice alters and returns the original array)
      set.splice(i, 0, pivot);                //    -> Reset the set back to its original state. When '0' is passed as the 2nd argument into the splice method, the 3rd argument is added at the 1st argument's position (in this case the 3rd argument is variable pivot, which is what we removed a couple of steps ago)
    }
  }

  perm('', num.toString().split(''));         // This executes the perm function, with current paramater = '', and set parameter = inputted number converted to a string and split into an array

  result.sort();                              // Sort the result array in ascending order.

  for (var i = 0; i < result.length; i++){    // FOR-LOOP: Traverse thru each element of the result array. Remember that the array consists of all possible permutations of the user-inputted number, and those combinations are sorted in ascending order.
    if (result[i] > num){                     //    -> As soon as we reach a permutation that is greater than the user inputted number...
      return result[i];                       //    -> Return that permutation
    }
  }
  return -1;                                  //    -> Otherwise we'll be returning -1 if that permutation does not exist
}