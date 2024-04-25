// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
var commonAnimals = ["Cat", "Dog", "Bird"];
// Print the name of each animal
for (var _i = 0, commonAnimals_1 = commonAnimals; _i < commonAnimals_1.length; _i++) {
    var common = commonAnimals_1[_i];
    console.log(common);
    if (common === "Cat") {
        console.log("A cat can make a good companion.");
    }
    else if (common === "Dog") {
        console.log("A dog is a faithful friend.");
    }
    else if (common === "Bird") {
        console.log("A bird is always cheerful.");
    }
}
;
console.log("\t\nAny of these animals would make a great pet!\t\n");
