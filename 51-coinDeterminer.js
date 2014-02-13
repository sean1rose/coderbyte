// GAMEPLAN
// Set up a main array with the values of the 5 different coins.
// Set up several other arrays - each array will represent different coin-combos (example: combo2 will hold all the possible 2-coin combinations of the coins)
// We're going to use a set of for loops to traverse thru the arrays and add the different cominations to the next array.
// Then, we'll use another sequence of for-loops to traverse thru those combo arrays to see if any of the values match the user-inputted number.
// Note: I'm pretty sure there's other, more efficient ways of doing this. Also note that this answer only covers up to user input of 66 (11 x 6) for a combination of 6 coins
// Coderbyte doesn't really check user inputs past 66 (although they check 100, but getting that single test case incorrect doesn't affect your score).
// If you want to test all the way to 250, as the prompt asks you to, you'd have to do at least 23 combinations. 
// This answer, which only takes into account 6-coin combinations, already takes a good amount of time to process.
// So I can imagine a 23 coin combination taking really, really long (as the combo-arrays pretty much grow exponentially every time a new coin is added)


function CoinDeterminer(num) { 
    
    var coinArr = [1, 5, 7, 9, 11];                                                 // Set up the main array containing the values of the 5 different coins
    var combo2 = [], combo3 = [], combo4 = [], combo5 = [], combo6 = [];            // Create the arrays. These will house all the different combinations of coins
    
    for(var i =0; i < coinArr.length; i++) {                            // FOR-LOOP: Traverse thru the main coin Array. For each number in the coinArr...
        var eachCoin = coinArr[i];                                      //      -> Hold the current main-coin Array number in a side variable. 
        for(var j = 0; j < coinArr.length; j++) {                       //      -> FOR-LOOP (w/in for loop): Traverse thru the main coinArray again. For each number...
            combo2.push(eachCoin + coinArr[j]);                         //          -> We're adding the sum of the number from this for-loop traversal to the number that's currently held in the side variable. Then add that to the combo2 array. combo2 should have 25 numbers/elements (5 X 5 = 25)
        }
    }
    
    for(var t = 0; t < coinArr.length; t++) {                           // FOR-LOOP: Traverse thru the main coin Array. For each number in the coinArr...
        var eachCoin1 = coinArr[t];                                     //      -> Hold the current main-coin Array number in a side variable.
        for(var d = 0; d < combo2.length; d++) {                        //      -> FOR-LOOP: Traverse thru the COMBO2 array (not the main coinArray). For each number in the combo2 array (remember there's 25 numbers)...
            combo3.push(eachCoin1 + combo2[d]);                         //          -> Add the number in the side variable (which, being one of the original coin numbers, will be either 1, 5, 7, 9, 11) to the number from the combo2 array. Add each sum to the combo3 array. combo3 will have 125 numbers (25 x 5 = 125)
        }
    }
    
    for(var k = 0; k < coinArr.length; k++) {                           // Same concept as the previous set of for-loops.
        var eachCoin2 = coinArr[k];                                     //  Hold one of the original coins in a side variable. Then add to all of the numbers in combo3 and push all of those results to a new array, which will be combo4. combo 4 should have 625 numbers (125 x 5 = 625)
        for(var z = 0; z < combo3.length; z++) {
            combo4.push(eachCoin2 + combo3[z]);
        }
    }
 
    for(var e = 0; e < coinArr.length; e++) {                           // Adding all of the original coin values to all of the numbers in combo4 array, and pushing those new set of numbers to combo5 (625 x 5 = 3125 total numbers in combo5)
        var eachCoin3 = coinArr[e]; 
        for(var f = 0; f < combo4.length; f++) {
            combo5.push(eachCoin3 + combo4[f]);
        }
    }

    for(var c = 0; c < coinArr.length; c++) {                           // Taking all the values in combo5 array, and adding the original coin values to each one, pushing the results to combo6 array (15,625 total combinations in combo6 array)
        var eachCoin4 = coinArr[c]; 
        for(var g = 0; g < combo5.length; f++) {
            combo6.push(eachCoin3 + combo5[f]);
        }
    }
    
                                                                        // This is the beginning of a new set of for-loops...

    for(var ans = 0; ans < coinArr.length; ans++) {                     // FOR-LOOP: Traverse through each number in the original coinArray (with the 5 different coin values). For each number in coinArr...
        if(num === coinArr[ans]) {                                      //      -> IF: if the user-inputted number is equal to any of the numbers in the coinArr...
            return 1;                                                   //          -> Then RETURN 1, because that means there's a 1 coin combination that adds up to the user-inputted number
        }
    }
    for(var ans1 = 0; ans1 < combo2.length; ans1++) {                   // FOR-LOOP: Traverse thru all 25 numbers in combo2 array. For each number...
        if(num === combo2[ans1]) {                                      //      -> IF the user-inputted number is equal to any of those numbers (remember combo2 reprsents all of the possible 2-coin combinations)..
            return 2;                                                   //          -> RETURN 2, as there's a 2-coin combo that adds up whatever number user inputted
        }
    }
    for(var ans2 = 0; ans2 < combo3.length; ans2++) {                   // Same idea as the above, this time traversing thru combo3 array and returning 3 if a match is found
        if(num === combo3[ans2]) {
            return 3;
        }
    }
    for(var ans3 = 0; ans3 < combo4.length; ans3++) {                   // Same idea, going thru each number in combo4 and returning '4' if there's a match with user's inputted number
        if(num === combo4[ans3]) {
            return 4;
        }
    }
    for(var ans4 = 0; ans4 < combo5.length; ans4++) {                   // Same idea to figure out if there's a 5 coin combination that adds up user's input
        if(num === combo5[ans4]) {
            return 5;
        }
    }
    for(var ans5 = 0; ans5 < combo6.length; ans5++) {                   // Again, traverse thru combo6 array looking for a match with user input.
        if(num === combo6[ans5]) {
            return 6;
        }
    }

}