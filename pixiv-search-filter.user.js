// ==UserScript==
// @name         Pixiv Search Result Filter
// @namespace    https://github.com/soruly/Pixiv-Search-Result-Unlocker
// @version      0.3
// @description  Filter out less popular images from pixiv
// @author       soruly
// @match        *://www.pixiv.net/search.php?*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if(document.querySelector("#js-react-search-mid").querySelectorAll("figure").length > 0){
                if(document.querySelector('.popular-introduction')) {
                    document.querySelector('.popular-introduction').style.position = 'initial';
                    document.querySelectorAll(".column-search-result .image-item")[5].style.marginBottom = '-500px';
                }
                document.querySelectorAll("figure").forEach(
                    function(image){
                        var count = image.querySelector(".bookmark-count");
                        if(!count || parseInt(count.text,10) < 300) {
                            image.style.display = 'none';
                            image.parentNode.style.margin = 0;
                        }
                    }
                );
            }
        });
    });
    observer.observe(document.querySelector("#js-mount-point-search-result-list"), { attributes: true, childList: true, characterData: true });
}());
