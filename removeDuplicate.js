// Write a JavaScript program to remove duplicate items from an array 
const testArr = [1,11,1,1,'some_string',5,'some_string'];
function removeDuplicate(arr) {
    return arr.filter( (item, index) => arr.indexOf(item) === index);
}
console.log(removeDuplicate(testArr))