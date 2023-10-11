# 09_(掌握)模块化-ESModule的默认导出

> `02:28:23`

|本期版本|上期版本
|:---:|:---:
`Tue Mar 21 19:38:55 CST 2023` | -

导入语句: 导入默认的导出

```javascript
import why from './foo.js
```

默认导出方式一:

```javascript
export {
	name,
	age,
	foo as default
}
```
默认导出方式二: 常见

```javascript
export default foo
```