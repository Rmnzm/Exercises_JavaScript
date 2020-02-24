/* остаток от деления
let a = prompt("Введите а - ");
let b = prompt("Введите b - ");

let sb = a % b;

document.write(sb);
*/

/*цикл остатка деления есть или нет
let a = prompt("Введите a - ");
let b = prompt("Введите b - ");

let sb = a % b;

if (sb == 0) {
    document.write("Делится без остатка");
} else {
    document.write("Делится с остатком");
}
*/

/* Возводит A в степень B
let a = prompt("Введите a - ");
let b = prompt("Введите b - ");

let st = a ** b;

document.write(st);
*/

/*квадратный корень
document.write(Math.sqrt(144));
*/

/*Выводит кадрат чисел массива и сумму кубов чисел массива
let arr = [4, 2, 5, 19, 13, 0, 10];

for (let x = 0; x < arr.length; x++){
    document.write(Math.pow(arr[x],2) + '<br>');
}

document.write('<hr>')

for (let x = 0; x < arr.length; x++){
    document.write(Math.pow(arr[x],3) + Math.pow(arr[x],3) + '<br>');
}
*/


/* Выводит квадратный корень из числа В затем его по разному округляет
let a = prompt("Введите a - ");

let b = Math.sqrt(a);

document.write(b);

document.write('<hr>');

document.write(Math.round(b));

document.write('<hr>');

document.write(b.toFixed(1));

document.write('<hr>');

document.write(b.toFixed(2));
*/

/* добавление в объект округленного числа
let a = 587;

let b = Math.sqrt(a);

let obj = {}

obj['floor'] = Math.floor(b);
obj['ceil'] = Math.ceil(b);

for (key in obj) {
    document.write(key + ' ' + + obj[key] + '<br>');
}
*/

/*Выводит максимальное и минимальное числа
document.write(Math.max(4, -2, 5, 19, -130, 0, 10));

document.write(Math.min(4, -2, 5, 19, -130, 0, 10));
*/

/*Выводит рандомно число от 1 до 100
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.write(getRandomInt(1, 100));
*/

/*Разность модулей(из отрицательного числа делает положительное) числа
let a = prompt("Введите a - ");
let b = prompt("Введите b - ");

let sb = Math.abs(a) - Math.abs(b);

document.write(sb);
*/

/*Выводит положительное значение разности А и В
let a = prompt("Введите a - ");
let b = prompt("Введите b - ");

let sb = a - b;

if (sb <= 1) {
    document.write("Ты лох не так все");
} else {
    document.write(sb);
}
*/

/* Выводит среднее арифметическое элементов массива
let arr = [12, 15, 20, 25, 59, 79];

let summ = 0;

for (let x = 0; x < arr.length; x++){
    summ = summ + parseInt(arr[x]);
}
document.write(summ + '<hr>');

document.write(summ / arr.length);
*/

/* Факториал заданного числа (факториал, произведение всех чисел из числа, 4! = 1*2*3*4)
let a = prompt("Введите a - ");

let b = 1;

for (i = 0; i < a; i++){
    b = b * (a - 1);
}

document.write(a + '! = ' + b);
*/