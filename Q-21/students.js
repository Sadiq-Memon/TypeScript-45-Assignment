// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var student1 = {
    name: "Sadiq Memon",
    age: 18,
    rollNumber: 7890,
};
var student2 = {
    name: "Sana Abid",
    age: 20,
    rollNumber: 7891,
};
var student3 = {
    name: "Laiba",
    age: 19,
    rollNumber: 7892,
};
var students = [student1, student2, student3];
for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
    var student = students_1[_i];
    console.log("Name: ".concat(student.name, " \nAge: ").concat(student.age, " \nRollNumber: ").concat(student.rollNumber));
}
;
