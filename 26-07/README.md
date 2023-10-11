# 07_(掌握)模块化-ESModule的其他用法

> `02:04:51`

|本期版本|上期版本
|:---:|:---:
`Tue Mar 21 18:26:28 CST 2023` | -


## 导出

导出方式一: export 声明语句

```javascript
export const name = 'why'
export const age = 18
```
导出方式二: 导出和声明分开, 固定语法不是对象

```javascript
const name = 'why'
const age = 18
export {name, age}
```
导出方式三: 导出起别名

```javascript
export {
	name as fName
	age as fAge
}
```
## 导入

导入方式一: 普通导入

```javascript
import { name, age } from './lib.js'
import { fName, fAge } from './lib.js'
```

导入方式二: 起别名

```javascript
import { name as fName, age as fAge } from './lib.js'
```

导出方式三: 将导出的所有内容放到一个标识符中

```javascript
import * as foo from './lib.js'
```