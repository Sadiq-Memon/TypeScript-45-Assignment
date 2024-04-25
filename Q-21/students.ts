// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let student1 ={
    name: "Sadiq Memon",
    age: 18,
    rollNumber: 7890 ,
};


let student2 ={
    name: "Sana Abid",
    age: 20,
    rollNumber: 7891 ,
};


let student3 ={
    name: "Laiba",
    age: 19,
    rollNumber: 7892 ,
};

let students = [student1 , student2 , student3];

for(let student of students){
    console.log(`Name: ${student.name} Age: ${student.age} RollNumber: ${student.rollNumber}`);
    
};

