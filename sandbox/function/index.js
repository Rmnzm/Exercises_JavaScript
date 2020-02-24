let str = 'asdas fsdsdfsdf sdsdfsdfsd dsfsdsg sd sgsd s ';

function upp(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

document.write(upp(str));

document.write('<hr>')

//---------------------------------

let rtr = 'asdas fsdsdfsdf sdsdfsdfsd dsfsdsg sd sgsd s ';

rtr = rtr.split('');

rtr[0] = rtr[0].toUpperCase();

let result = rtr.join('');

document.write(result);

document.write('<hr>')
//-----------------------------------------

let trt = 'asdas fsdsdfsdf sdsdfsdfsd dsfsdsg sd sgsd s ';

trt = trt[0].toUpperCase() + trt.substr(1);

document.write(trt);

document.write('<hr>')

//------------------------------------

let wrt = '123456';

let resulting = wrt.split('').reverse().join('');

document.write(resulting);

document.write('<hr>')

//-------------------------------------------------------

let qwerty = 'http://yandex.ru';

let check = qwerty.substring(0,7);

check == 'http://' ? document.write(true) : document.write(false);

document.write('<hr>')


//------------------------------------------------------

let ler = 'http://phphtml.html';

let checkin = ler.substr(-5);

checkin == '.html' ? document.write(true) : document.write(false);

document.write('<hr>')

//----------------------------------------------------------------------

function cube(num) {
    return num * num * num;
}

document.write(cube(3));

document.write('<hr>')

//------------------------------------------------------------------------

function quart(num) {
    return num * num;
}

document.write(quart(12));

document.write('<hr>')

//---------------------------------------------------------------

function summ(x,y) {
    return x + y;
}

document.write(summ(12,24));

document.write('<hr>')

//---------------------------------------------------------------------

function rzn(x,y,z) {
    return (x - y) / z;
}

document.write(rzn(150,50,2));

document.write('<hr>')

//--------------------------------------------------------------------

function today(num) {
    if (num == 1) {
        return "Понедельник";
    } else if (num == 2) {
        return "Вторник";
    } else if (num == 3) {
        return "Среда";
    } else if (num == 4) {
        return "Четверг";
    } else if (num == 5) {
        return "Пятница";
    } else if (num == 6) {
        return "Суббота";
    } else if (num == 7) {
        return "Воскресенье";
    } else if (num > 7) {
        return "Дни кончились";
    }
}

document.write(today(6));

document.write('<hr>')

//------------------------------------------------------------------------

let arr = [1, 2, 3, 4, 5, 6];

for (let q = 0; q < arr.length; q++) {
    if (arr[q] == 5) {
        document.write('da');
    } else {
        document.write('net');
    }
}

document.write('<hr>')

//----------------------------------------------------------------------

function numb(num) {
    for (let z = 2; z < num; z++) {
        if (num % z === 0) {
        return 'true';
    } else {
        return 'false';
    }
}
}

document.write(numb(31));

document.write('<hr>')

//-----------------------------------------------------------------------

let arrq = [1, 2, 3, 4, 5, 6];

for (let w = 0; w < arrq.length; w++) {
    if (arrq[w] === arrq[w-1]) {
        document.write('da');
    } else {
        document.write('net');
    }
}

//--------------------------------------------------------------------------

function tf(x,y) {
    if (x == y) {
        return 'true';
    } else {
        return 'false';
    }
}

document.write(tf(2, 2));

document.write('<hr>')

//----------------------------------------------------------

function sum(num1, num2) {
    if ((num1 + num2) > 10) {
        return true;
    } else {
        return false;
    }
}

document.write(sum(4,5));

document.write('<hr>')

//----------------------------------------------------------

function non(numb) {
    if (numb >= 0) {
        return 'false';
    } else {
        return 'true';
    }
}

document.write(non(-2));

document.write('<hr>')

//----------------------------------------------------------

let stro = '';

for (let l = 1; l < 10; l++) {
    stro = stro + l;
}

document.write(stro);

document.write('<hr>')

//----------------------------------------------------------

let orts = '';

for (let m = 9; m > 0; m--) {
    orts = orts + m;
}

document.write(orts);

document.write('<hr>')

//----------------------------------------------------------

let ostr = '-';

for (let n = 1; n < 10; n++) {
    ostr = (ostr + n) + '-' 
}

document.write(ostr);

document.write('<hr>')

//----------------------------------------------------------

let rmn = '';

for (let n = 0; n <= 20; n++) {
    rmn = rmn + 'x';
    document.write(rmn + '<br>');
}

document.write('<hr>')

//----------------------------------------------------------

let rmnz = '';

for (let n = 1; n < 10; n++) {
    rmnz = rmnz + n;
    document.write(rmnz + '<br>')
}

document.write('<hr>')

//----------------------------------------------------------

for (var i = 1; i <= 9; i++) {
	for (var j = 1; j <= i; j++) {
		document.write(i);
	}
	document.write('<br>');
}

document.write('<hr>')

//----------------------------------------------------------

let rmnzm = '';

for(let n = 0; n <= 10; n++) {
    rmnzm += 'xx';
    document.write(rmnzm + '<br>');
}

document.write('<hr>')

//----------------------------------------------------------
