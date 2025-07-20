// Add Variables Here
var NumberOne = 10;
var NumberTwo = 20;
// Ouput
console.log((NumberOne).toString() + (NumberTwo).toString()); // Normal Concatenate => 1020
console.log(typeof ((NumberOne).toString() + (NumberTwo).toString())); // Normal Concatenate => String
console.log(`${NumberOne}${NumberTwo}`); // Template Literals Way => 1020
console.log(typeof `${NumberOne}${NumberTwo}`); // Template Literals Way => String

console.log((NumberTwo).toString() + "\n" + (NumberOne).toString());
/*
    Normal Concatenate
    20
    10
*/

console.log(`${NumberTwo}\n${NumberOne}`);
/*
    Template Literals Way
    20
    10
*/