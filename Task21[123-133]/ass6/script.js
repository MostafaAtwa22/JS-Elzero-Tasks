// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// let chars = ["Z", "Y", "A", "D", "E", 10, 1];

let numbers = chars.filter(el => typeof el === "number");
let letters = chars.filter(el => typeof el === "string");

let replaced = letters.slice(0, numbers.length);

let result = [...replaced, ...letters];

console.log(result);