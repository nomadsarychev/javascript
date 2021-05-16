"use strict"
var tempFar = prompt("Введите температуры в градусах по Фаренгейту");
var temCel = (tempFar - 32) / (9 / 5);
alert(Math.round(temCel));