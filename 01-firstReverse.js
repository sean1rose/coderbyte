function FirstReverse(str) {
  return str.split('').reverse().join('');
}

// STEPS:
// 1. Split the user-inputted-string based on character. This creates an array of the individual characters in string form.
//    .split('')
// 2. Reverse the elements in the array
//    .reverse()
// 3. Join the elements in the array to form a string. Join based on character.
//    .join('')
// 4. Return all of the above.

// NOTES:
// (Sigh)... My first ever coderbyte challenge. Looking at my notebook, I went through this on November 30th.
// It's now December 18th and I've been through all of the easy challenges. Whew... There's a certain amount of satisfaciton you get from going through these...
// (if this sorta sounds like an epilogue, it's cuz I created the code for upload up to github in reverse order. So I started on challenge #26 and went up to #1.
// Anywho, if you're here just for the answers, feel free to go through each one and I hope it helps you out a bit.
// My advice to anyone learning these - practice practice practice. Do them. Even if you don't know what you're doing at first - find the answer and do them, then analyze line for line and figure out what each component part does.
// If you don't know what a specific part or line of code does. LOOK IT UP. Use these answers, use google, input my answer(s) into the coderbyte challenges so you can then look at other user's answers. Analyze their code. Use stackoverflow.
// Bascially the internet is your oyster. It's just a matter of how bad do you want it?...