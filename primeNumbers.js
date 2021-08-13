const array = [1, 2, 34, 5, 62, 23, 11, 97];
const result = [];
for (let j = 0; j < array.length; j++) {
  let count = 0;
  for (let i = 0; i <= array[j]; i++) {
    if (array[j] % i === 0) {
      count++;
    }
  }
  if (count === 2) {
    result.push(array[j]);
  }
}
console.log(result);