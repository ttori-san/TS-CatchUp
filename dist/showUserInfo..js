"use strict";
const Mary = {
    name: 'Mary Sue',
    age: 20,
    sex: true,
};
const Sakuchan = {
    name: 'Saku',
    age: 20,
    sex: false,
};
function showUserInfo({ name, age, sex }) {
    let gender;
    sex ? gender = 'women' : gender = 'women';
    console.log(`${name}, ${age}, ${gender}`);
}
// 使用例
showUserInfo(Mary);
// エラー例
showUserInfo;
// const usr: User = {
//     name: 'Gombe Nanashino',
//     age: 100,
// };
