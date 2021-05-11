type User = {
    name:string,
    age:number,
    sex:boolean,
}
type detectGender = 'men'|'women';
const Mary:User = {
    name: 'Mary Sue',
    age:20,
    sex: true,
}
const Sakuchan:User = {
    name: 'Saku',
    age:20,
    sex: false,
}
function showUserInfo({name, age, sex}:User){
    let gender:detectGender;
    sex ? gender = 'women': gender = 'women';
    console.log(`${name}, ${age}, ${gender}`);
}

// 使用例
showUserInfo(Mary);

// エラー例
showUserInfo
// const usr: User = {
//     name: 'Gombe Nanashino',
//     age: 100,
// };