// STEPS:
// 1. Simple IF-statement with 3 branches:
//    a. IF (num2 is greater than num1) -> return true
//    b. IF (num2 is less than num1) -> return false
//    c. IF (num2 is equal to num1) -> return -1

function CheckNums(num1,num2) {
  if (num2 > num1) {
    return true;
  } else if (num2 < num1) {
    return false;
  } else if (num2 === num1){
    return -1;
  }
}