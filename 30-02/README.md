# 02_(掌握)认识Cookie和使用演练

> `00:14:54`

|本期版本|上期版本
|:---:|:---:
`Fri Mar 24 11:52:36 CST 2023` | -


### 退出不需要登陆

* <https://pan.baidu.com/>
* <https://music.163.com/>
* <https://github.com>
* <https://www.bilibili.com/>


### 退出需要重新登陆

* <https://www.jd.com/>
* <https://www.taobao.com/>



## @TODO

* [Http Cookies 中 Max-age 和 Expires 有什么区别？](https://jiapan.me/2017/cookies-max-age-vs-expires/)
* [为什么cookie在关闭当前页面后就失效了](https://blog.csdn.net/qq_38741963/article/details/94011312)
* [傻傻分不清之 Cookie、Session、Token、JWT](https://juejin.cn/post/6844904034181070861)
* [如何安全储存JWT之Cookie与Web Storage](https://juejin.cn/post/6844903986466652173)

> * <https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie>
> * <https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie>

```javascript
const cookieValue = document.cookie
  .split("; ")
  .find((row) => row.startsWith("test2="))
  ?.split("=")[1];
```