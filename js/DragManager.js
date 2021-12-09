var DragManager = new function() {

    /**
     * составной объект для хранения информации о переносе:
     * {
     *   elem - элемент, на котором была зажата мышь
     *   avatar - аватар
     *   downX/downY - координаты, на которых был mousedown
     *   shiftX/shiftY - относительный сдвиг курсора от угла элемента
     * }
     */
    var dragObject = {};
  
    var self = this;
  
    function onMouseDown(e) {
  
      if (e.which != 1) return;
  
      var elem = e.target.closest('.draggable');
      if (!elem) return;
  
      dragObject.elem = elem;
  
      // запомним, что элемент нажат на текущих координатах pageX/pageY
      dragObject.downX = e.pageX;
      dragObject.downY = e.pageY;
  
      return false;
    }
  
    function onMouseMove(e) {
      if (!dragObject.elem) return; // элемент не зажат
  
      if (!dragObject.avatar) { // если перенос не начат...
        var moveX = e.pageX - dragObject.downX;
        var moveY = e.pageY - dragObject.downY;
  
        // если мышь передвинулась в нажатом состоянии недостаточно далеко
        if (Math.abs(moveX) < 3 && Math.abs(moveY) < 3) {
          return;
        }
  
        // начинаем перенос
        dragObject.avatar = createAvatar(e); // создать аватар
        if (!dragObject.avatar) { // отмена переноса, нельзя "захватить" за эту часть элемента
          dragObject = {};
          return;
        }
  
        // аватар создан успешно
        // создать вспомогательные свойства shiftX/shiftY
        var coords = getCoords(dragObject.avatar);
        dragObject.shiftX = dragObject.downX - coords.left;
        dragObject.shiftY = dragObject.downY - coords.top;
  
        startDrag(e); // отобразить начало переноса
      }
  
      // отобразить перенос объекта при каждом движении мыши
      dragObject.avatar.style.left = e.pageX - dragObject.shiftX + 'px';
      dragObject.avatar.style.top = e.pageY - dragObject.shiftY + 'px';
  
      return false;
    }
  
    function onMouseUp(e) {
      if (dragObject.avatar) { // если перенос идет
        finishDrag(e);
      }
  
      // перенос либо не начинался, либо завершился
      // в любом случае очистим "состояние переноса" dragObject
      dragObject = {};
    }
  
    function finishDrag(e) {
      var dropElem = findDroppable(e);
  
      if (!dropElem) {
        self.onDragCancel(dragObject);
      } else {
        console.log(dragObject.elem.id);
        AddElementInList(dragObject);
        self.onDragEnd(dragObject, dropElem);
        
      }
    }
  
    function createAvatar(e) {
  
      // запомнить старые свойства, чтобы вернуться к ним при отмене переноса
      var avatar = dragObject.elem;
      var old = {
        parent: avatar.parentNode,
        nextSibling: avatar.nextSibling,
        position: avatar.position || '',
        left: avatar.left || '',
        top: avatar.top || '',
        zIndex: avatar.zIndex || ''
      };
  
      // функция для отмены переноса
      avatar.rollback = function() {
        old.parent.insertBefore(avatar, old.nextSibling);
        avatar.style.position = old.position;
        avatar.style.left = old.left;
        avatar.style.top = old.top;
        avatar.style.zIndex = old.zIndex
      };
  
      return avatar;
    }
  
    function startDrag(e) {
      var avatar = dragObject.avatar;
  
      // инициировать начало переноса
      document.body.appendChild(avatar);
      avatar.style.zIndex = 9999;
      avatar.style.position = 'absolute';
    }
  
    function findDroppable(event) {
      // спрячем переносимый элемент
      dragObject.avatar.hidden = true;
  
      // получить самый вложенный элемент под курсором мыши
      var elem = document.elementFromPoint(event.clientX, event.clientY);
  
      // показать переносимый элемент обратно
      dragObject.avatar.hidden = false;
  
      if (elem == null) {
        // такое возможно, если курсор мыши "вылетел" за границу окна
        return null;
      }
  
      return elem.closest('.droppable');
    }
  
    document.onmousemove = onMouseMove;
    document.onmouseup = onMouseUp;
    document.onmousedown = onMouseDown;
  
    this.onDragEnd = function(dragObject, dropElem) {};
    this.onDragCancel = function(dragObject) {};
  
};
  
  
function getCoords(elem) { // кроме IE8-
    var box = elem.getBoundingClientRect();

    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };

}

function AddElementInList(dragObject){
  //Для начала, вам нужно найти элемент, в который нужно вставить вашу разметку. Вданном случае таблицу с id='table'.
  var table = document.getElementById('table');
  //Тут выдерните ваше значение из locslStorage, я просто присвою 1.
  var faucet1 = 1;
  //Теперь создаем строку и присваиваем ее переменной.
  var tr = document.createElement("tr");
  
  if (faucet1 == 1) {
    //добавляем разметку в созданную строку
    switch(dragObject.elem.id){
      case "image1":
        tr.id = "tr1";
        tr.innerHTML = '<td>Кофе</td> <td id = "b1Cost">100</td> <td id = "b1Number">1</td> <td><button class = "bShop" onclick = "b1PlusClick();">+</button><button class = "bShop" onclick = "b1MinusClick();">-</button></td>';
        break;
      case "image2":
        tr.id = "tr2";
        tr.innerHTML = '<td>Печеньки</td> <td id = "b2Cost">150</td> <td id = "b2Number">1</td> <td><button class = "bShop" onclick = "b2PlusClick();">+</button><button class = "bShop" onclick = "b2MinusClick();">-</button></td>';
          break;
      case "image3":
        tr.id = "tr3";
        tr.innerHTML = '<td>Картошечка</td> <td id = "b3Cost">200</td> <td id = "b3Number">1</td> <td><button class = "bShop" onclick = "b3PlusClick();">+</button><button class = "bShop" onclick = "b3MinusClick();">-</button></td>';
          break;
      case "image4":
        tr.id = "tr4";
        tr.innerHTML = '<td>Салатик</td> <td id = "b4Cost">230</td> <td id = "b4Number">1</td> <td><button class = "bShop" onclick = "b4PlusClick();">+</button><button class = "bShop" onclick = "b4MinusClick();">-</button></td>';
          break;
      case "image5":
        tr.id = "tr5";
        tr.innerHTML = '<td>Тортик </td> <td id = "b5Cost">300</td> <td id = "b5Number">1</td> <td><button class = "bShop" onclick = "b5PlusClick();">+</button><button class = "bShop" onclick = "b5MinusClick();">-</button></td>';
          break;
      case "image6":
        tr.id = "tr6";
        tr.innerHTML = '<td>Кусочек мяса</td> <td id = "b6Cost">450</td> <td id = "b6Number">1</td> <td><button class = "bShop" onclick = "b6PlusClick();">+</button><button class = "bShop" onclick = "b6MinusClick();">-</button></td>';
          break;
      default: break;
    }
    //вставляем строку в таблицу
    table.appendChild(tr);
  } else {
    console.log('error');
  }
  //return;
}

function b1PlusClick(){
  var cost = document.getElementById("b1Cost");
  var number = document.getElementById("b1Number");
  cost.innerHTML = Number(cost.textContent) + 100;
  number.innerHTML = Number(number.textContent) + 1;
}
function b1MinusClick(){
  var cost = document.getElementById("b1Cost");
  var number = document.getElementById("b1Number");
  if(Number(number.textContent) > 1){
    cost.innerHTML = Number(cost.textContent) - 100;
    number.innerHTML = Number(number.textContent) - 1;
  }
  else{
    document.getElementById("tr1").remove();
  }
}

function b2PlusClick(){
  var cost = document.getElementById("b2Cost");
  var number = document.getElementById("b2Number");
  cost.innerHTML = Number(cost.textContent) + 150;
  number.innerHTML = Number(number.textContent) + 1;
}
function b2MinusClick(){
  var cost = document.getElementById("b2Cost");
  var number = document.getElementById("b2Number");
  if(Number(number.textContent) > 1){
    cost.innerHTML = Number(cost.textContent) - 150;
    number.innerHTML = Number(number.textContent) - 1;
  }
  else{
    document.getElementById("tr2").remove();
  }
}

function b3PlusClick(){
  var cost = document.getElementById("b3Cost");
  var number = document.getElementById("b3Number");
  cost.innerHTML = Number(cost.textContent) + 200;
  number.innerHTML = Number(number.textContent) + 1;
}
function b3MinusClick(){
  var cost = document.getElementById("b3Cost");
  var number = document.getElementById("b3Number");
  if(Number(number.textContent) > 1){
    cost.innerHTML = Number(cost.textContent) - 200;
    number.innerHTML = Number(number.textContent) - 1;
  }
  else{
    document.getElementById("tr3").remove();
  }
}

function b4PlusClick(){
  var cost = document.getElementById("b4Cost");
  var number = document.getElementById("b4Number");
  cost.innerHTML = Number(cost.textContent) + 230;
  number.innerHTML = Number(number.textContent) + 1;
}
function b4MinusClick(){
  var cost = document.getElementById("b4Cost");
  var number = document.getElementById("b4Number");
  if(Number(number.textContent) > 1){
    cost.innerHTML = Number(cost.textContent) - 230;
    number.innerHTML = Number(number.textContent) - 1;
  }
  else{
    document.getElementById("tr4").remove();
  }
}

function b5PlusClick(){
  var cost = document.getElementById("b5Cost");
  var number = document.getElementById("b5Number");
  cost.innerHTML = Number(cost.textContent) + 300;
  number.innerHTML = Number(number.textContent) + 1;
}
function b5MinusClick(){
  var cost = document.getElementById("b5Cost");
  var number = document.getElementById("b5Number");
  if(Number(number.textContent) > 1){
    cost.innerHTML = Number(cost.textContent) - 300;
    number.innerHTML = Number(number.textContent) - 1;
  }
  else{
    document.getElementById("tr5").remove();
  }
}

function b6PlusClick(){
  var cost = document.getElementById("b6Cost");
  var number = document.getElementById("b6Number");
  cost.innerHTML = Number(cost.textContent) + 450;
  number.innerHTML = Number(number.textContent) + 1;
}
function b6MinusClick(){
  var cost = document.getElementById("b6Cost");
  var number = document.getElementById("b6Number");
  if(Number(number.textContent) > 1){
    cost.innerHTML = Number(cost.textContent) - 450;
    number.innerHTML = Number(number.textContent) - 1;
  }
  else{
    document.getElementById("tr6").remove();
  }
}
