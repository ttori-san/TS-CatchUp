"use strict";
let hasValue = true; //true or falseのどちらかを持てるようになった
let count = 10;
let float = 3.14; //整数、少数、負の数全て取れる
let negative = -1.15;
let string = 'hello';
let double = "hello";
let backquote = `hello`;
//hoverするとTSCが認識した型を確認できる（信頼できる！）
// console.log(typeof(hasValue));
// 型注釈type annotationと型推論
// boolean とかは型推論でよき
// 型注釈するべきは推論できない場合
const person = {
    name: {
        first: 'Jack',
        last: 'Smith',
    },
    age: 21,
};
console.log(person.age);
const fruits = ['Apple', 'Banana', 'Grapes'];
const book = ['business', 700, false]; //[0],[1],[2]の順にstring, number, boolean
book[1] = 1500;
book.push(2100000); //配列の最後に追加可能
console.log(book); //要素は4つ
console.log(book[book.length - 1]); //undefind
console.log(book.slice().pop()); //2100000
console.log(book); //配列は3つ。array.pop()が下の配列の最後の要素を破壊
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 3] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.SHORT //型はcoffeeSize
};
coffee.size = CoffeeSize.GRANDE;
console.log(coffee.size); //2
let anything = true;
anything = 'hello';
anything = {};
let banana = 'banana';
banana = anything;
console.log(banana);
let unionType = 10;
unionType = 'hello';
console.log(unionType.toUpperCase());
console.log(unionType);
let unionArrays = ['Hello', 21];
const Apple = 'apple'; //リテラル型。文字通りしかだめ.constだと勝手にリテラル型に推論
const clothSize = "small";
const cloth = {
    color: 'white',
    size: 'medium',
};
var Schools;
(function (Schools) {
    Schools[Schools["ES"] = 0] = "ES";
    Schools[Schools["JHS"] = 1] = "JHS";
    Schools[Schools["HS"] = 2] = "HS";
    Schools[Schools["UNI"] = 3] = "UNI";
})(Schools || (Schools = {}));
;
console.log('Schools番号' + Schools['ES'] + "、" + Schools[0] + "です");
function sayHello() {
    console.log('Hello');
    return;
}
;
console.log(sayHello()); //undefinedが返ってくる
let tmp;
// const doubleNum = number => {
//     return number * 2;
// }
// const doubleNum:(num1:number) =>  number = num1 => num1 * 2;
const doubleNum = num => num * 2; //この部分からが関数の内容
//一行の場合はreturnいらない
function add(n1, n2) {
    return n1 + n2;
}
const anotherAdd = (num1, num2) => { return num1 + num2; };
const addResult = anotherAdd(2, 3);
console.log(addResult);
// const cb = function cb(num2:number):number{
// return num2 * 2;
// }
const cb = num2 => num2 * 2;
function doubleAndHandle(num1) {
    const doubleNum = cb(num1);
    console.log(doubleNum);
}
doubleAndHandle(30);
function tripleNum(num1, callBack) {
    const cb = callBack(num1 * 3); //3倍する処理
    return cb;
}
const triple = tripleNum(30, cb => {
    return cb * 3; //3倍した処理をさらに3倍して返す
});
console.log(triple); //引数＊3＊3
// const order = function orderRamen(hard:hard):void{
//     console.log(`硬さは${hard}です`);
// };
const order = hard => console.log(`硬さは${hard}です`);
order('Yawa');
let unknownInput;
let anyInput;
let text;
anyInput = 'OK';
unknownInput = 20;
unknownInput = true;
text = anyInput;
if (typeof unknownInput === 'string') {
    text = unknownInput;
}
function error(message) {
    throw new Error(message);
}
console.log(error('ERRRRRRROR!'));
