// Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

"use strict"
let min = 1;
let max = 1000;
let num = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(num)
let str = String(num);
let mas = []
let finish = []



// // 1.Первый вариант с английскими наименованиями 
// function numOb(units = 0, decade = 0, hundred = 0) {
//     this.units = units,
//         this.decade = decade,
//         this.hundred = hundred

// }
// if (str.length <= 3) {
//     for (let i of str) {
//         i = +i
//         mas.push(i)
//     }
// }
// else {
//     console.log("число больше трехзначного")
// }

// console.log(new numOb(...mas))

// 2.Второй вариант с русскими наименованиями как требует условие задачи
if (str.length <= 3) {
    for (let i of str) {
        i = +i
        mas.push(i)
    }
}
else {
    console.log("число больше трехзначного")
}

for (let i = 0; i < mas.length; i++) {
    switch (i) {
        case 0:
            finish.push(
                { "единицы": mas[0] }
            )
            break;
        case 1:
            finish.push(
                { "десятки": mas[1] }
            )

            break;
        case 2:
            finish.push(
                { "сотни": mas[2] }
            )

            break;

        default:
            break;
    }
}
console.log(finish)