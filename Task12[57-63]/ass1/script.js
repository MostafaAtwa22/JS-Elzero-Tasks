function sayHello(theName, theGender) {
    let title = '';
    if (theGender != undefined)
        title = theGender === "Male" ? " Mr" : " Miss"
    console.log(`Hello,${title} ${theName}`);
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"