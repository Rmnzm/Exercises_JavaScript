//Строка 123456789

let str;

for (let x = 1; x < 10; x++) {
    str = x;

    document.write(str)
}

document.write('<hr>')

//Строка 987654321

let st;

for (let x = 9; x > 0; x--) {
    st = x;

    document.write(st);
}

document.write('<hr>')

//Строка -1-2-3-4-5-6-7-8-9-

let s;

document.write('-');

for (let x = 1; x < 10; x++) {
    s = x;


    document.write(s + '-');
}

document.write('<hr>')

//Пирамида х

for (let x = 1; x <= 20; x++) {
    for (let y = 1; y <= x; y++) {
        document.write('x');
    }
    document.write('<br>')
}

document.write('<hr>')

//Пирамида чисел

for (let x = 1; x < 10; x++) {
    for (let y = 1; y <= x; y++) {
        document.write(x);
    }
    document.write('<br>')
}

document.write('<hr>')

//Пирамида хх

for (let x = 1; x < 5; x++) {
    for (let y = 1; y <= x; y++) {
        document.write('xx');
    }
    document.write('<br>')
}

document.write('<hr>')