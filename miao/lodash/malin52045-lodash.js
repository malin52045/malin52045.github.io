var malin52045 = function(){


  //将数组分割为长度为size的+1维数组
  function chunk(array,size=1) {
    let result = []
    let temp = []
    for(let i = 0;i < array.length;i++){
      let n = i % size
      temp.push(array[i])
      if(n == size - 1){ 
        result.push(temp)
        temp = []
      }
    }
    if(temp[0]) result.push(temp)
    return result
  }

  function chunk(ary,size=1){
    let result = []
    let index = 0
    while(index < ary.length){
      result.push(ary.slice(index,index + size))
      index += size
    }
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

  function compact(ary){
    let result = []
    ary.forEach(function(item,index){
      if(item) result.push(ary.slice(index,1)[0])
    })
  }

  function compact(ary){
    return ary.filter(item => item)
  }
  var compact = ary => ary.filter(item => item)


  //将数组连接，展开深度 +1
  function concat(array){
    let result = []
    for(let i = 0;i < arguments.length;i++){
      result = result.concat(arguments(i))
    }
    return result
  }


  // 找出第一个数组中不同于后面所有数组的值，返回一个新的数组
  function difference(array1,...arys){
    if(arguments.length == 1) return Array.from(array1)
    let temp = array1
    let result 
    for(let ary of arys){
      result = []
      for(let i = 0;i < ary.length;i++){
        // if(!(array1[i] in obj2)) result.push(array1[i])
        if(ary.indexOf(temp[i]) == -1) result.push(temp[i])
      }
      temp = result      
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
      // let obj2 = {}
      // for(let i in nums2){
      //   obj2[nums2[i]] = 1
      // }
      for(let i in array1){
        // if(!(iteratee(array1[i]) in obj2)) result.push(array1[i])
        if(nums2.indexOf(iteratee(array1[i])) == -1) result.push(array1[i])
      }
    }
    if(typeof iteratee == 'string'){
      for(let i in nums2){
        nums2[i] = nums2[i][iteratee]
      }
      for(let i in array1){
        if(nums2.indexOf(array1[i][iteratee]) == -1) result.push(array1[i])
      }
    }
    return result
  }


  function differenceWith(ary1,ary2,comparator){
    return ary1.filter(function(item){
      for(let i of ary2){
        if(comparator(i,item)) return true
      }
      return false
    })
  }

  function differenceWith(ary1,ary2,comparator){
    return ary1.filter(item => !ary2.some( item2 => comparator(item,item2)))
  }



  //删除数组的前n项
  function drop(ary,n){
    if(n == undefined) return ary.slice(1)
    return ary.slice(n)
  }


  //删除数组的末尾n项
  function dropRight(ary,n){
    if(n == undefined) return ary.slice(0,ary.length - 1)
      return ary.slice(0,ary.length - n)
  }
  

  //返回不满足pre条件的数组内容
  function dropRightWhile(ary,pre){
    let result = []
    if(typeof pre == 'function'){
      for(let i in ary){
        if(!pre(ary[i])) result.push(ary[i])
      } 
    }
    if(typeof pre == 'object'){
      for(let i in ary){
        for(let j in ary[i]){
          if(!((j in pre) && (ary[i][j] == pre[j]))){
            result.push(ary[i]) 
            break
          }       
        }
      }
    }
    return result
  }


  function fill(){}


  function findIndex(){}
  function findLastIndex(){}
  function flatten(){}
  function flattenDeep(){}
  function flattenDepth(){}
  function fromPairs(){}
  function head(){}
  function indexOf(){}
  function initial(){}
  function intersection(){}
  function intersectionBy(){}
  function intersectionWith(){}
  function join(){}
  function last(){}
  function lastIndexOf(){}
  function nth(){}
  function pull(){}
  function pullAll(){}
  function pullAllBy(){}
  function pullAllWith(){}
  function reverse(){}
  function sortedIndex(){}
  function sortedIndexBy(){}
  function sortedIndexOf(){}
  function sortedLastIndex(){}
  function sortedLastIndexBy(){}
  function sortedLastIndexOf(){}
  function sortedUniq(){}
  function sortedUniqBy(){}
  function tail(){}
  function take(){}
  function takeRight(){}
  function takeRightWhile(){}
  function takeWhile(){}
  function union(){}
  function unionBy(){}
  function unionWith(){}
  function uniq(){}
  function uniqBy(){}
  function uniqWith(){}
  function unzip(){}
  function unzipWith(){}
  function without(){}
  function xor(){}
  function xorBy(){}
  function xorWith(){}
  function zip(){}
  function zipObject(){}
  function zipObjectDeep(){}
  function zipWith(){}
  function countBy(){}
  function every(){}
  function filter(){}
  function find(){}
  function findLast(){}
  function flatMap(){}
  function flatMapDeep(){}
  function flatMapDepth(){}
  function forEach(){}
  function forEachRight(){}
  function groupBy(){}
  function includes(){}
  function invokeMap(){}
  function keyBy(){}
  function map(){}
  function orderBy(){}
  function partition(){}
  function reduce(){}
  function reduceRight(){}
  function reject(){}
  function sample(){}
  function sampleSize(){}
  function shuffle(){}
  function size(){}
  function some(){}
  function sortBy(){}
  function defer(){}
  function delay(){}
  function castArray(){}
  function conformsTo(){}
  function eq(){}
  function gt(){}
  function gte(){}
  function isArguments(){}
  function isArray(){}
  function isArrayBuffer(){}
  function isArrayLike(){}
  function isArrayLikeObject(){}
  function isBoolean(){}
  function isDate(){}
  function isElement(){}
  function isEmpty(){}


  function isEqual(val1,val2){
    if(val1 === val2) return true
    if(val1 !== val1 && val2 !== val2) return true
    if(Array.isArray(val1) && Array.isArray(val2)){
      if(val1.length !== val2.length) return false
      val1.forEach(function(item,index){
        if(!(isEqual(item,val2[index]))) return false
      })
      return true
    }

    if(typeof val1 === 'object' && typeof val2 === 'object'){
      let nums1 = []
      let nums2 = []
      for(let i in val1){
        nums1.push(i)
      }
      for(let i in val2){
        nums2.push(i)
      }
      if(nums1.length !== nums2.length) return false
      for(let i of nums1){
        if(!(i in val2)) return false
        if(!(isEqual(val1[i],val2[i]))) return false
      }
      return true
    }
    return false
  }

  //返回数组和
  function sum(ary){
    let sum = 0
    ary.forEach(function(temp){
      sum += temp
    })
    return sum
  }

  //返回数组内某条件和
  function sumBy(ary,ident){
    let sum = 0
    if(arguments.length === 1) sum(ary)
    if(typeof ident == 'function'){
      ary.forEach(function(temp){
        sum += ident(temp)      
      })
    }else if(typeof ident === 'string'){
      ary.forEach(function(temp){
        sum += temp[ident]
      })
    }
    return sum
  }

  //按步骤返回start到end之间的值
  function range(start,end,step = 1){
    let result = []
    if(arguments.length == 1) {
      start = 0
      end = arguments[0]
    }
    if(step === 0) {
      for(let i = 0;i < end;i++){
        result.push(1)
      }
      return result
    }
    for(let i = start;Math.abs(i) < Math.abs(end);i += step){
      result.push(i)
    }
    return result
  }

  //按步骤反向返回start到end之间的值
  function rangeRight(start,end,step = 1){
    let result = []
    if(arguments.length == 1) {
      start = 0
      end = arguments[0]
    }
    if(step === 0) {
      for(let i = 0;i < end;i++){
        result.unshift(1)
      }
      return result
    }
    for(let i = start;Math.abs(i) < Math.abs(end);i += step){
      result.unshift(i)
    }
    return result
  }

  //返回一个与参数函数 return相反的函数
  function negate(pre){
    return function(...arg){
      return !pre(...arg)
    }
  }
  var negate = pre => (...arg) => !pre(...arg)










  return {
    chunk: chunk,
    compact: compact,
    concat: concat,
    difference: difference,
    differenceBy: differenceBy,
    differenceWith: differenceWith,
    drop: drop,
    dropRight: dropRight,
    dropRightWhile: dropRightWhile,
    isEqual: isEqual,
    sum: sum,
    sumBy: sumBy,
    range: range,
    rangeRight: rangeRight,
    

  }


}()
