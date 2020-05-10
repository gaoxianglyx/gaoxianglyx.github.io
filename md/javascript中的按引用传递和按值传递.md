title: 理解javascript中参数的按值传递

categories:
- 理解

tags:  
- JS
- 参数
- 数据类型
---

**有人认为 JS 中参数传递：基本数据类型按值传递；引用类型按引用传递。呵呵**
<!-- more -->
#  javascript中所有参数是按值传递的

## 但是当传入的参数是引用类型时，便带来了疑惑

> 引用类型值保存在内存中，而JS是不能直接访问内存的，所以对于引用类型，操作的不是实际的对象而是对象的引用。
如下是红宝石书P71的代码案例

```
function setName (obj) {
    obj.name = "xiang";
}
var person = new Object ();
setName(person);
alert(person.name);//"xiang"
```
在函数内部对对象进行的操作，在函数外部能体现出来，说明传入的这个obj和person指向的是同一个在内存中的对象。这是否说明参数是按照引用传递，传入person时把这个对象传了进去，才会导致在函数内部修改对象，外部有效呢？请看接下来这个例子

```
function setName (obj) {
    obj.name = "xiang";
    obj = new Object ();
    obj.name = "lyx";
}
var person = new Object ();
setName(person);
alert(person.name);//"xiang"
```
如果是按照，person在函数内部就应该是被修改为指向一个name属性为lyx的新对象了。而在函数外部，person依然指向的是原来的对象（name属性为xiang）。所以引用类型的参数不是按照引用传递的。
## 按值传递时怎么回事呢？
> 引入一位知乎大神的图! 

![image](http://ww1.sinaimg.cn/large/96ea1c33gy1fd0q5jo8aej20lc0bnt95)
如果时是按引用传递的话，是把第二格中的内容（也就是变量本身）整个传递进去（就不会有第四格的存在了）。 
```
function setName (obj) {
    obj.name = "xiang";
    obj = new Object ();
    obj.name = "lyx";
}
var person = new Object ();
setName(person);
alert(person.name);//"xiang"
```

但事实是变量把它里面的值传递（复制）给了参数，让这个参数(obj)也指向原对象。因此如果在函数内部给这个参数赋值另一个对象时，这个参数就会更改它的值为新对象的内存地址指向新的对象，但此时原来的变量仍然指向原来的对象，这时候他们是相互独立的；但如果这个参数是改变对象内部的属性的话(obj.name = xiang)，这个改变会体现在外部，因为他们共同指向的这个对象被修改了 .