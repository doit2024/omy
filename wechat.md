# 微信相关

> 微信分享

```
/*
*   调用微信
*   微信公众号账号
*   用php获取到调用微信的信息
*   生成json对象，在 wx.ready(function(){})里面调用
* */
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'http://api.ourslinks.com/index.php/weixin/mp/get_wx_config?callback=init&url=' + encodeURIComponent(window.location.href.split('#')[0]);
document.getElementsByTagName('head')[0].appendChild(script);
function init(json) {
    if (json.errcode !== 0) {
        return;
    }
    //配置参数
    wx.config({
        debug: false,
        appId: json.data.appid,
        timestamp: json.data.timestamp,
        nonceStr: json.data.noncestr,
        signature: json.data.sign,
        jsApiList: ['checkJsApi','onMenuShareTimeline','onMenuShareAppMessage','onMenuShareQQ','onMenuShareWeibo','onMenuShareQZone']
    });
}
wx.ready(function() {
    var shareData = {
        title: '【深智云】AWE2017 诚邀您发掘物联网时代的大数据价值',
        desc: '深智云带你全方位体验四大物联网数据产品，挖掘大数据潜力，让智能连接更有价值!',
        imgUrl: 'http://assist.dtston.com/propaganda/intelligent/img/share-logo.jpg'
    };
    // 调用分享给朋友
    wx.onMenuShareAppMessage(shareData);
    // 分享朋友圈
    wx.onMenuShareTimeline(shareData);
});
wx.error(function(res) {
});

```

