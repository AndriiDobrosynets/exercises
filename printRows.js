// Write a JavaScript program which prints the elements of 
// the following array. Go to the editor
// Note : Use nested for loops.
// Sample array : 

const a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

function printRows(arr) {
    for(let i = 0; i < arr.length; i++) {
        console.log(`${i + 1}___row`);
        for(let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j])
        }
    }
};
printRows(a)