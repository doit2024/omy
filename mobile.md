# header
##### 声明当前页面用chrome内核来渲染：
```
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
```

##### 控制显示区域各种属性：
```
 <meta name="viewport" content="width=device-width,
 initial-scale=1.0,maximum-scale=1.0,user-scalable=no"/>
```
##### title小图标：
```
<link rel="shortcut icon" href="/favicon.ico">
```
##### IOS中Safari允许全屏浏览：
```
<meta name="apple-mobile-web-app-capable" content="yes">
```
##### IOS中Safari顶端状态条样式：
```
<meta name="apple-mobile-web-app-status-bar-style" content="black">
```

##### 忽略将数字变为电话号码：        
```
<meta content="telephone=no" name="format-detection">
```
##### IOS中Safari设置保存到桌面图标： 
```
<link rel="apple-touch-icon" href="custom_icon.png">
```


# 事件
> | 相关        |  事件名  |
> | ----   | :-----:  |
> | 手势     | touchstart touchmove touchend touchcancel |
> | 触摸(双指滑动)        |   gesturestart gesturechange gestureend   |
> | 屏幕旋转 | onorientationchange    |
> |检测触摸屏幕的手指何时改变方向 | orientationchange |

### 判断屏幕是否旋转
> ```
> function orientationChange() {
>     switch(window.orientation) {
>     case 0:
>         alert("肖像模式 0 [" + screen.width + ',' + screen.height + ']');
>         break;
>     case -90:
>         alert("左旋 -90");
>         break;
>     case 90:
>         alert("右旋 90");
>         break;
>     case 180:
>         alert("风景模式 180");
>         break;
>     }
> };
> addEventListener('load', function(){
>     orientationChange();
>     window.onorientationchange = orientationChange;
> });
> ```
### 隐藏地址栏 & 处理事件的时候，防止滚动条出现：
> ```
> addEventListener('load', function(){
>     setTimeout(function(){ window.scrollTo(0, 1); }, 100);
> });
> ```

### 双手指滑动事件：
> **兼容各浏览器，表示在冒泡阶段调用事件处理程序 (true 捕获阶段)**
> ```
> addEventListener('load', function(){
>     window.onmousewheel = twoFingerScroll;
> }, false );
> ```

> **对 delta 值进行判断(比如正负) ，而后执行相应操作**
> ```
> function twoFingerScroll(ev) {
>     var delta =ev.wheelDelta/120;
>     return true;
> };
> ```


### 判断是否为iPhone：
> ```
> function isAppleMobile() {
>    return (navigator.platform.indexOf('iPad') != -1);
> };
> ```

### 使用特殊链接：
> **关闭自动识别后,又希望某些电话号码能够链接到 iPhone 的拨号功能 ，可以这样**
> ```
> <a href="tel:12345654321">打电话给我</a>
> <a href="sms:12345654321">发短信</a>
> ```
> **或用于单元格**
> ```
> <td onclick="location.href='tel:122'">
> ```


### 自动大写与自动修正
> **要关闭这两项功能，可以通过autocapitalize 与autocorrect 这两个选项**
> ```
> <input type="text" autocapitalize="off" autocorrect="off" />
> ```
