/*-------------Cookies--------------*/
function getCookie(cookie_name)
{
  var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );
 
  if (results)
    return (unescape(results[2]));
  else
    return null;
}

function setCookie(name, value, exp_y, exp_m, exp_d, path, domain, secure)
{
  var cookie_string = name + "=" + escape ( value );
 
  if (exp_y)
  {
    var expires = new Date ( exp_y, exp_m, exp_d );
    cookie_string += "; expires=" + expires.toGMTString();
  }
 
  if (path)
        cookie_string += "; path=" + escape ( path );
 
  if (domain)
        cookie_string += "; domain=" + escape ( domain );
  
  if (secure)
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

function isTheme(){
    if(getCookie("theme") == "dark") 
    { 
      deleteCookie("theme");
      setCookie("theme", "light"); 
    }
    else { setCookie("theme", "dark"); }
}

function isDarkTheme(){
    if(getCookie("theme") == "dark") { add_theme_1_1(); }
}

function add_theme_1(){
    isTheme();
    add_theme_1_1();
}

function add_theme_1_1(){
    document.getElementById("body_id").classList.toggle("body_dark");
    document.getElementById("body_id").classList.toggle("body_light");
}