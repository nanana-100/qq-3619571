# 02_(掌握)Promise-对象方法-then方法

> `00:18:41`

|本期版本|上期版本
|:---:|:---:
`Fri May  5 11:00:55 CST 2023` | -

```javascript
Object.getOwnPropertyDescriptors(Promise.prototype)
```

* 同一个Promise 可以被多次调用then方法

## then 方法传入的回调函数：可以有返回值

* 如果我们返回的是一个普通值，那么这个普通的值被作为一个新的 Promise 的 resolve 值

```javascript
promise.then(res=>{
  return {name: 'why'}
})

promise.then(res=>{
  return new Promise((resolve)=>{
    resolve({name: 'why'})
  })
})
```