//Переменные, Типы данных, Взаимодействие: alert, prompt, confirm, Преобразование типов.
let n;
n = 5;
alert(n/0);

let userName = "Harry";
alert(`Name of current user is ${userName}`);

let a = 5;
let b = 8;
alert(`the first number is bigger than the second one: ${a>b}`);

let m = 10;
typeof m;

let userAge = 5;
let userAge2 = 10;
userAge = userAge2;
alert(userAge);

let userSurname = 'Burlaca';
alert(`my name is ${userSurname}`);
alert(typeof(userSurname));

//prompt
let age = prompt('How old are you?', 20);
alert(`You are ${age} years old.`);

let ex = prompt('test','');    
alert(ex);

//confirm
let personName = 'Olga';
let isPerson = confirm(`Is your name ${personName}?`)
alert(isPerson);

//expample(prompt&confirm)
let userName = prompt('What is your name?', 'fullName');
alert(`Your full name is ${userName}.`);

let name = prompt('What is your name?', '');
alert(`your name is ${name}`);

let color = 'black';
let pref = confirm(`is ${color} your favourite color?`);
alert(pref);

//Строковое преобразование
let num = 5;
let symbol = String(num);
alert(`It has been changen to symbol ${symbol}`);

//Численное преобразование
let character = '13';
let chToNum = Number(character);
alert(chToNum);

//Логическое преобразование
alert(Boolean('5'));
alert(Boolean(0));
alert(Boolean('0'));
alert(Boolean(NaN));
alert(Boolean('Ann'));
alert(Boolean(undefined));