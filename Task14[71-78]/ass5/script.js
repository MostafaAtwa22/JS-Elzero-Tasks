let nums = [2, 12, 11, 5, 10, 1, 99];

// 500
let result = nums
            .reduce((acc, cur) => (cur % 2) ? acc + cur : cur * acc, 1)

console.log(result)