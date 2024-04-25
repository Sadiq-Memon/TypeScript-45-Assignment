// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
console.log("We Found a bigger dinner table");
var Guest = ["Sir Muhammad Bilal", "Sir Ali Aftab Sheikh", '"Ubaid ur Rehman"'];
//Adding new guest beggining of Array
Guest.splice(1, 0, "Sir Hamzah Syed");
//Adding new guest Middle of Array
Guest.splice(3, 0, "Mannal Rana");
//Adding new guest end of the Array
Guest.push("Sir Hamzah Ahmed Sheikh");
Guest.forEach(function (Invited) {
    console.log("Dear ".concat(Invited, " , I would like to invite you to bigger dinner "));
});
