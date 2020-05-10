title: HTML5的History Api

categories:
- 理解

tags:  
- HTML5
- url
- 浏览器
---

**如果你想要不刷新整个页面而又改变url。。。**
<!-- more -->

使用单页应用时，我们通常需要不刷新整个页面，只局部更新内容，并改变相应url。在HTML5引入的新**Api History** 便能实现这个功能

## History Api的兼容性

到目前为止，IE10，Firefox4以上的版本，Chrome8以上的版本，Safari5，Opera11以上的版本的浏览器都支持了这个Api
> 你可以通过下面的方法来检测浏览器是否支持History Api

```
 return !!(window.history && history.pushState);
```


## History Api中的方法和事件

### pushState和replaceState方法

 pushState()和replaceState()参数一样，参数说明如下：
1. state：存储JSON字符串，可以用在popstate事件中。
2. title：现在大多数浏览器不支持或者忽略这个参数，**最好用null代替**
3. url：任意有效的URL，用于更新浏览器的地址栏，并不在乎URL是否已经存在地址列表中。**更重要的是，它不会重新加载页面**。

#### 如同


```
window.history.pushState(null, null, "/profile/");
```

之后，地址栏的地址就会变成gaoxiangltx.top/profile/，但同时浏览器不会刷新页面，甚至不会检测目标页面是否存在。这就提供了一种「人为操纵」浏览器历史记录的方法。

---


#### 不同点

"window.history.replaceState"和"window.history.pushState"类似，不同之处在于replaceState不会在window.history里新增历史记录点，其效果类似于window.location.replace(url)，都是不会在历史记录点里新增一个记录点的。当你为了响应用户的某些操作，而要更新当前历史记录条目的状态对象或URL时，使用replaceState()方法会特别合适。如下图

![image](http://ww1.sinaimg.cn/large/96ea1c33gy1fczkcjvtggj20du08xjs1)


而第一个参数state是一个对象或者字符串，用于描述新记录的一些特性。这个参数会被一并添加到历史记录中，以供以后使用。这个参数是开发者根据自己的需要自由给出的。


```
var state = {
    id: gaoxiang,
    name: "profile"
};
window.history.pushState(state, "null", "/profile/");
```

### popstate 事件

当用户点击浏览器的「前进」、「后退」按钮时，就会触发popstate事件。你可以监听这一事件，从而作出反应。


```
window.addEventListener("popstate", function(e) {
    var state = e.state;
    // do something...
});
```

这里e.state就是当初pushState时传入的第一个参数。例如，在我们的例子中，有：


```
e.state.id == 高翔;
e.state.name == "profile";
```
