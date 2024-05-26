// ==UserScript==
// @name         B站视频数据修改
// @namespace    https://aaron888hacker.github.io/program/Tampermonkey/#B站视频数据修改
// @version      0.0.1
// @description  自定义B站播放页数据
// @author       aaron888hacker
// @match        https://www.bilibili.com/video/BV*
// @icon         https://www.bilibili.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    // 以下数据可以修改，想要保持原来数据的只需要设置为     要设置项 = "";       就是把英文引号内的文字删除
    var 播放数 = "1111.1万";
    var 具体播放数 = "11111111";
    var 弹幕数 = "19.9万";
    var 历史累计弹幕数 = "199999";
    var 点赞数 = "123.4万";
    var 具体点赞数 = "1234321";
    var 投硬币枚数 = "456.7万";
    var 收藏人数 = "66.6万";
    var 分享 = "23.3万";
    var 关注 = "999.9万";

    var 脚本加载时间间隔 = 500; // 单位毫秒，根据自家电脑加载B站播放页时间可自行更改 默认500
    var 脚本最少尝试次数 = 3; // 默认3

    // main
    var try_times = 0;
    function change(){
        try_times += 1;
        if (播放数 != ""){document.getElementsByClassName("view")[0].innerHTML = 播放数 + '播放&nbsp;·&nbsp;';}
        if (具体播放数 != ""){document.getElementsByClassName("view")[0].title = '总播放数' + 具体播放数;}
        if (弹幕数 != ""){document.getElementsByClassName("dm")[0].innerHTML = 弹幕数 + '弹幕';}
        if (历史累计弹幕数 != ""){ document.getElementsByClassName("dm")[0].title = '历史累计弹幕数' + 历史累计弹幕数;}
        if (点赞数 != ''){document.getElementsByClassName("like")[0].innerHTML = '<\!----><\!----><\!----><\!----><i class="van-icon-videodetails_like"></i>' + 点赞数 + '\n    ';}
        if (具体点赞数 != ''){document.getElementsByClassName("like")[0].title = '点赞数' + 具体点赞数;}
        if (投硬币枚数 != ''){
            document.getElementsByClassName("coin")[0].innerHTML = '<canvas width="34" height="34" class="ring-progress" style="width:34px;height:34px;left:-3px;top:-3px;"></canvas><\!----><i class="van-icon-videodetails_throw" style="color:;"></i>' + 投硬币枚数 + '\n    ';
            document.getElementsByClassName("coin")[0].title = "投硬币枚数";
        }
        if (收藏人数 != ''){
            document.getElementsByClassName("collect")[0].innerHTML = '<canvas width="34" height="34" class="ring-progress" style="width:34px;height:34px;left:-3px;top:-3px;"></canvas><\!----><i class="van-icon-videodetails_collec" style="color:;"></i>' + 收藏人数 + '\n    ';
            document.getElementsByClassName("collect")[0].title = "收藏人数`";
        }
        if (分享 != ''){document.getElementsByClassName("share")[0].innerHTML =`<i class="van-icon-videodetails_share"></i>` + 分享 + `\n
<div class="share-box"><div class="share-pos"><div class="box-a"><div class="share-address"><div class="share-down"><span class="share-btn"><i class="van-icon-share_news_default"></i>动态</span><span class="share-btn"><i class="van-icon-share_weibo_default"></i>
微博</span><span class="share-btn"><i class="van-icon-share_qq_default"></i>QQ</span><span class="share-btn"><i class="van-icon-share_qzone_default"></i>QQ空间</span><span class="share-btn"><i class="van-icon-share_tieba_default"></i>贴吧</span></div>
<p class="t">将视频贴到博客或论坛</p><ul><li><span class="name">视频地址</span><input id="link0" type="text" name=""><span class="btn">复制</span></li><li><span class="name">嵌入代码</span><input id="link2" type="text" name="">
<span class="btn">复制</span></li></ul></div></div><div class="box-b"><p>微信扫一扫分享</p><div class="van-qrcode"><canvas width="100" height="100"></canvas></div></div></div></div>`;}
        if (关注 != ''){document.getElementsByClassName("default-btn follow-btn btn-transition b-gz not-follow")[0].innerHTML = '<span class=""><i class="van-icon-general_addto_s"></i>\n          关注\n          <span>' + 关注 + '</span></span><\!---->';}

        console.log('B站视频数据修改：脚本尝试执行次数' + try_times); // alert
    }
     function main(){
         if ( try_times < 脚本最少尝试次数){ // document.getElementsByClassName("like")[0].innerHTML != '<\!----><\!----><\!----><\!----><i class="van-icon-videodetails_like"></i>' + 点赞数 + '\n    ' ||
              // alert(document.getElementsByClassName("like")[0].innerHTML);
             change();
             setTimeout(main, 脚本加载时间间隔); // 毫秒后执行main()函数，只执行一次。
         }
    }
    main()

})();
