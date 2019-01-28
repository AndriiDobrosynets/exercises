const isString = type => toString.call(type) === '[object String]';
console.log(isString(''));
console.log(isString(3));
console.log(isString(null)); 