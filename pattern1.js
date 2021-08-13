var a = 0, str = '0', str2 = ''; //, str2 = '8'
//loop to print the pattern
for (let index = 9; index > 0; index--) {
    str2 += '8';
    console.log(str + " * " + "9" + " + " + (index - 1) + " = " + str2);
    str += index; // adding the pattern
    if (index == 9) { //removing the head 0 from the pattern
        str = index.toString();
    }
}