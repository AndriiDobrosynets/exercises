// Write a JavaScript program to sort the items of an array
// Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8

const arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1,-7 ];

function sort(arr) {
    let tmp;
    let newArr = arr.slice(0)
    for(let i = 0; i < newArr.length; i++) {
        for(let j = i + 1; j < newArr.length; j++) {
            if(newArr[i] > newArr[j]) {
                tmp = newArr[i];
                newArr[i] = newArr[j];
                newArr[j] = tmp;
            }
        }
    }
    return newArr;
};
console.log(sort(arr1))