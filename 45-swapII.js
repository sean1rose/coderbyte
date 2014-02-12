// GAMEPLAN
// This is pretty much the same exercise as Swap I, except w/ the added step of switching the place of 2 numbers if they directly surround a letter or group of letters (w/o spaces).

// REGULAR EXPRESSION and the REPLACE Method
// So in order to switch the place of the 2 numbers, we use the replace-method and (gasp!) regex's.
// JS' replace method takes 2 parameters - the 1st is the value to be replaced, and the 2nd is the new value we're going to replace it with
// Now to break down the 1st argument (the 1st regex expression in the replace method)
//    Here's the expression:
//      /(\d)([A-Za-z]+)(\d)/
//    Let's break it down into component parts.
//    1st we have the / at the very beginning and end. These forward-slashes serve as bookends and set the boundaries of our regular expression
//    Our regex consists of 3 sets of parentheses () () ()
//    (\d) is the 1st pair of parenthesis
//        -> \d signifies 'any digit'
//    ([A-Za-z]+) is the 2nd set
//        -> This can be broken up into 2 component parts, the brackets and then the plus symbol.
//        -> Let's start w/ the brackets. W/in the brackets we have [A-Za-z]...
//          -> 1st of all the brackets signify that we want to match a specific character.
//          -> The A-Z and a-z signify that we want to match a character that is a letter of the alphabet, whether it be a lowercase or an uppercase letter
//        -> The + means '1 or more of' whatever preceded the +
//          -> So we want to match a group consisting of either 1 or more of any lowercase/uppercase letter
//    (\d) is the 3rd set
//        -> again, \d represents any digit
//    -> So ultimately, we want to match any digit, followed 1 or more of any letter(s), follwoed by another digit
//        -> Whenever this is matched, it will be REPLACED BY...
// The 2nd argument of the replace-method is "$3$2$1"
//    -> These are what are called backreferences. a '$' followed by a # (such as '1' or '2') represents an previously-defined group.
//    -> Now you see why I broke down the regex into groups of parentheses. Each set of () represents a group.
//        -> The first set of (), which was (\d), is the 1st group, so it is backreferenced by $1. The 2nd one is $2 and so forth...
//    -> So basically we'll be changing the 1st and 3rd groups around, aka the replace method switches the 2 numbers that surround the letter(s)

function SwapII(str) { 
  str = str.replace(/(\d)([A-Za-z]+)(\d)/, "$3$2$1");
  var parts = str.split('');
  var results = '';
  for (var i = 0; i < parts.length; i++){
    if (parts[i] == parts[i].toLowerCase()){
      results += parts[i].toUpperCase();
    } else if (parts[i] == parts[i].toUpperCase()){
      results += parts[i].toLowerCase();
    } else {
      results += parts[i];
    }
  }
  return results;
}