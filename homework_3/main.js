var a = number(prompt('Введите первое число'));
var b = number(prompt('Введите второе число'));
var sign = calc(prompt('Введите тип операции +, -, *, /'));
var result;

function calc(data){
    if(data == "+" || data == "-" || data == "*" || data == "/") {
        return data;
    } else {
        return calc(prompt('Введите тип операции +, -, *, /'));    
    }
}

function number(data){
    if(isNaN(data) == false && data !== null && data !== undefined ){
        return Number(data);
    } else {
        return Number(number(prompt('Ошибка, введите число снова')));
    }
}

if (sign == "+") {
    result = a + b;
} else if (sign == "-") {
    result = a - b;
} else if (sign == "*") {
    result = a * b;
} else if(sign == "/") {
    result = a / b;
}
  
console.log( a, sign, b, " = ", result );
