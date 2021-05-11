// function isPositive(num:number):boolean{
//     // let ans:boolean;
//     // num > 0 ? ans = true : ans = false;
//     // return ans;
//     return num >= 0;
// };
// console.log(isPositive(3));
// const numVar: number = isPositive(-5);
// function IsPositiveFunc(num:number):boolean{
//     return num >= 0? true:false;
// }
type IsPositiveFunc = (num:number) => boolean;
const isPositive: IsPositiveFunc = arg => arg >= 0;
// console.log(isPositive(3));
// const res:number = isPositive(123);