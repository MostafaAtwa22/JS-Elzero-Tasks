let chosen = 3;

let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here
const {
    title: t,
    age: a,
    available: av,
    skills: [, last]
} = myFriends[chosen - 1]

console.log(t);
console.log(a);
console.log(av ? "Availabe" : "Not Available");
console.log(last);