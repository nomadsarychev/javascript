// Товары в корзине хранятся в массиве. Задачи:
// Организовать такой массив для хранения товаров в корзине;
// Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

let min = 1;
let max = 1000;
let mas = []
let numdCost = 10
for (i = 1; i < numdCost; i++) {
    let a = Math.floor(Math.random() * (max - min + 1)) + min;
    mas.push(a)
}
console.log(mas)


var sum = 0;
for (i = 0; i < mas.length; i++) {
    sum += mas[i]
}
console.log(sum)