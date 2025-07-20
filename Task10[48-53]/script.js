// task 1
let start = 10;
let end = 100;
let exclude = 40;

for (let i = start; i <= end; i += start)
{
    if (i == exclude)
        continue;
    console.log(i);
}

/*************************************************/

// Task2 
let start2 = 10;
let end2 = 0;
let stop = 3;

for (let i = start2; i >= stop; i--)
{
    if (i < 10)
        console.log(`0${i}`);
    else    
        console.log(`${i}`);
}

/*************************************************/

// Task 3
let start3 = 1;
let end3 = 6;
let breaker = 2;

for (let i = start3; i <= end3; i++) {
    console.log(i)
    console.log(`-- ${breaker}`);
    console.log(`-- ${2 * breaker}`);
}
/*************************************************/

// Task 4
let index = 10;
let jump = 2;

for (;;) {
    console.log(index);
    index -= 2;
    if (index == jump)
        break;
}

/*************************************************/

// Task 5
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

for (let i = 0; i < friends.length; i++)
{
    if (!friends[i].toLowerCase().startsWith(letter))
        console.log(`${i} => ${friends[i]}`);
}

/*************************************************/

// Task 6
let start6 = 0;
let swappedName = "elZerO";
let result = "";

for (let i = start6; i < swappedName.length; i++) {
    let char = swappedName[i];
    if (char === char.toLowerCase()) {
        result += char.toUpperCase();
    } else {
        result += char.toLowerCase();
    }
}

console.log(result);

/*************************************************/

// Task 7
let start7 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
for (let i = start7; i < mix.length; i++)
{
    if (i === start7)
        continue;
    if (Number(mix[i]))
        console.log(mix[i]);
}