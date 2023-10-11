function requestData(url){
  return new Promise((resolve, reject)=> {

  })
}


// 第一种方案： 多次回调

requestData('why').then(res=>{
  requestData(res + "aaa").then(res=>{
    requestData(res + "bbb").then(res=> {
      console.log(res)
    })
  })
})

// 第二种: Promise 中 then 的返回值来解决
requestData("why").then(res=>{
  return requestData(res + "aaa")
}).then(res=>{
  return requestData(res + "bbb")
}).then(res=> {
  console.log(res)
})

// 3 Promise + generator

function* getData(){
  yield requestData("why")
}

const generator = getData();

//  手动执行生成器函数
generator.next().value.then(res=>{
  generator.next(res).value.then(res=> {

  })
})

// 自动器函数


// 第四种方案 async / await

async function getData(){
  const res1 = await requestData("why")
  const res2 = await requestData(res1 + "aaa")
}