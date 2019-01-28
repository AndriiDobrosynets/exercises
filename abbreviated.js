// Write a JavaScript function to convert a string in abbreviated form.

function abbreviated(str) {
    const arr = str.split(' ').filter(word => word !== '');
    if(arr.length === 2) {
        return `${arr[0]} ${arr[1].charAt(0)}.`
    } else {
        return arr[0]
    }
}


console.log(abbreviated("Robin Singh"));