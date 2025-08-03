let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
};

// Needed Output
let mp = new Map();
for(let key in myInfo) {
    mp.set(String(key), myInfo[key]);
}
console.log(mp);
console.log(mp.size);
console.log(mp.has("role"))