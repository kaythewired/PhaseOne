var ans = 0;
var array = [1, 2, 3, 4, 5, 6, 7];
var target = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] === target) {
    ans = i;
  }
  if (array[i] > target && array[i - 1] < target) {
    ans = i;
  }
}
if (array[0] > target) ans = 0;
if (array[array.length - 1] < target) ans = array.length;
console.log(ans)