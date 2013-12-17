// STEPS:
// 1. To obtain the hour total, take the user input and divide by 60. Convert to an integer and store in VAR1
// 2. To obtain the minute total, take the remainder left over after dividing user input by 60. Convert to an integer and store in VAR2.
// 3. Return VAR1 + colon (aka ':') + VAR2

function TimeConvert(num) {
  var hours = parseInt(num / 60);
  var minutes = parseInt(num % 60);
  return hours + ':' + minutes;
}