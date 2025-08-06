let date = new Date("1970-01-01T00:00:00");

let year = date.getFullYear(date) + 10;
date.setFullYear(year);

let seconds = date.getSeconds(date) + 1;
date.setSeconds(seconds);

console.log(date);