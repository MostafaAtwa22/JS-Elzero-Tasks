let start = new Date();
for (let i = 1; i <= 99999; i++) {
    console.log(i);
}
let end = new Date();

let duration = end - start;
console.log(`Loop took ${duration} ms`)