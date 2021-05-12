"use strict";
function sumOfPos(arr) {
    return arr.filter(num => num >= 0).reduce((acc, num) => acc + num, 0);
}
const arrrr1 = [];
let classes = [1, 2, 3, 4, 4, 5, 5];
for (let ele of classes) {
    arrrr1.push(ele);
}
const sum = sumOfPos(arrrr1);
console.log(sum);
