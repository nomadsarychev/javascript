// * С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val — заданное число, pow –— степень.
function power(val, pow) {
    if (pow == 0) {
        return 1;
    }
    else {
        return val * power(val, (pow - 1))
    }
}
console.log(power(3, 4))