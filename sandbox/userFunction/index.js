//Квадрат числа

function sqr(num) {
    return num * num
}

document.write(sqr(6));

document.write('<hr>')

//Сумма двух чисел

function summ(x, y) {
    return x + y
}

document.write(summ(2,3));

document.write('<hr>')

//Отнимает первое число и делит на третье 

function hz(x, y, z) {
    return (x - y) / z
}

document.write(hz(10, 2, 2))

document.write('<hr>')

//Принимает номер дня недели, выводит день недели 

function day(num) {
    if (num == 1) {
        return 'понедельник';
    } else if (num == 2) {
        return 'вторник';
    } else if (num == 3) {
        return 'среда';
    } else if (num == 4) {
        return 'четверг';
    } else if (num == 5) {
        return 'пятница';
    } else if (num == 6) {
        return 'суббота';
    } else if (num == 7) {
        return 'воскресенье';
    }
}

document.write(day(5));

document.write('<hr>')