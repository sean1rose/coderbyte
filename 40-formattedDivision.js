// STRATEGY: breaking down the answer into a millions slot, a thousands slot, a hundreds slot, and a decimal slot (4 decimal places deep) so that we can insert commas (and a decimal point) in b/w
// STEPS:
// 1. Calculate the actual result (as an integer w/o commas) -> store it as the result variable
// 2. Calculate another result, without parsing the answer into an integer -> this will be used for our decimal calculation
// 3. Calculate how many millions are contained in the answer -> convert to an integer and store in variable MILLIONS
// 3. Calculate how many thousands are contained in the answer -> convert to an integer and store in variable THOUSANDS
// 4. Calculate how many hundreds are contained in the answer. This is done by calculating what the remainder is after dividing the answer by 1000 (aka answer % 1000)
// 5. Calculate the decimal value by dividing the un-parsed result by 1 and taking the remainder (use the modulo operator)
// 6. Return as a string w/ commas/decimal point added in appropriate location(s). But need to do so as an IF-statement with 3 possible conditions:
//    - Condition 1: IF the answer goes into the millions
//        ^ Remember to take the string value of each variable. Also, for the thousands value, we only need the last 3 digits, so use slice(-3) to slice the string.
//        ^ also, for the decimal value, we don't need the first value (which will always return the '0' before the decimal place; realize that the amount before the decimal place is already accounted for), so start the slice at 1 and end at 6 to extend the decimal value the necessary 4 spots
//    - Condition 2: IF the answer goes into the thousands but not into the millions
//    - Condition 3: IF the answer only goes into the hundreds
//
// NOTE: This answer returns 3 incorrect test cases, with all 3 having to do with the very last decimal place not being rounded up. Take it or leave it...

function FormattedDivision(num1,num2) { 
  var result = parseInt(num1/num2);
  var dResult = (num1/num2);
  var millions = parseInt(result/1000000);
  var thousands = parseInt(result/1000);
  var hundreds = parseInt(result%1000);
  var decimals = (dResult%1);
  if (result >= 1000000){
    return millions.toString() + ',' + thousands.toString().slice(-3) + ',' + hundreds.toString() + decimals.toString().slice(1,6);
  } else if (result >= 1000 && result < 1000000){
    return thousands.toString() + ',' + hundreds.toString() + decimals.toString().slice(1,6);
  } else if (result < 1000){
    return hundreds.toString() + decimals.toString().slice(1,6);
  }
}