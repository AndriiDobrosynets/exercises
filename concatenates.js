// Write a JavaScript function to concatenates a given string n times

function concatenates(str,times) {
    times = times || 1;
    const arr = new Array(times + 1);
    return arr.join(str);
}

console.log(concatenates('Ha!')); 
console.log(concatenates('Ha!',2)); 
console.log(concatenates('Ha!',3));

// "Ha!" 
// "Ha!Ha!" 
// "Ha!Ha!Ha!