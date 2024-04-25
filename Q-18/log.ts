// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed..


// Original array of places to visit
let placesToVisit: string[] = ["Paris", "Tokyo", "New York", "Rome", "Sydney"];

// Printing the array in its original order
console.log("Original Order:");
console.log(placesToVisit);

// Printing the array in alphabetical order without modifying the original list
console.log("\nAlphabetical Order:");
console.log([...placesToVisit].sort());

// Printing the original array to show it's still in its original order
console.log("\nOriginal Order (unchanged):");
console.log(placesToVisit);

// Printing the array in reverse alphabetical order without changing the original list
console.log("\nReverse Alphabetical Order:");
console.log([...placesToVisit].sort().reverse());

// Printing the original array to show it's still in its original order
console.log("\nOriginal Order (unchanged):");
console.log(placesToVisit);

// Reversing the order of the list
placesToVisit.reverse();
console.log("\nReversed Order:");
console.log(placesToVisit);

// Reversing the order of the list again to bring it back to its original order
placesToVisit.reverse();
console.log("\nOriginal Order (after reversing again):");
console.log(placesToVisit);

// Sorting the array in alphabetical order
placesToVisit.sort();
console.log("\nSorted Alphabetical Order:");
console.log(placesToVisit);

// Sorting the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("\nSorted Reverse Alphabetical Order:");
console.log(placesToVisit);

