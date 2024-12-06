require.config({
  baseUrl: './src',
  paths: {
    foo: './foo',
    bar: './bar'
  }
})


// require(["foo"],function(foo){
//   console.log("main: ", foo)
// })

require(["foo", "bar"],function(foo){
  console.log("main: ", foo)
})