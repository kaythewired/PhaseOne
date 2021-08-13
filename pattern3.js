var str = '', str2 = '', str3 = '', str4 = '';
for (var j = 8; j > 0; j--) {
    if (j === 8) {
        str3 += j;
    }
    else {
        str3 = (j - 1) + str3;
        str4 += j + 2
    }
    str += '1';
    str2 += '8';
    console.log(str + ' . ' + str2 + ' = ' + str4 + str3);
}