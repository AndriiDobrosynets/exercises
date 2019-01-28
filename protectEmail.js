// Write a JavaScript function 
// to hide email addresses to protect from unauthorized user

const testEmail = "robin_singh@example.com";

function protectEmail(email) {
    const arr = email.split('@');
    const firstPart = arr[0].slice(0, Math.floor(arr[0].length / 2));
    const secondPart = arr[1];
    return `${firstPart}...@${secondPart}`
}
console.log(protectEmail(testEmail));