let theNumber = 100020003000;
console.log(parseInt([...new Set(String(theNumber).split('').filter((ele => ele !== '0')))].join('')))