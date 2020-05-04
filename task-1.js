/*

На основе массива [1,2,3,5,8,9,10] сформировать новый массив, каждый элемент которого будет хранить информацию о числе и его четности:

[{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]

*/
console.log('Первое задание');

let arr1t = [1,2,3,5,8,9,10];
let newArr1t = [];

newArr1t = arr1t.map(function (item) {
    let odd = item % 2 ? false : true;
    return {
        item,
        odd,
    };
});
console.log(newArr1t);
