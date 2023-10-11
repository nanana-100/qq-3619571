# 02_模块化-CommonJS和ESModule相互引用

> `00:42:56`

|本期版本|上期版本
|:---:|:---:
`Tue Mar 21 20:29:38 CST 2023` | -


* 在浏览器中(不能)
* 在node 环境中(区分不同版本)
* 平时开发(webpack)


## @TODO

> `ast`、`babel`、`反爬虫AST原理与还原混淆实战`、`webpack`

```
const generator = require("@babel/generator").default;
```

**Ref**

* [export default 为什么是语法糖 - 博客园](https://www.cnblogs.com/cangqinglang/p/10445256.html)
* [require一个node模块什么时候需要加上.default](https://www.cnblogs.com/PeunZhang/p/12736940.html)
* [Node.js 如何处理 ES6 模块](https://www.ruanyifeng.com/blog/2020/08/how-nodejs-use-es6-module.html)
* [`webpack_require`]()