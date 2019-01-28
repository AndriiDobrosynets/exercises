const cloneObject = obj => {
    const clone = {};
    for(let i in obj) {
        if(toString.call(obj[i]) === '[object Object]') {
            clone[i] = cloneObject(obj[i]);
        } else {
            clone[i] = obj[i];
        }
    }
    return clone;
}
const a = {
    a: 1,
    b: {
        a: 1
    }
}
const b = cloneObject(a);
b.b.a = 40;
console.table(a);
console.table(b);