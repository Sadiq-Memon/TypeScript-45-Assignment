// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

let Guest = ["Sir Muhammad Bilal", "Sir Ali Aftab Sheikh", '"Ubaid ur Rehman"'];
console.log(Guest);
console.log(" can't make it to dinner. " + Guest[2]);

Guest.splice(2, 1, "Sir Hamzah Ahmed");
console.log(Guest);

Guest.forEach( Invited => {
    console.log(`I would like to invite you to dinner  ${Invited}`);
    
});
