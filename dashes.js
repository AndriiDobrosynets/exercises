// Write a JavaScript program which accept a number as input 
// and insert dashes (-) between each two even numbers. 
// For example if you accept 025468 the output should be 0-254-6-8.

const str = '025468';

function addDashes(str) {
    const arr = str.split('');
    const ouput = [arr[0]];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] % 2 == 0 && arr[i - 1] % 2 == 0) 
            ouput.push('-');
        ouput.push(arr[i]);

    }
    return ouput.join('');
}
console.log(addDashes(str))
