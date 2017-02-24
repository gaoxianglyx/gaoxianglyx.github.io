;(function () {
    function LazyLoad () {
    }
    var count = 0,
        ele_obj = [];
    LazyLoad.prototype = {
        init: function () {
            this.initElementMap();
            //this.Lazy();
            this.Load();
        },
        getPosition: {
            //获取浏览器客户区高度
            ViewPort: function () {
                if(document.compatMode == "BackCompat") {
                    var Height = document.body.clientHeight;
                } else {
                    var Height = document.documentElement.clientHeight;
                }
                return Height;
            },
            //获取被向下滑动过去了的高度
            ScrollTop: function () {
                if (document.compatMode == "BackCompat") {
                    var elementScrollTop = document.body.scrollTop;
                } else {
                    var elementScrollTop = document.documentElement.scrollTop == 0 ? document.body.scrollTop : document.documentElement.scrollTop;
                }
                return elementScrollTop;
            },
            //得到元素顶部到视口顶部的距离
            ElementViewTop: function (ele) {
                if (ele) {
                    var totalTop = ele.offsetTop;
                    var current = ele.parentNode.offsetParent;
                    while (current !== null) {
                        totalTop += current.offsetTop;
                        current = current.offsetParent;
                    }
                    return totalTop - this.ScrollTop();
                }
            }
        },
        //从所有相关元素 中找出有lazy_src属性的元素
        initElementMap: function () {
            var el = document.getElementsByTagName('img');
            for(var j = 0, len = el.length; j< len; j++) {
                if(typeof(el[j].getAttribute("lazy_src"))) {
                    ele_obj.push(el[j]);
                    count++;
                }
            }
        },
        //防止重复加载
        Lazy: function () {
            if(!count) return;
            var innerHeight = LazyLoad.prototype.getPosition.ViewPort();
            for(var i = 0, len = ele_obj.length; i<len; i++) {
                var absHeight = LazyLoad.prototype.getPosition.ElementViewTop(ele_obj[i]);
                var url = $(ele_obj[i]).attr("lazy-src");
                if(absHeight < innerHeight) {
                    $(ele_obj[i]).parent().css("background-image","url("+url+")");
                    ele_obj[i].removeAttribute("lazy-src");
                    delete ele_obj[i];
                    count--;
                }
            }
        },
        Load: function () {
            window.onscroll = window.onload = function () {
                setTimeout(LazyLoad.prototype.Lazy, 500);
            }
        }
    };
    window.LazyLoad = LazyLoad;
})();