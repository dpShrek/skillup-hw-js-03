/*

Напишите функцию, которая из элементов массива соберет и вернёт строку, основываясь на index каждой буквы. 
Например: [{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”

*/


console.log('');
console.log('Четвертое задание');


let mas4t = [{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}];

let str4t = mas4t.map(names => {
    return names.char

})

console.log(str4t.join(""));
