let month = parseInt(prompt("Введите, какой сейчас номер месяца?"));

if (month == 12 || month <= 2) {
    document.write("Сейчас зима");
} else if (month > 2 && month <= 5) {
    document.write("Сейчас весна");
} else if (month > 5 && month <= 8) {
    document.write("Сейчас лето");
} else if (month > 5 && month <= 11) {
    document.write("Сейчас осень");
}

