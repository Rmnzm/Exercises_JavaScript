let str = 'hello world!';

let newStr = str[0].toUpperCase() + str.slice(1);

document.write(newStr);

document.write('<hr>');

//-------------------------------------------------

str = str.split('');

str[0] = str[0].toUpperCase();

let result = str.join('');

document.write(result);

document.write('<hr>');

//-------------------------------------------------

let strn = '123456';

strn = strn.split('');

strn = strn.reverse();

let resl = strn.join('');

document.write(resl);

document.write('<hr>');

//-------------------------------------------------

let http = 'http://asdas';

if (http.substr(0,7) == 'http://') {
    document.write('well done');
} else {
    document.write('not done')
}

document.write('<hr>');

//-------------------------------------------------

let html = 'http://adsda.html';

if (html.substr(-5) == '.html') {
    document.write('well done');
} else {
    document.write('not done')
}

document.write('<hr>');

//-------------------------------------------------
