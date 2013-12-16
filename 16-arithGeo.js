// STEPS:
// 1. Create 2 test variables. The first test case to test the difference b/w the 1st element and the 2nd element. The second test case to test the quotient of the 2nd element divided by the 1st element.
// 2. Create 2 boolean testers and set them to true. These will allow us to test all of the #s in the array, as opposed to just returning "true" after performing the operation on the 1st element of the array / 1st iteration of the for-loop.
// 3. Create a for loop to run thru each element of the array. FOR EACH ELEMENT...
//    A. Test the arithmetic test variable. Use !=, so that you can set the applicable boolean-tester to false if the condition is fulfilled.
//    B. Test the geometric test variable. Again, use != so that you can set the geometic boolean tester to false if the condition is fulfilled.
// 4. Create a final If-statement to output the return values.

//CODE:

function ArithGeo(arr) {
  var difference = arr[1] - arr[0];
  var quotient = arr[1] / arr[0];
  var arithTester = true;
  var geoTester = true;
  for (var i = 0; i < arr.length - 1; i++){           // Need to make sure you cut out of the for-loop one step early (hence the arr.length - 1) because we are adding 1 to i in our element test cases. If we tried to take the element after the last element, such element doesn't exist so the test would fail every time.
    if (arr[i] + difference != arr[i + 1]){
      arithTester = false;
    }
    if (arr[i + 1] / quotient != arr[i]){
      geoTester = false;
    }
  }
  if (arithTester === true){
    return "Arithmetic";
  } else if (geoTester === true){
    return "Geometric";
  } else {
    return -1;
  }
}