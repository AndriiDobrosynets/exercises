// Write a JavaScript program to find the most frequent item of an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times ) 
const arr1 = [3,'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function frequentItem(arr) {
    let currentCounter = 0;
    let maxCounter = 0;
    let element = null;
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[i] === arr[j]) {
                currentCounter++;
            }
            if(currentCounter > maxCounter) {
                maxCounter = currentCounter;
                element = arr[i]
            }
        }
        currentCounter = 0;
    }
    return element;
}

console.log(frequentItem(arr1));