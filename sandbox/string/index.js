/*Вывводит строку из нижнего регистра в верхнем
let str = "js";

document.write(str.toUpperCase());
*/

/*Выводит строку из верхнего регистра в нижнем
let str = "JS";

document.write(str.toLowerCase());
*/

/*Выводит количество символов в строке
let str = 'я учу javascript!';

document.write(str.length);
*/

/*Выводит слово из строки с помощью substr
let str = 'я учу javascript!';

document.write(str.substr(1, 4));
*/

/*Выводит слово из строки с помощью substring
let str = 'я учу javascript!';

document.write(str.substring(2, 5));
*/

/*Выводит слово из строки с помощью slice
let str = 'я учу javascript!';

document.write(str.slice(2, 6));
*/


/*Находит позицию строки
let str = 'я учу javascript!';

document.write(str.search('учу'));
*/

/*Обрезает слишком длинную строку
let str = 'lorem lorem lorem lorem lorem lorem';
let n = 12;

if (str.length > n) {
    document.write(str.substring(0,n) + '...');
} else {
    document.write(str);
}
*/

/*Разбивает каждый элемент строки в элемент массива этой тсроки
let str = 'я учу javascript!';

let arr = str.split();

document.write(arr);
*/

/*Заменяет - на !
let str = 'я-учу-javascript!';

document.write(str.replace(/-/g,'!'));
*/

/*Разбивает строку на массив, где каждый символ элемент массива
let str = 'я учу javascript!';

let arr = str.split('');

document.write(arr.length);
*/

/*Пишет дату в нужном формате
let date = '2025-12-31';

let arr = date.split('-');

let str = arr[2] + '.' + arr[1] + '.' + arr[0];

document.write(str);
*/

/*Преобразует массив в строку
let arr = ['я', 'учу', 'javascript', '!'];

let str = arr.join('+');

document.write(str);
*/

/*Преобразует первую букву строки в верхний регистр
let str = 'я учу javascript!';

let arr = str.split(' ');

document.write(arr[0].toUpperCase() + ' ' + arr[1] + ' ' + arr[2]);

function ucfirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

*/

/*Преобразует каждую первую букву слов в верхний регистр
let str = 'я учу javascript!';

function capitalize(str) {
    return str.replace(/(^|\s)\S/g, 
        function(a) {
            return a.toUpperCase()
        })
}

document.write(capitalize(str));
function rep(str) {
    return 
}
*/


/*Преобразует строку в, убирает _, первые буквы следующих слов делат большими, убирает пробелы
let str = 'var_test_text';

let newStr = str.replace(/_/g, " ");

let newStr2 = newStr.replace(/(\s)\S/g, 
    function(a) {
        return a.toUpperCase()
    }
)

let STR = newStr2.replace(/ /g,"");

document.write(STR);
*/




