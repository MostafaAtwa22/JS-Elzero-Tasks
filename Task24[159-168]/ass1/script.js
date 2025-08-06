let dateNow = new Date();
let birthData = new Date("2003-8-1");

let diff = dateNow - birthData;

let seconds = diff / 1000;
let minutes = seconds / 60;
let hours = minutes / 60;
let days = hours / 24;
let months = days / 30;
let years = months / 12;

console.log(`${seconds.toFixed(0)} Seconds`);
console.log(`${minutes.toFixed(0)} Minutes`);
console.log(`${hours.toFixed(0)} Hours`);
console.log(`${days.toFixed(0)} Days`);
console.log(`${months.toFixed(0)} Months`);
console.log(`${years.toFixed(0)} Year`);