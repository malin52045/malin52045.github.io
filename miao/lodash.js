var malin52045 = function(){


  //将数组分割为长度为size的+1维数组
  function chunk(array,size=1) {
    let result = []
    let temp = []
    for(let i = 0;i < array.length;i++){
      let n = i % size
      temp.push(array[i])
      if(n == 3){
        result.push(temp)
        temp = []
      }
    }
    if(temp[0]) result.push(temp)
    return result
  }


  //移除数组中所有错误的值：false, null, 0, "", undefined, and NaN
  function compact(array){
    let result = []
    for(let i = 0;i < array.length;i++){
      if(array[i]) result.push(array.slice(i,1)[0])
    }
    return result
  }


  //将数组连接，展开深度 +1
  function concat(array){
    let result = []
    for(let i = 0;i < arguments.length;i++){
      result = result.concat(arguments(i))
    }
    return result
  }


  // 找出附一个数组中不同于第二个数组的值，返回一个新的数组
  function difference(array1,array2){
    if(arguments.length == 1) return Array.from(array1)
    let result = []
    let obj2 = {}
    for(let i in array2){
      obj2[array2[i]] = 1
    }
    for(let i = 0;i < array1.length;i++){
      if(!(array1[i] in obj2)) result.push(array1[i])
    }
    return result
  }


  //将数组通过第三个参数转化后 比较出不同的值，返会新的数组
  function differenceBy(array1,array2,iteratee){
    if(iteratee == undefined) return difference(array1,array2)
    let nums2 = array2.slice(0)
    let result = []
    if(typeof iteratee == 'function'){
      for(let i in nums2){
        nums2[i] = iteratee(nums2[i])
      }      
      let obj2 = {}
      for(let i in nums2){
        obj2[nums2[i]] = 1
      }
      for(let i in array1){
        if(!(iteratee(array1[i]) in obj2)) result.push(array1[i])
      }
    }
    return result
  }






  return {
    chunk: chunk,
    concat: concat,
    difference: difference,
    differenceBy : differenceBy
  }


}()
