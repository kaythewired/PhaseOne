var ip1 = '255.64.12.11', valid = false, part = '', arr = [], validIP = '';
arr = ip1.split('.');
if (arr.length != 4) {
    console.log(ip1 + '\n' + "Invalid IP");
    return;
}
for (let i = 0; i < arr.length; i++) {
    if (0 > arr[i] || arr[i] > 255) {
        console.log(ip1 + '\n' + "Invalid IP");
        return;
    }
}
for (let i = 0; i < arr.length; i++) {
    if (i == arr.length - 1)
        validIP += arr[i];
    else
        validIP += arr[i] + '[.]';
}
console.log(ip1 + '\n' + "Valid IP");
console.log("Defanged IP : " + validIP);
var ip1 = '255.642.12.11', valid = false, part = '', arr = [], validIP = '';
arr = ip1.split('.');
if (arr.length != 4) {
    console.log(ip1 + '\n' + "Invalid IP");
    return;
}
for (let i = 0; i < arr.length; i++) {
    if (0 > arr[i] || arr[i] > 255) {
        console.log(ip1 + '\n' + "Invalid IP");
        return;
    }
}
for (let i = 0; i < arr.length; i++) {
    if (i == arr.length - 1)
        validIP += arr[i];
    else
        validIP += arr[i] + '[.]';
}
console.log(ip1 + '\n' + "Valid IP");
console.log("Defanged IP : " + validIP);