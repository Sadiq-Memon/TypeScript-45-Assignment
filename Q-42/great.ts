// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


let magicians : string[] = ["Harry Houdini" , "David Copperfield" , "Penn Jillette"];


function show_magicians(){
    console.log(magicians);
    
};

show_magicians();



magicians.forEach((msg)=> {
    console.log(`The Great ${msg}`);
    
})



