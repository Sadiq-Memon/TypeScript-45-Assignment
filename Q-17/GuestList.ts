// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

console.log("I can only invite two people for dinner.");

let num = ["Sir Muhammad Bilal" , "Mannal Rana " , "Sir Hamzah Syed" , "Sir Ali Aftab Sheikh " , "Ubaid ur Rehman" , "Sir Hamzah Ahmed Sheik"]

let num1 = num.splice( 2 , 4 );

num1.forEach(function(invited){
  console.log(`${invited} , We apologize, but we can't invite you for dinner .`);
  
});

num.forEach(function(invite){
console.log(`${invite} , you're still invited to dinner`);

});

let list= num.slice(2);
console.log(`Updated guest list: ${list}`);
