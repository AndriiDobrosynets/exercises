// Write a JavaScript function to convert a string into camel case.


function intoCamelCase(str) {
  const arr = str.split(' ');
  if(arr.length > 1) {
    return arr.map(word => {
        return `${word.charAt(0).toUpperCase()}${word.slice(1)}`
        }).join('')
  } else return str;
  
}

console.log(intoCamelCase("JavaScript Exercises")); 
console.log(intoCamelCase("JavaScript exercises")); 
console.log(intoCamelCase("JavaScriptExercises"));