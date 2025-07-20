let num = "10";

// Solution One
console.log(+num + +num); // 20

// Solution Two
console.log(Number(num) + Number(num)); // 20

// Solution Three
console.log(Number(num) * (true + true)); // 20

// Solution Four
console.log(Number(num) * +num / +num * (true + true)); // 20