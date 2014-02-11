// STEPS:
// 1. Remove the dash from the string. This should result in an array with 2 string elements (both times)
// 2. Slice out a particular portion of each string-element (cut out the am/pm at the end) and then remove the colon from the result. Do this for both times. This will provide us with a # representing the hour total and a # representing the minute total, so we have something to work with.
// 3. By accessing a particular character from a particular element of each time (the 2nd to last letter of each element), store either the 'a' or the 'p' of the respective time. Do this for both times. This will allow us to identify whether the time is in the morning or at night.
// 4. Take the # representing the hour total (this is currently a string), convert it to an integer, and multiply it by 60.  Add this to the # representing the minute total, which also needs to be converted to an integer. Do this for both times. This will provide us with minute totals for both times.
// * Now comes the more complex part of the code... We need to add more minutes to any times that fall in the afternoon/nighttime portion of the day but we also need to take into account 12:00 - 12:59 slots...
// 5. Add 720 to the minute total IF (the time is in the 2nd 1/2 of the day) AND (the time is not in the 12:00 - 12:59 range, as that range already had 720 minutes added to it). Do this for both times. (w/ regards to the 2nd condition, think about it - the 12:00pm-12:59pm time slot already had its hour counter multiplied by 60 in step 4. We only need to add 720 for times falling b/w 1pm and 11:59pm.)
// 6. IF the time is in the 12:00am-12:59am range, subtract 720 from the minute total. This is because we multiplied the minute total for this time slot by 60 in step 4. (Think about it - this time slot is actually 0:00am-0:59am)
// 7. Get the difference b/w the 2 times, but make sure to take into account if we were subtracting (a morning time for time2) from a (night/afternoon time for time1).



function CountingMinutes(str) { 
  var times = str.split('-'); // [9:00am, 10:00am]
  var time1 = times[0].slice(0, times[0].length-2).split(':'); // [9, 00]
  var time2 = times[1].slice(0, times[1].length-2).split(':'); // [10, 00]
  var time1ap = times[0][times[0].length-2]; // a
  var time2ap = times[1][times[1].length-2]; // a
  var time1min = parseInt(time1[0]) * 60 + parseInt(time1[1]);
  var time2min = parseInt(time2[0]) * 60 + parseInt(time2[1]);
  if (time1ap == 'p' && time1[0] != '12'){
    time1min += 720;
  }
  if (time2ap == 'p' && time2[0] != '12'){
    time2min += 720;
  }
  if (time1ap == 'a' && time1[0] == '12'){
    time1min -= 720;
  }
  if (time2ap == 'a' && time2[0] == '12'){
    time2min -= 720;
  }
  if (time1min > time2min){
    return 1440 - (time1min - time2min);
  } else {
    return time2min - time1min;
  }
}

