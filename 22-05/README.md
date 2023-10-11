# 05_(掌握)迭代器-自定义类对象可迭代性

> `01:32:58`

|本期版本|上期版本
|:---:|:---:
`Fri May  5 16:29:00 CST 2023` | -

```javascript
class Classroom {
  [Symbol.iterator]() {

  }
}
Person.protottype[Symbol.iterator] = function(){

}
```