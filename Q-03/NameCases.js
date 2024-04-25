"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName = "Sadiq Memon";
console.log("Lower Case : " + personName.toUpperCase());
console.log("Upper Case : " + personName.toLowerCase());
function toTitleCase(a) {
    return a.replace(/\b\w/g, function (char) {
        return char.toUpperCase();
    });
}
console.log("Title Case : " + toTitleCase(personName));
