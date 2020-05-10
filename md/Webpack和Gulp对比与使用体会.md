title: Webpack和Gulp使用体会

categories:
- 工具

tags:  
- Webpack
- Gulp
- 区别
---


**不要被工具驱动，它只是你手中用来提高效率的工具**
<!-- more -->
## 在项目中第一次使用Gulp，有种爽快的感觉  


在简单配置了一些task后，gulp为我们的项目完成了一下工作：

- 将小图标合成雪碧图，配置后自动化调用
- 压缩JS，CSS代码
- 检查JS语法错误
- 预编译Sass
- 引入mock数据  
这无疑大大提高了我们的工作效率，像是我们的用配置文件给Gulp一些信息，它便按照这些信息给我们规划了工作流程，我们只需要根据这个流程编写代码，一切显得十分有序。

## Webpack
依然是手动配置一些文件，但在webpack中**模块化**的概念被十分重视。  
通过loader，使得一切的资源形式都能被视作模块，ES6模块，图片，json，sass等等，都被视作模块，按需异步加载。
![image](http://img.blog.csdn.net/20160629120502503?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center)

## 详细的区别

Gulp侧重于前端开发的 整个过程 的控制管理（像是流水线），我们可以通过给gulp配置不通的task（通过Gulp中的gulp.task()方法配置，比如启动server、sass/less预编译、文件的合并压缩等等）来让gulp实现不同的功能，从而构建整个前端开发流程。

Webpack有人也称之为 模块打包机 ，由此也可以看出Webpack更侧重于模块打包，当然我们可以把开发中的所有资源（图片、js文件、css文件等）都可以看成模块，最初Webpack本身就是为前端JS代码打包而设计的，后来被扩展到其他资源的打包处理。Webpack是通过loader（加载器）和plugins（插件）对资源进行处理的。

总结呢：gulp是一个工具，它可以引入各种插件来优化你的项目流程，实现各种功能，甚至引入webpack，最终的目的是用一个工具使得自己要手动做的自动来执行，优化你的项目流程。  
而webpack是一个前端模块化的方案，采用预编译，不需要再浏览器中加载解释器，打包文件多个入口，一个出口。它模块化的理念十分适合react，适合单页面应用（SPA）。
![image](http://ww1.sinaimg.cn/large/96ea1c33gy1fd4wdjr6sxj20go0d6gm8)