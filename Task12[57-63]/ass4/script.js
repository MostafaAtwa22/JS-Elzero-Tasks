function checkStatus(a, b, c) {
    let Name = isNaN(a) ? a : isNaN(b) ? b : c; 
    let Age = Number.isInteger(a) ? a : Number.isInteger(b) ? b : c;
    let State = (a === true || a === false) ? a : (b === true || b === false) ? b : c;
    let State_Message = (State === true) ? "You Are Available For Hire" : "You Are Not Available For Hire";
    console.log(`Hello, ${Name}, Your Age Is ${Age}, ${State_Message}`)
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
