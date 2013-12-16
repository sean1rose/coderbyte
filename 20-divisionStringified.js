// PLAN:
// 1. Calculate the actual result (as an integer w/o commas) -> store it as the answer variable
// 2. Calculate how many millions are contained in the answer -> convert to an integer and store in variable MILLIONS
// 3. Calculate how many thousands are contained in the answer -> convert to an integer and store in variable THOUSANDS
// 4. Calculate how many hundreds are contained in the answer. This is done by calculating what the remainder is after dividing the answer by 1000 (aka answer % 1000)
// 5. Return as a string w/ commas added in appropriate location(s). But need to do so as an IF-statement with 3 possible conditions:
//    - Condition 1: IF the answer goes into the millions
//    - Condition 2: IF the answer goes into the thousands
//    - Condition 3: IF the answer only goes into the hundreds

function DivisionStringified(num1,num2) {
  var result = parseInt(num1 / num2);
  var millions = parseInt(result / 1000000);
  var thousands = parseInt(result / 1000);
  var hundreds = parseInt(result % 1000);
  if (millions >= 1){
    return millions.toString() + ',' + thousands.toString().slice(-3) + ',' + hundreds.toString();       // use .slice(-3) because if the answer goes into the millions, that would mean that THOUSANDS would be taken into account twice, so need to make sure we only use the last 3 characters/numbers of THOUSANDS just in case.
  } else if (millions < 1 && thousands >= 1) {
    return thousands.toString() + ',' + hundreds.toString();
  } else if (millions < 1 && thousands < 1) {
    return hundreds.toString();
  }
}