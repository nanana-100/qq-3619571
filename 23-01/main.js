// 生成器来替代迭代器
function* createArrayIterator(arr){

  yield* arr

  // for(const item of arr){
  //   yield item
  // }


  // return {
  //   next: function(){
  //     if(index < arr.length){
  //       return { done: false, value: arr[index++]}
  //     }else{
  //       return { done: true, value: undefined}
  //     }
  //   }
  // }
}

const names = ["abc", "cba", "nba"];

const namesIterator = createArrayIterator(names)

console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())