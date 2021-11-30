function DrawGraph(){
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    var N = document.getElementById("text_canvas").value;
    //console.log(N);
    if(N < 0 || N > 15){
        alert("Количество элементов не удовлетворяет условиям")
        return;
    }

    var can = document.getElementById("canvas"),
        ctx = can.getContext('2d');

    ctx.fillStyle = "black"; // Задаём чёрный цвет для линий 
    ctx.lineWidth = 2.0; // Ширина линии
    ctx.beginPath(); // Запускает путь
    ctx.moveTo(30, 10); // Указываем начальный путь
    ctx.lineTo(30, 460); // Перемешаем указатель
    ctx.lineTo(1490, 460); // Ещё раз перемешаем указатель
    ctx.stroke(); // Делаем контур
    // Цвет для рисования
    ctx.fillStyle = "black";
    // Цикл для отображения значений по Y 
    for(let i = 0; i < 6; i++) { 
        ctx.fillText((5 - i) * 20 + "", 4, i * 80 + 60); 
        ctx.beginPath(); 
        ctx.moveTo(25, i * 80 + 60); 
        ctx.lineTo(30, i * 80 + 60); 
        ctx.stroke(); 
    }
    
    // Массив с метками
    let labels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"];
    // Объявляем массив данных графика
    let data = [];
    for(var i = 0; i < N; i++){
        data[i] = getRndInteger(1, 80);
    }
    
    // Вывод меток и отрисовка графиков
    for(var i = 0; i < N; i++) {
        ctx.fillStyle = getRandomColor(); 
        ctx.font = "20px serif"
        ctx.fillText(labels[i], 95 + i*95, 485); 
        var dp = data[i]; 
        ctx.fillRect(40 + i*95, 460-dp*5, 95, dp*5);
    }
}

//Рандомный цвет
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//Радомный цвет
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}