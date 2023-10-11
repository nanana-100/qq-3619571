# 01_(掌握)生成器-生成器迭代迭代器的写法

> `00:00:00`

|本期版本|上期版本
|:---:|:---:
`Fri May  5 23:58:42 CST 2023` | - 

* 使用  `yield *` 来生产一个可迭代对象


```javascript
class Classroom {
  foo = () => {}

  *[Symbol.iterator](){

  }
}
```