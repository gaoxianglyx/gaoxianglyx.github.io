title: 使用Hexo搭建github博客步骤，超简便

categories:
- 工具

tags:  
- git
- Windows
- 搭建博客
---


**你只需要node环境和一个github账号就可以开工啦！**
<!-- more -->

*本教程适合于Windows环境，Mac教程也大同小异*

###### 利用hexo搭建github博客很简单，甚至不需要编程的基础也可以完成，下面是我的博客成品的展示[高翔的博客](https://gaoxianglyx.github.io/)

### 1.准备工作
- 你的电脑需要配置node环境（包括npm）
- 你需要有github账号和git基础（上传过项目）
- 你的电脑需要安装了git工具（git Bash)

ok,可以正式开始搭建了！

### 2.使用Hexo搭建框架
##### 2.1 请使用命令行工具，执行下面命令安装Hexo

```
$ npm install hexo -g

```

##### 2.2 在任意一个目录初始化Hexo项目
    
在任意一个目录下执行以下命令
    
```
hexo init
```
当你看到Start blogging with Hexo! 恭喜！框架就已经搭建好了

#### 2.3接下来执行以下命令就可以在本地起服务

```
hexo server
```
然后访问[http://localhost:4000/](http://localhost:4000/)，就能看到自己博客的雏形了

### 3 发布一篇文章                            
此时你的命令行正在起服务，按ctrl+c暂停服务，输入y确定。
用下面的代码来新建一篇文章

```
hexo new "我的第一篇文章"
```
然后
```
hexo generate
```
![image](http://ww4.sinaimg.cn/large/96ea1c33gw1fbfu9m2cmij20y009fdhf.jpg)



如图，双引号中间就是你的文章的名字，此时你再用hexo server起服务，就能看到自己的文章出现在页面中了

---

![image](http://ww1.sinaimg.cn/large/96ea1c33gw1fbfucm9pt1j21310nb7aj.jpg)

但是现在文章只有一个标题，文章的文件是在你的目录的source\_posts文件夹里面



里面有个的第一篇文章.md就是记录你文章信息的markdown文件，你可以用markdown语法来编辑它

> 这个.md文件用sublime或者写字本都可以打开编辑，现在也有很多可以实时预览的markdown编辑器，我使用的是有道云笔记，[了解更多关于markdown](http://sspai.com/25137/)。

---


![image](http://ww4.sinaimg.cn/large/96ea1c33gw1fbfum3lft1j20jt05j74p.jpg)


###### 如上图：
1. title表示文章标题
2. tags：表示给文章添加的标签
3. <!-- more -->以上的内容会在文章列表页显示，点击进入文章页以后才会显示more下面的内容

### 4 配置你的个性化博客主题
#### 4.1在知乎上面的这个问题提供了很多精品主题

> [有哪些好看的Hexo主题？](https://www.zhihu.com/question/24422335)

选取你喜欢的clone或下载下来，放进你的项目目录的themes文件夹里面

#### 4.2 更改主题的配置文件
首先打开项目根目录下的_config.yml文件

**里面的每个键值对在冒号：后面都需要跟一个空格，请注意**


```
title: 博客的名字
description: 你的描述
author: 作者名字

themes：你的主题的文件夹的名字
```
一般来说这些需要更改，你可以根据英文自己理解修改

**themes在最下面，把它的值改为你刚放进去的主题的名字**

再在命令行执行

```
hexo generate
hexo server
```
刷新就可以看到你的主题上线啦

> 一般来说，主题的文件夹里面都还有一个_config.yml文件，来配置里主题可更改的信息

### 5 部署到github
#### 5.1 创建github博客项目
你需要在你的github页面右上角你的头像旁边点击 + 号按钮，选择repository。

在 Repository name 栏中，输入

> [你的用户名].github.io

这个用户名必须和github用户名完全一样，如[我的github](https://github.com/gaoxianglyx)
用户名为gaoxianglyx
> 项目名为 gaoxianglyx.github.io

#### 5.2 配置里本地的项目与github连接

在你项目刚打开的_config.yml文件中，找到depoly，修改为如下

```
deploy:
  type: git
  repository: git@github.com:gaoxianglyx/gaoxianglyx.github.io.git
  branch: master
```
**repository后面的值为你刚创建的项目的地址**

#### 5.3 发布到github
在命令行执行

```
npm install hexo-deployer-git --save
```
安装完成后，使用以下命令便可以上传项目到github

```
hexo generate
hexo deploy
```
### **现在，你的博客就已经可以在线进入了，地址为：[你的用户名].github.io**

### 6 其他提醒
一般常用的hexo命令为

```
hexo clean //清理（非必须），一般上传前线clean再generate

hexo generate //将文章生成为博客的一部分，可简写为 hexo g

hexo server //本地预览（非必须）， 可简写为 hexo s

hexo deploy //推送到GitHub,可简写为 hexo d
```