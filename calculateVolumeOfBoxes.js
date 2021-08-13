var sum = 0;
var product = 1;
input = [[1, 2], [3, 3, 3]];
for (var i = 0; i < input.length; i++) {
    product = 1;
    for (var j = 0; j < input[i].length; j++) {
        product *= input[i][j];
    }
    sum += product;

}

console.log(sum);