
function firstElementOfArray(arr, n) {
    n = n || 0;
    if(arr.length > n) {
        return arr.slice(n, n + 1);
    } else {
        return arr;
    }
}
console.log(firstElementOfArray([7, 9, 0, -2])); 
console.log(firstElementOfArray([],3));
console.log(firstElementOfArray([7, 9, 0, -2],3));
console.log(firstElementOfArray([7, 9, 0, -2],6));
