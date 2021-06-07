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
for (let i = 0; i < mas.length; i++) {
    sum = sum + mas[i].price

}

console.log(sum)
