// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

// Tests for equality and inequality with strings
console.log("Equality test with strings:");
console.log("apple" === "apple"); // True
console.log("apple" !== "apple"); // False

// Tests using the lower case function
console.log("\nLowercase test:");
console.log("HELLO".toLowerCase() === "hello"); // True
console.log("WORLD".toLowerCase() === "world"); // True
console.log("Hello".toLowerCase() === "hello"); // True
console.log("HELLO".toLowerCase() === "world"); // False

// Numerical tests involving equality and inequality
console.log("\nNumerical tests:");
console.log(10 > 5); // True
console.log(10 < 5); // False
console.log(10 >= 10); // True
console.log(10 <= 5); // False

// Tests using "and" and "or" operators
console.log("\nLogical tests:");
console.log((5 > 3) && (10 < 20)); // True
console.log((5 > 3) || (10 > 20)); // True
console.log((5 < 3) && (10 < 20)); // False
console.log((5 < 3) || (10 > 20)); // False

// Test whether an item is in an array
console.log("\nArray membership test:");
let fruits: string[] = ["apple", "banana", "orange"];
console.log(fruits.includes("banana")); // True
console.log(fruits.includes("grape")); // False

// Test whether an item is not in an array
console.log("\nArray non-membership test:")
console.log(!fruits.includes("grape")); // True
console.log(!fruits.includes("apple")); // False
