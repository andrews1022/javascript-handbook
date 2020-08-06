// Get the month
val = today.getMonth(); // Returns numerical value based off calendar #
console.log(val);
// But this is 0 based, so January = 0, February = 1, etc.

// Get date (number) of the month
val = today.getDate();
console.log(val);

// Get day of the month
val = today.getDay(); // Returns number based off day in the week, also 0 based
console.log(val);

// Get the year
val = today.getFullYear();
console.log(val);

// Get the hours
val = today.getHours();
console.log(val);

// Get the minutes
val = today.getMinutes();
console.log(val);

// Get the seconds
val = today.getSeconds();
console.log(val);

// Get the miliseconds
val = today.getMilliseconds();
console.log(val);

// Get current time stamp
val = today.getTime();
console.log(val);

// You can set these properties yourself
birthday.setMonth(2);
console.log(birthday);
birthday.setDate(22);
console.log(birthday);
birthday.setFullYear(22);
console.log(birthday);
birthday.setHours(3);
console.log(birthday);
birthday.setMinutes(30);
console.log(birthday);
birthday.setSeconds(25);
console.log(birthday);
