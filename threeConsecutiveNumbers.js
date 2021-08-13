var arr = [3, 5, 7, 6, 4, 1, 3];
var count = 0;
var ans = false;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 1) {
    count++;
  } else {
    count = 0;
  }
  if (count === 3) {
    ans = true;
    break;
  }
}
console.log(ans);