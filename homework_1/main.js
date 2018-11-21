var i = 0;
var col = prompt('Введите небходимый цвет телефона на русском языке. В наличии: черный, золотой, серебрянный');
if (col === null) {
    console.log('Некорректный ответ');
} else {
    if (col == 'Черный' || col == 'черный' || col == 'Чёрный' || col == 'чёрный') {
        document.write('<img src="../homework_1/img/black.png" alt="">');
        i++;
    } else if (col == 'Золотой' || col == 'золотой') {
        document.write('<img src="../homework_1/img/gold.png" alt="">');
        i++;
    } else if (col == 'Серебрянный' || col == 'серебрянный') {
        document.write('<img src="../homework_1/img/silver.png" alt="">');
        i++;
    } else {
        document.write('<img src="../homework_1/img/default.png" alt="">');
    }
}

if (i == 1) {
var mem = +prompt('Введите необходимый объем карты памяти, чтобы получить данные о цене а неё. В наличии: 4, 8, 16, 32, 64');
if (mem === null) {
    console.log('Некорректный ответ');
} else {
    if(mem == 4){
        console.log('109 грн.');    
    } else if (mem == 8) {
        console.log('129 грн.'); 
    } else if (mem == 16) {
        console.log('170 грн.'); 
    } else if (mem == 32) {
        console.log('299 грн.'); 
    } else if (mem == 64) {
        console.log('419 грн.'); 
    } else {
        console.log('Введенного объема памяти не существует, либо он не введен, либо его нет в наличии'); 
    }
}
} else {
    console.log('Выбранный цвет отсутствует, или введен неверно, или грамматически некорректно. Чтобы получить данные о цене памяти cначала укажите цвет телефона.'); 
}

