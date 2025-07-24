function ageInTime(theAge) {
    if (theAge <= 10 || theAge >= 100) {
        console.log('Age Out Of Range');
        return;
    }
    let Months = theAge * 12;
    let Days = Months * 30;
    let Hours = Days * 24;
    let Minutes = Hours * 60;
    let Seconds = Minutes * 60;
    console.log(`${Months} Months`);
    console.log(`${Days} Days`);
    console.log(`${Hours} Hours`);
    console.log(`${Minutes} Minutes`);
    console.log(`${Seconds} Seconds`);
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months