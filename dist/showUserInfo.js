"use strict";
const mary = {
    name: 'Mary Sue',
    age: 20,
    sex: false,
};
function showUserInfo({ name, age, sex }) {
    let gender;
    sex ? gender = 'women' : gender = 'women';
    console.log(`${name}, ${age}, ${gender}`);
}
// 使用例
// エラー例
showUserInfo(mary);
// const usr: User = {
//     name: 'Gombe Nanashino',
//     age: 100,
// };
