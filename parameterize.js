// Write a JavaScript function to parameterize a string.
// Test Data :
// console.log(string_parameterize("Robin Singh from USA."));
// "robin-singh-from-usa"

function parameterize(str) {
    return str.toLowerCase()
              .split(' ')
              .join('-');
}

console.log(parameterize("Robin Singh from USA."));