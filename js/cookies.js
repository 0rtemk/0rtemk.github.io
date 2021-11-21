/*function getCookie(name) {
	var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
	return matches ? decodeURIComponent(matches[1]) : undefined;
} 
console.log(getCookie('name')); // user

function setCookie(name, value, options = {}) {

    options = {
      path: '/',
      // при необходимости добавьте другие значения по умолчанию
      ...options
    };
  
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }
  
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }

    document.cookie = updatedCookie;
    console.log(document.cookie);
}
function deleteCookie(name){
    setCookie(name, "", {'max-age': -1})
}*/

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

function isDarkTheme_kometetions(){
  if(getCookie("theme") == "dark") { add_theme(); }
}
function isDarkTheme_main(){
  if(getCookie("theme") == "dark") { add_theme2(); }
}
function isDarkTheme_kontacts(){
  if(getCookie("theme") == "dark") { add_theme3(); }
}
function isDarkTheme_portfolio(){
  if(getCookie("theme") == "dark") { add_theme4(); }
}
function isDarkTheme_resume(){
  if(getCookie("theme") == "dark") { add_theme5(); }
}

