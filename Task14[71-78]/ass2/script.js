let myString = "EElllzzzzzzzeroo";

// Elzero
var result = myString
            .split('')
            .filter((ele, ind, arr) => ele != arr[ind - 1])
            .join('');

console.log(result)