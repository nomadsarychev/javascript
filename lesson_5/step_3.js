// Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
// Пустая корзина должна выводить строку «Корзина пуста»;
// Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
"use strict"

class product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
}

let mas = []
let x = new product("Стиральная машина", 1155)
let y = new product("Пылесос", 200)
let z = new product("Утюг", 1600)
let c = new product("Фен", 1800)
let v = new product("Газовая плита", 2500)
mas.push(x, y, z, c, v)
console.log(mas)

let sum = 0
for (var i = 0; i < mas.length; i++) {
    sum = sum + mas[i].price

}

// console.log(sum)


var bascet = document.createElement('div');
document.body.appendChild(bascet);
// bascet.innerHTML = "Привет, мир!";
if (mas.length == 0) {
    bascet.insertAdjacentHTML("afterbegin", " Корзина пуста")
}
else {
    bascet.insertAdjacentHTML("afterbegin", "В корзине " + i + " товаров на сумму " + sum + " рублей ")
}

// Window.onload = my_initiation;

// for (i = 0; i < 10; i++) {
//     my_initiation()
// }