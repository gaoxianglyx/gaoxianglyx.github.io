title: 初学redux笔记，及一个最简单的redux例子

categories:
- 笔记

tags:  
- react
- redux
- 前端框架
---


**把初学redux的一些笔记写了下来**
<!-- more -->


### 分享一个入学redux很合适的demo，
> 用redux实现计数器  

**这是从阮一峰老师github上面找到，redux最简单的例子，我加了点点注释**  
[demo在线预览](http://gaoxianglyx.top/redux-example/)  
[源码地址](https://github.com/gaoxianglyx/redux-notes/blob/master/index.html)

js部分主要代码如下：
 ``` 
 /*----定义reducer：用switch来匹配发出的操作信息并改变state，如下面的INCREMENT----*/
       function counter(state, action) {
         if (typeof state === 'undefined') {
           return 0
         }
         switch (action.type) {
           case 'INCREMENT':
             return state + 1
           case 'DECREMENT':
             return state - 1
           default:
             return state
         }
       }
 
       /*-----store: 存储state数据，可以用getState方法来获取当前state
      用createStore方法，传入reducer来得到store，一个应用对应一个store----*/
       var store = Redux.createStore(counter)
 
       var valueEl = document.getElementById('value')
 
       function render() {
         valueEl.innerHTML = store.getState().toString()
       }
 
       render()
       /*----store的subscribe方法监听state变化，一旦变化就执行render函数----*/    
       store.subscribe(render)
 
 
       /*----store的dispatch定义一个操作信息，reducer会将这个信息匹配具体对state的操作*/
       document.getElementById('increment')
         .addEventListener('click', function () {
           store.dispatch({ type: 'INCREMENT' })
         })
 
       document.getElementById('decrement')
         .addEventListener('click', function () {
           store.dispatch({ type: 'DECREMENT' })
         }) ```

具体思路如下：

![image](http://ww3.sinaimg.cn/large/96ea1c33gw1fbkj72bjm6j20gr085gmt.jpg)
##### 了解这些就能完成一个最简单的redux实例了

---


其他需要了解的方法：
- applyMiddlewares():传入中间件，并将其依次执行
- connect: 连接容器组件和UI组件 

```
const VisibleTodoList = connect(  
       mapStateToProps,  //建立一个从外部state到UI组件props的映射
       mapDispatchToProps  //定义UI组件的参数到dispatch方法的映射
)(TodoList)  
//TodoList是 UI 组件，VisibleTodoList就是由 React-Redux 通过connect方法自动生成的容器组件

```

-  < provider/>组件：包裹在根组件外，使得所有子组件都能拿到state  
    ``` render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)```
    
关于redux的单向数据流
![image](https://pic3.zhimg.com/f867015905000e1e2bbdfccdf7ce19f6_b.png)
---
 待更新！！
