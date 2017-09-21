// ==UserScript==
// @name         Pixiv Search Result Unlocker
// @namespace    https://github.com/soruly/Pixiv-Search-Result-Unlocker
// @version      0.2
// @description  Unlock some search result in Pixiv, allows you to click on blocked pictures
// @author       soruly
// @match        *://www.pixiv.net/search.php?*
// @grant        none
// ==/UserScript==

document.querySelector("div.popular-introduction-overlay").style.display = "none";
document.querySelector("a.upload.ad-printservice.hover-item").style.display = "none";
document.querySelector(".sample-user-search").classList.remove("disabled");
