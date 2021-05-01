let hasValue:boolean = true;//true or falseのどちらかを持てるようになった
let count:number = 10;
let float:number = 3.14;//整数、少数、負の数全て取れる
let negative:number = -1.15;
let string:string = 'hello';
let double:string = "hello";
let backquote:string = `hello`;

//hoverするとTSCが認識した型を確認できる（信頼できる！）
// console.log(typeof(hasValue));
// 型注釈type annotationと型推論
// boolean とかは型推論でよき
// 型注釈するべきは推論できない場合
const person ={
    name: {
        first:'Jack',
        last:'Smith',
    },
    age:21,

}
console.log(person.age);

const fruits= ['Apple', 'Banana', 'Grapes'];

const book:[string,number,boolean] = ['business',700, false];//[0],[1],[2]の順にstring, number, boolean
book[1] = 1500;
book.push(2100000);//配列の最後に追加可能
console.log(book);//要素は4つ
console.log(book[book.length-1]);//undefind
console.log(book.slice().pop());//2100000
console.log(book);//配列は3つ。array.pop()が下の配列の最後の要素を破壊

enum CoffeeSize{
    SHORT,
    TALL,
    GRANDE,
    VENTI,
}
    const coffee = {
    hot : true,
    size:CoffeeSize.SHORT//型はcoffeeSize
}
coffee.size = CoffeeSize.GRANDE;
console.log(coffee.size);//2

let anything:any = true;
anything = 'hello';
anything = {};
let banana = 'banana';
banana = anything;
console.log(banana);

let unionType: number | string = 10;
unionType = 'hello';
console.log(unionType.toUpperCase());
console.log(unionType);

let unionArrays: (string | number)[] = ['Hello',21];

const Apple = 'apple';//リテラル型。文字通りしかだめ.constだと勝手にリテラル型に推論

type ClothSize = 'small'| 'medium' | 'large';//Aliasとして使いまわせる（変数に近い）
const clothSize : ClothSize = "small";
const cloth : {
    color:string;
    size:'small'| 'medium' | 'large';
} = {
    color:'white',
    size: 'medium',
}
enum Schools {
    ES,
    JHS,
    HS,
    UNI,
};
console.log('Schools番号'+Schools['ES']+"、"+Schools[0]+"です");



function sayHello():void{//関数でundefinedを返すことは,基本許さない
    console.log('Hello');
    return;
};
console.log(sayHello());//undefinedが返ってくる
let tmp:undefined;


// const doubleNum = number => {
//     return number * 2;
// }
// const doubleNum:(num1:number) =>  number = num1 => num1 * 2;
const doubleNum:(num : number)=>number //ここまでが引数と返り値の宣言
= num => num * 2;//この部分からが関数の内容
//一行の場合はreturnいらない
function add(n1:number,n2:number):number{
    return n1 + n2;
}
const anotherAdd = (num1:number,num2:number) => {return num1 +  num2};
const addResult = anotherAdd(2,3);
console.log(addResult)

// const cb = function cb(num2:number):number{
// return num2 * 2;
// }
const cb:(num2:number) =>number = num2 => num2 * 2;

function doubleAndHandle(num1:number):void{//cbには、number型の引数を持ってnumber型を返す関数を設定
    const doubleNum = cb(num1);
    console.log(doubleNum);
}
doubleAndHandle(30);

function tripleNum(num1:number, callBack:(num:number) => number){
    const cb = callBack(num1 * 3);//3倍する処理
    return cb;
}
const triple = tripleNum(30, cb => {
    return cb * 3; //3倍した処理をさらに3倍して返す
});
console.log(triple);//引数＊3＊3

type hard = 'Kata'|'Futu'|'Yawa';
// const order = function orderRamen(hard:hard):void{
//     console.log(`硬さは${hard}です`);
// };
const order:(hard:hard) => void = hard => console.log(`硬さは${hard}です`);
order('Yawa');

let unknownInput : unknown;
let anyInput : any;
let text : string;
anyInput = 'OK';
unknownInput = 20;
unknownInput = true;
text = anyInput;
if (typeof unknownInput === 'string'){
    text = unknownInput;
}
function error(message:string):never{
    throw new Error(message);
}
console.log(error('ERRRRRRROR!'));