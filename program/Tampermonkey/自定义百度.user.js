// ==UserScript==
// @name         自定义百度
// @namespace     https://aaron888hacker.github.io/program/Tampermonkey/#自定义百度
// @version      0.0.1
// @description   网站自定义·百度网站文字、图片，支持百度搜索、百度翻译
// @author       aaron888hacker
// @match        https://www.baidu.com/*
// @match        https://fanyi.baidu.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @updateURL https://xkk1.github.io/program/Tampermonkey/%E8%87%AA%E5%AE%9A%E4%B9%89%E7%99%BE%E5%BA%A6.user.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    // 自定义文字
    var 百度搜索标题 = "物理超度，你不知道";
    var 百度搜索框文字 = "物理超度";
    var 百度搜索结果标题替换 = "物理超度";
    var 百度翻译标题替换 = "百度翻译不了";
    // 图片链接
    // 此处使用白熊图床 https://pic.baixiongz.com/
    var 百度主页图片 = "https://pic.baixiongz.com/uploads/2021/09/11/8849ae484f2ea.png";
    var 百度图片 = "https://pic.baixiongz.com/uploads/2021/09/09/29a33ed7ea51e.png";

    // main
    var url = window.location.href
    var i = 0;
    if (url.indexOf("https://www.baidu.com/")== 0){ // 若网页为百度搜索
        var baidu_img = document.getElementsByClassName("index-logo-src");
        var input_box = document.getElementById('su');
        input_box.value = 百度搜索框文字;
        if (window.location.href == "https://www.baidu.com/"){ // 若网页为百度搜索主页
            document.title =百度搜索标题; // 百度搜索主页标题
            if (document.getElementsByClassName("s-menu-item current").length == 0){ // 若未登录百度账号
                for (i=0; i <= baidu_img.length - 1 ; i++){
                    console.log(i);
                    if (i == 0){
                        baidu_img[0].src = 百度主页图片;
                    }else{
                        baidu_img[i].src = 百度图片;
                    }
                }
            }else{ // 若已经登陆了百度账号
                document.getElementById("s_lg_img").src = 百度主页图片;
                for (i=0; i <= baidu_img.length - 1 ; i++){
                    console.log(i);
                    baidu_img[i].src = 百度图片;
                }
            }
            /*
            var box = document.getElementById('lg');
            https://pic.baixiongz.com/uploads/2021/09/08/c108be2e441e8.png
            box.innerHTML = `<img hidefocus="true" id="s_lg_img" class="index-logo-src1" src="https://pic.baixiongz.com/uploads/2021/09/08/c108be2e441e8.png" width="270" height="129" onerror="this.src='//www.baidu.com/img/flexible/logo/pc/index.png';this.onerror=null;" usemap="#mp">
            <img hidefocus="true" id="s_lg_img_new" class="index-logo-srcnew" src="//www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png" width="270" height="129" onerror="this.src='//www.baidu.com/img/flexible/logo/pc/index@2.png';this.onerror=null;" usemap="#mp">
            <map name="mp">
                <area style="outline:none;" hidefocus="true" shape="rect" coords="0,0,270,129" href="//www.baidu.com/s?wd=%E7%99%BE%E5%BA%A6%E7%83%AD%E6%90%9C&amp;sa=ire_dl_gh_logo_texing&amp;rsv_dl=igh_logo_pcs" onmousedown="return ns_c({fm: 'tab', tab: 'felogo', rsv_platform: 'wwwhome' })" target="_blank" title="点击一下，了解更多">
            </map>`

            var baidu_small_img = document.getElementsByClassName("index-logo-src");
            console.log(baidu_small_img.length);
            for (i=0; i <= baidu_small_img.length - 1 ; i++){
                console.log(i);
                baidu_small_img[i].src = "https://pic.baixiongz.com/uploads/2021/09/09/29a33ed7ea51e.png";
            }

            var big_baidu = document.getElementsByClassName("index-logo-src");
            big_baidu[0].src = "https://pic.baixiongz.com/uploads/2021/09/08/c108be2e441e8.png";

            var input_box = document.getElementById('su');
            input_box.value = "物理超度";

            var small_baidu = document.getElementsByClassName("index-logo-src");
            small_baidu[1].src = "https://pic.baixiongz.com/uploads/2021/09/09/29a33ed7ea51e.png";*/
        }else{ // 否则为搜索页面
            for (i=0; i <= baidu_img.length - 1 ; i++){
                console.log(i);
                baidu_img[i].src = 百度图片;
            }
            document.title = document.title.replace(/百度搜索/g, 百度搜索结果标题替换);
            /*
            var baidu_small_img2 = document.getElementsByClassName("index-logo-src");
            console.log(baidu_small_img2.length);
            for (i=0; i <= baidu_small_img2.length - 1 ; i++){
                console.log(i);
                baidu_small_img2[i].src = "https://pic.baixiongz.com/uploads/2021/09/09/29a33ed7ea51e.png";
            }*/
        }
    // var arr=document.getElementsByTagName("*");for(var t in arr){if(arr[t].innerHTML != null){arr[t].innerHTML=arr[t].innerHTML.replace(/百度/g,"超度");}}
    }else if(url.indexOf("https://fanyi.baidu.com/")== 0){ // 若网页为百度翻译
        document.title = document.title.replace(/百度翻译/g, 百度翻译标题替换);
    }
})();
