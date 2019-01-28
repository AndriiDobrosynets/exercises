// Write a JavaScript function to split a string and 
// convert it into an array of words.

const stringToArray = str => str.split(' ')
                                .filter( word => word !== '');


console.log(stringToArray("Robin Singh"));
console.log(stringToArray("Robin   Singh"));