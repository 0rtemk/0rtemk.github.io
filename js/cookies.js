function getCookie(cookie_name)
{
  var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );
 
  if ( results )
    return ( unescape ( results[2] ) );
  else
    return null;
}

function setCookie( name, value, exp_y, exp_m, exp_d, path, domain, secure )
{
  var cookie_string = name + "=" + escape ( value );
 
  if ( exp_y )
  {
    var expires = new Date ( exp_y, exp_m, exp_d );
    cookie_string += "; expires=" + expires.toGMTString();
  }
 
  if ( path )
        cookie_string += "; path=" + escape ( path );
 
  if ( domain )
        cookie_string += "; domain=" + escape ( domain );
  
  if ( secure )
        cookie_string += "; secure";
  
  document.cookie = cookie_string;
  console.log(document.cookie);
}

function deleteCookie(cookie_name)
{
  var cookie_date = new Date ( );  // Текущая дата и время
  cookie_date.setTime ( cookie_date.getTime() - 1 );
  document.cookie = cookie_name += "=; expires=" + cookie_date.toGMTString();
}

function isButtonShow(){
  if(getCookie("button1_style") == "hide") { button2(); }
  if(getCookie("button2_style") == "hide") { button22(); }
  if(getCookie("button3_style") == "hide") { button222(); }
  if(getCookie("button4_style") == "hide") { button2222(); }
}


function isTheme(){
  //if(getCookie("theme") == "light") { setCookie("theme", "dark"); }
  if(getCookie("theme") == "dark") 
  { 
    deleteCookie("theme");
    setCookie("theme", "light"); 
  }
  else { setCookie("theme", "dark"); }
}

function isDarkTheme_kompetetions(){
  if(getCookie("theme") == "dark") { add_theme_1_1(); }
}
function isDarkTheme_main(){
  if(getCookie("theme") == "dark") { add_theme_2_1(); }
}
function isDarkTheme_kontacts(){
  if(getCookie("theme") == "dark") { add_theme_3_1(); }
}
function isDarkTheme_portfolio(){
  if(getCookie("theme") == "dark") { add_theme_4_1(); }
}
function isDarkTheme_resume(){
  if(getCookie("theme") == "dark") { add_theme_5_1(); }
}

function isGalleryStop(){
  if(getCookie("gallery") == "stop"){
    GalleryInterval();
  }
}

function isGallerySize(){
  if(getCookie("gallery_size") == "min"){Gallery_min();}
  if(getCookie("gallery_size") == "average"){Gallery_average();}
  if(getCookie("gallery_size") == "max"){Gallery_max();}
}