let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// Elzero
let result = mix
            .map((ele) => isNaN(parseInt(ele)) ? ele : "")
            .reduce((acc, cur) => acc + cur);

console.log(result);