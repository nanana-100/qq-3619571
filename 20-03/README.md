# 03_Promise-对象方法-catch方法

> `00:44:01`

|本期版本|上期版本
|:---:|:---:
`Fri May  5 13:01:36 CST 2023` | -

* 当 executor 抛出异常时，也是会调用错误捕获的回调函数
* 通过 catch 方法来传入错误捕获的回调函数

```javascript
promise.then(res=>{
  return 1111
}).catch(err=>{

})
``` 