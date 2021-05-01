"use strict";
class Person {
    // name:string;//フィールドはJSにはコンパイルされない
    // private age: number;
    constructor(name, age) {
        this.name = name;
        this.age = age;
        // this.age = initAge;
    }
    ;
    incrementAge() {
        this.age++;
        // this.name = 'HEEEEE';
    }
    ;
    greeting() {
        console.log(`Hello, My name is ${this.name}, age is ${this.age}`);
    }
}
;
const quill = new Person('Quill', 56);
quill.greeting();
let person2 = new Person('NNNNAME', 34);
person2.greeting();
const anotherQuill = {
    name: 'Second',
    // age:80,
    greeting: quill.greeting,
    incrementAge: quill.incrementAge,
    // anotherGreeting:quill.greeting,//thisがどこに依存しているかTSは理解できないので、メソッド元にthisの中身を明示
    // greeting(){
    //     console.log(`Hello, My name is ${this.name}` );
    // }
};
const someone = new Person('SomeOne', 33);
const getName = console.log(someone);
// anotherQuill.greeting();
// class Rintaro{
//     constructor(private readonly id:number | string, readonly name:string, ){
//         if (typeof(this.id) == "number"){
//             this.id;
//         }else{
//             this.id = 'Wrong ID';
//         }
//     }
//     getRintaroProfile(){
//         if (typeof(this.id) =='number'){
//             return `name is ${this.name}, id is ${this.id}.`
//         }else if(typeof(this.id )== 'string'){
//             return `Something wrong. Your ID or Name doesn't exist.`
//         }
//     };
// }
// const getRintaro:Rintaro = new Rintaro('Rinchan','Rintaro');
// console.log(getRintaro.getRintaroProfile());
class Teacher extends Person {
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
    get subject() {
        if (!this._subject) {
            throw new Error('0 Subject setted');
        }
        return this._subject;
    }
    set subject(gettedSubject) {
        this._subject = gettedSubject;
    }
    greeting() {
        console.log(`Hello! I'm ${this.name}. Age is ${this.age}, and I teach ${this._subject}.`);
    }
    greeting2() {
        super.greeting();
    }
}
const teacher = new Teacher('Yassun', 32, 'Music');
teacher.subject;
teacher.subject = 'Japanese';
teacher.greeting();
// teacher.greeting2();
