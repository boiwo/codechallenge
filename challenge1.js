let str = 'Moringa Is Well Know School In The World';
console. log(str. split(''). join(''));
let result = str. split(''). map(item => (item ===item. toUpperCase() ? item. toLowerCase() :
item. toUpperCase())). join('');
console. log(result)