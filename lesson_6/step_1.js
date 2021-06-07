// Продолжаем реализовывать модуль корзины:
// Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы;
// Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида.

"use strict"

class product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
}



let product_1 = document.createElement('div-2');
document.body.appendChild(product_1);
product_1.insertAdjacentHTML("afterbegin", " Купить товар 1 ")

let product_2 = document.createElement('div-3');
document.body.appendChild(product_2);
product_2.insertAdjacentHTML("afterbegin", " Купить товар 2 ")

let x = 0
let z = new product("Утюг", 1600)
let v = new product("Газовая плита", 2500)
let mas = []
let sum = 0
product_1.onclick = function () {
    mas.push(v)
    sum += v.price
    x++
    bascet.innerText = " В корзине " + x + " товаров на сумму " + sum + " рублей "
}
product_2.onclick = function () {
    mas.push(z);
    sum += z.price
    x++
    bascet.innerText = " В корзине " + x + " товаров на сумму " + sum + " рублей "
}

var bascet = document.createElement('div-1');
document.body.appendChild(bascet);

if (mas.length == 0) {
    bascet.insertAdjacentHTML("afterbegin", " Корзина пуста")
}
else {
    bascet.insertAdjacentHTML("afterbegin", "В корзине " + i + " товаров на сумму " + sum + " рублей ")
}

