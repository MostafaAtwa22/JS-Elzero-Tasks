let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

while (index < friends.length) {
    if (isNaN(friends[index]) && !friends[index].toUpperCase().startsWith('A'))
        console.log(`${++counter} => ${friends[index]}`);
    index++;
}