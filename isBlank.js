// Write a JavaScript function to check whether a string is blank or not.

const isBlank = str => str.trim().length === 0;
console.log(isBlank('')); 
console.log(isBlank('abc'));