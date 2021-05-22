// Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 — значения аргументов, operation — строка с названием операции. В зависимости от переданного значения выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (применить switch).

var min = - 10;
var max = 10;
var arg1 = Math.floor(Math.random() * (max - min + 1)) + min;
var arg2 = Math.floor(Math.random() * (max - min + 1)) + min;

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case sum:
            console.log("sum")
            console.log(sum(arg1, arg2))
            break;
        case diff:
            console.log("diff")
            console.log(diff(arg1, arg2))
            break;
        case mult:
            console.log("mult")
            console.log(mult(arg1, arg2))
            break;
        case div:
            console.log("div")
            console.log(div(arg1, arg2))
            break;
        default:
            console.log("действие не распознано")
            break;
    }
}

function sum(a, d) {
    return (a + d);
}
function diff(a, d) {
    return (a - d);
}
function mult(a, d) {
    return (a * d);
}
function div(a, d) {
    return (a / d);
}

mathOperation(arg1, arg2, sum)
mathOperation(arg1, arg2, diff)
mathOperation(arg1, arg2, mult)
mathOperation(arg1, arg2, div)
mathOperation(arg1, arg2, "sdfd")