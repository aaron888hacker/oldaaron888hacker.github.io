// ==UserScript==
// @name         真谷歌生草机
// @namespace    https://aaron888hacker.github.io/program/Tampermonkey/#真谷歌生草机
// @version      0.2.0
// @description  更改谷歌翻译网页上的文字 https://translate.google.com/
// @author       aaron888hacker
// @match        https://translate.google.com/
// @match        https://translate.google.com/?*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var 标题 = "谷歌生草机";
    var 翻译改为 = "生草机";
    var 关于_Google_翻译改为 = "关于 Google 生草机";

    // main
    document.title = 标题;
    let all_span = document.getElementsByTagName("span");

    for(let i = 0; i < all_span.length; i++){
        if(all_span[i].innerHTML == "翻译"){
            all_span[i].innerHTML = 翻译改为;
        }
    }
    let all_a = document.getElementsByTagName("a");
    for(let i = 0; i < all_a.length; i++){
        if(all_a[i].innerHTML == "关于 Google 翻译"){
            all_a[i].innerHTML = 关于_Google_翻译改为;
        }
    }
})();
