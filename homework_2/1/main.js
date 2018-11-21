var phone = [{
        memory: 4,
        cost: 400
    },
    {
        memory: 8,
        cost: 600
    },
    {
        memory: 16,
        cost: 800
    },
    {
        memory: 32,
        cost: 1000
    }
    ,
    {
        memory: 64,
        cost: 1250
    }
    ,
    {
        memory: 128,
        cost: 1500
    }
]

var phone_col = ['black', 'silver', 'gold'];

var z=0; 
while (z != 1) { 
var x = prompt('Введите объем памяти, чтобы узнать цену на неё');
    for (i = 0; i < phone.length; i++ ){
        if (phone[i].memory == x){
            document.write('<h1>Телефон с ' + x +' гигабайтами памяти стоит ' + phone[i].cost + ' $</h1>');
            z++;
            break;
        }       
    }  
}

x=0;
z=0; 
while (z != 1) { 
var x = prompt('Введите желаемый цвет, чтобы получить изображение телефона. В наличии: black, gold, silver');
    for (i = 0; i < phone_col.length; i++ ){
        if (phone_col[i] == x){
            document.write('<img src="../1/img/' + x + '.png" alt="">');
            z++;
            break;
        }  
    }  
}

