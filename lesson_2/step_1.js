// 1. Почему код дает именно такие результаты?
var a = 1, b = 1, c, d;
c = ++a; console.log(c);           // Выполняется команда сложения занчений переменной а (1+1) а потом присваивание переменной с полученного значения
d = b++; console.log(d);           // Выполняется команда присвоения занчения b (1) а затем увеличения заначения переменной b (1+1) 
c = (2 + ++a); console.log(c);      // Выполняется команда сложение к переменной a (2),увеличенной во втором действии, на 1. Вторым действием выполняется сложение 2 к а(3)    
d = (2 + b++); console.log(d);      // Выполняется команда сложения 2 к b(2) и затем происходит увеличение переменной b (2+1)
console.log(a);              //Выводится переменные после всех действий (выполялось изначяально к а(1) +1;+1) получается 3
console.log(b);              //Выводится переменные после всех действий (выполялось изначяально к b(1) +1;+1) получается 3 



