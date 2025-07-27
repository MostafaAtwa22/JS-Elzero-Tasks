function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
        let Name = zName.split(' ');
        return `Hello ${Name[0][0].toUpperCase()}${Name[0].slice(1).toLowerCase()} ${Name[1][0].toUpperCase()}.`
    }
    function ageWithMessage(zAge) {
        let Age = zAge.split(' ');
        return `${namePattern(zName)}, Your Age Is ${Age[0]}`
    }
    function countryTwoLetters(zCountry) {
        return `${ageWithMessage(zAge)}, You Live In ${zCountry.substring(0, 2).toUpperCase()}`
    }
    function fullDetails() {
        return countryTwoLetters(zCountry);
    }
    return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY