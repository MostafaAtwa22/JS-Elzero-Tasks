// task 1
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(0, num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
let array = [...myFriends];
array.length = num;
console.log(array); // ["Ahmed", "Elham", "Osama"];

/*************************************************/

// Task2 
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.pop();
friends.shift();

console.log(friends); // ["Eman", "Osama"]

/*************************************************/

// Task 3
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

console.log(finalArr.concat(arrOne, arrTwo).sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]

/*************************************************/

// Task 4
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words.flat()[2].slice(2).toUpperCase()); // ZERO

/*************************************************/

// Task 5
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
console.log((haystack.includes(needle)) === true ? "Found" : "Not Found")
console.log((haystack.indexOf(needle)) !== -1 ? "Found" : "Not Found")
console.log((haystack.lastIndexOf(needle)) !== -1 ? "Found" : "Not Found")

/*************************************************/

// Task 6
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs.push(arr2.pop().toLowerCase());
allArrs.push(arr1.pop().toLowerCase());
allArrs.push(arr2.pop().toLowerCase());
console.log(allArrs.reverse().join('')); // fxy