/*****************************************************************
 * Vanilla Date Exercises
 ******************************************************************/

// 1. Write a function that tests if something is a Date object or not. (Hint: Remember that Date is a class, so this would have to be an instance of that class...)

// const now = new Date();

// function isDate(d) {
//   return d instanceof Date;
// }

// console.log(isDate(now));

// 2. Create today's date

// const todayDate = new Date();
// console.log(todayDate);

// 3. Get the current timestamp (using a static method of Date)

// console.log(Date.now());

// 4. Create a date to represent next Christmas Day

// Date(year, monthIndex, date, hour, min, seconds, milliseconds);
// const nextXmasDay = new Date(2024, 11, 25, 0, 0, 0);
// console.log(nextXmasDay);

// 5. Work out how many days it is until christmas

// Get difference between now and xmas
// const todayDate = new Date();
// const nextXmasDay = new Date(2024, 11, 25, 0, 0, 0);

// // time difference in milliseconds:
// const timeDifference = nextXmasDay - todayDate;
// console.log(timeDifference);

// // Divide by number of ms in 1 day:
// // milliseconds per day = 24 hrs/day * 60 minutes/hour * 60 seconds/minute * 1000 msecs/second
// // Convert milliseconds to days
// const daysUntilXmas = Math.ceil(timeDifference / (24 * 60 * 60 * 1000));
// console.log(daysUntilXmas);

// Math.floor for whole days; Math.ceil to include today

// Notes:
// 1000: There are 1000 milliseconds in a second.
// 60: There are 60 seconds in a minute.
// 60: There are 60 minutes in an hour.
// 24: There are 24 hours in a day.
//Math.floor to round down to the nearest whole number.
//Math.ceil rounds up to the nearest whole number

// 6. I'm going to make 2 random dates. I want you to log out which one is earlier (or if they are the same?!)

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
// }

// const date1 = new Date(
//   new Date().getFullYear(),
//   getRandomIntInclusive(0, 1),
//   getRandomIntInclusive(1, 27)
// );

// console.log("date1", date1);

// const date2 = new Date(
//   new Date().getFullYear(),
//   getRandomIntInclusive(0, 1),
//   getRandomIntInclusive(1, 27)
// );

// console.log("date2", date2);

// if (date1 < date2) {
//   console.log("Date1 is earlier than Date2");
// } else if (date2 > date1) {
//   console.log("Date2 is earlier than Date1");
// } else console.log("Date1 and Date2 are equal");

// 7. How do I test if a date is valid? ****

//isNAN() - is Not-a-Number

// function isDateValid(d) {
//   return !isNaN(d);
// }
// console.log(isDateValid(date2));

// 8. Output today in the following format: MM-DD-YYYY - using the getter methods on the date object

// const today = new Date();
// //FormateDate function:
// function formatDate(date, format) {
//   return format
//     .replace("mm", date.getMonth() + 1)
//     .replace("dd", date.getDate())
//     .replace("yy", date.getFullYear().toString().slice(-2)); // converting 'yyyy' to a string so I can use slice here to remove 1st 2 digits
// }
// console.log(formatDate(today, "mm/dd/yy"));

// 9. Now output it using toLocaleDateString in english ('en-GB') and in german ('de-DE')

// const today = new Date().toLocaleDateString("en-GB");
// const today = new Date().toLocaleDateString("de-DE");
// console.log(today);

// 10. Output the current time in hours, mins & seconds

// const currentTime = new Date();

// const hours = currentTime.getHours();
// const minutes = currentTime.getMinutes();
// const seconds = currentTime.getSeconds();

// const currentTimeHoursMinsSecs = `${hours}:${minutes}:${seconds}`;

// console.log(currentTimeHoursMinsSecs);

// 11. Make a clock by starting with the current time and then every second adds a second to the date and prints it.

// 2.34

const currentTime = new Date();

// 12. Create a copy of today

// 13. Use the setter methods to find out what is 3years, 2months and 1 day from now

// 14. Get your timezone from today (remember it's in mins and the sign is inverted)

// 15. Use the Intl module formatter (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format) to get the time in Sydney (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)

// 16. Write a function that creates a years/months/days/hours/mins/secs/ms duration in ms.

// 17. Write a function that returns an object with the years/months/days/hours/mins/secs/ms between 2 dates

/*****************************************************************
 * For date-fns Exercises follow link on page
 ******************************************************************/