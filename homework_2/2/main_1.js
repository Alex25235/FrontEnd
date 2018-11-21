var arr_col = ["black", "gold", "silver"];
var arr_mem = [4, 8, 16, 32, 64, 128];
var arr_cost = [500, 510, 520, 530, 540, 545, 
                505, 515, 525, 535, 545, 550,
                520, 525, 530, 535, 540, 560];
var arr = [];

var z = 0;
while (z != 1) {
    var x = 0;
    var color = prompt('Введите цвет. Доступные цвета: black, gold, silver');
    var memory = prompt('Введите объем памяти. Доступные объемы: 4, 8, 16, 32, 64, 128');
    for (var i = 0; i < arr_col.length; i++) {
        arr[i] = [];
        for (var j = 0; j < arr_mem.length; j++) {
            arr[i][j] = arr_cost[x];
            x++;
            if (arr_col[i] == color && arr_mem[j] == memory){
                document.write('<h1>Телефон цвета "' + color +'" с ' + memory + ' гигабайтами памяти стоит ' + arr[i][j] + ' $</h1>');
                z++;
                break;
            }
        
        }
    }
}
