//Verification ofcurrent year
let year = prompt('What is the current year?', '');
let condition = (year == 2021);
    if(condition) {
        alert('Yes! You are right! The current year is 2021.')
    } else {
        alert(`No. The current year is not ${year}`)
    };

let age = prompt('How old are you?', '');
let message = (age < 3) ? 'Hi, baby!' : 
    (age < 18) ? 'hello!' : (age < 100) ? 'Good afternoon!' : 'What an extraordinary age!';
    alert(message);

let company = prompt('Which company created JavaScript?', '');
    (company == 'Netscape') ? alert('You are right!') : alert('You are wrong!');

let title = prompt('What is the official title of JavaScript?', '');
    
    if(title == 'ECMAScript') {
        alert('It is correct!')
    } else {
        alert('Do not you know? ECMAScript!')
    };

let number = prompt('Introduce a number!', '');
    if(number > 0) {
        alert(1);
    } else if (number < 0) {
        alert(-1);
    } else if (number == 0) {
        alert(0);
    };

/*let result;
    result = (a + b < 4) ? 'Less' : 'many/ much';

let mail = (login == 'employee') ? 'hi' :
    (login == 'director') ? 'Hello!' :
    (login == '') ? 'The login is absent!' : '';
*/

//Logical operators(||, &&, !)
/*alert( null || 2 || undefined );//2

alert( alert(1) || 2 || alert(3) );

alert( 1 && null && 2 );

if (age >= 14 && age <= 90);
if (age < 14 || age > 90);
if (!(age >= 14 || age <= 90));*/

let password;
let userName = prompt('Who is there?', '');
    if(userName == 'admin') {

        password = prompt('password?', '');
    
    if(password == 'general') {
        alert('Hello!');
    } else if(password == '' || password == null){ 
        alert('cancel');
    } else {
        alert('The password is incorret!');
    }
} else if(userName == '' || userName == null) {
    alert('cancel');
} else {
    alert('I do not know you!');
}

//Оператор объединения с null '??'

//Циклы while и for
let i = 0; // мы уже имеем объявленную i с присвоенным значением
    for (; i < 3; i++) { // нет необходимости в "начале"
    alert( i ); // 0, 1, 2
}

/*let i = 0;
    for (; i < 3;) {
        alert( i++ );
    }*/

let sum = 0;

while(true) {
    let value = +prompt('Let me value ', '');
    if(!value) break;

    sum += value;
}

alert('Sum: ' + sum);

//метки (with break or continue)

outer: for(let i = 0; i < 10; i++) {
    let n = prompt('Introduce a number: ', '');
    if(!n) break outer;
}
alert('Exit!')

/*for(let i = 2; i <= 10; i++) {
    if(i % 2 == 0) {
        alert(i);
    }
}

let i = 0;
while(i < 3) {
    alert(`number ${i}!`);
    i++;
}*/

let num;
do {
    num = prompt('Let me a number greather than 100: ', '');
} while(num <= 100 && num)
alert('stop!')

//num Prime:
let n = 10;
nextPrime:
    for(let i = 2; i < n; i++) {
        for(let j = 2; j < i; j++) {
            if(i%j == 0) continue nextPrime;
        }
        alert(i);
    }