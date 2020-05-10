title: javascript继承的方式

categories:
- js

tags:  
- js
- 继承
- 原型
---


**此继承非真正的继承**
<!-- more -->

# javascript继承的方式
javascript本身没有继承这一概念，都是通过模仿来实现继承的  
下面几种方式可以实现javascript的继承
## 约定

```
function Aminal(){
    this.species = '动物';
}
function Cat(name,color){
　　　　this.name = name;
　　　　this.color = color;
}
```


## 1. 利用apply和call的构造函数继承

```
function Cat(name,color){
　　　　Animal.apply(this, arguments);
　　　　this.name = name;
　　　　this.color = color;
　　}
　　var cat1 = new Cat("小乔","黑色");
　　alert(cat1.species); // 动物
```
使用call或apply方法，将Animal对象的构造函数绑定在子对象上，这样子对象的实例就可以访问到Animal的属性

---
### 缺点：
- 并没有链接到父级的原型链，在父级原型中定义的东西不会被子类看到


## 2.原型继承

```
Cat.prototype = new Animal();
　　Cat.prototype.constructor = Cat;
　　var cat1 = new Cat("小乔","黑色");
　　alert(cat1.species); // 动物
```
让Cat的prototype指向一个Animal的实例，就能顺着原型链得到Animal的所有属性和方法，
但是构造函数的实例cat1的constructor也会指向Animal了。不能让cat1称为Animal生成的吧，所以我们手动矫正，

```
Cat.prototype.contructor = Cat;
```

---
### 缺点：
- 包含引用类型值的属性会被原型共享——有被修改的风险
- 同时继承了两个对象的属性，即添加到this的属性和原型的属性。在绝大多时候不需要这些自身属性
- 不支持将参数传入父级构造函数

## 3空对象中介继承

```
var F = function(){};
　　F.prototype = Animal.prototype;
　　Cat.prototype = new F();
　　Cat.prototype.constructor = Cat;
```
F作为一个空的对象，几乎会没有占用内存，并且，由于有了F这个中介，改变Cat.prototype也不会改变Animal.prototype对象

## 组合继承
> 使用原型链实现对原型属性的和方法的继承，通过借用构造函数来实现对实例属性的继承。

```
function Cat(name,color){
　　Animal.apply(this, arguments);
　  this.name = name;
　　this.color = color;
}
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;
```
因为这里先使用了Animal的构造函数又将Animal的实例作为了构造函数的原型。故对象本身的属性在对象的原型中也会同时拥有一套。