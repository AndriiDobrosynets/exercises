function summTo(n) {
    return n === 1 ? n : n + summTo(n - 1);
}
console.log(summTo(10))