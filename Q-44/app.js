// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
// Making your sandwich with
// -Ham
// -Cheese
// -lettuce
// Enjoy your sandwich!
// Making your sandwich with
// -Turkey
// -Bacon
// Enjoy your sandwich!
// Making your sandwich with
// -Peanutbetter
// -Jelly
// Enjoy your sandwich!
// function call(){
//     console.log("Making your sandwich with");
// };
// function enjoy(){
//     console.log("Enjoy your sandwich!");
// };
// call();
// let sandwich: string[] = ["Ham" , "Cheese" , "Lettuce"];
// sandwich.forEach((Msg)=>{
//     console.log(Msg);
// });
// enjoy();
function Sandwiches(item) {
    console.log("\nMaking your sandwich with");
    item.forEach(function (element) {
        return console.log(element);
    });
    console.log("Enjoy your sandwich!");
}
;
Sandwiches(["Ham", "Cheese", "Lettuce"]);
Sandwiches(["Turkey", "Bacon"]);
Sandwiches(["Peanutbetter", "Jelly"]);
