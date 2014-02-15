// EXPLANATION:
// Whew. This one felt good to finish (on my own, actually!).
// The CountingMinutesI exercise served as the foundation for this answer, as it's easier to operate on minute-totals than it is to operate on a string with AM and PM and colons and such.
// One difference right off the bat, however, is that since we have an array of multiple times/strings being input, I start off with a for loop to break down each string into respective minute-counts that I can work with
// I'll pick up the step by step instructions where the CountingMinutes exercise leaves off (see line 29)...


function MostFreeTime(strArr) { 
  var results = [];                                               // Create a results array to store the objects that are created thru each iteration of the for-loop (we'll end up with an array of objects after completing this first for-loop)
  for (var i = 0; i < strArr.length; i++){                        // Note the use of a for-loop here so that each string in the inputted array is broken down into minute totals
    var times = strArr[i].split('-');
    var time1 = times[0].slice(0, times[0].length-2).split(':'); // [9, 00] as an example...
    var time2 = times[1].slice(0, times[1].length-2).split(':'); // [10, 00]
    var time1ap = times[0][times[0].length-2]; // a
    var time2ap = times[1][times[1].length-2]; // a
    var time1min = parseInt(time1[0]) * 60 + parseInt(time1[1]);
    var time2min = parseInt(time2[0]) * 60 + parseInt(time2[1]);
    if (time1ap == 'P' && time1[0] != '12'){
      time1min += 720;
    };
    if (time2ap == 'P' && time2[0] != '12'){
      time2min += 720;
    };
    if (time1ap == 'A' && time1[0] == '12'){
      time1min -= 720;
    };
    if (time2ap == 'A' && time2[0] == '12'){
      time2min -= 720;
    };
    var obj = {                                         // At this point of each iteration of the for-loop, create an object with 3 properties...
        key: "Time Set#" + ' ' + parseInt(i + 1),       // The key-property will be the label of the object. So if the for-loop is on the 3rd time-string of the user-input, then the key would be: "Time Set# 3"
        time1min: time1min,                             // The time1min-property of the object will be the value of time1min
        time2min: time2min                              // The time2min-property will be the value of time2min
      };                                                // So now, for each time-string in the inputted-array, we have an object with the relevant minute counts (1st time and 2nd time)
    results.push(obj);                                  // Push the object to the results array. Remember, we're creating an object for each iteration of the for-loop (aka for each time-string in the user-inputted array)
    time1min = 0;                                       // Reset the variables in preparation for the next iteration of the for-loop
    time2min = 0;
  };                                                    // After this first for-loop is COMPLETED...
  
  results.sort(function(a,b){                           // Take the results array, and SORT it in ascending order based on...
    return a.time1min - b.time1min;                     // the value of the time1min property. This essentiall lists the times in chronological order
  });

  var answer = [];                                      // Create another empty array
  for (var j = 0; j < results.length-1; j++){                           // FOR-LOOP: Traverse through each object in the results array. FOR EACH OBJECT...
    answer.push( (results[j+1].time1min) - (results[j].time2min) );     //    -> Take the 1st time from the NEXT object, and subtract from that the 2nd time of the CURRENT object -> push that value to the answer array
  };                                                                    //        ^ What this is basically doing is calculating the gap (in minutes) b/w each set/object of times (the gap b/w the end of the current set and the beginning of the next set)

  answer.sort(function(a,b){return a - b});             // Take the answer array, which has the respective gaps in time, and SORT the array in ascending order (so the largest gap, in terms of minutes, should now be at the end of the array)

  var longestGap = answer.pop();                      // Pop off the last value of the array, which should be the largest/longest gap in time and save it to a variable

  function convertTime(num) {                         // I took the TimeConvert exercise (#9) and modified it a bit in order to get our answer in the proper format...
    var hours = parseInt(num / 60);
    var minutes = parseInt(num % 60);
    if (minutes < 10 && hours < 10){
        return '0' + hours + ':' + '0' + minutes;
    } else if (minutes < 10 && hours >= 10){
        return hours + ':' + '0' + minutes;
    } else if (minutes >= 10 && hours < 10){
        return '0' + hours + ':' + minutes;
    } else if (minutes >= 10 && hours >= 10){
        return hours + ':' + minutes;
    }
  };
  
  return convertTime(longestGap);

}

