// Write a JavaScript program which accept a string 
// as input and swap the case of each character. 
// For example if you input 'The Quick Brown Fox' 
// the output should be 'tHE qUICK bROWN fOX'. 
const testStr = 'The Quick Brown Fox';

function invertString(str) {
    const LOWER = 'abcdefghijklmnopqrstuvwxyz';
    let ouput = '';
    str.split('').forEach(letter => {
        return LOWER.includes(letter) 
        ? ouput += letter.toUpperCase()
        : ouput += letter.toLowerCase()
    });
    return ouput;
}
console.log(invertString(testStr));