"use strict";
// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
// function describe_city(city: string = "Karachi", country: string = "Pakistan"){
//     console.log(`${city} is in ${country}`);
// }
// //Call function
// describe_city();
// //Call function
// describe_city("Istanbul", "Turkey");
// //Default country
// describe_city("Hyderabad","");
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
// Calling the function for three different cities
describe_city("Karachi");
describe_city("Lahore");
describe_city("Tokyo", "Japan");
