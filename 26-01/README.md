# 01_模块化-commonjs中require细节

> `00:00:00`

|本期版本|上期版本
|:---:|:---:
`Fri Dec  6 16:47:40 CST 2024` | `Tue Mar 21 15:46:58 CST 2023`


```javascript
console.log(module.paths)
```

```javascript
require('axios')

// axios/index.js
module.exports = require('./lib/axios')
```