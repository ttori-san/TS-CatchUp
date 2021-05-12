function sumOfPos(arr:number[]) {
    return arr.filter(num => num >= 0).reduce((acc, num) => acc + num, 0);
}

const arrrr1:number[]= [];
let classes:number[] = [1,2,3,4,4,5,5];
for (let ele of classes){
    arrrr1.push(ele);
}
const sum :number= sumOfPos(arrrr1);
console.log(sum);