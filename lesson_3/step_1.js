// С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
"use strict"


// 1 Первый варинат через цикл фор
// function isprime(num) {
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return num > 1;
// }

// let mas = []
// for (let x = 2; x <= 100; x++) {
//     if (isprime(x)) {
//         mas.push(x)
//     }
// }
// console.log(mas)




function isprime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

let mas = []
let x = 2
while (x <= 100) {
    if (isprime(x)) {
        mas.push(x)
    }
    x++
}
console.log(mas)