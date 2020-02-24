let num = prompt("Число от 1 до 4");
let result = num;

switch (result) {
    case '1':
        result = '1';
        alert("Зима");
        break;
    case '2':
        result = '2';
        document.write("Весна");
        break;
    case '3': 
        result = '3';
        document.write("Лето");
        break;
    case '4':
        result = '4';
        document.write("Осень");
        break;
}

