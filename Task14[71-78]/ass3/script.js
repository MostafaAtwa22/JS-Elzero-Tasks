let myArray = ["E", "l", "z", ["e", "r"], "o"];

// Elzero
let result = myArray
    .reduce((acc, cur) => acc + (Array.isArray(cur) ? cur.join('') : cur), "");
console.log(result)