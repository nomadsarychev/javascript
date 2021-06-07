"use strict"

let masNumd_1 = []
let masNumd_2 = []
let masNumd_3 = []
//первый способ сгенерировать масив
function* iter(n = 100) {
    for (let i = 0; i <= n; i++)
        yield i
}
for (let x of iter()) {
    masNumd_1.push(x)
}

//Второй способ сгенерировать масив
for (let i = 1; i <= 100; i++) {
    masNumd_2.push(i)
}

//Третий способ сгенерировать масив
let range = {
    from: 1,
    to: 100,

    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },

    next() {
        if (this.current <= this.to) {
            return { done: false, value: this.current++ };
        } else {
            return { done: true };
        }
    }
};

for (let num of range) {
    masNumd_3.push(num)
}
// Результат
console.log(masNumd_1)
console.log(masNumd_2)
console.log(masNumd_3)
// можете пояснить почему код по сложности разный а выход один и тоже вроде немогу сам понять
