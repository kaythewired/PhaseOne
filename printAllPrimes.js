let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 23, 97];
let primeArr = [];
let flag = true;

for (let i = 0; i < array.length; i++) {
    if (array[i] == 1 || array[i] == 0) {
        flag = false;
    }
    else if (array[i] == 2) {
        flag = true;
        primeArr.push(array[i]);
    }

    else {
        flag = true;
        for (j = 2; j < array[i]; j++) {
            if (array[i] % j == 0) {
                flag = false;
                break;
            }

        }

        if (flag == true) {
            primeArr.push(array[i]);
        }


    }



}
console.log(primeArr);