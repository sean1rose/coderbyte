// STEPS:
// 1. Split the string based on character -> this returns an array w/ each character as an element
// 2. Sort the array in alphabetical order (note that when using the sort method to put characters in alphabetical order, don't use the function as parameter in sort()) -> still have an array
// 3. Convert the array back into a string by using the join method based on character ('')

function AlphabetSoup(str) {
  return str.split('').sort().join('');
}