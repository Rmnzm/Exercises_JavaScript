let num = prompt("Введите 6 числел, а мы проверим является ли сумма первых трех числе сумме вторых трех");

if ((Number(num[0]) + Number(num[1]) + Number(num[2])) == (Number(num[3]) + Number(num[4]) + Number(num[5]))) {
    document.write('да еееее');
} else {
    document.write("нет, ты лох");
}
