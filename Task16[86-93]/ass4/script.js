let one = document.querySelector('.one');
let two = document.querySelector('.two');

let titleOne = one.getAttribute("title");
let titleTwo = two.getAttribute("title");

let innerOne = one.innerHTML;
let innerTwo = two.innerHTML;

one.innerHTML = innerTwo;
two.innerHTML = `${innerOne} ${one.attributes.length}`;

one.setAttribute("title", titleTwo);
two.setAttribute("title", titleOne);

console.log(one);
console.log(two);