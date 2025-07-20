let num = parseInt(prompt("Enter your Number"));

if (num < 10)
    console.log(`00${num}`);
else if (num > 10 && num < 100)
    console.log(`0${num}`);
else 
    console.log(`${num}`);