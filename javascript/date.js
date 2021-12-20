
/*

Date 

    Note : Javacript counts months  from 0 to 11
    January = 0
    December = 11
*/

const d = new Date(2018, 11, 24, 10, 33, 30, 0);

const d2 = new Date("October 13, 2014 11:13:00");


//When you display a date object in HTML, it is automatically converted to a string, with the toString() method.
d.toString();

//The toUTCString() method converts a date to a UTC string (a date display standard).
d.toUTCString();

//The toDateString() method converts a date to a more readable format:
d.toDateString();

//The toISOString() method converts a Date object to a string, using the ISO standard format:

d.toISOString(); //2021-12-20T10:28:15.121Z


/*
Javacript Date Input 
    ISO Date => "2015-03-25" (The International standard)
    Short Date => "03/25/2015"
    Long Date => "Mar 25 2015" or " 25 Mar 2015"
*/


/*
JavaScript Date Output
    Independent of input format, JavaScript will (by default) output dates in full text string format:
    Mon Dec 20 2021 13:28:24 GMT+0300 (GMT+03:00)
*/

//Time Zones

// When setting a date , without specifying the time zone, Javascript will use the browser's time zone

//Date Input - Parsing Dates
//If you have a valid date string, you can use the Date.parse() method to convert it to milliseconds


/*

JavaScript Date Get Methods

Method	Description
    getFullYear()	Get the year as a four digit number (yyyy)
    getMonth()	Get the month as a number (0-11)
    getDate()	Get the day as a number (1-31)
    getHours()	Get the hour (0-23)
    getMinutes()	Get the minute (0-59)
    getSeconds()	Get the second (0-59)
    getMilliseconds()	Get the millisecond (0-999)
    getTime()	Get the time (milliseconds since January 1, 1970)
    getDay()	Get the weekday as a number (0-6)
    Date.now()	Get the time. ECMAScript 5.


UTC Date Methods
    UTC date methods are used for working with UTC dates (Universal Time Zone dates):

Method	Description
    getUTCDate()	Same as getDate(), but returns the UTC date
    getUTCDay()	Same as getDay(), but returns the UTC day
    getUTCHours()	Same as getHours(), but returns the UTC hour
    getUTCFullYear()	Same as getFullYear(), but returns the UTC year
    getUTCMilliseconds()	Same as getMilliseconds(), but returns the UTC milliseconds
    getUTCMinutes()	Same as getMinutes(), but returns the UTC minutes
    getUTCMonth()	Same as getMonth(), but returns the UTC month
    getUTCSeconds()	Same as getSeconds(), but returns the UTC seconds


Set Date Methods
    Set Date methods are used for setting a part of a date:

Method	Description
    setDate()	Set the day as a number (1-31)
    setFullYear()	Set the year (optionally month and day)
    setHours()	Set the hour (0-23)
    setMilliseconds()	Set the milliseconds (0-999)
    setMinutes()	Set the minutes (0-59)
    setMonth()	Set the month (0-11)
    setSeconds()	Set the seconds (0-59)
    setTime()	Set the time (milliseconds since January 1, 1970)
*/

module.exports = {

}