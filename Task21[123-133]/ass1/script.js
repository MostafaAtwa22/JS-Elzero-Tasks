let se = new Set([10]);
se.add(20).add(se.size);

console.log(se);

let it = se.keys();
it.next();
it.next();
console.log(it.next().value);

// other way
console.log([...se][se.size - 1])