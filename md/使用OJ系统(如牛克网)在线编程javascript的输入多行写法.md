title: 使用OJ系统(如牛克网)在线编程javascript的输入多行写法

categories:
- 笔试

tags:  
- 输入输出
- OJ
- node
---


**不要让你的下次笔试再留遗憾**
<!-- more -->
## 蛤？要输入两行参数？前端怎么搞？
> 牛客网的笔试题，前端是在node环境下运行的，可以用以下方式，用javascript输入一行或多行数据，

# 输入单行数据

```

var readline = require('readline');

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function(data) {
    // 获取输入
    var inputs = data.trim().split(' ');
    // 处理
    var result = deal(inputs);
    // 输出结果
    console.log(result);
});

function deal(inputs) {
    var result = '';
    // dosomething
    return inputs;
}
```
# 输入多行数据

```
var readline = require('readline');

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var k = 1; // 需要输入k行
var inputs = [];
rl.on('line', function(data) {
    // 获取输入
    inputs.push(data.trim());
    if (k == inputs.length) { 
        // 处理
        var result = deal(inputs);
        // 输出结果
        console.log(result);
    }
});

function deal(inputs) {
    var result = '';
    // dosomething
    return inputs;
}
```
*你只需要在deal(){}里面对数据进行操作就行了*