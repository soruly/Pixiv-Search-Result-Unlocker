// ==UserScript==
// @name         Pixiv Search Result Unlocker
// @namespace    https://github.com/soruly/Pixiv-Search-Result-Unlocker
// @version      0.4
// @description  Unlock some search result in Pixiv, allows you to click on blocked pictures
// @author       soruly
// @match        *://www.pixiv.net/search.php?*
// @grant        none
// ==/UserScript==

if(document.querySelector("div.popular-introduction-overlay")){
  document.querySelector("div.popular-introduction-overlay").style.display = "none"; // Remove popular section overly blocker
}
if(document.querySelector("a.upload.ad-printservice.hover-item")){
  document.querySelector("a.upload.ad-printservice.hover-item").style.display = "none"; // Remove pixiv premium ads
}
