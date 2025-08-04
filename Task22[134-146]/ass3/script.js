let phone = "+(995)-123 (4567)";

let Exp = /^[^0-9a-zA-Z]\(\d{3}\)-\d{3}\s\(\d{4}\)/ig;

console.log(phone.match(Exp));