// GAMEPLAN
// We're going to cycle through the inputted array and count the number of times a given number is repeated. 
// The one that's repeated the most often will be the mode

function SimpleMode(arr) { 
  var counter = 0;                              // Create a variable counter to keep track of the number of times a certain number is repeated. Set its value as 0 .
  var poleposCount = 0;                         // Create a variable to act as a sort of placeholder that will keep track of the highest amount of repeats. In other words, this has the value that the number that was repeated the most was actually repeated (the number of times the current mode was repeated)
  var poleposNum = 0;                           // Create a variable to hold the actual mode value. 
  for (var i = 0; i < arr.length; i++){         // Create a FOR-LOOP: We will be traversing through the inputted array. For each number in the array...
    counter = 0;                                //    -> Make sure the counter is set at 0
    var sideNum = arr[i];                       //    -> Take the current element and store it in a side variable so that we can compare it with the other numbers in the array.
    for (var j = 0; j < arr.length; j++){       //    -> Create another FOR-LOOP. We will be traversing through the inputted array again (remember that we're currently holding onto a side number while traversing thru the array a 2nd time)...
      if (i != j && arr[i] == arr[j]){          //          -> IF: we're not on the same element as the current side number/variable (i.e. we don't want to compare an element with itself. We might compare two elements with the same value, but we don't want 2 of the same exact elements. Get it?) && the 2 elements have the same value...
        counter++;                              //                -> Add 1 to the counter;
        if (counter > poleposCount){            //                      -> Every time 1 is added to the counter, run a test to check IF the value of the counter variable is greater than current pole-position counter...
          poleposCount = counter;               //                            -> if it is greater, then set the counter's current value as the new value fo the pole position counter variable
          poleposNum = sideNum;                 //                            -> also, if it's greater, then set the number currently stored as the side number as the new mode (the side number is the new current mode because, remember, the current counter exceeded the pole position counter)
        }
      }
    }
  }
  if (poleposCount > 0){                        //  One final IF-STATEMENT. So long as a number in the array is repeated at least once (i.e. so long as there's a mode)
    return poleposNum;                          //      -> Return the mode
  } else {                                      //      OTHERWISE:
    return -1;                                  //          -> return -1
  }
}