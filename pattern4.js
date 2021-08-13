var str = 'code.in', even = '', odd = '';
for (let i = 0; i < str.length; i++) {
    if (i % 2 == 0)
        even += str.substr(i, 1); //cd
    else
        odd += str.substr(i, 1); // o
}
even = '000' + even + '111';
odd = '000' + odd + '111';
console.log(even);
console.log(odd);
var str = 'Hello there', even = '', odd = '';
for (let i = 0; i < str.length; i++) {
    if (i % 2 == 0)
        even += str.substr(i, 1);
    else
        odd += str.substr(i, 1);
}
even = '000' + even + '111';
odd = '000' + odd + '111';
console.log(even);
console.log(odd);