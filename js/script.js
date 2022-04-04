'use strict';

// Homework Lesson 26 (LMS):

// 1) Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.

let e = 0.1;
let p = 0.2;
let c = (e + p).toFixed(1);
console.log(c);

// 2)

let y = '1'
let x = 2;
let z = +y + x;
console.log(z);

// 3) Користувач вказує обсяг флешки в Гб.Програма повинна порахувати скільки файлів розміром 820 Мб поміщається на флешку.

let FlashDriveGB = +prompt('What is the size of your flash drive in GB?');

if (FlashDriveGB < 0) {
    alert('Incorrect value!');
    let FlashDriveGB = +prompt('What is the size of your flash drive in GB?');
} else {
    const GBToMB = 1024;
    let FlashDriveMB = FlashDriveGB * GBToMB;
    const movieSizeMB = 840;
    let movieAmount = (FlashDriveMB / movieSizeMB).toFixed(0);
    // NB! console.log(typeof movieAmount); ---> String
    alert(`You can download ${movieAmount} movie on your flash drive`);
}

// 4) Користувач вводить суму грошей в гаманці і ціну однієї шоколадки.Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.

let moneyAmount = +prompt('How much money do you have in your wallet?');
let chocolatePrice = +prompt('What is the price of a chocolate bar?');
if (moneyAmount < 0 || chocolatePrice < 0) {
    alert('Incorrect value!');
    let moneyAmount = prompt('How much money do you have in your wallet?');
    let chocolatePrice = prompt('What is the price of a chocolate bar?');
} else {
    let chocolateAmount = (moneyAmount / chocolatePrice).toFixed(0);
    let changeAmount = moneyAmount % chocolatePrice;
    alert(`You can buy ${chocolateAmount} chocolates and your change is ${changeAmount}`);
}

// 5) Запитай у користувача тризначне число і виведи його задом наперед.
// Reverse a 3-digit number:

let number = prompt('Enter a 3-digit number');
let digit3 = number % 10;
let value1 = (number - digit3) / 10;
let digit2 = value1 % 10;
let value2 = digit2 * 10 + digit3;
let digit1 = (number - value2) / 100;
if (number < 0) {
    let digit3Positive = digit3 * -1;
    let digit2Positive = digit2 * -1;
    let digit1Positive = digit1 * -1;
    alert(`Reversed number is -${digit3Positive}${digit2Positive}${digit1Positive}`);
} else {
    alert(`Reversed number is ${digit3}${digit2}${digit1}`);
}

// console.log(2 && 0 && 3);
// // Answer: 0
// console.log(2 || 0 || 3);
// // Answer: 2
// console.log(2 && 0 || 3);
// Answer: 3


//Homework Lesson 27 (LMS)

// 1) Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.

let userAge = prompt('How old are you');
if (userAge <= 11) {
    alert('You are a baby');
} else if (userAge > 11 && userAge <= 17) {
    alert('You are a teenager, bro');
} else if (userAge > 17 && userAge < 60) {
    alert('You are an adult');
} else if (userAge >= 60 && userAge < 110) {
    alert('You are a senior')
} else {
    alert('That is a weird age');
}

// 3) Підрахуй суму всіх чисел в заданому користувачем діапазоні.
// Sum of all numbers in a range:

let firstNumber = +prompt('Enter the first value of a range');
let lastNumber = +prompt('Enter the last number of a range');
let sum = 0;

while (firstNumber <= lastNumber) {
    sum += firstNumber;
    firstNumber++;
}
alert(`Sum of all numbers is ${sum}`);


// 4) Запитай у користувача 2 числа і знайди найбільший спільний дільник.
// The greatest common divisor of two numbers (Euclidean algorithm)

// 1. Більше число ділимо на менше.
// 2. Якщо число ділиться без залишку, то менше число і є НСД (слід вийти з циклу).
// 3. Якщо є залишок, то більше число замінюємо на залишок від ділення.
// + 4. Переходимо до пункту 1.

let firstValue = +prompt('Enter a number');
let secondValue = +prompt('Enter one more number');
let a = firstValue;
let b = secondValue;
let d;

if (a - b >= 0 && d !== 0) {
    while (d = a % b) {
        a = b;
        b = d;
    }
    console.log(b);
} else if (a - b < 0 && d !== 0) {
    while (d = b % a) {
        b = a;
        a = d;
    }
    console.log(a);
}

// 5) Запитай у користувача число і виведи всі дільники цього числа.
// All divisors of a number

let numb = +prompt('Enter a number');

for (let n = 1; n <= numb; n++) {
    if (numb % n !== 0) continue;
    console.log(n);
}


