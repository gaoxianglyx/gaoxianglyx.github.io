title: vuex在项目中的使用和理解

categories:
- 笔记

tags:  
- vue
- vuex
- 前端框架
---


**好久没有更新，搬运一些笔记**
<!-- more -->

### 对于vue中的单项数据流
![image](https://c-driver-servercp.qunarzz.com/c_driver_server_c_driver_server/6f6865ad8ff88d887cb708cd4c0dc13b.png)
- state，驱动应用的数据源；
- view，以声明方式将 state 映射到视图；
- actions，响应在 view 上的用户输入导致的状态变化。

当我们的应用遇到多个组件共享状态时，单向数据流的简洁性很容易被破坏，如：
多个视图依赖于同一状态。
来自不同视图的行为需要变更同一状态。
所以引入Vuex来集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

---
其实Vuex集中于MVC模式中的Model层，规定所有的数据操作必须通过 action - mutation - state change 的流程来进行，核心流程图如下：
![image](https://c-driver-servercp.qunarzz.com/c_driver_server_c_driver_server/cd98dabaf623be1f7e35c67bd0c39c8d.png)
### 再结合项目目录来看
![image](https://c-driver-servercp.qunarzz.com/c_driver_server_c_driver_server/e79b8d4f8e75a80e56130c83a3e4ffd6.png)
Vuex为Vue Components建立起了一个完整的生态圈，各模块在核心流程中的主要功能如下：
Vue Components：Vue组件。HTML页面上，负责接收用户操作等交互行为，执行dispatch方法触发对应action进行回应。
- dispatch：操作行为触发方法，是唯一能执行action的方法。
- actions：操作行为处理模块。负责处理Vue Components接收到的所有交互行为。包含同步/异步操作，支持多个同名方法，按照注册的顺序依次触发。向后台API请求的操作就在这个模块中进行，包括触发其他action以及提交mutation的操作。该模块提供了Promise的封装，以支持action的链式触发。
- commit：状态改变提交操作方法。对mutation进行提交，是唯一能执行mutation的方法。
- mutations：状态改变操作方法。是Vuex修改state的唯一推荐方法，其他修改方式在严格模式下将会报错。该方法只能进行同步操作，且方法名只能全局唯一。操作之中会有一些hook暴露出来，以进行state的监控等。
- state：页面状态管理容器对象。集中存储Vue components中data对象的零散数据，全局唯一，以进行统一的状态管理。页面显示所需的数据从该对象中进行读取，利用Vue的细粒度数据响应机制来进行高效的状态更新。
- getters：state对象读取方法。可以方便我们在store中做集中的处理。

Vue组件接收交互行为，调用dispatch方法触发action相关处理，若页面状态需要改变，则调用commit方法提交mutation修改state，通过getters获取到state新值，重新渲染Vue Components，界面随之更新。

### 为什么要用vuex
可以很明显看出，vuex和redux思路类似，都是提供**集中式状态管理**的方案，这样在初上手简单项目时其实是会增加项目复杂度的。当一个应用比较简单的时候，组件之间的通信以及交互都不会很多，一些基本的通信方法足够应付大多数的场景。但是当应用足够复杂，多个组件共享一个状态的时候，前面的方法会十分繁琐混乱并且不易管理。

所以我们就需要将组件共享的状态抽取成一个类似全局变量的东西，任何组件都可以get以及set这个状态，这样就可以实现状态的高效管理。另外，通过定义和隔离状态管理中的各种概念并强制遵守一定的规则，我们的代码将会变得更结构化且易维护。

相对于分治(碎片化)的状态管理，多个状态分散的跨越在不同组件交互在各个角落，每个 View 会有相对应的 Model 维护状态；而集中式管理模式则用于将分散于组件的状进行集中化管理，提供一个全局的 store 存储管理应用的状态。集中式的状态管理可以让整体的状态变化更加明晰。

并且，当你的项目是复杂的spa甚至是采用了同构方案，vuex提供的状态管理机制就显得更为重要了，下一篇笔记打算记录在同构方案中的注意点和坑。(#^.^#)