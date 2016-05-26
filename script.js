// ==UserScript==
// @name        Ocultar publicidad
// @namespace   manu92@gmail.com
// @description quita aunincios del meneame
// @include     https://www.meneame.net/
// @version     1
// @grant       none
// ==/UserScript==
document.addEventListener( 'DOMContentLoaded', function () {
  var publi = document.getElementsByClassName("news-body ads");
  if(publi != null) {
    publi[0].style.display = "none";
  }
}, false );