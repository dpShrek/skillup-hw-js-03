/*
Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть true.

Проверить, все элементы массива имеют длину более 3х символов ['yes', 'hello', 'no', 'easycode', 'what']. Если да - вернуть true
*/
console.log('');
console.log('Второе задание');

let mas2t = [12, 4, 50, 0, 1, 18, 40];
let masStr2t = ['yesd', 'hello', 'no', 'easycode', 'what'];


mas2t.forEach(function (item) {
    if (item == 0) {
        console.log(true); 
    } 
});


masStr2t.forEach(function (item) {
    if (item.length > 3){
        console.log(true);
    }
});