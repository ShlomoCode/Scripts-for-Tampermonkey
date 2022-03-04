// ==UserScript==
// @name         הוספת כפתור מועדפים
// @namespace    http://tampermonkey.net/
// @version      0.2
// @match        https://tchumim.com/*
// @match        https://mitmachim.top/*
// @match        https://f2.freeivr.co.il/*
// @icon https://mitmachim.top/assets/uploads/profile/566-profileavatar-1574614377858.jpeg
// ==/UserScript==
if(app.user.uid != 0){
    var nav = document.getElementById("main-nav");
    var li = document.querySelector("#main-nav > li:nth-child(4)");
    var favorites = document.createElement("li");

    favorites.innerHTML = '<a class="navigation-link" title="מועדפים" data-original-title="מועדפים" href="/uid/' + app.user.uid + '/bookmarks"><i class="fa fa-heart"></i><span class="visible-xs-inline">מועדפים</span></a>';

    nav.insertBefore(favorites, li);
}
