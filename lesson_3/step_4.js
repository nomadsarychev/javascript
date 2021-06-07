// * Нарисовать пирамиду с 20 рядами с помощью console.log, как показано на рисунке:
"use strict"
let n = 20

function zip(num) {
    if (num == 1) {
        return "*"
    }
    else {
        return "*" + zip(num - 1)
    }
}

for (let i = 0; i < n; i++, console.log(zip(i)));




