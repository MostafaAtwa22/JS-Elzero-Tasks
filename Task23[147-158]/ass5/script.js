const myObj = {
    username: "Elzero",
    id: 100,
    score: 1000,
    country: "Egypt",
};

// Write Your Code Here
Object.defineProperties(myObj, {
    username: {
        writable: true,
        configurable: true,
        enumerable: true
    },
    id: {
        writable: true,
        configurable: true,
        enumerable: false
    },
    score: {
        writable: false,
        configurable: true,
        enumerable: true
    },
    country: {
        writable: false,
        configurable: false,
        enumerable: false
    }
})
myObj.score = 500;

for (let prop in myObj) {
    console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

// Needed Output

// "username => Elzero"
// "score => 1000"
// {username: 'Elzero', score: 1000, id: 100}