/* столбец чисел от 1 до 100
let x = 1;

while (x <= 100) {
    document.write(x + '<br>');
    x++;
}
*/

/* столбец чисел от 11 до 33
let x = 11;

while (x <= 33 && x >= 11) {
    document.write(x + '<br>');
    x++;
}
*/

/* столбец четных от 0 до 100
for (let i = 1; i <= 100; i++) {
    if(i%2==0){
    document.write(i + '<br>');
    }
    }
    */

    /* Сумма чисел от 1 до 100
let sum = 0; 
for(let i = 1; i <= 100; i++) { 
sum += i; 
} 
alert(sum);
*/


/* Массив из 5 чисел, по очереди выводит на экран элементы (не работает если написать точно также через let)
var arr = [1, 2, 3, 4, 5];

for (var i = 0; i < arr.length; i++) {

alert(arr[i]); //выведет 1, 2, 3, 4, 5

}*/

/* Сумма всех элеменов массива, здесь уже через let работает
let arr = [1, 2, 3, 4, 5];
let result = 0;

for (let x = 0; x < arr.length; x++) {

    result += arr[x];

    

}
alert(result);*/

/* Вывод на экран всех ключей и значений объекта
Ключ - green
Значение - зеленый
типа того
let obj = {green: 'зеленый', red: 'красный', blue: 'голубой'};

for (let key in obj) {
    document.write("КЛюч: " + key + " значение: " + obj[key] + '<br>');
}*/

/* Вывдение на экран из объекта ключей со значением и сопроводительным текстом
let obj = {Коля: '200', Вася: '300', Петя: "400"};

for (let key in obj) {
    document.write(key + " - зарплата " + obj[key] + " долларов." + '<br>');
}*/

/* Выводит из массива на экран элементы больше 3 и меньше 10
let arr = [2, 5, 9, 15, 0, 4];

for (let x = 0; x <= arr.length; x++) {
    if (arr[x] > 3 && arr[x] < 10) {
        document.write(arr[x] + '<br>');
    }
}*/

/* сумма из положительных чисел массива
let arr = [1, 3, 6, 9, -12, 2, -10, 0];
let result = 0;

for (let x = 0; x < arr.length; x++) {

    if (arr[x] > 0) {
        result += arr[x];
    }

}

document.write(result);*/

/* Выводит на экран надпись ЕСТЬ, когда совпадает с поиском элемента массива
let arr = [1, 2, 5, 9, 4, 13, 4, 10];

for (let x = 0; x < arr.length; x++) {

    if (arr[x] == 4) {
        document.write("ЕСТЬ!" + '<br>');
    }

}*/

/* выводит на экран те элементы, что начинаются с определенного числа (буквы)
let arr = ['10', '20', '30', '50', '235', '3000'];

for (let x = 0; x < arr.length; x++) {

    if (arr[x][0] == 2 || arr[x][0] == 1 || arr[x][0] == 5) {
        document.write(arr[x] + '<br>');
    }
}*/

/*Выоводит строку элеменов массва
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let x = 0; x < arr.length; x++) {
    document.write('-' + arr[x]);
}*/

/* Выводит массив дней недели, выходные выделяет жирным
let obj = {1: 'monday', 2: ' tuesday', 3:'wednesday', 4: 'thursday', 5: 'friday', 6: 'saturday', 7: 'sunday'};

for (key in obj) {
    if (key <= [5]) {
        document.write(obj[key] + '<br>'); 
    } else {
        document.write('<b>'+obj[key]+'</b>' + '<br>');
    }
}*/

/*Выводит курсивом день недели (текущий)
let obj = {1: 'monday', 2: ' tuesday', 3:'wednesday', 4: 'thursday', 5: 'friday', 6: 'saturday', 7: 'sunday'};

let day = prompt("Введи какой сегодня день недели");

for (key in obj) {
    if (key == day) {
        document.write('<i>'+obj[key]+'</i>');
    }
}
*/


/* Делит 1000 до тех пор пока не станет меньше 50 и считает сколько делений нужно произвести
let n = 1000;

let num = 0;

while(n > 50) {
    n = n / 2;
    num++;
}

alert(num);
*/

/*num = 1;

function simple(num) {
    for(let i = 2; i < num; i++)
        if(num % i == 0) {
            return '<br>';
        } else {
            return num;
        }
}

document.write(simple(num));*/

/*
let n = 1000;

nextPrime:
for (let i = 2; i <= n; i++) { // Для всех i...

  for (let j = 2; j < i; j++) { // проверить, делится ли число..
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }

  document.write( i + '<br>' ); // простое число
} */

let n = 1000;

function simple(n) {
    for (let i = 2; i <= n; i++) {
        for(let j = 2; j < i; j++) {
            if(i % j == 0) continue;
        }
        document.write(i + '<br>');
    }
}

simple(n);