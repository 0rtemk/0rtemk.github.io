/*-------------------form------------------*/
function deleteError(id){
    document.getElementById(id).classList.remove("error");
    document.getElementById(id).removeAttribute("placeholder");
}

function reg(){
    //обработка label (работает)
    var errors = 0;
    let name = document.register.name.value;
    if(name.length < 4){
        errors += 1;
        document.getElementById("name").classList.add("error");
        document.getElementById("name").setAttribute("placeholder", "Более 4х символов");
    }

    let email = document.register.email.value;
    if(email.length == 0){
        errors +=1;
        document.getElementById("email").classList.add("error");
        document.getElementById("email").setAttribute("placeholder", "Блин, тут вообще пусто :(");
    }

    let phone = document.register.phone.value;
    if (phone.length != 11){
        errors +=1;
        document.getElementById("phone").classList.add("error");
        document.getElementById("phone").setAttribute("placeholder", "11 цифр через '8'");
    }

    let password = document.register.password.value;
    if(password.length < 8){
        errors +=1;
        document.getElementById("password").classList.add("error");
        document.getElementById("password").setAttribute("placeholder", "Более 8 символов");
    }

    let pasport = document.register.pasport.value;
    if(pasport.length != 10){
        errors +=1;
        document.getElementById("pasport").classList.add("error");
        document.getElementById("pasport").setAttribute("placeholder", "10 цифр");
    }

    if(errors == 0){
        console.log("Данные из текстовых полей: " + name + " " + email + " " + phone);
        console.log(password + " " + pasport);
    }

    //обработка checkbox (работает)
    var checkbox1_consile = false;
    if(document.register.checkbox1.checked){checkbox1_consile = document.register.checkbox1.value;}
    var checkbox2_consile = false;
    if(document.register.checkbox2.checked){checkbox2_consile = document.register.checkbox2.value;}
    var checkbox3_consile = false;
    if(document.register.checkbox3.checked){checkbox3_consile = document.register.checkbox3.value;}
    var checkbox4_consile = false;
    if(document.register.checkbox4.checked){checkbox4_consile = document.register.checkbox4.value;}
    if(errors == 0) console.log("Данные из переключателей: " + checkbox1_consile + " " + checkbox2_consile + " " + checkbox3_consile + " " + checkbox4_consile);

    //Обработка radio (работает)
    var rad = document.getElementsByName("buttons");
    for(i = 0; i < rad.length; i++){
        if(rad[i].checked){
            if(i == 0) {var res = "По телефону";}
            if(i == 1) {var res = "По почте";}
            if(i == 2) {var res = "По телевизору";}
            var index = i + 1;
        }
        //else {var res = ""; var index = "--";}
    }
    if(errors == 0) console.log("Данные из кнопок: выбран " + index + " элемент, " + res);

    //обработка select
    var theme_index = document.getElementById("selectID").value;
    if(theme_index == "sel1"){var theme = "Работа";}
    if(theme_index == "sel2"){var theme = "Учеба";}
    if(theme_index == "sel3"){var theme = "Просто скучно";}
    if(errors == 0) console.log("Данные из выпадающего списка: " + theme + ", " + theme_index + " элемент");

    //обработка сообщения
    var message = document.getElementById("message").value;
    if(message.length == 0){
        errors += 1;
        document.getElementById("message").classList.add("error");
        document.getElementById("message").setAttribute("placeholder", "Эй, я требую внимания!");
    }
    if(errors == 0) console.log("Собщение от пользователя: " + message);
 
    

    var text = "";
    text += name + ", проверьте данные из формы: " + "\n"; 
    text += "Почта: " + email + "\n";
    text += "Телефон: " + phone + "\n";
    text += "Данные из переключателей: " + checkbox1_consile + " " + checkbox2_consile + " " + checkbox3_consile + " " + checkbox4_consile + "\n";
    text += "Данные из кнопок: выбран " + index + " элемент, " + res + "\n";
    text += "Данные из выпадающего списка: " + theme + ", " + theme_index + " элемент" + "\n";
    text += "\n" + "Ваше сообщение:\n" + message + "\n"

    if(errors == 0)
    {
        alert(text);
        document.getElementById("render_register").innerHTML = text;
    }

    localStorage.clear();

}

function ChangeText(id, text){
    if(localStorage.getItem(id) != null){
        document.getElementById(id).value = localStorage.getItem(id);
    }
    else localStorage.setItem(id, text);
}