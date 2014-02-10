// STEPS + Overall strategy on line 11
// We're going to sort the #s in the array into ascending order.
// Then we're going to create a variable to keep track of the sum of those numbers
// Create a FOR-LOOP. Traverse thru each element in the array (except for the last element). FOR EACH ELEMENT...
//    -> Take the next element. Subtract from the (value of the next element) the (value of the current element). Add that amount to the sum
//        ^ (What we are essentially doing is obtaining the difference between the lowest number and the highest number, and storing that value in the sum variable)
// Take the [sum variable] (which again, is the difference b/w the lowest and highest #s of the array), subtract from that the [# of elements in the array], and then add to that [1]. Return that value, as it's our answer
//        ^ Be careful here to make sure you don't do (arr.length + 1) 1st, which is what I did for awhile. And it took me an hour to realize why I was getting the incorrect results. There's a difference b/w [result - arr.length + 1] AND [result - (arr.length + 1)]!!!
//        ^ What we're doing is taking the difference b/w the highest and lowest #s, subtracting 1 for each # that we already have in our array, and then adding 1 to that so that our final value is inclusive.
//        ^ Remember that the point of this exercise was to figure out how many numbers were necessary to make the array of #s a completely consecutive array of #s.
//        ^ So we do this by first figuring out how many #s, total, are required to make the numbers consecutive from lowest to highest. Then we're going to subtract 1 for each number we already have (subtract 1 for each inputted # in the array), and then add 1 to that so the final number is inclusive.

function Consecutive(arr) { 
  arr.sort(function(a, b){return a - b});
  var sum = 0;
  for (var i = 0; i < arr.length-1; i++) {
    sum += arr[i+1] - arr[i];
  }
  return (sum) - (arr.length) + (1);        
}