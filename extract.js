// Write a JavaScript function to extract a specified number
//  of characters from a string

const truncateString = (str, n =0) => str.slice(0, n);

// function truncateString(str, n) {
//     n = n || 0;
//     return str.slice(0, n)
// }

console.log(truncateString("Robin Singh",2));