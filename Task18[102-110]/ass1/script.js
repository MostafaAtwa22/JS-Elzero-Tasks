let range = prompt("Print Number From - To", "Example: 5-20");

let array = range.split('-');

let begin = Math.min(Number(array[0]), Number(array[1]));
let end = Math.max(Number(array[0]), Number(array[1]));


for (let i = begin; i <= end; i++)
    console.log(i);