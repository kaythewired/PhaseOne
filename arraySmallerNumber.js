var arr = [8, 1, 2, 2, 3];
var result = [];
for (let i = 0; i < arr.length; i++) {
  var count = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      count++;
    }
  }
  result.push(count);
}
console.log(result);
