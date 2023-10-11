# 08_(掌握)模块化-ESModule结合使用

> `02:16:51`

|本期版本|上期版本
|:---:|:---:
`Tue Mar 21 19:34:05 CST 2023` | -


导出方式一:

```javascript
import { add, sub } from './math.js'
import { timeFormat, priceFormat } from './format.js'

export { add, sub, timeFormat, priceFormt }
```

导出方式二:

```javascript
export  { add, sub } from './math.js'
export  { timeFormat, priceFormat } from './format.js'
```

导出方式二:

```javascript
export  * from './math.js'
export  * from './format.js'
```