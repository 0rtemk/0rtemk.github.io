//kompetetions
function add_theme_1(){
    isTheme();
    add_theme_1_1();
}
function add_theme_1_1(){

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
    isTheme();
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

    document.getElementById("other_id").classList.toggle("background-color-grey");
    document.getElementById("other_id").classList.toggle("background-color-pink");

    document.getElementById("article_id").classList.toggle("article_light");
    document.getElementById("article_id").classList.toggle("article_dark");
}
//kontacts
function add_theme_3(){
    isTheme();
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
    isTheme();
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
    isTheme();
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
    //?????????????????? label (????????????????)
    name = document.register.name.value;
    email = document.register.email.value;
    phone = document.register.phone.value;
    console.log("???????????? ???? ?????????????????? ??????????: " + name + " " + email + " " + phone);

    //?????????????????? checkbox (????????????????)
    var checkbox1_consile = false;
    if(document.register.checkbox1.checked){checkbox1_consile = document.register.checkbox1.value;}
    var checkbox2_consile = false;
    if(document.register.checkbox2.checked){checkbox2_consile = document.register.checkbox2.value;}
    var checkbox3_consile = false;
    if(document.register.checkbox3.checked){checkbox3_consile = document.register.checkbox3.value;}
    var checkbox4_consile = false;
    if(document.register.checkbox4.checked){checkbox4_consile = document.register.checkbox4.value;}
    console.log("???????????? ???? ????????????????????????????: " + checkbox1_consile + " " + checkbox2_consile + " " + checkbox3_consile + " " + checkbox4_consile);

    //?????????????????? radio (????????????????)
    var rad = document.getElementsByName("buttons");
    for(i = 0; i < rad.length; i++){
        if(rad[i].checked){
            if(i == 0) {var res = "???? ????????????????";}
            if(i == 1) {var res = "???? ??????????";}
            if(i == 2) {var res = "???? ????????????????????";}
            var index = i + 1;
        }
        //else {var res = ""; var index = "--";}
    }
    console.log("???????????? ???? ????????????: ???????????? " + index + " ??????????????, " + res);

    //?????????????????? select
    var theme_index = document.getElementById("selectID").value;
    if(theme_index == "sel1"){var theme = "????????????";}
    if(theme_index == "sel2"){var theme = "??????????";}
    if(theme_index == "sel3"){var theme = "???????????? ????????????";}
    console.log("???????????? ???? ?????????????????????? ????????????: " + theme + ", " + theme_index + " ??????????????");

    //?????????????????? ??????????????????
    var message = document.getElementById("message").value;
    console.log("???????????????? ???? ????????????????????????: " + message);
 
    

    var text = "";
    text += name + ", ?????????????????? ???????????? ???? ??????????: " + "\n"; 
    text += "??????????: " + email + "\n";
    text += "??????????????: " + phone + "\n";
    text += "???????????? ???? ????????????????????????????: " + checkbox1_consile + " " + checkbox2_consile + " " + checkbox3_consile + " " + checkbox4_consile + "\n";
    text += "???????????? ???? ????????????: ???????????? " + index + " ??????????????, " + res + "\n";
    text += "???????????? ???? ?????????????????????? ????????????: " + theme + ", " + theme_index + " ??????????????" + "\n";
    text += "\n" + "???????? ??????????????????:\n" + message + "\n"

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

var timer;
function GalleryInterval(){
    var TT = document.getElementById("Timer");
    if(TT.classList.contains("stop")){
        setCookie("gallery", "start");
        clearInterval(timer);
        TT.classList.remove("stop");
        TT.classList.add("start");
    }
    else if(TT.classList.contains("start")){
        setCookie("gallery", "stop");
        TT.classList.remove("start");
        TT.classList.add("stop");
        timer = setInterval(function() {
            var current = document.querySelector('.images .image.active');
            var next = current.nextElementSibling;
            
            if (!next) {
                next = document.querySelector('.images .image:first-child');
            }
            
            removeClass(current, 'active');
            addClass(next, 'active');
        }, 7000);
    }
}



function Gallery_min(){
    deleteCookie("gallery_size");
    setCookie("gallery_size", "min");
    var TT = document.getElementById('images_size');
    if (!(TT.classList.contains('img_min'))){
        TT.classList.add('img_min');
    }
    if(TT.classList.contains('img_average')){
        TT.classList.remove('img_average');
    }
    if(TT.classList.contains('img_max')){
        TT.classList.remove('img_max');
    }

    var TT1 = document.getElementById("left");
    var TT2 = document.getElementById("right");
    if(!(TT1.classList.contains("buttons_main_min"))){
        TT1.classList.add("buttons_main_min");
        TT2.classList.add("buttons_main_min");
    }
    if(TT1.classList.contains("buttons_main_average")){
        TT1.classList.remove("buttons_main_average");
        TT2.classList.remove("buttons_main_average");
    }
    if(TT1.classList.contains("buttons_main_max")){
        TT1.classList.remove("buttons_main_max");
        TT2.classList.remove("buttons_main_max");
    }

}

function Gallery_average(){
    deleteCookie("gallery_size");
    setCookie("gallery_size", "average");
    var TT = document.getElementById('images_size');
    if (!(TT.classList.contains("img_average"))){
        TT.classList.add('img_average');
    }
    if(TT.classList.contains('img_min')){
        TT.classList.remove('img_min');
    }
    if(TT.classList.contains('img_max')){
        TT.classList.remove('img_max');
    }

    var TT1 = document.getElementById("left");
    var TT2 = document.getElementById("right");
    if(!(TT1.classList.contains("buttons_main_average"))){
        TT1.classList.add("buttons_main_average");
        TT2.classList.add("buttons_main_average");
    }
    if(TT1.classList.contains("buttons_main_min")){
        TT1.classList.remove("buttons_main_min");
        TT2.classList.remove("buttons_main_min");
    }
    if(TT1.classList.contains("buttons_main_max")){
        TT1.classList.remove("buttons_main_max");
        TT2.classList.remove("buttons_main_max");
    }
}

function Gallery_max(){
    deleteCookie("gallery_size");
    setCookie("gallery_size", "max");
    var TT = document.getElementById('images_size');
    if (!(TT.classList.contains('img_max'))){
        TT.classList.add('img_max');
    }
    if(TT.classList.contains('img_average')){
        TT.classList.remove('img_average');
    }
    if(TT.classList.contains('img_min')){
        TT.classList.remove('img_min');
    }

    var TT1 = document.getElementById("left");
    var TT2 = document.getElementById("right");
    if(!(TT1.classList.contains("buttons_main_max"))){
        TT1.classList.add("buttons_main_max");
        TT2.classList.add("buttons_main_max");
    }
    if(TT1.classList.contains("buttons_main_average")){
        TT1.classList.remove("buttons_main_average");
        TT2.classList.remove("buttons_main_average");
    }
    if(TT1.classList.contains("buttons_main_max")){
        TT1.classList.remove("buttons_main_min");
        TT2.classList.remove("buttons_main_min");
    }
}



