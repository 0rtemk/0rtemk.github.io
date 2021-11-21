//kompetetions
var Theme = "light";
function add_theme(){
    if(Theme = "light"){
        Theme = "dark";
        setCookie("theme", "dark");
    }
    if(Theme = "dark"){
        Theme = "light";
        setCookie("theme", "light");
    }
    add_theme_1();
}
function add_theme_1(){

    document.getElementById("body_id").classList.toggle("body_dark");
    document.getElementById("body_id").classList.toggle("body_light");

    document.getElementById("nav_id").classList.toggle("nav_dark");
    document.getElementById("nav_id").classList.toggle("nav_light");

    document.getElementById("footer_id").classList.toggle("footer_dark");
    document.getElementById("footer_id").classList.toggle("footer_light");

    document.getElementById("skills_1").classList.toggle("background-color-grey");
    document.getElementById("skills_1").classList.toggle("background-color-white");

    document.getElementById("skills_3").classList.toggle("background-color-grey");
    document.getElementById("skills_3").classList.toggle("background-color-white");

    document.getElementById("article_id").classList.toggle("article_light");
    document.getElementById("article_id").classList.toggle("article_dark");
}

//main
function add_theme_2(){
    if(Theme = "light"){
        Theme = "dark";
        setCookie("theme", "dark");
    }
    if(Theme = "dark"){
        Theme = "light";
        setCookie("theme", "light");
    }
    add_theme_2_1();
}
function add_theme_2_1(){

    document.getElementById("body_id").classList.toggle("body_dark");
    document.getElementById("body_id").classList.toggle("body_light");

    document.getElementById("nav_id").classList.toggle("nav_dark");
    document.getElementById("nav_id").classList.toggle("nav_light");

    document.getElementById("footer_id").classList.toggle("footer_dark");
    document.getElementById("footer_id").classList.toggle("footer_light");

    document.getElementById("main_id").classList.toggle("background-color-grey");
    document.getElementById("main_id").classList.toggle("background-color-pink");

    document.getElementById("article_id").classList.toggle("article_light");
    document.getElementById("article_id").classList.toggle("article_dark");
}
//kontacts
function add_theme_3(){
    if(Theme = "light"){
        Theme = "dark";
        setCookie("theme", "dark");
    }
    if(Theme = "dark"){
        Theme = "light";
        setCookie("theme", "light");
    }
    add_theme_3_1();
}
function add_theme_3_1(){
    document.getElementById("body_id").classList.toggle("body_dark");
    document.getElementById("body_id").classList.toggle("body_light");

    document.getElementById("nav_id").classList.toggle("nav_dark");
    document.getElementById("nav_id").classList.toggle("nav_light");

    document.getElementById("footer_id").classList.toggle("footer_dark");
    document.getElementById("footer_id").classList.toggle("footer_light");

    document.getElementById("article_id").classList.toggle("article_light");
    document.getElementById("article_id").classList.toggle("article_dark");

    document.getElementById("links").classList.toggle("links_light");
    document.getElementById("links").classList.toggle("links_dark");

    document.getElementById("links2").classList.toggle("links_light");
    document.getElementById("links2").classList.toggle("links_dark");

    document.getElementById("links3").classList.toggle("links_light");
    document.getElementById("links3").classList.toggle("links_dark");
    
    document.getElementById("form_id").classList.toggle("background-color-pink");
    document.getElementById("form_id").classList.toggle("background-color-grey");
}

//portfolio
function add_theme_4(){
    if(Theme = "light"){
        Theme = "dark";
        setCookie("theme", "dark");
    }
    if(Theme = "dark"){
        Theme = "light";
        setCookie("theme", "light");
    }
    add_theme_4_1();
}
function add_theme_4_1(){

    document.getElementById("body_id").classList.toggle("body_dark");
    document.getElementById("body_id").classList.toggle("body_light");

    document.getElementById("nav_id").classList.toggle("nav_dark");
    document.getElementById("nav_id").classList.toggle("nav_light");

    document.getElementById("footer_id").classList.toggle("footer_dark");
    document.getElementById("footer_id").classList.toggle("footer_light");

    document.getElementById("article_id").classList.toggle("article_light");
    document.getElementById("article_id").classList.toggle("article_dark");

    document.getElementById("main_id").classList.toggle("background-color-black");
    document.getElementById("main_id").classList.toggle("background-color-white");

    document.getElementById("main_id2").classList.toggle("background-color-black");
    document.getElementById("main_id2").classList.toggle("background-color-white");

    document.getElementById("main_id3").classList.toggle("background-color-black");
    document.getElementById("main_id3").classList.toggle("background-color-white");
}

//resume
function add_theme_5(){
    if(Theme = "light"){
        Theme = "dark";
        setCookie("theme", "dark");
    }
    if(Theme = "dark"){
        Theme = "light";
        setCookie("theme", "light");
    }
    add_theme_5_1();
}
function add_theme_5_1(){

    document.getElementById("body_id").classList.toggle("body_dark");
    document.getElementById("body_id").classList.toggle("body_light");

    document.getElementById("nav_id").classList.toggle("nav_dark");
    document.getElementById("nav_id").classList.toggle("nav_light");

    document.getElementById("footer_id").classList.toggle("footer_dark");
    document.getElementById("footer_id").classList.toggle("footer_light");

    document.getElementById("article_id").classList.toggle("article_light");
    document.getElementById("article_id").classList.toggle("article_dark");

    document.getElementById("table_id").classList.toggle("table_light");
    document.getElementById("table_id").classList.toggle("table_dark");
}


//buttons in competetions
function button1(){
    setCookie("button1_style", "show");
    document.getElementById('skills_1').style.display='block'; 
    document.getElementById('b1').style.display='none'; 
    document.getElementById('b2').style.display='block';
}

function button2(){
    setCookie("button1_style", "hide");
    document.getElementById('skills_1').style.display='none'; 
    document.getElementById('b2').style.display='none'; 
    document.getElementById('b1').style.display='block';
}

function button11(){
    setCookie("button2_style", "show");
    document.getElementById('skills_2').style.display='block'; 
    document.getElementById('b11').style.display='none'; 
    document.getElementById('b22').style.display='block';
}

function button22(){
    setCookie("button2_style", "hide");
    document.getElementById('skills_2').style.display='none'; 
    document.getElementById('b22').style.display='none'; 
    document.getElementById('b11').style.display='block';
}

function button111(){
    setCookie("button3_style", "show");
    document.getElementById('skills_3').style.display='block'; 
    document.getElementById('b111').style.display='none'; 
    document.getElementById('b222').style.display='block';
}

function button222(){
    setCookie("button3_style", "hide");
    document.getElementById('skills_3').style.display='none'; 
    document.getElementById('b222').style.display='none'; 
    document.getElementById('b111').style.display='block';
}

function button1111(){
    setCookie("button4_style", "show");
    document.getElementById('skills_4').style.display='block'; 
    document.getElementById('b1111').style.display='none'; 
    document.getElementById('b2222').style.display='block';
}

function button2222(){
    setCookie("button4_style", "hide");
    document.getElementById('skills_4').style.display='none'; 
    document.getElementById('b2222').style.display='none'; 
    document.getElementById('b1111').style.display='block';
}



function reg(){
    //обработка label (работает)
    name = document.register.name.value;
    email = document.register.email.value;
    phone = document.register.phone.value;
    console.log("Данные из текстовых полей: " + name + " " + email + " " + phone);

    //обработка checkbox (работает)
    var checkbox1_consile = false;
    if(document.register.checkbox1.checked){checkbox1_consile = document.register.checkbox1.value;}
    var checkbox2_consile = false;
    if(document.register.checkbox2.checked){checkbox2_consile = document.register.checkbox2.value;}
    var checkbox3_consile = false;
    if(document.register.checkbox3.checked){checkbox3_consile = document.register.checkbox3.value;}
    var checkbox4_consile = false;
    if(document.register.checkbox4.checked){checkbox4_consile = document.register.checkbox4.value;}
    console.log("Данные из переключателей: " + checkbox1_consile + " " + checkbox2_consile + " " + checkbox3_consile + " " + checkbox4_consile);

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
    console.log("Данные из кнопок: выбран " + index + " элемент, " + res);

    //обработка select
    var theme_index = document.getElementById("selectID").value;
    if(theme_index == "sel1"){var theme = "Работа";}
    if(theme_index == "sel2"){var theme = "Учеба";}
    if(theme_index == "sel3"){var theme = "Просто скучно";}
    console.log("Данные из выпадающего списка: " + theme + ", " + theme_index + " элемент");

    //обработка сообщения
    var message = document.getElementById("message").value;
    console.log("Собщение от пользователя: " + message);
 
    

    var text = "";
    text += name + ", проверьте данные из формы: " + "\n"; 
    text += "Почта: " + email + "\n";
    text += "Телефон: " + phone + "\n";
    text += "Данные из переключателей: " + checkbox1_consile + " " + checkbox2_consile + " " + checkbox3_consile + " " + checkbox4_consile + "\n";
    text += "Данные из кнопок: выбран " + index + " элемент, " + res + "\n";
    text += "Данные из выпадающего списка: " + theme + ", " + theme_index + " элемент" + "\n";
    text += "\n" + "Ваше сообщение:\n" + message + "\n"

    alert(text);
    document.getElementById("render_register").innerHTML = text;

}

/*function images()
{
    var f = 0;
    var n; n = 1;
    var i;
    var ris = new Array(4);
    for(i=0; i<5; i++){
        document.images[i].src = 'images-gallery/' + (i+1) + '.jpg';
    }
}
function mult(){
    if(n == 5) {n = 1;}
    document.images[0].src = 'images-gallery/' + (i+1) + '.jpg';
    n++
    go = setTimeout("images()", 1000);
}*/
function removeClass(element, className) {
    var classes = element.className.split(' ');
    var key = classes.findIndex(function(name) {
        return name == className
    });
    classes.splice(key, 1);
    element.className = classes.join(' ');
}
  
function addClass(element, className) {
    var classes = element.className.split(' ');
    classes.push(className);
    element.className = classes.join(' ');
}

function right(){
    var current = document.querySelector('.images .image.active');
    var next = current.nextElementSibling;

    if (!next) {
        next = document.querySelector('.images .image:first-child');
    }
    removeClass(current, 'active');
    addClass(next, 'active');
}
function left(){
    var current = document.querySelector('.images .image.active');
    var next = current.previousElementSibling;

    if (!next) {
        next = document.querySelector('.images .image:last-child');
    }
    removeClass(current, 'active');
    addClass(next, 'active');
}
setInterval(function() {
var current = document.querySelector('.images .image.active');
var next = current.nextElementSibling;

if (!next) {
    next = document.querySelector('.images .image:first-child');
}

removeClass(current, 'active');
addClass(next, 'active');
}, 10000);

/*function fun1() {
    document.getElementById("image_size").classList.toggle("image_min");
    document.getElementById("image_size").classList.remove("image_averange");
    document.getElementById("image_size").classList.remove("image_max");

    document.getElementById("left").classList.toggle("buttons_main_min");
    document.getElementById("left").classList.remove("buttons_main_averange");
    document.getElementById("left").classList.toggle("buttons_main_max");

    document.getElementById("right").classList.toggle("buttons_main_min");
    document.getElementById("right").classList.remove("buttons_main_averange");
    document.getElementById("right").classList.toggle("buttons_main_max");
}

function fun2(){
    document.getElementById("image_size").classList.toggle("image_averange");
    document.getElementById("image_size").classList.remove("image_min");
    document.getElementById("image_size").classList.remove("image_max");

    document.getElementById("left").classList.toggle("buttons_main_averange");
    document.getElementById("left").classList.remove("buttons_main_min");
    document.getElementById("left").classList.toggle("buttons_main_max");

    document.getElementById("right").classList.toggle("buttons_main_averange");
    document.getElementById("right").classList.remove("buttons_main_min");
    document.getElementById("right").classList.toggle("buttons_main_max");

}

function fun3(){
    document.getElementById("image_size").classList.toggle("image_max");
    document.getElementById("image_size").classList.remove("image_averange");
    document.getElementById("image_size").classList.remove("image_min");

    document.getElementById("left").classList.toggle("buttons_main_max");
    document.getElementById("left").classList.remove("buttons_main_averange");
    document.getElementById("left").classList.toggle("buttons_main_min");

    document.getElementById("right").classList.toggle("buttons_main_max");
    document.getElementById("right").classList.remove("buttons_main_averange");
    document.getElementById("right").classList.toggle("buttons_main_min");
}*/



