//Базовые операторы, математика. Операторы сравнения.

//унарный оператор
let n = 1;
n = -n;
alert(n);

//Бинарный оператор
let x = 5, y = 12;
alert(x - y);

//Взятие остатка от деления %, Возведение в степень **
alert(5%3);
alert(8%2);

alert(8**2);
alert(2**7);
alert(4**(1/2));

//Сложение строк при помощи бинарного +
let str = 'combination' + ' ' + 'of words';
alert(str);

alert(5 + 5 + '2'); //'102'
alert('8' - 2);
alert('8' / '2');

let cherry = '2', apple = '5';
alert(cherry + apple);//25

alert(+cherry + +apple);//7
// alert( Number(apples) + Number(oranges) ); // 7

let a = 5;
a += 15;
a *= 23;
alert(a);

//Инкремент/декремент
let counter = 5;
let b = ++counter;
alert(b);

let c = counter++;
alert(c*5);

//Побитовые операторы
// AND(и) ( & );OR(или) ( | );XOR(побитовое исключающее или) ( ^ );NOT(не) ( ~ );LEFT SHIFT(левый сдвиг) ( << );
// RIGHT SHIFT(правый сдвиг) ( >> );ZERO-FILL RIGHT SHIFT(правый сдвиг с заполнением нулями) ( >>> );

alert( 'Коты' > 'Кода' ); // true

alert( '2' > 1 );
alert( '01' == 1 );