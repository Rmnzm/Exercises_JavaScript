

//Проверка числа в массиве

function check(arr, elem) {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] == elem) {
            return true;
        }
    }
    return false;
}

let arr = [1, 3, 6, 7, 9, 10, 135, 5, 2, 0];

if (check(arr, 5)) {
    document.write('da');
} else {
    document.write('net');
}

document.write('<hr>')

//Проверка деления числа на простоту

function num(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return 'false';
        } else {
            return 'true';
        }
    }
}

document.write(num(31));

document.write('<hr>')

//Проверка двух одинаковых чисел ПОДРЯД в массиве

let array = [1, 1, 2, 3, 4, 6, 6];

function checks(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == array[(i + 1)]) {
            return 'true';
        } else {
            return 'false';
        }
    }
}

document.write(checks(array));

document.write('<hr>')

