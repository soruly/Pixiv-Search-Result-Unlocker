// ==UserScript==
// @name         Pixiv Search Result Filter
// @namespace    http://your.homepage/
// @version      0.1
// @description  Filter out less popular images from pixiv
// @author       You
// @match        http://www.pixiv.net/search.php?*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if(document.querySelector('.popular-introduction')) {
        document.querySelector('.popular-introduction').style.position = 'initial';
        document.querySelectorAll(".column-search-result .image-item")[5].style.marginBottom = '-500px';
    }
    document.querySelectorAll(".column-search-result .image-item").forEach(
        function(image){
            let counter = image.querySelector(".bookmark-count");
            if(counter === null || parseInt(counter.text) < 300) {
                image.style.display = 'none';
            }
        }
    );
})();
