let date = new Date();
console.log(date);

let months = ['Jan', "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Des"]
let days = [31, 29, 31, 30, 31, 30, 31, 30, 31, 31, 30, 31]
let month = date.getMonth() - 1;

console.log(`Previous Month Is ${months[month]} And Last Day is ${days[month]}`)