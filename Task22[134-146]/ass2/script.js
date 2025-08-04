let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

let Exp = /Os\d*O/ig
console.log(specialNames.match(Exp));
// Output
// ['Os10O', 'OsO', 'Os100O']