// ==UserScript==
// @name         Pixiv Search Result Unlocker
// @namespace    
// @version      0.1
// @description  Unlock some search result in Pixiv, allows you to click on blocked pictures
// @author       You
// @match        http://www.pixiv.net/search.php?*
// @grant        none
// ==/UserScript==

document.querySelector("section.popular-introduction>a").style.display = 'none';
document.querySelector("a.premium-link").style.display = 'none';
document.querySelector(".sample-user-search").classList.remove("disabled");
