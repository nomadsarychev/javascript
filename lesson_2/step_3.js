 // Объявить две целочисленные переменные — a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму;
// Ноль можно считать положительным числом.
var min = - 10;
var max = 10;
var a = Math.floor(Math.random() * (max - min + 1)) + min;
var b = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(a);
console.log(b)


if (a >= 0 && b >= 0) {
    x = a - b;
    console.log("Выполняется вычитание")
    console.log(x);
} else if (a < 0 && b < 0) {
    x = a * b;
    console.log("Выполняется умножение")
    console.log(x);
} else {
    x = a + b;
    console.log("Выполняется сложение")
    console.log(x);
}