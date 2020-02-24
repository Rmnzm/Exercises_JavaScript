let day = parseInt(prompt("Какое число сегодня?"));

if (day >= 1 && day <= 11) {
    document.write("Сегодня" + " " + day + " день " + "1-ой декады")
} else if (day >= 12 && day <= 21) {
    document.write("Сегодня" + " " + day + " день " + "2-ой декады")
} else if (day >= 22 && day <= 31) {
    document.write("Сегодня" + " " + day + " день " + "3-ой декады")
} else {
    document.write("Месяц кончился(((((((")
}

