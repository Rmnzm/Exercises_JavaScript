let user = {};

user.name = 'John';

user.surname = 'Smith';

user.name = 'Pete';

delete user.name;

document.write('name' in user);

document.write('<hr>');

//---------------------------------------------------------------------

let schedule = {};

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

document.write(isEmpty(schedule));

document.write('<hr>');

//---------------------------------------------------------------------

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function sum(obj) {
    let sum = 0;
    for (key in obj) {
        sum = sum + obj[key];
    }
    return sum;
}

document.write(sum(salaries));

document.write('<hr>');

//---------------------------------------------------------------------

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof(obj[key]) == 'number') {
            obj[key] *= 2;
        }
    }
}

multiplyNumeric(menu);

document.write(menu.width)

document.write('<hr>');

//---------------------------------------------------------------------