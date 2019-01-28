// Write a JavaScript function to test whether a string starts with 
// a specified string

function isStartWith(str, startWith) {
   return str.slice(0,startWith.length).toLowerCase() === startWith.toLowerCase();
}
console.log(isStartWith('js string exercises', 'js'));