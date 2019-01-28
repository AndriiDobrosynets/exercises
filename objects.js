// Write a JavaScript program to list the properties of a JavaScript objec


const student = { 
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12 
};
const props = Object.keys(student);


// Write a JavaScript program to delete the rollno 
// property from the following object. 
// Also print the object before 
// or after deleting the property

delete student.rollno;

// Write a JavaScript program to get the length of an JavaScript object

const  getObjLength = obj => Object.keys(obj).length;


// Write a JavaScript function to get a copy of the 
// object where the keys have become the values and
//  the values the keys.
const obj = {
    name: 'Andriy',
    surname: 'Dobrosyents',
    age: 21
}
