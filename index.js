var hasValue = true; //true or falseのどちらかを持てるようになった
var count = 10;
var float = 3.14; //整数、少数、負の数全て取れる
var negative = -1.15;
var string = 'hello';
var double = "hello";
var backquote = "hello";
//hoverするとTSCが認識した型を確認できる（信頼できる！）
// console.log(typeof(hasValue));
// 型注釈type annotationと型推論
// boolean とかは型推論でよき
// 型注釈するべきは推論できない場合
var person = {
    name: {
        first: 'Jack',
        last: 'Smith'
    },
    age: 21
};
console.log(person.age);
var fruits = ['Apple', 'Banana', 'Grapes'];
var book = ['business', 700, false]; //[0],[1],[2]の順にstring, number, boolean
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
var coffee = {
    hot: true,
    size: CoffeeSize.SHORT //型はcoffeeSize
};
coffee.size = CoffeeSize.GRANDE;
console.log(coffee.size); //2
var anything = true;
anything = 'hello';
anything = {};
var banana = 'banana';
banana = anything;
console.log(banana);
var unionType = 10;
unionType = 'hello';
console.log(unionType.toUpperCase());
console.log(unionType);
var unionArrays = ['Hello', 21];
var Apple = 'apple'; //リテラル型。文字通りしかだめ.constだと勝手にリテラル型に推論
var clothSize = "small";
var cloth = {
    color: 'white',
    size: 'medium'
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
var tmp = null;
// const doubleNum = number => {
//     return number * 2;
// }
// const doubleNum:(num1:number) =>  number = num1 => num1 * 2;
var doubleNum = function (num) { return num * 2; }; //この部分からが関数の内容
//一行の場合はreturnいらない
function add(n1, n2) {
    return n1 + n2;
}
var anotherAdd = function (num1, num2) { return num1 + num2; };
var addResult = anotherAdd(2, 3);
console.log(addResult);
// const cb = function cb(num2:number):number{
// return num2 * 2;
// }
var cb = function (num2) { return num2 * 2; };
function doubleAndHandle(num1) {
    var doubleNum = cb(num1);
    console.log(doubleNum);
}
doubleAndHandle(30);
function tripleNum(num1, callBack) {
    var cb = callBack(num1 * 3);
    return cb;
}
var triple = tripleNum(30, function (cb) {
    return cb * 3;
});
console.log(triple);
var order = function orderRamen(hard) {
    console.log("\u786C\u3055\u306F" + hard + "\u3067\u3059");
};
order('Kata');
