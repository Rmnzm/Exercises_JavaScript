//Функция принимает два значения и сравнивает их

function params(x, y) {
    if (x == y) {
        return true;
    } else {
        return false;
    }
}

document.write(params(2, 2));

document.write('<hr>');

//Функция принимает два параметра, суммирует их, если сумма больше 10 выводит true, если меньше или равно false

function paramatr(x, y) {
    let z = x + y;

    if (z > 10) {
        return true;
    } else {
        return false;
    }
}

document.write(paramatr(7, 3));

document.write('<hr>');

//Функция проверяет число, является ли оно отрицательным

function param(x) {
    if (x < 0) {
        return true;
    } else {
        return false;
    }
}

document.write(param(-2));

document.write('<hr>');