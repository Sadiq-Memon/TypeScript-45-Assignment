// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette"];
console.log("This is my original array:");
function show_magicians() {
    magicians.forEach(function (names) {
        console.log(names);
    });
}
;
show_magicians();
console.log("\nThis is my modified copy of the array:");
magicians.forEach(function (msg) {
    console.log("The Great ".concat(msg));
});
