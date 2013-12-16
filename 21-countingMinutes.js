// STEPS:
// 1. Remove the dash from the string. This should result in an array ("original array") with both 2 string elements (both times)
// 2. Slice out a particular portion of each string-element (cut out the am/pm at the end) and then remove the colon from the result. Do this for both times. This will provide us with a # representing the hour total and a # representing the minute total, so we have something to work with.
// 3. By accessing a particular character from a particular element of the original array, store either the 'a' or the 'p' of the respective time. Do this for both times. This will allow us to identify whether the time is in the morning or at night.
// 4. Take the # representing the hour total (this is currently a string), convert it to an integer, and multiply it by 60.  Add this to the # representing the minute total, which also needs to be converted to an integer. Do this for both times. This will provide us with minute totals.
// * Now comes the more complex part of the code... We need to add more minutes to any times that fall in the afternoon/nighttime portion of the day but we also need to take into account 12:00 - 12:59 slots...
// 5. Add 720 to the minute total IF (the time is in the 2nd 1/2 of the day) AND (the time is not in the 12:00 - 12:59 range). Do this for both times. (w/ regards to the 2nd condition, think about it - the 12:00pm-12:59pm time slot already had its hour counter multiplied by 60 in step 4. We only need to add 720 for times falling b/w 1pm and 11:59pm.)
// 6. IF the time is in the 12:00am-12:59am range, subtract 720 from the minute total. This is because we multiplied the minute total for this time slot by 60 in step 4. (Think about it - this time slot is actually 0:00am-0:59am)
// 7. Get the difference b/w the 2 times, but make sure to take into account if we were subtracting (a morning time for time2) fro a (night/afternoon time for time1).


// Using the example string of "1:00pm-11:00am"...

function CountingMinutesI(str) {
  // Make the user-inputted string something we can work with. Operations to peform on the string: remove the dash, remove the am/pm, store the results in arrays, store the a or the p in a variable, and ultimately calculate a raw minute total that doesn't take into account am or pm
  var noDash = str.split('-');                                        // -> noDash = ["1:00pm", "11:00am"]
  var time1 = noDash[0].slice(0, noDash[0].length-2).split(':');      // -> time1 = ['1', '00']
  var time2 = noDash[1].slice(0, noDash[0].length-2).split(':');      // -> time2 = ['11', '00']
  var time1ampm = noDash[0][noDash[0].length-2];                      // -> time1ampm = 'p'
  var time2ampm = noDash[1][noDash[1].length-2];                      // -> time2ampm = 'a'
  var time1min = parseInt(time1[0]) * 60 + parseInt(time1[1]);        // -> time1min = 1 * 60 + 00 = 60
  var time2min = parseInt(time2[0]) * 60 + parseInt(time2[1]);        // -> time2min = 11 * 60 + 00 = 660

  // Add more minutes for any PM times, but need to take into account the 12:00-12:59 slots (both am and pm)...
  if (time1ampm === 'p' && time1[0] != '12'){                         // -> time1ampm === 'p' AND time1[0] === '1'
    time1min += 720;                                                  // so need to add 720 to total -> 60 + 720 = time1min = 780
  }
  if (time2ampm === 'p' && time2[0] != '12'){                         // -> time2ampm != 'p'
    time2min += 720;                                                  // time2 is NOT in the pm, so not adding any time to its total
  }
  //
  if (time1ampm === 'a' && time1[0] === '12'){                        // -> time1ampm != 'a'
    time1min -= 720;                                                  // time1 is NOT in the am, so this does not apply
  }
  if (time2ampm === 'a' && time2[0] === '12'){                        // -> time2ampm === 'a' BUT time2[0] != '12'
    time2min -= 720;                                                  // time2 is in the 11 o'clock slot, so this does not apply
  }

  // Calculate the difference b/w the two minute-totals
  if (time1min > time2min) {                                          // time1min === 780 AND time2min === 660, so the 1st branch applies...
    return 1440 - (time1min - time2min);                              // -> 1440 - (780 - 660) = 1440 - 120
  } else {                                                            // = 1320
    return time2min - time1min;
  }

}