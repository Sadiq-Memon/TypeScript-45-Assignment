// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

const personName = "Sadiq Memon" ;

console.log("Lower Case : "  +  personName.toUpperCase());
console.log("Upper Case : " +  personName.toLowerCase());

function toTitleCase(a:string,) {
    return a.replace (/\b\w/g, function (char)  {
    return char.toUpperCase();
    } );
}
console.log("Title Case : " +  toTitleCase(personName));

// Result

// Lower Case : SADIQ MEMON
// Upper Case : sadiq memon
// Title Case : Sadiq Memon