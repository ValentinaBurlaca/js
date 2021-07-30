let year = prompt('When Coronavirus pandemia started?', '');
if(year == 2020) alert('Yes, pandemia started at 2020.');

let currentMonth = prompt('What is current month?', '');
if(currentMonth == 'july'){
    alert('Yes!');
    alert('You are right!')
}

if(1){
    let a = confirm('The answer is truth!','');
    alert(a);
}

let x = +prompt('Sum ', '');
let sum;
sum = x + 5;
alert(`Suma = ${sum}`);

let currentYear = prompt('What the current year is?','');
let condition = (currentYear == 2021);
if (condition) {
alert('Current year is 2021!');
} else {
    alert(`You're mistaken! The current year is ${currentYear}`);
}

let month = prompt('What the month is?','');
if(month == 'december') {
    alert('There is winter!')
} else if (month == 'august') {
    alert('There is summer!')
} else {
    alert(month);
};

let accessAllowed;
let accessAllowed1;
let age = prompt('How old are you?', '');

//the first variant
if(age >= 18) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}
alert( `The first answer - ${accessAllowed}`);
//the second variant
accessAllowed1 = (age >= 18) ? true : false;
alert(accessAllowed1);
//the third variant
//let accessAllowed = age >= 18;